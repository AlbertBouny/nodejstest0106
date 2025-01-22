import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BookOpen, Compass, Heart, ScrollText, Star, Users } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Taoist Wisdom | Modern Applications of Traditional Culture",
  description: "Explore Taoist wisdom and experience traditional culture in modern life. We provide professional metaphysical services to help you find balance and harmony.",
}

const features = [
  {
    title: "Career Analysis",
    description: "Leverage BaZi and Zi Wei Dou Shu to identify career opportunities and avoid risks",
    icon: Star,
    href: "/arts/bazi",
  },
  {
    title: "Wealth Forecast",
    description: "Create personalized wealth growth plans combining destiny analysis and Feng Shui",
    icon: ScrollText,
    href: "/arts/ziwei",
  },
  {
    title: "Feng Shui Design",
    description: "Professional on-site assessment to optimize your living and working environment",
    icon: Compass,
    href: "/arts/fengshui",
  },
  {
    title: "Love & Relationships",
    description: "In-depth analysis of relationship destiny to find and maintain lasting connections",
    icon: Heart,
    href: "/arts/relationship",
  },
  {
    title: "Health & Wellness",
    description: "Personalized health advice combining destiny analysis and Taoist wisdom",
    icon: BookOpen,
    href: "/services",
  },
  {
    title: "Social Harmony",
    description: "Apply metaphysical wisdom to resolve interpersonal conflicts and improve relationships",
    icon: Users,
    href: "/services/consultation",
  },
]

const metaphysicalArts = [
  {
    title: "Ba Zi Analysis",
    description: "The Four Pillars of Destiny reveals your innate characteristics and life's potential through birth data analysis",
    benefits: [
      "Understand your personality traits",
      "Identify favorable timing for actions",
      "Navigate career and relationships",
      "Make informed life decisions"
    ]
  },
  {
    title: "Zi Wei Dou Shu",
    description: "Purple Star Astrology provides detailed insights into different aspects of life through celestial influences",
    benefits: [
      "Comprehensive life path analysis",
      "Timing of life events",
      "Relationship dynamics",
      "Wealth and career prospects"
    ]
  },
  {
    title: "Classical Feng Shui",
    description: "Ancient environmental science that harmonizes space to enhance fortune and well-being",
    benefits: [
      "Optimize energy flow",
      "Enhance prosperity",
      "Improve relationships",
      "Support career growth"
    ]
  }
]

export default function HomePage() {
  return (
    <div className="container relative pb-10 pt-6 sm:pt-8">
      {/* Hero Section - Enhanced with glass effect and animations */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-6 md:py-8 lg:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero-bg.jpg"
            alt="Modern Applications of Ancient Wisdom"
            fill
            className="object-cover brightness-[0.6] transition-all duration-700"
            priority
          />
        </div>
        <div className="relative z-10 text-white animate-fade-in">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-balance">
            Ancient Wisdom for Modern Life
            <br />
            <span className="text-3xl md:text-4xl opacity-90">Professional Metaphysical Services for Life Enhancement</span>
          </h1>
          <p className="mt-6 max-w-[750px] text-center text-lg sm:text-xl text-balance">
            Combining traditional metaphysical arts with modern life needs, we provide professional destiny analysis and Feng Shui services to help you achieve breakthroughs in career, wealth, and relationships.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className={cn(buttonVariants({ size: "lg" }), "glass-effect hover:bg-primary/90 transition-all duration-300")}
              title="Explore Our Services"
            >
              Explore Services
            </Link>
            <Link
              href="/services/consultation"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "glass-effect hover:bg-white/10 transition-all duration-300")}
              title="Book a Consultation"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-[1200px] py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Metaphysical Arts Introduction */}
      <section className="mx-auto max-w-[1200px] py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Classical Metaphysical Arts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {metaphysicalArts.map((art) => (
            <div key={art.title} className="rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">{art.title}</h3>
              <p className="text-muted-foreground mb-6">{art.description}</p>
              <h4 className="font-semibold mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {art.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="mx-auto max-w-[1200px] py-16 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/services-preview.jpg"
            alt="Professional Metaphysical Services"
            fill
            className="object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative z-10 px-6">
          <div className="max-w-[600px] mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-muted-foreground">
              Our expert team brings years of practical experience in applying traditional metaphysical wisdom to solve modern life challenges and enhance your fortune.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:bg-background/60 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Destiny Analysis</h3>
                <p className="text-muted-foreground flex-1 leading-relaxed">
                  In-depth analysis using BaZi and Zi Wei Dou Shu to help you seize opportunities and avoid risks.
                </p>
                <Link
                  href="/services"
                  className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:bg-background/60 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Feng Shui Consultation</h3>
                <p className="text-muted-foreground flex-1 leading-relaxed">
                  Professional on-site assessment and comprehensive optimization plans for homes and offices.
                </p>
                <Link
                  href="/services"
                  className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:bg-background/60 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Relationship Guidance</h3>
                <p className="text-muted-foreground flex-1 leading-relaxed">
                  Professional guidance for relationships based on destiny analysis to find and maintain lasting connections.
                </p>
                <Link
                  href="/services"
                  className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
                >
                  Consult Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="mx-auto max-w-[1200px] py-16 rounded-xl bg-accent/5 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Expert Team</h2>
          <p className="text-muted-foreground text-lg">
            Our team of seasoned metaphysical masters brings decades of practical experience to help enhance your life
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 px-6">
          {/* Expert 1 */}
          <div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 mx-auto">
                <Image
                  src="/images/team/master_1.jpg"
                  alt="Master Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Master Chen</h3>
                <p className="text-sm text-muted-foreground mt-1">Senior Metaphysical Consultant</p>
                <p className="text-muted-foreground mt-2">
                  30 years of experience in BaZi and Zi Wei Dou Shu analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mx-auto max-w-[1200px] py-16 text-center">
        <div className="rounded-xl border bg-accent/5 p-12">
          <h2 className="text-3xl font-bold mb-4">Begin Your Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Whether you're facing challenges in career, wealth, relationships, or health, our professional metaphysical guidance can help you find the way forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90")}
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
