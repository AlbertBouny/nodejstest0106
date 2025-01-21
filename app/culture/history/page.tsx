import { Button } from "@/components/ui/button";
import { BookOpenIcon, ClockIcon, MapIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origins & History | Tracing the Roots of Taoism",
  description: "Explore the rich historical development of Taoism, from its ancient philosophical roots to its modern expressions. Discover key figures, major milestones, and the complex evolution of this profound tradition.",
  keywords: "Taoism history, Taoist origins, Lao Tzu, Daodejing, Chinese philosophy history, religious Taoism, Celestial Masters, Zhang Daoling",
};

const timelinePeriods = [
  {
    era: "Pre-Qin Period",
    years: "Before 221 BCE",
    title: "Philosophical Foundations",
    content: "Development of early Taoist philosophical concepts through the works of Laozi and Zhuangzi.",
    icon: BookOpenIcon,
  },
  {
    era: "Han Dynasty",
    years: "206 BCE - 220 CE",
    title: "Rise of Religious Taoism",
    content: "Emergence of organized Taoist religion with the establishment of the Way of the Celestial Masters by Zhang Daoling.",
    icon: UserGroupIcon,
  },
  {
    era: "Six Dynasties",
    years: "220-589 CE",
    title: "Expansion & Development",
    content: "Flourishing of various Taoist schools and the development of new practices and texts.",
    icon: MapIcon,
  },
  {
    era: "Tang & Song Dynasties",
    years: "618-1279 CE",
    title: "Golden Age",
    content: "Peak of Taoist influence with imperial support and the emergence of internal alchemy traditions.",
    icon: ClockIcon,
  },
];

const keyFigures = [
  {
    name: "Laozi (老子)",
    title: "Legendary Founder",
    description: "Traditional author of the Dao De Jing, considered the foundational text of Taoism.",
    image: "/images/culture/laozi.jpg",
  },
  {
    name: "Zhuangzi (庄子)",
    title: "Philosophical Pioneer",
    description: "Author of the Zhuangzi, known for his profound and often humorous philosophical insights.",
    image: "/images/culture/zhuangzi.jpg",
  },
  {
    name: "Zhang Daoling (张道陵)",
    title: "First Celestial Master",
    description: "Founder of the Way of the Celestial Masters, the first organized Taoist school.",
    image: "/images/culture/zhang-daoling.jpg",
  },
];

export default function HistoryPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Tracing the Roots of Taoism: A Journey Through Time
        </h1>
        <p className="max-w-[900px] text-muted-foreground">
          Explore the evolution of Taoism, from ancient philosophy to modern practice, through a lens of complex and interwoven cultural events
        </p>
      </div>

      {/* Introduction */}
      <section className="mt-16 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-2xl font-bold">The Enigmatic Origins of Taoism</h2>
        <p className="mt-4 text-muted-foreground">
          The origins of Taoism are deeply rooted in Chinese civilization, emerging from ancient practices and philosophical thoughts that predate written history. Unlike many traditions with clear founding dates, Taoism evolved organically through centuries of cultural and spiritual development.
        </p>
      </section>

      {/* Timeline */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Historical Timeline</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {timelinePeriods.map((period) => {
            const Icon = period.icon;
            return (
              <div key={period.era} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{period.era}</h3>
                    <p className="text-sm text-muted-foreground">{period.years}</p>
                  </div>
                </div>
                <h4 className="mt-4 font-semibold">{period.title}</h4>
                <p className="mt-2 text-muted-foreground">{period.content}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Figures */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Key Figures in Taoist History</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {keyFigures.map((figure) => (
            <div key={figure.name} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={figure.image}
                  alt={figure.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{figure.name}</h3>
              <p className="text-sm text-muted-foreground">{figure.title}</p>
              <p className="mt-2 text-muted-foreground">{figure.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Religious Development */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">The Rise of Religious Taoism</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            The transformation of Taoism from a philosophical tradition to an organized religion marked a significant evolution in its history. The Way of the Celestial Masters, founded by Zhang Daoling in 142 CE, established the first organized Taoist community with its own scriptures, rituals, and hierarchical structure.
          </p>
        </div>
      </section>

      {/* Related Pages Navigation */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Explore More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/culture/concepts">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Core Concepts</h3>
              <p className="mt-2 text-sm text-muted-foreground">Discover the fundamental principles of Taoist philosophy</p>
            </div>
          </Link>
          <Link href="/culture/schools">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Major Schools</h3>
              <p className="mt-2 text-sm text-muted-foreground">Learn about different Taoist traditions and lineages</p>
            </div>
          </Link>
          <Link href="/culture/influence">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Cultural Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">Explore Taoism's influence on Chinese culture</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 flex justify-center">
        <Link href="/culture">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore More About Taoist Culture
          </Button>
        </Link>
      </section>
    </div>
  );
} 