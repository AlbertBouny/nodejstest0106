import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Taoist Culture Guide",
  description: "Explore the rich heritage and profound wisdom of Taoist culture.",
}

export default function CulturePage() {
  return (
    <div className="container relative pb-10">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">
            Understanding <span className="text-primary">Taoist Culture</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover the ancient wisdom, philosophy, and practices that have shaped Chinese civilization for millennia.
          </p>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/culture/history" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Origins & History</h3>
            <p className="text-muted-foreground">
              Trace the development of Taoism from its ancient roots to modern times.
            </p>
          </Link>

          <Link href="/culture/concepts" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Core Concepts</h3>
            <p className="text-muted-foreground">
              Explore fundamental ideas like Dao, Yin-Yang, Wu Wei, and the Three Treasures.
            </p>
          </Link>

          <Link href="/culture/schools" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Schools & Lineages</h3>
            <p className="text-muted-foreground">
              Learn about the major Taoist schools and their unique teachings.
            </p>
          </Link>

          <Link href="/culture/deities" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Deities & Immortals</h3>
            <p className="text-muted-foreground">
              Meet the divine beings and legendary figures of Taoist tradition.
            </p>
          </Link>

          <Link href="/culture/impact" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Cultural Impact</h3>
            <p className="text-muted-foreground">
              Discover Taoism's influence on art, literature, medicine, and daily life.
            </p>
          </Link>

          <Link href="/culture/ethics" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Ethics & Practice</h3>
            <p className="text-muted-foreground">
              Understand the moral principles and practical applications of Taoist wisdom.
            </p>
          </Link>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl">Begin Your Journey</h2>
          <p className="text-muted-foreground">
            Ready to explore the depths of Taoist wisdom? Start with our comprehensive guides or book a consultation with our experts.
          </p>
          <div className="space-x-4">
            <Link href="/culture/history" className={cn(buttonVariants({ size: "lg" }))}>
              Start Learning
            </Link>
            <Link
              href="/services/consultation"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Speak with an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 