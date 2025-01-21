import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ACCESS_KEY = 'cQ9WhLPPcypcngf4kBggdcXtopVjcBtseVl1mVyTKAU';

const imageConfig = {
  home: {
    'hero-bg': 'chinese traditional temple',
    'services-preview': 'meditation zen',
  },
  culture: {
    'hero': 'taichi symbol',
    'history': 'ancient chinese architecture',
    'concepts': 'yin yang symbol',
    'schools': 'taoist temple',
    'deities': 'chinese deity statue',
    'influence': 'chinese calligraphy',
    'classics': 'ancient chinese book',
    'learning': 'chinese study room',
  },
  arts: {
    'hero': 'feng shui compass',
    'ziwei': 'night sky stars',
    'bazi': 'chinese calendar traditional',
    'relationship': 'chinese red string fate',
    'fengshui': 'chinese garden traditional',
    'naming': 'chinese calligraphy art',
    'dream': 'moon stars night',
    'consultation': 'meditation zen room',
  },
  services: {
    'hero': 'feng shui consultation',
    'destiny': 'chinese fortune telling',
    'fengshui': 'feng shui interior',
    'relationship': 'chinese matchmaker temple',
  },
};

async function downloadImage(query, filename) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const imageUrl = data.results[0].urls.regular;
      const imageResponse = await fetch(imageUrl);
      const buffer = await imageResponse.buffer();

      fs.writeFileSync(filename, buffer);
      console.log(`Downloaded: ${filename}`);
    }
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error);
  }
}

async function downloadAllImages() {
  for (const [category, images] of Object.entries(imageConfig)) {
    for (const [name, query] of Object.entries(images)) {
      const filename = path.join(process.cwd(), 'public', 'images', category, `${name}.jpg`);
      await downloadImage(query, filename);
      // Wait a bit to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

downloadAllImages(); 