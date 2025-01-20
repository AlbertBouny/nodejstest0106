import { decrementRemainingUsage, getRemainingUsage } from '@/lib/usage/usage';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
// export const runtime = 'edge'; // runtime = 'edge'

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { messages, userId } = json;

    if (!userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    const remaining = await getRemainingUsage({ userId });
    if (remaining <= 0) {
      return new Response('No usage remaining', { status: 402 });
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      stream: true,
    });

    const stream = OpenAIStream(response, {
      async onCompletion() {
        await decrementRemainingUsage({ userId });
      },
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}

