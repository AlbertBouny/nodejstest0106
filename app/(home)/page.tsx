import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Daoist Pathways - Exploring Taoist Wisdom | 道途之路 - 探索道家智慧",
  description: "Explore the rich traditions of Taoist philosophy and discover practical tools for self-understanding, and navigate your life with greater clarity and joy.",
  keywords: "Taoism, Taoist wisdom, Chinese philosophy, Feng Shui, Ba Zi, Zi Wei Dou Shu, spiritual practices, self-discovery, 道教, 道家, 风水, 八字, 紫微斗数",
}

export default function HomePage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/taoist_temple_1.jpg"
            alt="Journey Into Taoism"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Journey Into the Heart of Taoism
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Explore the rich traditions of Taoist philosophy and discover practical tools for self-understanding, and navigate your life with greater clarity and joy.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/culture"
              className={cn(buttonVariants({ size: "lg" }))}
              title="Learn about core principles"
            >
              Explore Taoist Culture
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              title="Receive personalized guidance"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="mx-auto max-w-[1200px] py-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Daoist Pathways - Your Gateway to Taoist Wisdom</h2>
            <p className="text-muted-foreground">
              We invite you to explore the fascinating world of Taoism, through ancient traditions that emphasize harmony, balance, and self-discovery. Our goal is to present these profound concepts in a way that is engaging, accessible, and culturally sensitive, providing you with practical tools for navigating your unique life journey.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/images/culture/ancient_chinese_scroll_1.jpg"
              alt="Taoist Wisdom"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Content Highlights */}
      <section className="mx-auto max-w-[1200px] py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Core Areas of Focus</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Taoist Culture */}
          <div className="group flex flex-col gap-4 rounded-lg border p-6 transition-shadow hover:shadow-md">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/images/culture/chinese_temple_1.jpg"
                alt="Taoist Culture"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold">Delve Deeper into Taoist Culture</h3>
            <p className="text-muted-foreground flex-1">
              Explore the rich history, key principles, core beliefs, and the spiritual practices of the Taoist tradition
            </p>
            <Link
              href="/culture"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Explore Our Culture Section
            </Link>
          </div>

          {/* Esoteric Tools */}
          <div className="group flex flex-col gap-4 rounded-lg border p-6 transition-shadow hover:shadow-md">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/images/arts/bagua_compass_1.jpg"
                alt="Esoteric Tools"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold">Unlock The Power of Esoteric Practices</h3>
            <p className="text-muted-foreground flex-1">
              Discover a wide range of ancient techniques, including Ba Zi, Zi Wei Dou Shu, Feng Shui, and Dream Interpretation, and learn how they can enhance self-awareness.
            </p>
            <Link
              href="/arts"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Explore Our Tools
            </Link>
          </div>

          {/* Services */}
          <div className="group flex flex-col gap-4 rounded-lg border p-6 transition-shadow hover:shadow-md">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/images/services/consultation_1.jpg"
                alt="Personalized Services"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold">Get Personalized Guidance</h3>
            <p className="text-muted-foreground flex-1">
              Discover our consultation services, designed to offer you practical advice, and to support you in applying the wisdom of Taoism to your daily life.
            </p>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="mx-auto max-w-[1200px] py-12 bg-accent/10 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted Guidance From Experts In The Field</h2>
          <p className="text-muted-foreground">Learn from practitioners with deep understanding of Taoist traditions</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 px-6">
          {/* Testimonial */}
          <div className="rounded-lg border bg-background p-6">
            <div className="flex flex-col gap-4">
              <p className="text-lg italic">"The insights I gained through the consultations have been transformative. The practitioners here truly understand how to make ancient wisdom relevant to modern life."</p>
              <p className="font-semibold">- Sarah Chen, Business Owner</p>
            </div>
          </div>
          {/* Expert Bio */}
          <div className="rounded-lg border bg-background p-6">
            <div className="flex gap-4 items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team/master_wang_1.jpg"
                  alt="Master Wang"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Master Wang</h3>
                <p className="text-sm text-muted-foreground">30+ years of experience in Taoist practices and consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Engaged Section */}
      <section className="mx-auto max-w-[1200px] py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Stay Informed With Our Latest Insights</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Recent Articles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Latest Articles</h3>
            <div className="space-y-4">
              <Link href="/blog/understanding-qi" className="block group">
                <div className="rounded-lg border p-4 transition-shadow hover:shadow-md">
                  <h4 className="font-semibold group-hover:text-primary">Understanding Qi: The Vital Force in Taoism</h4>
                  <p className="text-sm text-muted-foreground">Explore the concept of Qi and its role in Taoist practices...</p>
                </div>
              </Link>
              <Link href="/blog/feng-shui-basics" className="block group">
                <div className="rounded-lg border p-4 transition-shadow hover:shadow-md">
                  <h4 className="font-semibold group-hover:text-primary">Essential Feng Shui Principles for Modern Living</h4>
                  <p className="text-sm text-muted-foreground">Learn how to apply Feng Shui principles in your home...</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="rounded-lg border p-6">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Receive monthly insights on Taoist wisdom, practical tips, and exclusive content.
            </p>
            <Link
              href="/newsletter"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="mx-auto max-w-[1200px] text-center">
        <div className="relative overflow-hidden rounded-lg p-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/banners/chinese_meditation_1.jpg"
              alt="Begin Your Journey"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Begin Your Journey into Taoist Wisdom</h2>
            <p className="mb-6">
              Let us guide you through the profound teachings of Taoism and help you find balance in modern life
            </p>
            <Link href="/culture" className={cn(buttonVariants({ size: "lg" }))}>
              Start Exploring
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
