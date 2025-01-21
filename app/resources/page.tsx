import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources & Learning Materials",
  description: "Access our comprehensive collection of Taoist resources, learning materials, and educational content.",
}

const resources = [
  {
    title: "Glossary",
    description: "Comprehensive guide to Taoist and metaphysical terms",
    href: "/resources/glossary",
    category: "Reference",
  },
  {
    title: "Reading List",
    description: "Curated collection of essential Taoist texts and modern interpretations",
    href: "/resources/readings",
    category: "Learning",
  },
  {
    title: "FAQ",
    description: "Answers to common questions about Taoist practices and beliefs",
    href: "/resources/faq",
    category: "Support",
  },
  {
    title: "Cultural Events",
    description: "Calendar of Taoist festivals, ceremonies, and community gatherings",
    href: "/resources/events",
    category: "Community",
  },
  {
    title: "Study Guides",
    description: "Structured learning materials for different aspects of Taoism",
    href: "/resources/guides",
    category: "Learning",
  },
  {
    title: "Video Library",
    description: "Collection of educational videos and recorded lectures",
    href: "/resources/videos",
    category: "Media",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container relative pb-6 sm:pb-10">
      <section className="space-y-4 sm:space-y-6 pb-6 pt-4 sm:pb-8 md:pb-12 sm:pt-6 md:pt-10">
        <div className="container flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Learning <span className="text-primary">Resources</span>
          </h1>
          <p className="max-w-[42rem] text-sm sm:text-base md:text-xl leading-normal text-muted-foreground sm:leading-8 px-4 sm:px-0">
            Explore our comprehensive collection of educational materials and resources for your spiritual journey.
          </p>
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group relative rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors duration-200"
            >
              <div className="flex flex-col h-full">
                <div>
                  <span className="text-xs sm:text-sm font-medium text-primary">
                    {resource.category}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl mt-2">{resource.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <div className="mt-4 text-sm sm:text-base font-medium text-primary group-hover:underline">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container space-y-4 sm:space-y-6 py-6 sm:py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 sm:space-y-4 text-center px-4 sm:px-0">
          <h2 className="font-heading text-2xl sm:text-3xl">Need Help?</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Can't find what you're looking for? Our team is here to help you find the right resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Contact Us
            </Link>
            <Link
              href="/resources/faq"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto justify-center"
              )}
            >
              Browse FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 