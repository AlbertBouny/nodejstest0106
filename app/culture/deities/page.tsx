import { Button } from "@/components/ui/button";
import {
  CloudIcon,
  SparklesIcon,
  StarIcon,
  SunIcon
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deities | Exploring the Divine in Taoism",
  description: "Discover the rich pantheon of Taoist deities, their roles, and significance in traditional practice. Learn about the Three Pure Ones, celestial beings, and nature spirits.",
  keywords: "Taoist deities, Three Pure Ones, Jade Emperor, Chinese gods, Taoist pantheon, celestial beings",
};

const deityCategories = [
  {
    id: "three-pure-ones",
    title: "The Three Pure Ones (三清)",
    chinese: "三清",
    description: "The highest deities in Taoism, representing different aspects of the Dao and its manifestation.",
    icon: StarIcon,
    deities: [
      {
        name: "Yuanshi Tianzun (元始天尊)",
        title: "Celestial Worthy of Primordial Beginning",
        description: "The first and highest of the Three Pure Ones, representing the primordial Dao itself."
      },
      {
        name: "Lingbao Tianzun (灵宝天尊)",
        title: "Celestial Worthy of Numinous Treasure",
        description: "The second of the Three Pure Ones, representing the Dao's creative power."
      },
      {
        name: "Daode Tianzun (道德天尊)",
        title: "Celestial Worthy of the Dao and Virtue",
        description: "The third of the Three Pure Ones, identified with Laozi as the teacher of the Dao."
      }
    ]
  },
  {
    id: "celestial-emperors",
    title: "The Four Celestial Emperors (四御)",
    chinese: "四御",
    description: "The primary administrators of the celestial realm, governing different aspects of the cosmos.",
    icon: SunIcon,
    deities: [
      {
        name: "Jade Emperor (玉皇大帝)",
        title: "Supreme Deity of Heaven",
        description: "The ruler of heaven and all realms below, coordinator of all divine and earthly activities."
      },
      {
        name: "Gouchen Emperor (勾陈大帝)",
        title: "Emperor of the North Pole",
        description: "Guardian of the Northern Heaven and cosmic stability."
      }
    ]
  },
  {
    id: "nature-deities",
    title: "Nature Deities",
    chinese: "自然神",
    description: "Deities associated with natural phenomena and the cycles of nature.",
    icon: CloudIcon,
    deities: [
      {
        name: "Thunder Deity (雷神)",
        title: "Lord of Thunder",
        description: "Controls thunder and lightning, representing divine justice."
      },
      {
        name: "Earth God (土地公)",
        title: "Local Earth Deity",
        description: "Protector of local areas and communities, bringing prosperity and harmony."
      }
    ]
  },
  {
    id: "immortals",
    title: "Immortals and Sages",
    chinese: "仙人",
    description: "Historical figures who achieved immortality through spiritual cultivation.",
    icon: SparklesIcon,
    deities: [
      {
        name: "Eight Immortals (八仙)",
        title: "The Eight Immortals",
        description: "A group of legendary figures who achieved immortality and represent different aspects of society."
      },
      {
        name: "Lü Dongbin (吕洞宾)",
        title: "Pure Yang Immortal",
        description: "One of the most revered immortals, known for his wisdom and spiritual achievements."
      }
    ]
  }
];

const worshipPractices = [
  {
    title: "Temple Worship",
    description: "Regular offerings and prayers at temples dedicated to specific deities."
  },
  {
    title: "Home Altars",
    description: "Maintaining personal shrines for daily devotional practices and offerings."
  },
  {
    title: "Festivals",
    description: "Celebrating specific deities during their associated festivals throughout the year."
  },
  {
    title: "Meditation",
    description: "Internal practices to connect with divine energies and celestial beings."
  }
];

export default function DeitiesPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          The Divine in Taoism
        </h1>
        <p className="max-w-[900px] text-muted-foreground">
          Explore the vast pantheon of Taoist deities and their roles in traditional practice
        </p>
      </div>

      {/* Introduction */}
      <section className="mt-16 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-2xl font-bold">Understanding the Taoist Pantheon</h2>
        <p className="mt-4 text-muted-foreground">
          The Taoist pantheon represents a complex hierarchy of divine beings, each with specific roles and significance. While ultimate reality (the Dao) transcends all forms, these deities serve as bridges between the absolute and the relative world.
        </p>
      </section>

      {/* Deity Categories */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Divine Hierarchy</h2>
        {deityCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-lg font-medium text-muted-foreground">{category.chinese}</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">{category.description}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {category.deities.map((deity, index) => (
                  <div key={index} className="rounded-lg border bg-background p-4">
                    <h4 className="font-semibold">{deity.name}</h4>
                    <p className="text-sm text-muted-foreground">{deity.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{deity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Worship Practices */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Worship and Practice</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {worshipPractices.map((practice, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-semibold">{practice.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{practice.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Understanding */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Modern Understanding</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            In contemporary practice, these deities are often understood as manifestations of natural forces or aspects of human consciousness. While traditional worship continues, many practitioners focus on the symbolic and psychological significance of these divine figures.
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
              <p className="mt-2 text-sm text-muted-foreground">Understand fundamental Taoist principles</p>
            </div>
          </Link>
          <Link href="/culture/schools">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Major Schools</h3>
              <p className="mt-2 text-sm text-muted-foreground">Explore different Taoist traditions</p>
            </div>
          </Link>
          <Link href="/culture/influence">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Cultural Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">See how Taoism influenced Chinese culture</p>
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