import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "在线自助工具 - Online Self-Service Tools | Basic Taoist Analysis Tools",
  description: "探索我们的基础在线工具，体验八字和紫微斗数的入门分析。这些工具提供初步洞察，仅供参考。",
  keywords: "在线工具,八字计算,紫微斗数,online tools,Ba Zi calculator,Zi Wei Dou Shu,basic analysis",
}

const basicTools = [
  {
    title: "Basic Ba Zi Chart Generator",
    chinese: "基础八字图",
    description: "Generate your Ba Zi chart showing your unique energetic map based on birth information. This tool provides a simplified view using only core principles.",
    disclaimer: "This tool provides basic results for introductory purposes only and should not be used for major life decisions",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
    features: [
      "View your Four Pillars chart",
      "See basic element relationships",
      "Understand chart structure"
    ]
  },
  {
    title: "Basic Zi Wei Dou Shu Chart",
    chinese: "基础紫微斗数",
    description: "Explore a simplified version of your Purple Star Astrology chart showing the twelve palaces and their basic positions.",
    disclaimer: "For introductory learning only - consult an expert for meaningful analysis",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
    features: [
      "View palace positions",
      "See basic star placements",
      "Learn chart layout"
    ]
  },
  {
    title: "Simple Compatibility Check",
    chinese: "基础合婚",
    description: "Basic evaluation of relationship dynamics using fundamental Ba Zi principles. Not for making relationship decisions.",
    disclaimer: "This basic tool cannot capture the complexity of relationships - for entertainment only",
    icon: "/images/icons/bagua_symbol_1.jpg",
    features: [
      "Basic element comparison",
      "Simple harmony check",
      "General overview only"
    ]
  },
]

const toolBenefits = [
  {
    title: "Learning Tool",
    description: "Understand basic concepts and terminology",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Quick Overview",
    description: "See the structure of your basic chart",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "First Step",
    description: "Begin exploring these traditions",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
]

const toolLimitations = [
  "Uses simplified calculations and basic principles only",
  "Cannot account for complex interactions or nuances",
  "Not suitable for making important life decisions",
  "Does not replace professional consultation",
  "Limited to introductory insights only",
  "May not reflect your unique circumstances"
]

const howToUse = [
  "Select your desired basic tool from the options below",
  "Enter your birth information accurately",
  "Click 'Generate' to view your basic chart",
  "Review the results with the understanding that they are limited",
  "Consider booking a consultation for deeper insights"
]

export default function ToolsPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_1.jpg"
            alt="在线自助工具"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Take Your First Steps with<br className="hidden sm:inline" />
            Our Basic Online Tools
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Explore simplified charts based on Ba Zi and Zi Wei Dou Shu principles
          </p>
          <div className="mt-4 rounded-lg bg-black/20 p-4 text-center text-sm">
            <strong>Important Notice:</strong> These tools provide basic results for introductory purposes only and are not substitutes for professional analysis
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#tools" className={cn(buttonVariants({ size: "lg" }))}>
              Explore Basic Tools
            </Link>
            <Link
              href="/services/consultation"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Book Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-6 text-center text-3xl font-bold">What Can These Basic Online Tools Offer?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          We have created a selection of simplified online tools designed to introduce you to the basic concepts of Ba Zi and Zi Wei Dou Shu. While these tools can generate simple charts and provide high-level insights, they are intended for introductory purposes only and cannot replace the comprehensive analysis provided by our expert practitioners.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {toolBenefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
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
              <p className="text-center text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">How to Use Our Basic Tools</h2>
        <div className="rounded-lg border p-6">
          <ol className="list-inside space-y-4 text-muted-foreground">
            {howToUse.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Available Basic Tools</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {basicTools.map((tool) => (
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
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {tool.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="mt-2 rounded-lg bg-muted p-3">
                <p className="text-center text-sm text-muted-foreground">
                  {tool.disclaimer}
                </p>
              </div>
              <Link
                href={`#${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Try This Tool
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Important Limitations of These Basic Tools</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            While these tools can provide interesting introductory insights, it is crucial to understand their limitations:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            {toolLimitations.map((limitation, index) => (
              <li key={index}>{limitation}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg bg-muted p-4">
            <p className="text-center text-sm font-semibold text-muted-foreground">
              For meaningful insights and personalized guidance, we strongly recommend booking a consultation with our expert practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-[1200px] text-center">
        <div className="relative overflow-hidden rounded-lg p-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arts/chinese_astrology_3.jpg"
              alt="专业咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Explore Further?</h2>
            <p className="mb-6">
              Take the next step with our expert practitioners for personalized guidance and comprehensive insights
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/services/consultation" className={cn(buttonVariants({ size: "lg" }))}>
                Book a Consultation
              </Link>
              <Link
                href="/blog"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 