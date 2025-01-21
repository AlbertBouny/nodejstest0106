import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "合八字 - Marriage Compatibility | Ba Zi Compatibility Analysis",
  description: "探索八字合婚的智慧，了解您与伴侣的缘分和潜在关系动态。我们提供专业的八字合婚分析和咨询服务。",
  keywords: "八字合婚,合八字,婚姻配对,Ba Zi compatibility,marriage compatibility,relationship analysis,命理分析",
}

const compatibilityPrinciples = [
  {
    title: "Five Elements",
    chinese: "五行",
    description: "Analysis of wood, fire, earth, metal, and water interactions",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Yin and Yang",
    chinese: "阴阳",
    description: "Balance of complementary energies in the relationship",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Day Master",
    chinese: "日主关系",
    description: "Understanding personality dynamics and compatibility",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "Palace Interactions",
    chinese: "宫位互动",
    description: "Analysis of specific life aspects and their harmony",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
  {
    title: "Luck Cycles",
    chinese: "大运",
    description: "Evaluation of fortune cycles and timing alignment",
    icon: "/images/icons/taoism_symbol_1.jpg",
  },
  {
    title: "Combined Energy",
    chinese: "合化",
    description: "Overall energy synthesis and relationship potential",
    icon: "/images/icons/taoism_symbol_2.jpg",
  },
]

const relationshipBenefits = [
  {
    title: "Mutual Understanding",
    description: "Discover how you and your partner naturally support each other",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Growth Areas",
    description: "Identify opportunities for personal and relationship development",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Harmony Mapping",
    description: "Understand potential areas of harmony and challenge",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "Future Planning",
    description: "Gain insights into long-term relationship dynamics",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
]

export default function CompatibilityPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_1.jpg"
            alt="八字合婚分析"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Finding Harmony in Love<br className="hidden sm:inline" />
            Through Ba Zi Compatibility
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Explore the ancient Chinese practice of analyzing birth data to assess relationship potential and foster a balanced, supportive union
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Get Analysis
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
        <h2 className="mb-6 text-center text-3xl font-bold">What is Ba Zi Marriage Compatibility Analysis?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Ba Zi Marriage Compatibility Analysis, or He Ba Zi (合八字) in Chinese, is a traditional method of assessing the potential for harmony and success within a romantic partnership. By analyzing the unique birth data (Ba Zi charts) of two individuals, we can evaluate the compatibility between their personalities, core values, and life energies to provide guidance for building a lasting, loving relationship.
        </p>
        <div className="relative mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl">
          <Image
            src="/images/arts/chinese_astrology_2.jpg"
            alt="八字合婚的文化意义"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">The Importance of Compatibility in Chinese Culture</h2>
        <div className="space-y-6 rounded-lg border p-6">
          <p className="text-lg text-muted-foreground">
            In Chinese culture, marriage extends beyond the couple to encompass their families, ancestors, and community. Compatibility analysis has been a key component of establishing long-lasting relationships for generations, based on the understanding that:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            <li>Harmonious relationships support growth and joy throughout life</li>
            <li>Balance between partners creates a strong foundation for future generations</li>
            <li>Understanding relationship dynamics leads to better communication</li>
            <li>Traditional wisdom can guide modern partnerships</li>
            <li>Mutual respect and understanding foster lasting love</li>
          </ul>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Core Principles of Ba Zi Compatibility</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {compatibilityPrinciples.map((principle) => (
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

      {/* Benefits Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">What Ba Zi Compatibility Reveals</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {relationshipBenefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {benefit.title}
              </h3>
              <p className="text-center text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Application */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Ba Zi Compatibility in Modern Life</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            While rooted in ancient traditions, Ba Zi compatibility analysis offers valuable insights for modern relationships. Whether you're starting a new relationship or strengthening an existing one, this analysis can help you:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What It IS:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>A tool for deeper understanding</li>
                <li>A guide for relationship growth</li>
                <li>A path to mutual support</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What It is NOT:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>A guarantee of success</li>
                <li>A rigid prediction system</li>
                <li>A method for judgment</li>
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
              alt="八字合婚咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Explore Your Relationship Potential?</h2>
            <p className="mb-6">
              Take the first step towards understanding your unique relationship dynamics
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