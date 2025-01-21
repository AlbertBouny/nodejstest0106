const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// 图片配置
const IMAGES = {
  team: {
    'master_wang_1.jpg': {
      url: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd',
      width: 400,
      height: 400,
      format: 'jpg'
    }
  }
};

// Logo SVG内容
const LOGO_SVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M16 4C19.9 4 23.1 6.5 24.4 10C25.7 13.5 24.7 17.4 22 20.1C19.3 22.8 15.4 23.8 11.9 22.5C8.4 21.2 5.9 18 5.9 14.1C5.9 8.6 10.4 4.1 15.9 4.1L16 4Z" fill="currentColor"/>
  <circle cx="21" cy="11" r="2" fill="white"/>
  <circle cx="11" cy="21" r="2" fill="currentColor"/>
</svg>`;

// 确保目录存在
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 下载图片
function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve(filePath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => reject(err));
      });
    }).on('error', reject);
  });
}

// 处理图片
async function processImage(inputPath, outputPath, options) {
  await sharp(inputPath)
    .resize(options.width, options.height)
    .jpeg({ quality: 80 })
    .toFile(outputPath);
}

// 主函数
async function main() {
  // 处理专家头像
  for (const [category, images] of Object.entries(IMAGES)) {
    const categoryDir = path.join('public', 'images', category);
    ensureDirectoryExists(categoryDir);

    for (const [filename, config] of Object.entries(images)) {
      const filePath = path.join(categoryDir, filename);
      const optimizedPath = path.join(categoryDir, filename.replace('.jpg', '_optimized.jpg'));

      console.log(`Downloading ${filename}...`);
      await downloadImage(config.url, filePath);

      console.log(`Processing ${filename}...`);
      await processImage(filePath, optimizedPath, config);
    }
  }

  // 创建Logo SVG
  const logoPath = path.join('public', 'logo.svg');
  fs.writeFileSync(logoPath, LOGO_SVG, 'utf8');
  console.log('Created logo.svg');
}

main().catch(console.error); 