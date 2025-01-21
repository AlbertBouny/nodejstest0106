import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "算姻缘 测关系 - Love and Relationship Analysis | Chinese Relationship Compatibility",
  description: "探索中国传统姻缘分析的智慧，了解您的感情和关系动态。我们提供专业的八字和紫微斗数关系分析服务。",
  keywords: "算姻缘,测关系,八字合婚,紫微斗数,relationship analysis,love compatibility,Chinese astrology",
}

const analysisTools = [
  {
    title: "Ba Zi Analysis",
    chinese: "生辰八字",
    description: "Evaluates energetic harmony between individuals through birth charts",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Zi Wei Dou Shu",
    chinese: "紫微斗数",
    description: "Analyzes relationship dynamics through star positions and palaces",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
]

const corePrinciples = [
  {
    title: "Yin Yang & Five Elements",
    chinese: "阴阳五行",
    description: "Balance of energies and elemental interactions in relationships",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "Spouse Palace",
    chinese: "夫妻宫",
    description: "Analysis of marriage and partnership potential",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
  {
    title: "Life Chart",
    chinese: "生命地图",
    description: "Understanding individual patterns and relationship cycles",
    icon: "/images/icons/taoism_symbol_1.jpg",
  },
  {
    title: "Long Term Balance",
    chinese: "长期平衡",
    description: "Keys to maintaining harmony and mutual support",
    icon: "/images/icons/taoism_symbol_2.jpg",
  },
]

const relationshipInsights = [
  {
    title: "Pattern Recognition",
    description: "Understand your unique patterns in romantic relationships",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Compatibility Analysis",
    description: "Identify harmony potential with current or future partners",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Strength & Growth Areas",
    description: "Discover relationship strengths and areas for development",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "Long-term Potential",
    description: "Evaluate prospects for lasting commitment and growth",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
  {
    title: "Dynamic Understanding",
    description: "Uncover key patterns influencing your relationships",
    icon: "/images/icons/taoism_symbol_1.jpg",
  },
  {
    title: "Growth Strategy",
    description: "Develop steps for creating more loving connections",
    icon: "/images/icons/taoism_symbol_2.jpg",
  },
]

export default function RelationshipPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_1.jpg"
            alt="姻缘分析"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Exploring the Path of Love<br className="hidden sm:inline" />
            Through Chinese Tradition
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Discover how traditional Chinese astrology and destiny analysis can illuminate your romantic connections
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Explore Your Potential
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
        <h2 className="mb-6 text-center text-3xl font-bold">What is Chinese Love & Relationship Analysis?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          In traditional Chinese culture, understanding relationship dynamics is key to living a fulfilling life. Love and Relationship Analysis combines the ancient arts of Ba Zi (Four Pillars of Destiny) and Zi Wei Dou Shu (Purple Star Astrology) to explore the unique energetic dynamics between two people, offering clarity and insight into your relationships and their patterns.
        </p>
        <div className="relative mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl">
          <Image
            src="/images/arts/chinese_astrology_2.jpg"
            alt="传统姻缘分析"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Analysis Tools Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Tools Used for Relationship Analysis</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {analysisTools.map((tool) => (
            <div key={tool.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={tool.icon}
                  alt={tool.chinese}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {tool.title} ({tool.chinese})
              </h3>
              <p className="text-center text-muted-foreground">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Core Principles of Relationship Analysis</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {corePrinciples.map((principle) => (
            <div key={principle.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={principle.icon}
                  alt={principle.chinese}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {principle.title} ({principle.chinese})
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">What Relationship Analysis Can Reveal</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relationshipInsights.map((insight) => (
            <div key={insight.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={insight.icon}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {insight.title}
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Application */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Relationship Analysis in Modern Life</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            While rooted in ancient traditions, these relationship analysis methods offer valuable insights for modern relationships. Whether exploring a new partnership or strengthening an existing one, understanding your unique dynamics can create more harmony and positive outcomes.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What It IS:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>A tool for understanding dynamics</li>
                <li>A guide for relationship growth</li>
                <li>A path to deeper connection</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What It is NOT:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>A method for finding perfect matches</li>
                <li>A system for judgment</li>
                <li>A guarantee of outcomes</li>
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
              src="/images/arts/chinese_astrology_3.jpg"
              alt="姻缘分析咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Explore Your Relationship Potential?</h2>
            <p className="mb-6">
              Begin your journey to understanding your romantic connections today
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