const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_SIZES = {
  banner: { width: 1920, height: 1080 },
  feature: { width: 1200, height: 800 },
  thumbnail: { width: 400, height: 400 },
  profile: { width: 300, height: 300 },
};

async function optimizeImage(inputPath, outputPath, size) {
  try {
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 85,
        progressive: true
      })
      .toFile(outputPath);

    console.log(`Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(dirPath, size) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const inputPath = path.join(dirPath, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      await processDirectory(inputPath, size);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '_optimized.jpg');
      await optimizeImage(inputPath, outputPath, size);
    }
  }
}

async function optimizeAllImages() {
  // Optimize banners
  await processDirectory('public/images/banners', IMAGE_SIZES.banner);

  // Optimize feature images
  const featureDirectories = [
    'public/images/culture',
    'public/images/arts',
    'public/images/services'
  ];

  for (const dir of featureDirectories) {
    await processDirectory(dir, IMAGE_SIZES.feature);
  }

  // Optimize profile images
  await processDirectory('public/images/team', IMAGE_SIZES.profile);
}

optimizeAllImages().catch(console.error); 