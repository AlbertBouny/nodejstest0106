import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  BuildingLibraryIcon,
  HeartIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cultural Influence | The Impact of Taoism",
  description: "Explore how Taoism has shaped Chinese art, literature, medicine, martial arts, and daily life throughout history and in the modern world.",
  keywords: "Taoist influence, Chinese culture, Traditional Chinese Medicine, Taoist art, Chinese literature, martial arts, Feng Shui",
};

const culturalAreas = [
  {
    id: "art",
    title: "Art and Aesthetics",
    chinese: "艺术与美学",
    description: "Taoist principles have profoundly influenced Chinese art, emphasizing spontaneity, naturalness, and the expression of inner harmony.",
    icon: PaintBrushIcon,
    examples: [
      "Landscape painting (山水画)",
      "Calligraphy (书法)",
      "Poetry and music",
      "Ceramic arts"
    ],
    principles: [
      "Balance of form and emptiness",
      "Harmony with nature",
      "Spontaneous expression",
      "Minimalist aesthetics"
    ]
  },
  {
    id: "literature",
    title: "Literature and Philosophy",
    chinese: "文学与哲学",
    description: "Taoist themes and concepts have enriched Chinese literature and philosophical discourse throughout history.",
    icon: BookOpenIcon,
    examples: [
      "Classical texts (Dao De Jing, Zhuangzi)",
      "Poetry of the Tang Dynasty",
      "Modern philosophical works",
      "Contemporary fiction"
    ],
    principles: [
      "Metaphorical expression",
      "Natural wisdom",
      "Paradoxical thinking",
      "Spiritual insight"
    ]
  },
  {
    id: "medicine",
    title: "Traditional Medicine",
    chinese: "传统医学",
    description: "Traditional Chinese Medicine is deeply rooted in Taoist understanding of the body, energy, and natural healing.",
    icon: HeartIcon,
    examples: [
      "Acupuncture (针灸)",
      "Herbal medicine (中药)",
      "Qigong (气功)",
      "Dietary therapy"
    ],
    principles: [
      "Balance of Yin and Yang",
      "Five Elements theory",
      "Qi circulation",
      "Holistic healing"
    ]
  },
  {
    id: "martial-arts",
    title: "Martial Arts",
    chinese: "武术",
    description: "Taoist principles of harmony, balance, and energy flow are fundamental to many Chinese martial arts.",
    icon: SparklesIcon,
    examples: [
      "Tai Chi (太极拳)",
      "Bagua Zhang (八卦掌)",
      "Xing Yi Quan (形意拳)",
      "Qi cultivation practices"
    ],
    principles: [
      "Soft overcomes hard",
      "Internal power",
      "Mind-body unity",
      "Natural movement"
    ]
  },
  {
    id: "daily-life",
    title: "Daily Life and Customs",
    chinese: "日常生活与习俗",
    description: "Taoist wisdom continues to influence modern Chinese lifestyle, from festival celebrations to personal practices.",
    icon: BuildingLibraryIcon,
    examples: [
      "Festival celebrations",
      "Feng Shui practices",
      "Tea culture",
      "Meditation practices"
    ],
    principles: [
      "Harmony with nature",
      "Simplicity in living",
      "Balance in activities",
      "Mindful practices"
    ]
  },
  {
    id: "music",
    title: "Music and Performance",
    chinese: "音乐与表演",
    description: "Taoist concepts have shaped traditional Chinese music and performance arts, emphasizing harmony and natural expression.",
    icon: MusicalNoteIcon,
    examples: [
      "Traditional instruments",
      "Temple music",
      "Ceremonial performances",
      "Modern interpretations"
    ],
    principles: [
      "Natural rhythm",
      "Spiritual expression",
      "Harmonic balance",
      "Meditative quality"
    ]
  }
];

export default function InfluencePage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          The Far-Reaching Influence of Taoism
        </h1>
        <p className="max-w-[900px] text-muted-foreground">
          Discover how Taoist principles have shaped Chinese culture and continue to influence modern life
        </p>
      </div>

      {/* Introduction */}
      <section className="mt-16 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-2xl font-bold">A Living Legacy</h2>
        <p className="mt-4 text-muted-foreground">
          Taoism's influence extends far beyond religious practice, permeating virtually every aspect of Chinese culture and society. Its principles of harmony, balance, and natural wisdom continue to shape contemporary life and creative expression.
        </p>
      </section>

      {/* Cultural Areas */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Areas of Influence</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {culturalAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{area.chinese}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{area.description}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold">Key Examples</h4>
                    <ul className="mt-2 space-y-1">
                      {area.examples.map((example, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Core Principles</h4>
                    <ul className="mt-2 space-y-1">
                      {area.principles.map((principle, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modern Relevance */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Contemporary Impact</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            In the modern world, Taoist principles continue to offer valuable insights for addressing contemporary challenges. From environmental consciousness to mental wellness, these ancient teachings provide wisdom that resonates with current global concerns.
          </p>
        </div>
      </section>

      {/* Related Pages Navigation */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Explore More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/culture/history">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">History</h3>
              <p className="mt-2 text-sm text-muted-foreground">Discover the historical development of Taoism</p>
            </div>
          </Link>
          <Link href="/culture/concepts">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Core Concepts</h3>
              <p className="mt-2 text-sm text-muted-foreground">Learn about fundamental Taoist principles</p>
            </div>
          </Link>
          <Link href="/culture/ethics">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Ethics</h3>
              <p className="mt-2 text-sm text-muted-foreground">Explore Taoist moral teachings</p>
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