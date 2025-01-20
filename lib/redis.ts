import Redis from "ioredis";

let redis: Redis;

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL);
} else {
  // 本地开发环境使用默认配置
  redis = new Redis({
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379"),
    password: process.env.REDIS_PASSWORD,
  });
}

// 添加错误处理
redis.on('error', (error) => {
  console.warn('Redis connection error:', error);
});

export default redis;