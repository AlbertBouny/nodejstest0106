import { RemainingParams } from "@/types/user";
import 'server-only';
import { ONE_DAY } from "../constants";
import redis from "../redis";

const FREE_DAILY_LIMIT = 10;

export async function getRemainingUsage(params: RemainingParams) {
  const { userId } = params;
  const key = `usage:${userId}`;
  const usage = await redis.get(key) || "0";
  return parseInt(usage) || FREE_DAILY_LIMIT;
}

export async function setRemainingUsage(params: RemainingParams) {
  const { userId } = params;
  const key = `usage:${userId}`;
  await redis.setex(key, ONE_DAY, FREE_DAILY_LIMIT.toString());
  return FREE_DAILY_LIMIT;
}

export async function decrementRemainingUsage(params: RemainingParams) {
  const { userId } = params;
  const key = `usage:${userId}`;
  const usage = await redis.get(key) || "0";
  const currentUsage = parseInt(usage) || FREE_DAILY_LIMIT;

  if (currentUsage === FREE_DAILY_LIMIT) {
    const newLimit = FREE_DAILY_LIMIT - 1;
    await redis.setex(key, ONE_DAY, newLimit.toString());
    return newLimit;
  }

  const remaining = Math.max(0, currentUsage - 1);
  await redis.setex(key, ONE_DAY, remaining.toString());
  return remaining;
}

export async function incrementRemainingUsage(params: RemainingParams) {
  const { userId } = params;
  const key = `usage:${userId}`;
  const usage = await redis.get(key) || "0";
  const currentUsage = parseInt(usage) || FREE_DAILY_LIMIT;

  const remaining = Math.min(FREE_DAILY_LIMIT, currentUsage + 1);
  await redis.setex(key, ONE_DAY, remaining.toString());
  return remaining;
}