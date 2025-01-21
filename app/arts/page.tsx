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
    <div className="container relative pb-6 sm:pb-10">
      <section className="space-y-4 sm:space-y-6 pb-6 pt-4 sm:pb-8 md:pb-12 sm:pt-6 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Chinese <span className="text-primary">Metaphysical Arts</span>
          </h1>
          <p className="max-w-[42rem] text-sm sm:text-base md:text-xl leading-normal text-muted-foreground sm:leading-8 px-4 sm:px-0">
            Discover the profound wisdom of traditional Chinese divination and metaphysical practices.
          </p>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          <Link href="/arts/ziwei" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Zi Wei Dou Shu</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore the ancient art of Purple Star Astrology.
            </p>
          </Link>

          <Link href="/arts/bazi" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Ba Zi</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover your destiny through the Four Pillars.
            </p>
          </Link>

          <Link href="/arts/relationship" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Love & Relationship</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Learn how metaphysical arts can illuminate relationship dynamics.
            </p>
          </Link>

          <Link href="/arts/compatibility" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Marriage Compatibility</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover traditional methods for analyzing marriage compatibility.
            </p>
          </Link>

          <Link href="/arts/naming" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Astrological Naming</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Learn about selecting names based on astrological principles.
            </p>
          </Link>

          <Link href="/arts/fengshui" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Feng Shui</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore the art of harmonizing space with natural energies.
            </p>
          </Link>

          <Link href="/arts/dream" className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200">
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Dream Interpretation</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Understand dreams through traditional Chinese perspectives.
            </p>
          </Link>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-4 sm:px-0">
          <h2 className="font-heading text-2xl sm:text-3xl">Explore Further</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Ready to delve deeper into these ancient arts? Start with our detailed guides or consult with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/services/tools"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Try Our Tools
            </Link>
            <Link
              href="/services/consultation"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Book a Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 