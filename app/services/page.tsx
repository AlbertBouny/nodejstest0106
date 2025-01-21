import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services & Consultation",
  description: "Professional metaphysical consultation services and online tools.",
}

export default function ServicesPage() {
  return (
    <div className="container relative pb-6 sm:pb-10">
      <section className="space-y-4 sm:space-y-6 pb-6 pt-4 sm:pb-8 md:pb-12 sm:pt-6 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Professional <span className="text-primary">Consultation Services</span>
          </h1>
          <p className="max-w-[42rem] text-sm sm:text-base md:text-xl leading-normal text-muted-foreground sm:leading-8 px-4 sm:px-0">
            Expert guidance in Chinese metaphysical arts, from destiny analysis to space harmonization.
          </p>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[250px] sm:h-[300px] flex-col justify-between rounded-md p-4 sm:p-6">
              <div className="space-y-2">
                <h3 className="font-heading text-xl sm:text-2xl">Personal Readings</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  In-depth analysis of your destiny chart using Purple Star Astrology or Four Pillars.
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>• Detailed birth chart analysis</li>
                  <li>• Life path guidance</li>
                  <li>• Career and relationships</li>
                  <li>• Future trends</li>
                </ul>
              </div>
              <Link
                href="/services/consultation#personal"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto justify-center"
                )}
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[250px] sm:h-[300px] flex-col justify-between rounded-md p-4 sm:p-6">
              <div className="space-y-2">
                <h3 className="font-heading text-xl sm:text-2xl">Relationship Analysis</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Understand relationship dynamics and compatibility through traditional methods.
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>• Compatibility assessment</li>
                  <li>• Relationship timing</li>
                  <li>• Conflict resolution</li>
                  <li>• Future prospects</li>
                </ul>
              </div>
              <Link
                href="/services/consultation#relationship"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto justify-center"
                )}
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[250px] sm:h-[300px] flex-col justify-between rounded-md p-4 sm:p-6">
              <div className="space-y-2">
                <h3 className="font-heading text-xl sm:text-2xl">Feng Shui Consultation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Professional assessment and advice for home or business spaces.
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>• Space assessment</li>
                  <li>• Energy optimization</li>
                  <li>• Practical solutions</li>
                  <li>• Follow-up support</li>
                </ul>
              </div>
              <Link
                href="/services/consultation#feng-shui"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto justify-center"
                )}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-4 sm:px-0">
          <h2 className="font-heading text-2xl sm:text-3xl">Online Tools</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Explore our selection of digital tools for basic calculations and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/services/tools"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              View Tools
            </Link>
            <Link
              href="/resources/faq"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 