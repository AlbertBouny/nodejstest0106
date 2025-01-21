"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import { Input } from "../../../components/ui/input"

// Categories for filtering
const categories = [
  { id: "all", label: "All Terms", chinese: "全部术语" },
  { id: "philosophy", label: "Taoist Philosophy", chinese: "道教哲学" },
  { id: "bazi", label: "Ba Zi Terms", chinese: "八字术语" },
  { id: "ziwei", label: "Zi Wei Dou Shu", chinese: "紫微斗数" },
  { id: "fengshui", label: "Feng Shui", chinese: "风水" },
]

interface GlossaryTerm {
  term: string
  chinese: string
  pinyin: string
  partOfSpeech: string
  definition: string
  culturalContext: string
  category: string
  relatedTerms: string[]
  contentLinks: string[]
}

interface GlossarySection {
  letter: string
  terms: GlossaryTerm[]
}

const glossaryTerms: GlossarySection[] = [
  {
    letter: "B",
    terms: [
      {
        term: "Ba Zi",
        chinese: "八字",
        pinyin: "bā zì",
        partOfSpeech: "noun",
        definition: "Literally 'Eight Characters', referring to the four pairs of characters representing the year, month, day, and hour of one's birth in Chinese astrology.",
        culturalContext: "A fundamental concept in Chinese metaphysics, Ba Zi charts have been used for centuries to understand a person's destiny and life path.",
        category: "bazi",
        relatedTerms: ["Four Pillars", "Stem", "Branch"],
        contentLinks: ["/arts/bazi"],
      },
      {
        term: "Branch",
        chinese: "地支",
        pinyin: "dì zhī",
        partOfSpeech: "noun",
        definition: "The Earthly Branches, a set of twelve symbols used in Chinese cosmology to represent various cycles, including the twelve animals of the Chinese zodiac.",
        culturalContext: "The Earthly Branches form an essential part of the Chinese calendar and are deeply integrated into traditional timekeeping and astrology.",
        category: "bazi",
        relatedTerms: ["Stem", "Ba Zi"],
        contentLinks: ["/arts/bazi"],
      },
    ],
  },
  {
    letter: "F",
    terms: [
      {
        term: "Five Elements",
        chinese: "五行",
        pinyin: "wǔ xíng",
        partOfSpeech: "noun",
        definition: "The five fundamental elements in Chinese philosophy: Wood, Fire, Earth, Metal, and Water. These elements interact in cycles of generation and control.",
        culturalContext: "The Five Elements theory is a cornerstone of Chinese philosophy, medicine, and metaphysics, describing the dynamic relationships between natural phenomena.",
        category: "philosophy",
        relatedTerms: ["Yin Yang", "Qi"],
        contentLinks: ["/arts/fengshui"],
      },
      {
        term: "Four Pillars",
        chinese: "四柱",
        pinyin: "sì zhù",
        partOfSpeech: "noun",
        definition: "Another name for Ba Zi, referring to the four components (year, month, day, hour) that make up one's birth chart.",
        culturalContext: "The Four Pillars represent different aspects of one's life and destiny, with each pillar having its own significance in analysis.",
        category: "bazi",
        relatedTerms: ["Ba Zi", "Stem", "Branch"],
        contentLinks: ["/arts/bazi"],
      },
    ],
  },
  {
    letter: "Q",
    terms: [
      {
        term: "Qi",
        chinese: "气",
        pinyin: "qì",
        partOfSpeech: "noun",
        definition: "The fundamental life force or energy that flows through all things in traditional Chinese philosophy and medicine.",
        culturalContext: "Qi is a central concept in Chinese philosophy, medicine, and martial arts, representing the vital energy that animates and connects all things.",
        category: "philosophy",
        relatedTerms: ["Five Elements", "Yin Yang"],
        contentLinks: ["/arts/fengshui"],
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "Stem",
        chinese: "天干",
        pinyin: "tiān gān",
        partOfSpeech: "noun",
        definition: "The Heavenly Stems, a set of ten symbols used in Chinese cosmology, often paired with the Earthly Branches.",
        culturalContext: "The Heavenly Stems are fundamental to Chinese calendrical calculations and represent various cosmic influences in astrology.",
        category: "bazi",
        relatedTerms: ["Branch", "Ba Zi"],
        contentLinks: ["/arts/bazi"],
      },
    ],
  },
  {
    letter: "Y",
    terms: [
      {
        term: "Yin Yang",
        chinese: "阴阳",
        pinyin: "yīn yáng",
        partOfSpeech: "noun",
        definition: "The concept of duality in Chinese philosophy, representing complementary forces that interact to maintain universal balance.",
        culturalContext: "Yin Yang theory underlies much of Chinese philosophy and medicine, describing how opposing forces work together in nature and life.",
        category: "philosophy",
        relatedTerms: ["Qi", "Five Elements"],
        contentLinks: ["/arts/fengshui"],
      },
    ],
  },
  {
    letter: "Z",
    terms: [
      {
        term: "Zi Wei Dou Shu",
        chinese: "紫微斗数",
        pinyin: "zǐ wēi dǒu shù",
        partOfSpeech: "noun",
        definition: "Purple Star Astrology, a form of Chinese astrology that maps the positions of major stars to create a detailed life chart.",
        culturalContext: "This sophisticated system of astrology has been used by Chinese imperial courts and continues to provide detailed insights into various life aspects.",
        category: "ziwei",
        relatedTerms: ["Ba Zi", "Four Pillars"],
        contentLinks: ["/arts/ziwei"],
      },
    ],
  },
]

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter terms based on search query and category
  const filteredTerms = glossaryTerms.map(section => ({
    ...section,
    terms: section.terms.filter(term => {
      const matchesSearch = searchQuery === "" ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.chinese.includes(searchQuery) ||
        term.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || term.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  })).filter(section => section.terms.length > 0)

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_calligraphy_1.jpg"
            alt="术语表 - Glossary of Terms"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Glossary of Key Terms
            <span className="block text-xl md:text-2xl">术语表</span>
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Explore and understand the essential terms used in Taoist and esoteric practices
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-0 z-20 bg-background/95 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6">
          <div className="w-full max-w-[500px]">
            <Input
              type="search"
              placeholder="Search terms in English or Chinese..."
              className="h-12 text-lg"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Search in English or Chinese (支持中英文搜索)
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  buttonVariants({
                    variant: selectedCategory === category.id ? "default" : "outline",
                    size: "sm"
                  }),
                  "min-w-[100px]"
                )}
              >
                {category.label}
                <span className={cn(
                  "ml-1 text-xs",
                  selectedCategory === category.id ? "text-primary-foreground" : "text-muted-foreground"
                )}>
                  ({category.chinese})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="mx-auto max-w-[800px] py-8">
        {/* Letter Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filteredTerms.map((section) => (
            <Link
              key={section.letter}
              href={`#${section.letter}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "min-w-[2.5rem]"
              )}
            >
              {section.letter}
            </Link>
          ))}
        </div>

        {/* Terms List */}
        <div className="space-y-12">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((section) => (
              <div key={section.letter} id={section.letter}>
                <h2 className="mb-6 text-3xl font-bold">{section.letter}</h2>
                <div className="space-y-8">
                  {section.terms.map((term) => (
                    <div
                      key={term.term}
                      className="group rounded-lg border p-6 transition-all duration-200 hover:border-primary hover:shadow-lg"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary">
                            {term.term} <span className="text-primary">({term.chinese})</span>
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {term.pinyin} • {term.partOfSpeech}
                          </p>
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          {categories.find(c => c.id === term.category)?.label}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Definition:</p>
                          <p className="text-muted-foreground">{term.definition}</p>
                        </div>
                        <div>
                          <p className="font-medium">Cultural Context:</p>
                          <p className="text-muted-foreground">{term.culturalContext}</p>
                        </div>
                        {term.relatedTerms && (
                          <div>
                            <p className="font-medium">Related Terms:</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {term.relatedTerms.map((relatedTerm) => (
                                <span
                                  key={relatedTerm}
                                  className="cursor-pointer rounded-full bg-muted px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground"
                                  onClick={() => setSearchQuery(relatedTerm)}
                                >
                                  {relatedTerm}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {term.contentLinks && (
                          <div className="flex flex-wrap gap-2">
                            {term.contentLinks.map((link) => (
                              <Link
                                key={link}
                                href={link}
                                className={cn(
                                  buttonVariants({ variant: "link", size: "sm" }),
                                  "h-auto p-0 group-hover:text-primary"
                                )}
                              >
                                Learn more →
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                No terms found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className={cn(buttonVariants({ variant: "link" }), "mt-4")}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-[800px] py-8">
        <div className="rounded-lg bg-muted p-6">
          <p className="text-center text-sm text-muted-foreground">
            Note: These definitions provide a basic understanding of key terms. The actual application of these terms may have more nuanced interpretations that are best explored with the help of a professional practitioner.
          </p>
        </div>
      </section>
    </div>
  )
} 