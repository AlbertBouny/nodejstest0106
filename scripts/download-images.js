const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// 使用Pixabay API
const PIXABAY_API_KEY = ''; // 需要填入有效的API key
const BASE_URL = 'https://pixabay.com/api/';

const IMAGE_CATEGORIES = {
  team: [
    { name: 'master_wang_1.jpg', query: 'chinese+master+meditation' },
    { name: 'master_li_1.jpg', query: 'meditation+teacher+asian' },
    { name: 'master_chen_1.jpg', query: 'feng+shui+master+asian' },
  ],
  services: {
    consultation: [
      { name: 'consultation_1.jpg', query: 'chinese+consultation+meeting' },
      { name: 'consultation_2.jpg', query: 'feng+shui+consultation' },
      { name: 'consultation_3.jpg', query: 'meditation+guidance+asian' },
    ],
    tools: [
      { name: 'calculator_1.jpg', query: 'chinese+calculator+traditional' },
      { name: 'compass_1.jpg', query: 'feng+shui+compass+chinese' },
      { name: 'calendar_1.jpg', query: 'chinese+calendar+traditional' },
    ],
    cases: [
      { name: 'case_study_1.jpg', query: 'feng+shui+home+interior' },
      { name: 'case_study_2.jpg', query: 'chinese+garden+traditional' },
      { name: 'case_study_3.jpg', query: 'meditation+space+zen' },
    ],
  },
};

async function searchImage(query) {
  const url = `${BASE_URL}?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=3`;

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.hits && result.hits.length > 0) {
            resolve(result.hits[0].largeImageURL);
          } else {
            reject(new Error('No images found'));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(filepath);
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function processImage(filepath) {
  try {
    await sharp(filepath)
      .resize(1200, 800, { fit: 'cover' })
      .jpeg({ quality: 85 })
      .toFile(filepath + '.processed');

    fs.renameSync(filepath + '.processed', filepath);
    console.log(`Processed: ${filepath}`);
  } catch (error) {
    console.error(`Error processing ${filepath}:`, error);
  }
}

async function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function downloadAndProcessImages() {
  if (!PIXABAY_API_KEY) {
    console.error('Please provide a valid Pixabay API key');
    return;
  }

  // Process team images
  const teamDir = path.join('public', 'images', 'team');
  await ensureDirectoryExists(teamDir);

  for (const image of IMAGE_CATEGORIES.team) {
    const filepath = path.join(teamDir, image.name);
    try {
      const imageUrl = await searchImage(image.query);
      await downloadImage(imageUrl, filepath);
      await processImage(filepath);
      console.log(`Successfully processed: ${image.name}`);
    } catch (error) {
      console.error(`Error with ${image.name}:`, error);
    }
  }

  // Process service images
  for (const [category, images] of Object.entries(IMAGE_CATEGORIES.services)) {
    const categoryDir = path.join('public', 'images', 'services', category);
    await ensureDirectoryExists(categoryDir);

    for (const image of images) {
      const filepath = path.join(categoryDir, image.name);
      try {
        const imageUrl = await searchImage(image.query);
        await downloadImage(imageUrl, filepath);
        await processImage(filepath);
        console.log(`Successfully processed: ${image.name}`);
      } catch (error) {
        console.error(`Error with ${image.name}:`, error);
      }
    }
  }
}

downloadAndProcessImages().catch(console.error); 