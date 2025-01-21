import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "周公解梦 - Zhou Gong Jie Meng | Dream Interpretation",
  description: "探索周公解梦的智慧，通过这个古老的解梦系统了解您的潜意识。我们提供专业的解梦分析和个人咨询服务。",
  keywords: "周公解梦,Zhou Gong Jie Meng,解梦,梦境分析,中国传统文化,道教文化",
}

const commonDreamSymbols = [
  {
    symbol: "太阳",
    english: "Sun",
    meaning: "Represents vitality, prosperity, illumination, positive energy",
    icon: "/images/icons/taoism_symbol_1.jpg",
  },
  {
    symbol: "月亮",
    english: "Moon",
    meaning: "Represents emotions, reflection, intuition, the subconscious",
    icon: "/images/icons/taoism_symbol_2.jpg",
  },
  {
    symbol: "清水",
    english: "Clear Water",
    meaning: "Represents purity, tranquility, emotional balance, flow of life",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    symbol: "浊水",
    english: "Turbulent Water",
    meaning: "Represents chaos, unrest, emotional challenges",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
  {
    symbol: "山岳",
    english: "Mountains",
    meaning: "Represent stability, strength, personal growth, spiritual power",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    symbol: "龙",
    english: "Dragon",
    meaning: "Represents power, wisdom, good fortune, divine protection",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
]

export default function DreamPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_3_optimized.jpg"
            alt="周公解梦"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Journey Into the Subconscious<br className="hidden sm:inline" />
            Explore Zhou Gong Jie Meng
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Discover the traditional Chinese art of understanding your dreams, guided by the wisdom of the Duke of Zhou
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#symbols" className={cn(buttonVariants({ size: "lg" }))}>
              Browse Dream Symbols
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Connect with Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-6 text-center text-3xl font-bold">What is Zhou Gong Jie Meng (周公解梦)?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Zhou Gong Jie Meng, often translated as the Duke of Zhou's Dream Interpretation, is a classic text and a traditional approach to understanding dreams in Chinese culture. It's named after the Duke of Zhou, a respected figure from the early Zhou Dynasty in China, who was known for his wisdom and virtuous character. The text outlines specific interpretations for various dream symbols, connecting them to personal experiences and life circumstances.
        </p>
        <p className="text-lg text-muted-foreground">
          Unlike purely psychological interpretations, Zhou Gong Jie Meng connects dreams to the principles of traditional Chinese philosophy and can offer a pathway to self-discovery and growth.
        </p>
      </section>

      {/* Historical Context Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Historical Context and Taoist Influences</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/chinese_calligraphy_1.jpg"
                alt="身心关系"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Body-Mind Connection</h3>
            <p className="text-center text-muted-foreground">
              The balance within your physical being will be represented through dream experiences
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/bagua_symbol_1.jpg"
                alt="阴阳平衡"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Yin and Yang</h3>
            <p className="text-center text-muted-foreground">
              Dreams portray the balance or imbalance between yin and yang within yourself
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border p-6">
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/images/icons/taoism_symbol_1.jpg"
                alt="气的流动"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold">Flow of Qi</h3>
            <p className="text-center text-muted-foreground">
              The flow of vital energy within your body reflects in your dreams
            </p>
          </div>
        </div>
      </section>

      {/* Dream Interpretation Guide */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">How to Approach Dream Interpretation</h2>
        <div className="space-y-6 rounded-lg border p-6">
          <ul className="list-inside list-decimal space-y-4 text-muted-foreground">
            <li>Recall Your Dream: Note the key images, characters, settings and emotions</li>
            <li>Identify Key Symbols: Determine the prominent symbols within your dream</li>
            <li>Consult the classic text: Look up the significant dream symbols</li>
            <li>Connect to Your Current Life: Reflect upon how interpretations resonate</li>
            <li>Take time to contemplate: Consider what these insights mean to you</li>
            <li>Seek Professional Guidance: Consult an expert for complex dreams</li>
          </ul>
        </div>
      </section>

      {/* Common Dream Symbols */}
      <section id="symbols" className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Common Dream Symbols</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commonDreamSymbols.map((symbol) => (
            <div key={symbol.symbol} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={symbol.icon}
                  alt={symbol.symbol}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {symbol.english} ({symbol.symbol})
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {symbol.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Guidance */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Seeking Professional Guidance</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            While Zhou Gong Jie Meng provides valuable insights, some dreams may require more detailed and personalized analysis. Our professional dream interpreters can help you understand your dreams within the context of your personal circumstances and traditional Chinese wisdom.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">When to Seek Help:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Recurring or troubling dreams</li>
                <li>Complex symbolic meanings</li>
                <li>Life-changing decisions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What We Offer:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Professional interpretation</li>
                <li>Personal guidance</li>
                <li>Traditional wisdom</li>
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
              alt="解梦咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Begin Your Dream Journey Today</h2>
            <p className="mb-6">
              Explore the rich wisdom of Zhou Gong Jie Meng with expert guidance
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