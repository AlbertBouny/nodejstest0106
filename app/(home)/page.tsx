import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "TaoismZen - Exploring Taoist Wisdom | 探索道家智慧",
  description: "Explore the rich traditions of Taoist philosophy and discover practical tools for self-understanding, and navigate your life with greater clarity and joy.",
  keywords: "TaoismZen, Taoism, Taoist wisdom, Chinese philosophy, Feng Shui, Ba Zi, Zi Wei Dou Shu, spiritual practices, self-discovery, 道教, 道家, 风水, 八字, 紫微斗数",
}

export default function HomePage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section - Enhanced with glass effect and animations */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/taoist_temple_1.jpg"
            alt="Journey Into Taoism"
            fill
            className="object-cover brightness-[0.6] transition-all duration-700"
            priority
          />
        </div>
        <div className="relative z-10 text-white animate-fade-in">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-balance">
            Journey Into the Heart of Taoism
          </h1>
          <p className="mt-6 max-w-[750px] text-center text-lg sm:text-xl text-balance">
            Explore the rich traditions of Taoist philosophy and discover practical tools for self-understanding, and navigate your life with greater clarity and joy.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/culture"
              className={cn(buttonVariants({ size: "lg" }), "glass-effect hover:bg-primary/90 transition-all duration-300")}
              title="Learn about core principles"
            >
              Explore Taoist Culture
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "glass-effect hover:bg-white/10 transition-all duration-300")}
              title="Receive personalized guidance"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Introduction - Enhanced with animations and improved typography */}
      <section className="mx-auto max-w-[1200px] py-16 animate-slide-up">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-balance">Welcome to Daoist Pathways - Your Gateway to Taoist Wisdom</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We invite you to explore the fascinating world of Taoism, through ancient traditions that emphasize harmony, balance, and self-discovery. Our goal is to present these profound concepts in a way that is engaging, accessible, and culturally sensitive, providing you with practical tools for navigating your unique life journey.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/culture/ancient_chinese_scroll_1.jpg"
              alt="Taoist Wisdom"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Core Content Highlights - Enhanced with improved card design */}
      <section className="mx-auto max-w-[1200px] py-16 animate-slide-up">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">Explore Our Core Areas of Focus</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Taoist Culture */}
          <div className="group flex flex-col gap-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 bg-card">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/images/culture/chinese_temple_1.jpg"
                alt="Taoist Culture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-balance">Delve Deeper into Taoist Culture</h3>
            <p className="text-muted-foreground flex-1 leading-relaxed">
              Explore the rich history, key principles, core beliefs, and the spiritual practices of the Taoist tradition
            </p>
            <Link
              href="/culture"
              className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
            >
              Explore Our Culture Section
            </Link>
          </div>

          {/* Esoteric Tools */}
          <div className="group flex flex-col gap-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 bg-card">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/images/arts/bagua_compass_1.jpg"
                alt="Esoteric Tools"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-balance">Unlock The Power of Esoteric Practices</h3>
            <p className="text-muted-foreground flex-1 leading-relaxed">
              Discover ancient techniques like Ba Zi, Zi Wei Dou Shu, Feng Shui, and Dream Interpretation, and learn how they can enhance self-awareness.
            </p>
            <Link
              href="/arts"
              className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
            >
              Explore Our Tools
            </Link>
          </div>

          {/* Services */}
          <div className="group flex flex-col gap-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 bg-card">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/images/services/consultation_1.jpg"
                alt="Personalized Services"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-balance">Get Personalized Guidance</h3>
            <p className="text-muted-foreground flex-1 leading-relaxed">
              Discover our consultation services, designed to offer you practical advice, and to support you in applying the wisdom of Taoism to your daily life.
            </p>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300")}
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Building Section - Enhanced with improved testimonial design */}
      <section className="mx-auto max-w-[1200px] py-16 rounded-xl bg-accent/5 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-balance">Trusted Guidance From Experts In The Field</h2>
          <p className="text-muted-foreground text-lg">Learn from practitioners with deep understanding of Taoist traditions</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 px-6">
          {/* Testimonial */}
          <div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6">
              <p className="text-lg italic leading-relaxed">"The insights I gained through the consultations have been transformative. The practitioners here truly understand how to make ancient wisdom relevant to modern life."</p>
              <p className="font-semibold text-primary">- Sarah Chen, Business Owner</p>
            </div>
          </div>
          {/* Expert Bio */}
          <div className="rounded-xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex gap-6 items-start">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  src="/images/team/master_wang_1_optimized.jpg"
                  alt="Master Wang"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Master Wang</h3>
                <p className="text-muted-foreground leading-relaxed">30+ years of experience in Taoist practices and consultation</p>
                <p className="text-sm text-muted-foreground">Specializing in Ba Zi and Feng Shui analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Engaged Section - Enhanced with improved article cards */}
      <section className="mx-auto max-w-[1200px] py-16 animate-slide-up">
        <h2 className="text-4xl font-bold text-center mb-16 text-balance">Stay Informed With Our Latest Insights</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Recent Articles */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Latest Articles</h3>
            <div className="space-y-6">
              <Link href="/blog/understanding-qi" className="block group">
                <div className="rounded-xl border p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 bg-card">
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">Understanding Qi: The Vital Force in Taoism</h4>
                  <p className="mt-3 text-muted-foreground leading-relaxed">Explore the concept of Qi and its role in Taoist practices...</p>
                </div>
              </Link>
              <Link href="/blog/feng-shui-basics" className="block group">
                <div className="rounded-xl border p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 bg-card">
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">Essential Feng Shui Principles for Modern Living</h4>
                  <p className="mt-3 text-muted-foreground leading-relaxed">Learn how to apply Feng Shui principles in your home...</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="rounded-xl border p-8 bg-card shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Receive monthly insights on Taoist wisdom, practical tips, and exclusive content delivered directly to your inbox.
            </p>
            <Link
              href="/newsletter"
              className={cn(buttonVariants({ size: "lg" }), "w-full justify-center")}
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Enhanced with glass effect */}
      <section className="mx-auto max-w-[1200px] text-center animate-slide-up">
        <div className="relative overflow-hidden rounded-xl p-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/banners/chinese_meditation_1.jpg"
              alt="Begin Your Journey"
              fill
              className="object-cover brightness-[0.4] transition-all duration-700"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-6 text-3xl font-bold text-balance">Begin Your Journey into Taoist Wisdom</h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto text-balance">
              Let us guide you through the profound teachings of Taoism and help you find balance in modern life
            </p>
            <Link
              href="/culture"
              className={cn(
                buttonVariants({ size: "lg" }),
                "glass-effect hover:bg-primary/90 transition-all duration-300"
              )}
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
