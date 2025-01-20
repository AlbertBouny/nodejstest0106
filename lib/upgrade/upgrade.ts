import { getBoostPackKey } from "@/lib/constants";
import redis from "@/lib/redis";
import { UserId } from "@/types/user";
import 'server-only';

const BOOST_PACK_CREDITS = 10;
const BOOST_PACK_EXPIRE = 60 * 60 * 24 * 30; // 30 days

/**
 * 设计：购买加油包
 * 如果已有加油包（expire存在且大于当前时间），expire + 7天，oldBalance + BOOST_PACK_CREDITS
 * 如果没有加油包，设置expire为 0 + 7天，0 + BOOST_PACK_CREDITS
 *
 * Logic: Purchase of boost pack
 * If a boost pack already exists (expire exists and is greater than the current time), extend expire by 7 days, and add BOOST_PACK_CREDITS to oldBalance
 * If no boost pack exists, set expire to current time + 7 days, and set balance to BOOST_PACK_CREDITS
 */
export async function addBoostPack({ userId }: UserId) {
  const userBoostPackKey = getBoostPackKey({ userId });
  const userBoostPack = await redis.get(userBoostPackKey) || "0";
  const currentCredits = parseInt(userBoostPack);

  if (currentCredits === 0) {
    await redis.setex(userBoostPackKey, BOOST_PACK_EXPIRE, BOOST_PACK_CREDITS.toString());
    return {
      userId,
      balance: BOOST_PACK_CREDITS,
      expire: BOOST_PACK_EXPIRE,
      boostPack: 'success'
    };
  }

  return {
    userId,
    balance: currentCredits,
    expire: await redis.ttl(userBoostPackKey),
    boostPack: 'exists'
  };
}