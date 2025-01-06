const requiredEnvVars = [
  'POSTGRES_URL',
  'AUTH_SECRET',
  // 添加其他必需的环境变量
];

function checkEnvVars() {
  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:');
    missingVars.forEach((envVar) => console.error(`- ${envVar}`));
    process.exit(1);
  }

  console.log('All required environment variables are set!');
}

checkEnvVars(); 