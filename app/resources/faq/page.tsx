"use client"

import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// FAQ Categories and Questions
const faqCategories = [
  {
    title: "About Our Services",
    icon: "🔍",
    questions: [
      {
        q: "What type of services do you offer?",
        a: "We offer a range of services including personalized Ba Zi and Zi Wei Dou Shu readings, relationship compatibility analysis, and Feng Shui consultations. We also provide online tools for basic self-exploration.",
        tags: ["services", "readings", "consultations"],
      },
      {
        q: "How do I know which service is right for me?",
        a: "Explore our descriptions of the various consultation types, and contact us for more specific guidance. You can also explore the online tools for an initial experience of our services.",
        tags: ["guidance", "consultation", "tools"],
      },
    ],
  },
  {
    title: "Taoist Practices and Principles",
    icon: "☯️",
    questions: [
      {
        q: "What is Taoism?",
        a: "Taoism is an ancient Chinese philosophy that emphasizes harmony with the natural world and the flow of Qi, the life force of the universe.",
        tags: ["taoism", "philosophy", "qi"],
      },
      {
        q: "What are the core principles of Feng Shui?",
        a: "The main principles of Feng Shui revolve around Yin and Yang, the Five Elements, and the flow of Qi. We also focus on the importance of directional placement and reducing clutter.",
        tags: ["feng shui", "principles", "qi", "yin yang"],
      },
    ],
  },
  {
    title: "Ba Zi and Zi Wei Dou Shu",
    icon: "🌟",
    questions: [
      {
        q: "What is Ba Zi?",
        a: "Ba Zi, also called the Four Pillars of Destiny, is a Chinese system of analysis that uses a person's birth date and time to map out their unique energy signature and life potential.",
        tags: ["bazi", "four pillars", "destiny"],
      },
      {
        q: "What is Zi Wei Dou Shu?",
        a: "Zi Wei Dou Shu, or Purple Star Astrology, utilizes a person's birth data to create a life chart, and then explores the interaction of various planets, stars and energies to reveal a deeper insight into an individual's life path.",
        tags: ["ziwei", "purple star", "astrology"],
      },
      {
        q: "How are they different, and which is better?",
        a: "Both are powerful tools for self-discovery and personal growth. Ba Zi is an energetic map using the elements to understand life, while Zi Wei Dou Shu explores a chart with 12 palaces, using the interaction of stars and planets. Each tool offers a unique perspective, that can be used individually or in combination for the best results.",
        tags: ["comparison", "bazi", "ziwei"],
      },
    ],
  },
  {
    title: "Consultations and Readings",
    icon: "📅",
    questions: [
      {
        q: "What can I expect from a consultation?",
        a: "A consultation with our experienced practitioners will give you a highly personalized approach to a specific area of your life, and will provide a roadmap for positive change, and long-term support.",
        tags: ["consultation", "readings", "support"],
      },
      {
        q: "Are consultations done online?",
        a: "We offer a range of consultations options, both online and in person. Consultations are provided through video calls, phone calls, or in person sessions.",
        tags: ["online", "consultation", "sessions"],
      },
    ],
  },
  {
    title: "Payment and Booking",
    icon: "💳",
    questions: [
      {
        q: "How can I book a consultation?",
        a: "You can book a consultation through our website, by visiting the services pages, choosing the type of consultation you prefer, and then selecting a time and date. You can also contact our team for further assistance.",
        tags: ["booking", "consultation", "appointment"],
      },
      {
        q: "What types of payments do you accept?",
        a: "We accept various secure payment methods, such as credit card and PayPal.",
        tags: ["payment", "methods", "security"],
      },
    ],
  },
  {
    title: "Privacy and Security",
    icon: "🔒",
    questions: [
      {
        q: "Is my personal information safe with you?",
        a: "We prioritize your privacy, and use secure methods for handling your data. All data shared within the consultation will remain confidential.",
        tags: ["privacy", "security", "data"],
      },
      {
        q: "What is your cancellation policy?",
        a: "We require a certain amount of notice for cancellations, so we can better accommodate all clients. More information is available on our terms and conditions page.",
        tags: ["cancellation", "policy", "terms"],
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  // Filter questions based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => {
      const searchText = `${q.q} ${q.a} ${q.tags.join(" ")}`.toLowerCase()
      return searchText.includes(searchQuery.toLowerCase())
    })
  })).filter(category => category.questions.length > 0)

  // Toggle question expansion
  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/faq_banner.jpg"
            alt="FAQ - Frequently Asked Questions"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Frequently Asked Questions
            <span className="block text-xl md:text-2xl">常见问题解答</span>
          </h1>
          <p className="mt-4 max-w-[750px] text-lg sm:text-xl">
            Find quick answers to common questions about Taoist practices and our services
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="sticky top-0 z-20 bg-background/95 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-[500px] flex-col items-center gap-4">
          <Input
            type="search"
            placeholder="Search for answers..."
            className="h-12 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            Type your question or keywords to find relevant answers
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-[800px] py-8">
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.title} className="rounded-lg border p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold">
                <span className="mr-2 text-2xl">{category.icon}</span>
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.questions.map((q) => {
                  const questionId = `${category.title}-${q.q}`
                  const isExpanded = expandedQuestions.includes(questionId)

                  return (
                    <div
                      key={questionId}
                      className="rounded-lg border transition-all duration-200 hover:border-primary"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium">{q.q}</span>
                        <span className="text-xl">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>
                      {isExpanded && (
                        <div className="border-t p-4">
                          <p className="text-muted-foreground">{q.a}</p>
                          {q.tags && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {q.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="mx-auto max-w-[800px] py-8">
        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold">Need More Help?</h2>
          <p className="mt-2 text-muted-foreground">
            If you cannot find the answer to your question, our team is here to help.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              href="/services/consultation"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 