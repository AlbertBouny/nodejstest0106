import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await sql`BEGIN`;
    
    // 添加基本的数据库初始化
    await sql`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )`;
    
    await sql`COMMIT`;
    
    return Response.json({ message: 'Database initialized successfully' });
  } catch (error) {
    await sql`ROLLBACK`;
    return Response.json({ error: 'Failed to initialize database' }, { status: 500 });
  }
}
