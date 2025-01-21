import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "紫微斗数 - Zi Wei Dou Shu | Purple Star Astrology",
  description: "探索紫微斗数的奥秘，通过这个古老而精确的占星系统了解您的人生轨迹。提供专业的紫微斗数分析和个人命盘解读服务。",
  keywords: "紫微斗数,Zi Wei Dou Shu,Purple Star Astrology,命盘解读,生命宫位,紫微星,天机星",
}

export default function ZiWeiPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_1_optimized.jpg"
            alt="紫微斗数星图"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Unlocking Your Destiny<br className="hidden sm:inline" />
            with Zi Wei Dou Shu
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Explore your life's potential through the wisdom of Purple Star Astrology
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Get Your Reading
            </Link>
            <Link
              href="#introduction"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-6 text-center text-3xl font-bold">What is Zi Wei Dou Shu (紫微斗数)?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Zi Wei Dou Shu, also known as Purple Star Astrology, is a sophisticated system of Chinese astrology used for over a thousand years. It maps out an individual's destiny based on their birth date and time. Unlike Western astrology which is focused on the movement of planets, Zi Wei Dou Shu uses a combination of star positions and interactions to provide personalized insights into your personality, relationships, career, and life path.
        </p>
        <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/arts/chinese_astrology_2.jpg"
            alt="紫微斗数系统图示"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Core Principles of Zi Wei Dou Shu</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/bagua_symbol_1.jpg"
                alt="十二宫位"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">The Twelve Palaces</h3>
            <p className="text-center text-muted-foreground">
              Each palace represents a different aspect of life and its potential
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/taoism_symbol_1.jpg"
                alt="十四主星"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">The Fourteen Major Stars</h3>
            <p className="text-center text-muted-foreground">
              These stars interact to shape an individual's life path
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/chinese_calligraphy_1.jpg"
                alt="命盘解读"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">The Life Chart</h3>
            <p className="text-center text-muted-foreground">
              A unique chart revealing insights about your life's path
            </p>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Concepts in Zi Wei Dou Shu</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">The Twelve Palaces</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Self Palace (命宫) - Personality & life path</li>
              <li>Parents Palace (父母宫) - Family relationships</li>
              <li>Wealth Palace (财帛宫) - Financial matters</li>
              <li>Career Palace (官禄宫) - Professional life</li>
              <li>Marriage Palace (夫妻宫) - Relationships</li>
              <li>Health Palace (疾厄宫) - Wellbeing</li>
            </ul>
          </div>
          <div className="space-y-6 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Major Stars</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>紫微星 - The Emperor Star (Leadership)</li>
              <li>天机星 - The Strategist Star (Intelligence)</li>
              <li>太阳星 - The Sun Star (Energy)</li>
              <li>武曲星 - The Warrior Star (Action)</li>
              <li>天同星 - The Bliss Star (Happiness)</li>
              <li>廉贞星 - The Integrity Star (Ethics)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">What Can Zi Wei Dou Shu Reveal?</h2>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Through a detailed analysis of your Zi Wei Dou Shu chart, you can:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            <li>Gain deep insights into your personality and potential</li>
            <li>Understand your relationships and family dynamics</li>
            <li>Discover your career path and opportunities</li>
            <li>Learn about your wealth and financial prospects</li>
            <li>Navigate life's challenges with greater wisdom</li>
            <li>Make informed decisions about your future</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-[1200px] text-center">
        <div className="relative overflow-hidden rounded-lg p-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arts/chinese_astrology_3.jpg"
              alt="紫微斗数咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Discover Your Life Path?</h2>
            <p className="mb-6">
              Get a personalized Zi Wei Dou Shu reading from our expert consultants
            </p>
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Book a Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 