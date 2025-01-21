import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "在线工具 - Online Self-Service Tools | Basic Taoist Analysis Tools",
  description: "探索我们的基础在线工具，体验八字和紫微斗数的入门分析。这些工具提供初步洞察，帮助您了解中国传统命理分析。",
  keywords: "在线工具,八字计算,紫微斗数,online tools,Ba Zi calculator,Zi Wei Dou Shu,basic analysis",
}

const basicTools = [
  {
    title: "Basic Ba Zi Chart Generator",
    chinese: "基础八字图",
    description: "Generate your Ba Zi chart showing your unique energetic map based on birth information",
    disclaimer: "This tool provides a basic overview only and should not be used for major life decisions",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Basic Zi Wei Dou Shu Chart",
    chinese: "基础紫微斗数",
    description: "Explore a simplified version of your Purple Star Astrology chart with twelve palace positions",
    disclaimer: "For introductory purposes only - consult an expert for detailed analysis",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Simple Compatibility Check",
    chinese: "基础合婚",
    description: "Basic evaluation of relationship dynamics using fundamental Ba Zi principles",
    disclaimer: "This basic tool cannot capture the full complexity of relationships",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
]

const toolBenefits = [
  {
    title: "Quick Overview",
    description: "Get a basic understanding of your chart's structure",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Learning Aid",
    description: "Learn about the basic concepts and terminology",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "First Step",
    description: "Begin your journey into understanding these traditions",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
]

export default function ToolsPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_1.jpg"
            alt="在线工具"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Explore Our Basic Tools<br className="hidden sm:inline" />
            for Introductory Insights
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Generate simple charts based on Ba Zi and Zi Wei Dou Shu principles
          </p>
          <div className="mt-4 rounded-lg bg-black/20 p-4 text-center text-sm">
            <strong>Important Note:</strong> These tools provide basic insights only and are not substitutes for professional consultation
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#tools" className={cn(buttonVariants({ size: "lg" }))}>
              Try Basic Tools
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
          Our online tools provide a simple way to explore fundamental concepts from Ba Zi and Zi Wei Dou Shu. They generate basic charts using your birth details to offer a quick overview. While these tools can provide interesting insights, they have clear limitations and are not meant for detailed personal analysis.
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

      {/* Disclaimer Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <div className="rounded-lg border p-6">
          <h2 className="mb-6 text-center text-2xl font-bold">Understanding Tool Limitations</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              While our online tools can provide interesting insights, they have several important limitations:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>They use simplified calculations and basic principles only</li>
              <li>They cannot account for complex interactions and nuances</li>
              <li>They lack the personalized guidance of an expert practitioner</li>
              <li>They should not be used for making important life decisions</li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              For meaningful insights and personalized guidance, we strongly recommend booking a consultation with one of our expert practitioners.
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
            <h2 className="mb-4 text-2xl font-bold">Want a More In-Depth Analysis?</h2>
            <p className="mb-6">
              Book a consultation with our expert practitioners for personalized guidance and comprehensive insights
            </p>
            <Link href="/services/consultation" className={cn(buttonVariants({ size: "lg" }))}>
              Explore Expert Consultations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 