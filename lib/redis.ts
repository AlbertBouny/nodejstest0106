import Redis from "ioredis";

let redis: Redis;

if (process.env.NODE_ENV === "development") {
  // In development, use a mock Redis implementation if no connection is available
  redis = new Redis({
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379"),
    password: process.env.REDIS_PASSWORD,
    maxRetriesPerRequest: 0, // Disable retries to prevent excessive error logs
    retryStrategy: () => null, // Disable retry strategy in development
  });
} else if (process.env.UPSTASH_REDIS_REST_URL) {
  // In production, use Upstash Redis
  redis = new Redis(process.env.UPSTASH_REDIS_REST_URL, {
    password: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
} else {
  throw new Error("Redis connection URL not provided");
}

// Add error handling
redis.on('error', (error) => {
  if (process.env.NODE_ENV === "development") {
    console.log('Redis connection error (development mode):', error.message);
  } else {
    console.error('Redis connection error:', error);
  }
});

export default redis;