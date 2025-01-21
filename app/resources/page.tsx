import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BookMarked, BookOpen, Calendar, GraduationCap, HelpCircle, Video } from "lucide-react"
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
    icon: BookOpen,
  },
  {
    title: "Reading List",
    description: "Curated collection of essential Taoist texts and modern interpretations",
    href: "/resources/readings",
    category: "Learning",
    icon: BookMarked,
  },
  {
    title: "FAQ",
    description: "Answers to common questions about Taoist practices and beliefs",
    href: "/resources/faq",
    category: "Support",
    icon: HelpCircle,
  },
  {
    title: "Cultural Events",
    description: "Calendar of Taoist festivals, ceremonies, and community gatherings",
    href: "/resources/events",
    category: "Community",
    icon: Calendar,
  },
  {
    title: "Study Guides",
    description: "Structured learning materials for different aspects of Taoism",
    href: "/resources/guides",
    category: "Learning",
    icon: GraduationCap,
  },
  {
    title: "Video Library",
    description: "Collection of educational videos and recorded lectures",
    href: "/resources/videos",
    category: "Media",
    icon: Video,
  },
]

export default function ResourcesPage() {
  return (
    <div className="container relative pb-8 sm:pb-12 animate-in">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Learning Resources
          </h1>
          <p className="max-w-[42rem] text-lg sm:text-xl leading-normal text-muted-foreground">
            Explore our comprehensive collection of educational materials and resources for your spiritual journey.
          </p>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.href}
                href={resource.href}
                className="group relative rounded-xl border p-6 hover:border-primary transition-colors duration-200 card-hover gradient-border bg-card"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl mt-4">{resource.title}</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary group-hover:underline font-medium">
                    Learn more
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Need Help?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Can't find what you're looking for? Our team is here to help you find the right resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto px-8 card-hover"
              )}
            >
              Contact Us
            </Link>
            <Link
              href="/resources/faq"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto px-8 card-hover"
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