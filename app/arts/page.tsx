import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Metaphysical Arts",
  description: "Explore traditional Chinese metaphysical arts and divination techniques.",
}

export default function ArtsPage() {
  return (
    <div className="container relative pb-10">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">
            Chinese <span className="text-primary">Metaphysical Arts</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover the profound wisdom of traditional Chinese divination and metaphysical practices.
          </p>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/arts/ziwei" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Zi Wei Dou Shu</h3>
            <p className="text-muted-foreground">
              Explore the ancient art of Purple Star Astrology.
            </p>
          </Link>

          <Link href="/arts/bazi" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Ba Zi</h3>
            <p className="text-muted-foreground">
              Discover your destiny through the Four Pillars.
            </p>
          </Link>

          <Link href="/arts/relationship" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Love & Relationship</h3>
            <p className="text-muted-foreground">
              Learn how metaphysical arts can illuminate relationship dynamics.
            </p>
          </Link>

          <Link href="/arts/compatibility" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Marriage Compatibility</h3>
            <p className="text-muted-foreground">
              Discover traditional methods for analyzing marriage compatibility.
            </p>
          </Link>

          <Link href="/arts/naming" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Astrological Naming</h3>
            <p className="text-muted-foreground">
              Learn about selecting names based on astrological principles.
            </p>
          </Link>

          <Link href="/arts/fengshui" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Feng Shui</h3>
            <p className="text-muted-foreground">
              Explore the art of harmonizing space with natural energies.
            </p>
          </Link>

          <Link href="/arts/dream" className="group relative rounded-lg border p-6 hover:border-primary">
            <h3 className="font-heading text-2xl">Dream Interpretation</h3>
            <p className="text-muted-foreground">
              Understand dreams through traditional Chinese perspectives.
            </p>
          </Link>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl">Explore Further</h2>
          <p className="text-muted-foreground">
            Ready to delve deeper into these ancient arts? Start with our detailed guides or consult with our experts.
          </p>
          <div className="space-x-4">
            <Link href="/services/tools" className={cn(buttonVariants({ size: "lg" }))}>
              Try Our Tools
            </Link>
            <Link
              href="/services/consultation"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Book a Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 