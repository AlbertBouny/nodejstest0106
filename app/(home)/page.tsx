import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { getCurrentUser } from "@/lib/session"
import { checkStatus, getUsage } from "@/lib/usage/usage"
import { cn } from "@/lib/utils"
import { UserInfo } from "@/types/user"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
}

export default async function Page() {
  const usage: number = (await getUsage()) as number;
  const user = (await getCurrentUser()) as UserInfo;

  // 获取用户当日剩余次数
  // Get the user's remaining count for the day
  let userUsageInfo = {
    role: 0,
    todayRemaining: 0,
    boostPackRemaining: 0,
    membershipExpire: 0,
    boostPackExpire: 0,
  };
  if (user && user.userId) {
    /**
     * 根据角色判断可使用的次数
     * 1、普通用户返回当日剩余次数，月会员返回当日剩余次数和过期时间
     * 2、加油包用户返回剩余次数和过期时间
     * 3、以上两条可同时展示
     *
     * Determine the number of times that can be used based on the role
     * 1. Ordinary users return the remaining number of times for the day, monthly members return the remaining number of times for the day and the expiration time
     * 2. Boost pack users return the remaining number of times and the expiration time
     * 3. The above two points can be displayed at the same time
     */
    userUsageInfo = await checkStatus({ userId: user.userId });
  }
  const remaining = userUsageInfo.todayRemaining;
  const membershipExpire = userUsageInfo.membershipExpire;
  const boostPackRemaining = userUsageInfo.boostPackRemaining;
  const boostPackExpire = userUsageInfo.boostPackExpire
    ? Math.floor(new Date().getTime() / 1000) + userUsageInfo.boostPackExpire
    : 0;

  return (
    <div className="container relative pb-10">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Discover the Ancient Wisdom of{" "}
            <span className="text-primary">Chinese Metaphysics</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Explore authentic Daoist teachings, metaphysical arts, and spiritual practices.
            Learn from expert practitioners and discover how ancient wisdom can guide modern life.
          </p>
          <div className="space-x-4">
            <Link href="/culture" className={cn(buttonVariants({ size: "lg" }))}>
              Explore Daoist Culture
            </Link>
            <Link
              href="/services/consultation"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Featured Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Discover our range of professional metaphysical services and consultations
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Purple Star Astrology</h3>
                <p className="text-sm text-muted-foreground">
                  Discover your destiny through the ancient art of Zi Wei Dou Shu
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Four Pillars Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Understand your life path through BaZi calculations
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Feng Shui Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Harmonize your space with traditional Feng Shui principles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Latest Articles
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Learn more about Daoist culture and metaphysical arts
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Add article cards here */}
        </div>
      </section>
    </div>
  );
}
