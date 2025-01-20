export type Role = 0 | 2; // 0 Standard User; 2 Member User

export type RedisUserId = string | null

export interface UserId {
  userId: string;
}

export interface RemainingParams {
  userId: string;
  role?: Role;
}

export interface UserInfo {
  userId: string | null;
  email: string | null;
  platform: string | null;
  role: number | null;
  accessToken?: string;
}

export interface PrismaUser {
  id: number;
  userId: string | null;
  username: string | null;
  avatar: string | null;
  role: number | null;
  platform: string | null;
  email: string | null;
  subscriptionId: string | null;
  customerId: string | null;
  variantId: number | null;
  currentPeriodEnd: number | null;
  createdAt: Date;
  updatedAt: Date;
}