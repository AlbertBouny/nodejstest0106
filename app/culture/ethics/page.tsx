import { Button } from "@/components/ui/button";
import {
  CloudIcon,
  HandRaisedIcon,
  HeartIcon,
  ScaleIcon,
  SparklesIcon,
  SunIcon
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taoist Ethics | The Moral Compass of Taoism",
  description: "Explore the ethical principles of Taoism and their practical application in daily life. Learn about harmony, balance, and natural wisdom in Taoist moral philosophy.",
  keywords: "Taoist ethics, moral principles, Taoist values, harmony, balance, wu-wei, natural wisdom, spiritual cultivation",
};

const ethicalPrinciples = [
  {
    id: "harmony",
    title: "Living in Harmony",
    chinese: "和谐",
    description: "The fundamental principle of aligning oneself with the natural way of the universe and maintaining balance in all aspects of life.",
    icon: SunIcon,
    aspects: [
      "Harmony with nature",
      "Balance in relationships",
      "Environmental consciousness",
      "Peaceful coexistence"
    ]
  },
  {
    id: "simplicity",
    title: "Embracing Simplicity",
    chinese: "朴素",
    description: "Valuing simplicity and authenticity over complexity and artificiality, leading to a more genuine and fulfilling life.",
    icon: CloudIcon,
    aspects: [
      "Natural living",
      "Minimalism",
      "Authenticity",
      "Clear thinking"
    ]
  },
  {
    id: "compassion",
    title: "Universal Compassion",
    chinese: "慈悲",
    description: "Extending kindness and understanding to all beings, recognizing the interconnected nature of existence.",
    icon: HeartIcon,
    aspects: [
      "Kindness to all beings",
      "Empathy",
      "Non-violence",
      "Mutual support"
    ]
  },
  {
    id: "wisdom",
    title: "Natural Wisdom",
    chinese: "智慧",
    description: "Cultivating wisdom through observation of nature and understanding of the Dao's principles.",
    icon: SparklesIcon,
    aspects: [
      "Learning from nature",
      "Inner cultivation",
      "Practical wisdom",
      "Spiritual insight"
    ]
  },
  {
    id: "justice",
    title: "Natural Justice",
    chinese: "公正",
    description: "Understanding and following the natural order of things, leading to fair and balanced actions.",
    icon: ScaleIcon,
    aspects: [
      "Natural consequences",
      "Balanced judgment",
      "Fairness",
      "Reciprocity"
    ]
  },
  {
    id: "non-interference",
    title: "Mindful Action",
    chinese: "无为",
    description: "Acting with awareness and non-interference, allowing things to unfold naturally while maintaining ethical conduct.",
    icon: HandRaisedIcon,
    aspects: [
      "Non-forcing",
      "Appropriate action",
      "Timing awareness",
      "Natural flow"
    ]
  }
];

const practicalApplications = [
  {
    title: "Personal Relationships",
    examples: [
      "Practicing active listening",
      "Showing genuine care",
      "Maintaining boundaries",
      "Being truthful and authentic"
    ]
  },
  {
    title: "Professional Life",
    examples: [
      "Ethical decision-making",
      "Balanced leadership",
      "Harmonious teamwork",
      "Sustainable practices"
    ]
  },
  {
    title: "Environmental Care",
    examples: [
      "Mindful consumption",
      "Reducing waste",
      "Supporting nature",
      "Sustainable choices"
    ]
  },
  {
    title: "Self-Cultivation",
    examples: [
      "Regular meditation",
      "Mindful living",
      "Continuous learning",
      "Personal reflection"
    ]
  }
];

const reflectionPrompts = [
  "How can I better align my actions with natural principles?",
  "Where can I simplify my life and reduce unnecessary complexity?",
  "How can I show more compassion to others and myself?",
  "What lessons can I learn from observing nature?",
  "How can I maintain better balance in my relationships and activities?"
];

export default function EthicsPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          The Moral Compass of Taoist Practice
        </h1>
        <p className="max-w-[900px] text-muted-foreground">
          Explore the ethical principles that guide Taoist practice and their application in daily life
        </p>
      </div>

      {/* Introduction */}
      <section className="mt-16 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-2xl font-bold">Understanding Taoist Ethics</h2>
        <p className="mt-4 text-muted-foreground">
          Taoist ethics are not based on rigid commandments but on understanding and aligning with the natural way. These principles provide guidance for living in harmony with the Dao, others, and oneself.
        </p>
      </section>

      {/* Core Principles */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Core Ethical Principles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ethicalPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <div key={principle.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{principle.title}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{principle.chinese}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{principle.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Key Aspects</h4>
                  <ul className="mt-2 space-y-1">
                    {principle.aspects.map((aspect, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Applications */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Practical Applications</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {practicalApplications.map((area, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-semibold">{area.title}</h3>
              <ul className="mt-4 space-y-2">
                {area.examples.map((example, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Questions for Reflection</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <ul className="space-y-4">
            {reflectionPrompts.map((prompt, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Pages Navigation */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Explore More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/culture/concepts">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Core Concepts</h3>
              <p className="mt-2 text-sm text-muted-foreground">Understand the foundations of Taoist thought</p>
            </div>
          </Link>
          <Link href="/culture/schools">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Major Schools</h3>
              <p className="mt-2 text-sm text-muted-foreground">Learn about different Taoist traditions</p>
            </div>
          </Link>
          <Link href="/culture/influence">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Cultural Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">Discover Taoism's influence on society</p>
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