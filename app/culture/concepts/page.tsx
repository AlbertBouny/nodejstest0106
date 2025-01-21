import { Button } from "@/components/ui/button";
import { ArrowPathIcon, BeakerIcon, CloudIcon, FireIcon, HandRaisedIcon, SparklesIcon, SunIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Core Concepts | Exploring the Fundamentals of Taoism",
  description: "Discover the essential concepts of Taoism, from the Dao and De to Yin-Yang and Wu Wei. Learn how these principles shape Taoist philosophy and practice.",
  keywords: "Taoism concepts, Dao, De, Yin Yang, Wu Wei, Qi, Five Elements, Ziran, Taoist philosophy",
};

const concepts = [
  {
    id: "dao",
    title: "Dao (道)",
    chinese: "道",
    description: "The fundamental, ineffable force that underlies all existence. The Dao is both the source and substance of everything, yet transcends description and definition.",
    icon: ArrowPathIcon,
    details: [
      "Beyond definition yet present in all things",
      "The natural way of the universe",
      "Source of all being and non-being"
    ]
  },
  {
    id: "de",
    title: "De (德)",
    chinese: "德",
    description: "The innate power and virtue that arises from aligning with the Dao. It represents both moral character and the natural expression of one's true nature.",
    icon: SparklesIcon,
    details: [
      "Inner power and virtue",
      "Natural expression of one's true nature",
      "Result of alignment with the Dao"
    ]
  },
  {
    id: "yinyang",
    title: "Yin-Yang (阴阳)",
    chinese: "阴阳",
    description: "The complementary forces that describe the duality and unity of all things. These forces are in constant interplay, creating balance and harmony in the universe.",
    icon: SunIcon,
    details: [
      "Dynamic interplay of opposites",
      "Mutual transformation and balance",
      "Unity within duality"
    ]
  },
  {
    id: "wuwei",
    title: "Wu Wei (无为)",
    chinese: "无为",
    description: "The principle of non-forcing and natural action. It suggests acting in harmony with the natural flow of events rather than against it.",
    icon: HandRaisedIcon,
    details: [
      "Effortless action",
      "Following the natural way",
      "Acting without forcing"
    ]
  },
  {
    id: "qi",
    title: "Qi (气)",
    chinese: "气",
    description: "The vital energy or life force that permeates all things. It is the basis for Traditional Chinese Medicine and many Taoist practices.",
    icon: BeakerIcon,
    details: [
      "Universal life force",
      "Basis of vitality and health",
      "Foundation of spiritual practices"
    ]
  },
  {
    id: "wuxing",
    title: "Wu Xing (五行)",
    chinese: "五行",
    description: "The Five Elements or Phases (Wood, Fire, Earth, Metal, Water) that describe the fundamental patterns of change and transformation in nature.",
    icon: FireIcon,
    details: [
      "Cycles of transformation",
      "Natural patterns of change",
      "Interconnected relationships"
    ]
  },
  {
    id: "ziran",
    title: "Ziran (自然)",
    chinese: "自然",
    description: "The principle of naturalness and spontaneity. It emphasizes being true to one's nature and living in harmony with the natural world.",
    icon: CloudIcon,
    details: [
      "Natural spontaneity",
      "Being true to one's nature",
      "Harmony with the environment"
    ]
  }
];

export default function ConceptsPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Core Concepts of Taoism
        </h1>
        <p className="max-w-[900px] text-muted-foreground">
          Explore the fundamental principles that form the foundation of Taoist philosophy and practice
        </p>
      </div>

      {/* Introduction */}
      <section className="mt-16 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-2xl font-bold">Understanding Taoist Philosophy</h2>
        <p className="mt-4 text-muted-foreground">
          Taoist philosophy is built upon several interconnected concepts that provide a framework for understanding the nature of reality and our place within it. These concepts are not merely theoretical but are meant to be experienced and embodied in daily life.
        </p>
      </section>

      {/* Core Concepts */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Essential Concepts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {concepts.map((concept) => {
            const Icon = concept.icon;
            return (
              <div key={concept.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{concept.title}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{concept.chinese}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{concept.description}</p>
                <ul className="mt-4 space-y-2">
                  {concept.details.map((detail, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Application */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Practical Application</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            These concepts are not merely philosophical ideas but are meant to be applied in daily life. Through practices such as meditation, qigong, and mindful living, we can begin to embody these principles and experience their transformative power.
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
              <p className="mt-2 text-sm text-muted-foreground">Trace the historical development of Taoism</p>
            </div>
          </Link>
          <Link href="/culture/ethics">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Ethics</h3>
              <p className="mt-2 text-sm text-muted-foreground">Understand Taoist moral principles and values</p>
            </div>
          </Link>
          <Link href="/culture/deities">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Deities</h3>
              <p className="mt-2 text-sm text-muted-foreground">Learn about the divine aspects of Taoism</p>
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