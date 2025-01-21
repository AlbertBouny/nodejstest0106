import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "风水 - Feng Shui | Geomancy",
  description: "探索风水的智慧，通过这个古老的环境布局系统优化您的生活空间。我们提供专业的风水咨询和空间优化服务。",
  keywords: "风水,Feng Shui,Geomancy,空间布局,五行,八卦,气场优化",
}

const fengShuiTips = [
  {
    title: "The Entrance",
    chinese: "入口",
    tip: "Keep your entrance clean, clear, and welcoming to encourage positive energy",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "The Bedroom",
    chinese: "卧室",
    tip: "Position your bed in a commanding position, use calming colors",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "The Kitchen",
    chinese: "厨房",
    tip: "Balance water and fire elements, keep organized and clean",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "The Living Room",
    chinese: "客厅",
    tip: "Arrange furniture to promote conversation and connection",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
  {
    title: "Using Color",
    chinese: "用色",
    tip: "Use colors based on the five elements to enhance energy flow",
    icon: "/images/icons/taoism_symbol_1.jpg",
  },
  {
    title: "Plants",
    chinese: "植物",
    tip: "Place healthy plants strategically to bring life and balance",
    icon: "/images/icons/taoism_symbol_2.jpg",
  },
]

export default function FengShuiPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/feng_shui_1.jpg"
            alt="风水布局"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Harmonize Your Life<br className="hidden sm:inline" />
            with Feng Shui
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Unlock the power of your environment with ancient Chinese wisdom to enhance well-being, prosperity, and harmony
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Book Consultation
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
        <h2 className="mb-6 text-center text-3xl font-bold">What is Feng Shui (风水)?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Feng Shui, also known as geomancy, is an ancient Chinese practice that emphasizes the importance of arranging your environment to achieve balance and harmony with the natural world. It is more than simply interior design; it's a complex system that explores the flow of 'Qi' (or vital energy) within a space and how this energy impacts various aspects of one's life.
        </p>
        <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/arts/feng_shui_2.jpg"
            alt="风水原理图示"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Core Principles of Feng Shui</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/taoism_symbol_1.jpg"
                alt="气"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Qi (气)</h3>
            <p className="text-center text-muted-foreground">
              The vital energy that flows through everything
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/bagua_symbol_1.jpg"
                alt="阴阳"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Yin Yang (阴阳)</h3>
            <p className="text-center text-muted-foreground">
              The balance of opposing forces in nature
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/chinese_calligraphy_1.jpg"
                alt="五行"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Five Elements (五行)</h3>
            <p className="text-center text-muted-foreground">
              Wood, Fire, Earth, Metal, and Water
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/bagua_symbol_2.jpg"
                alt="八卦"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Bagua (八卦)</h3>
            <p className="text-center text-muted-foreground">
              The energy map of spaces and life aspects
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Practical Feng Shui Tips</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fengShuiTips.map((tip) => (
            <div key={tip.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={tip.icon}
                  alt={tip.chinese}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {tip.title} ({tip.chinese})
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {tip.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">What Can Feng Shui Do For You?</h2>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            By applying Feng Shui principles to your space, you can:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            <li>Enhance overall well-being and energy levels</li>
            <li>Improve relationships and family harmony</li>
            <li>Support career growth and financial success</li>
            <li>Promote better health and restful sleep</li>
            <li>Create a more balanced living environment</li>
            <li>Attract positive energy into your life</li>
          </ul>
        </div>
      </section>

      {/* Modern Application */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Feng Shui in Modern Life</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            While rooted in ancient tradition, Feng Shui remains highly relevant in our modern world. Its principles of balance, harmony, and energy flow can be applied to any environment, from homes and offices to gardens and landscapes.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What Feng Shui IS:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>A systematic approach to space optimization</li>
                <li>A way to enhance environmental harmony</li>
                <li>A tool for personal well-being</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What Feng Shui is NOT:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Just about object placement</li>
                <li>A quick fix solution</li>
                <li>Superstition or magic</li>
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
              src="/images/arts/feng_shui_3.jpg"
              alt="风水咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Optimize Your Space?</h2>
            <p className="mb-6">
              Take the first step towards a balanced and harmonious life today
            </p>
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 