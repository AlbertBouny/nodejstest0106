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
    <div className="container relative pb-6 sm:pb-10">
      <section className="space-y-4 sm:space-y-6 pb-6 pt-4 sm:pb-8 md:pb-12 sm:pt-6 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Understanding <span className="text-primary">Taoist Culture</span>
          </h1>
          <p className="max-w-[42rem] text-sm sm:text-base md:text-xl leading-normal text-muted-foreground sm:leading-8 px-4 sm:px-0">
            Discover the ancient wisdom, philosophy, and practices that have shaped Chinese civilization for millennia.
          </p>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          <Link href="/culture/history" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Origins & History</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Trace the development of Taoism from its ancient roots to modern times.
            </p>
          </Link>

          <Link href="/culture/concepts" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Core Concepts</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore fundamental ideas like Dao, Yin-Yang, Wu Wei, and the Three Treasures.
            </p>
          </Link>

          <Link href="/culture/schools" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Schools & Lineages</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Learn about the major Taoist schools and their unique teachings.
            </p>
          </Link>

          <Link href="/culture/deities" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Deities & Immortals</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Meet the divine beings and legendary figures of Taoist tradition.
            </p>
          </Link>

          <Link href="/culture/impact" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Cultural Impact</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover Taoism's influence on art, literature, medicine, and daily life.
            </p>
          </Link>

          <Link href="/culture/ethics" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Ethics & Practice</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Understand the moral principles and practical applications of Taoist wisdom.
            </p>
          </Link>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-4 sm:px-0">
          <h2 className="font-heading text-2xl sm:text-3xl">Begin Your Journey</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Ready to explore the depths of Taoist wisdom? Start with our comprehensive guides or book a consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/culture/history"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Start Learning
            </Link>
            <Link
              href="/services/consultation"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Speak with an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 