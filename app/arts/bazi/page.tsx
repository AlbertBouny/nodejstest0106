import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "生辰八字 - Ba Zi | Four Pillars of Destiny",
  description: "探索生辰八字的奥秘，通过这个古老的命理系统了解您的人生轨迹。我们提供专业的八字分析和个人命盘解读服务。",
  keywords: "生辰八字,Ba Zi,Four Pillars,八字分析,命理,五行,天干地支",
}

export default function BaZiPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_2.jpg"
            alt="生辰八字"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Unveiling Your Potential<br className="hidden sm:inline" />
            with Sheng Chen Ba Zi
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Explore the ancient Chinese art of analyzing your birth data for insights into your personality, relationships, and life's journey
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
        <h2 className="mb-6 text-center text-3xl font-bold">What is Sheng Chen Ba Zi (生辰八字)?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Sheng Chen Ba Zi, also known as the Four Pillars of Destiny, is an ancient Chinese system of analysis that uses a person's birth date and time to create a detailed snapshot of the energy present at their birth. This snapshot is represented as a chart with four 'pillars' – the year, month, day, and hour of birth – each expressed in terms of the Chinese calendar's Heavenly Stems and Earthly Branches.
        </p>
        <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/arts/chinese_astrology_3.jpg"
            alt="八字系统图示"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Core Principles of Ba Zi</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/chinese_calligraphy_1.jpg"
                alt="四柱"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Four Pillars</h3>
            <p className="text-center text-muted-foreground">
              Year, Month, Day, and Hour pillars form your destiny chart
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/bagua_symbol_1.jpg"
                alt="天干"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Heavenly Stems</h3>
            <p className="text-center text-muted-foreground">
              Ten symbolic characters representing Yin-Yang and Five Elements
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/taoism_symbol_1.jpg"
                alt="地支"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Earthly Branches</h3>
            <p className="text-center text-muted-foreground">
              Twelve branches correlating to zodiac signs and seasons
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/bagua_symbol_2.jpg"
                alt="五行"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Five Elements</h3>
            <p className="text-center text-muted-foreground">
              Wood, Fire, Earth, Metal, and Water interactions
            </p>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Concepts in Ba Zi</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">The Five Elements (五行)</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Wood (木) - Growth & Flexibility</li>
              <li>Fire (火) - Energy & Transformation</li>
              <li>Earth (土) - Stability & Nourishment</li>
              <li>Metal (金) - Clarity & Precision</li>
              <li>Water (水) - Wisdom & Adaptability</li>
            </ul>
          </div>
          <div className="space-y-6 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Day Master (日主)</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Your Core Element & Nature</li>
              <li>Personal Characteristics</li>
              <li>Life Path Tendencies</li>
              <li>Relationship Dynamics</li>
              <li>Career Inclinations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">What Can Ba Zi Reveal?</h2>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Through a detailed analysis of your Ba Zi chart, you can:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            <li>Discover your innate personality traits and hidden talents</li>
            <li>Understand your personal relationship patterns</li>
            <li>Learn about your career potential and growth path</li>
            <li>Identify favorable timing for important decisions</li>
            <li>Navigate life's challenges with greater awareness</li>
            <li>Recognize opportunities in different life phases</li>
          </ul>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">The Cultural Significance of Ba Zi</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            Ba Zi is more than just a divination tool; it's an important part of Chinese cultural heritage that embodies ancient wisdom about the relationship between humans and the natural world. This system has been refined over thousands of years and continues to provide valuable insights for personal growth and life decisions.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What Ba Zi IS:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>A sophisticated system of self-discovery</li>
                <li>A guide for personal development</li>
                <li>A tool for understanding timing</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What Ba Zi is NOT:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Simple fortune-telling</li>
                <li>Predetermined fate</li>
                <li>A limitation on free will</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-[1200px] text-center">
        <div className="relative overflow-hidden rounded-lg p-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arts/chinese_astrology_1.jpg"
              alt="八字咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Uncover Your Life's Blueprint?</h2>
            <p className="mb-6">
              Get a personalized Ba Zi reading from our expert consultants
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