import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Recommended Readings | Explore Taoist Culture and Practices",
  description: "探索道教文化与实践的推荐读物。Curated list of books and resources about Taoist culture, Ba Zi, Zi Wei Dou Shu, and related practices.",
  keywords: "道教书籍,玄学资源,taoist books,chinese metaphysics resources,ba zi books,zi wei dou shu readings",
}

const categories = [
  {
    title: "Taoist Philosophy and Culture",
    chinese: "道教哲学与文化",
    description: "Essential readings on Taoist philosophy, principles, and cultural context",
    resources: [
      {
        title: "The Tao of Pooh",
        author: "Benjamin Hoff",
        description: "An accessible introduction to Taoist principles through the lens of Winnie the Pooh stories.",
        link: "https://www.amazon.com/Tao-Pooh-Benjamin-Hoff/dp/0140067477",
        type: "Book",
        image: "/images/books/tao_of_pooh.jpg",
      },
      {
        title: "The Tao Te Ching: A New Translation",
        author: "Stephen Mitchell",
        description: "A modern translation of Lao Tzu's classic text, making ancient wisdom accessible to contemporary readers.",
        link: "https://www.amazon.com/Tao-Te-Ching-New-Translation/dp/0061142662",
        type: "Book",
        image: "/images/books/tao_te_ching.jpg",
      },
    ],
  },
  {
    title: "Ba Zi (Four Pillars of Destiny)",
    chinese: "八字命理",
    description: "Books and resources for understanding Ba Zi analysis",
    resources: [
      {
        title: "The Definitive Book of Chinese Astrology",
        author: "Shelly Wu",
        description: "A comprehensive guide to understanding the Four Pillars of Destiny and Chinese astrology.",
        link: "https://www.amazon.com/Definitive-Book-Chinese-Astrology/dp/1578634458",
        type: "Book",
        image: "/images/books/chinese_astrology.jpg",
      },
      {
        title: "Understanding Your Chinese Birth Chart",
        author: "Journal of Chinese Astrology",
        description: "An in-depth article explaining the fundamentals of Ba Zi charts.",
        link: "https://www.jchineseastrology.com/birth-chart",
        type: "Article",
      },
    ],
  },
  {
    title: "Zi Wei Dou Shu (Purple Star Astrology)",
    chinese: "紫微斗数",
    description: "Resources for learning about Purple Star Astrology",
    resources: [
      {
        title: "The Art of Zi Wei Dou Shu",
        author: "Master Joseph Yu",
        description: "A detailed exploration of Purple Star Astrology methods and interpretations.",
        link: "https://www.amazon.com/Art-Zi-Wei-Dou-Shu/dp/9889876543",
        type: "Book",
        image: "/images/books/ziwei_art.jpg",
      },
    ],
  },
  {
    title: "Feng Shui and Geomancy",
    chinese: "风水与堪舆",
    description: "Books about traditional Feng Shui principles and practice",
    resources: [
      {
        title: "The Living Earth Manual of Feng Shui",
        author: "Stephen Skinner",
        description: "A practical guide to classical Feng Shui principles and their application.",
        link: "https://www.amazon.com/Living-Earth-Manual-Feng-Shui/dp/0140193529",
        type: "Book",
        image: "/images/books/fengshui_manual.jpg",
      },
    ],
  },
]

export default function ReadingsPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_books.jpg"
            alt="推荐读物"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Recommended Readings
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Expand your knowledge with our curated collection of resources
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1200px] py-12">
        <div className="grid gap-12">
          {categories.map((category) => (
            <div key={category.title} className="space-y-8">
              <div className="border-b pb-4">
                <h2 className="text-2xl font-bold">
                  {category.title} <span className="text-primary">({category.chinese})</span>
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {category.resources.map((resource) => (
                  <div
                    key={resource.title}
                    className="flex flex-col gap-4 rounded-lg border p-6"
                  >
                    {resource.image && (
                      <div className="relative h-48 w-full overflow-hidden rounded-lg">
                        <Image
                          src={resource.image}
                          alt={resource.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{resource.title}</h3>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          {resource.type}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        by {resource.author}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{resource.description}</p>
                    <Link
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      View Resource →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-[800px] py-12">
        <div className="rounded-lg bg-muted p-6 text-center">
          <h2 className="text-xl font-semibold">Continue Your Learning Journey</h2>
          <p className="mt-2 text-muted-foreground">
            These resources provide a foundation for understanding. For deeper insights, consider booking a consultation with our experts.
          </p>
          <div className="mt-4">
            <Link
              href="/services/consultation"
              className={buttonVariants({ size: "lg" })}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 