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
    title: "Traditional Wisdom",
    description: "Explore the essence of Taoist culture and its modern applications",
    icon: ScrollText,
    href: "/culture",
  },
  {
    title: "Destiny Analysis",
    description: "Understand your life path through BaZi and Zi Wei Dou Shu",
    icon: Star,
    href: "/arts/bazi",
  },
  {
    title: "Feng Shui",
    description: "Harmonize your environment's energy field for a balanced life",
    icon: Compass,
    href: "/arts/fengshui",
  },
  {
    title: "Spiritual Guidance",
    description: "Receive personalized guidance on your spiritual journey",
    icon: Heart,
    href: "/services",
  },
  {
    title: "Classical Studies",
    description: "Learn Taoist classics with clear, modern interpretations",
    icon: BookOpen,
    href: "/culture/classics",
  },
  {
    title: "Community",
    description: "Join our community to share experiences and insights",
    icon: Users,
    href: "/community",
  },
]

export default function HomePage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section - Enhanced with glass effect and animations */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero-bg.jpg"
            alt="Journey Into Taoism"
            fill
            className="object-cover brightness-[0.6] transition-all duration-700"
            priority
          />
        </div>
        <div className="relative z-10 text-white animate-fade-in">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-balance">
            Journey Into Taoist Wisdom
            <br />
            <span className="text-3xl md:text-4xl opacity-90">Finding Balance & Harmony in Life</span>
          </h1>
          <p className="mt-6 max-w-[750px] text-center text-lg sm:text-xl text-balance">
            Where ancient wisdom meets modern living. Let us guide you on an enlightening journey of self-discovery and spiritual growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/culture"
              className={cn(buttonVariants({ size: "lg" }), "glass-effect hover:bg-primary/90 transition-all duration-300")}
              title="Learn about Taoist culture"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "glass-effect hover:bg-white/10 transition-all duration-300")}
              title="Get personalized guidance"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-[1200px] py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services</h2>
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

      {/* Services Preview Section */}
      <section className="mx-auto max-w-[1200px] py-16 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/services-preview.jpg"
            alt="Our Services"
            fill
            className="object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative z-10 px-6">
          <div className="max-w-[600px] mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive metaphysical services designed to help you understand yourself better, plan your life path, and create harmonious environments.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:bg-background/60 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Personal Readings</h3>
                <p className="text-muted-foreground flex-1 leading-relaxed">
                  Gain deep insights into your life path through BaZi and Zi Wei Dou Shu analysis.
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
                  Professional assessment and guidance for optimizing your living or working space.
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
                <h3 className="text-xl font-semibold">Spiritual Guidance</h3>
                <p className="text-muted-foreground flex-1 leading-relaxed">
                  One-on-one guidance to help you progress on your spiritual path and achieve inner harmony.
                </p>
                <Link
                  href="/services"
                  className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
                >
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="mx-auto max-w-[1200px] py-16 rounded-xl bg-accent/5 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Expert Guidance</h2>
          <p className="text-muted-foreground text-lg">
            Our team of experienced practitioners and scholars is dedicated to providing you with the highest quality guidance
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
                <p className="text-sm text-muted-foreground mt-1">Taoist Scholar</p>
                <p className="text-muted-foreground mt-2">
                  30 years of experience in Taoist studies and modern applications
                </p>
              </div>
            </div>
          </div>

          {/* Expert 2 */}
          <div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 mx-auto">
                <Image
                  src="/images/team/master_2.jpg"
                  alt="Dr. Li"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Dr. Li</h3>
                <p className="text-sm text-muted-foreground mt-1">TCM Expert</p>
                <p className="text-muted-foreground mt-2">
                  Specialist in Traditional Chinese Medicine and holistic wellness
                </p>
              </div>
            </div>
          </div>

          {/* Expert 3 */}
          <div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 mx-auto">
                <Image
                  src="/images/team/master_3.jpg"
                  alt="Master Zhang"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Master Zhang</h3>
                <p className="text-sm text-muted-foreground mt-1">Metaphysics Expert</p>
                <p className="text-muted-foreground mt-2">
                  Master practitioner of BaZi, Zi Wei Dou Shu, and Feng Shui
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
            Whether you're new to Taoist practices or seeking to deepen your understanding, we have the perfect guidance for your path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90")}
            >
              View Programs
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
