import { Button } from "@/components/ui/button";
import {
  BeakerIcon,
  FireIcon,
  HomeIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Major Schools | Exploring the Branches of Taoism",
  description: "Discover the diverse schools of Taoist thought, their unique practices, and historical development. Learn about the Celestial Masters, Quanzhen School, and other major traditions.",
  keywords: "Taoist schools, Celestial Masters, Quanzhen School, Taoist traditions, Chinese religion, Taoist practices",
};

const schools = [
  {
    id: "celestial-masters",
    name: "Celestial Masters (正一道)",
    chinese: "正一道",
    founder: "Zhang Daoling",
    period: "142 CE",
    description: "The first organized school of Taoism, emphasizing communal practices, ritual, and moral conduct. Known for their healing practices and talismanic writing.",
    icon: HomeIcon,
    practices: [
      "Communal ceremonies",
      "Healing rituals",
      "Talismanic writing",
      "Ethical cultivation"
    ],
    keyTexts: [
      "Xiang'er Commentary",
      "Commands and Precepts for Families"
    ]
  },
  {
    id: "quanzhen",
    name: "Complete Perfection School (全真道)",
    chinese: "全真道",
    founder: "Wang Chongyang",
    period: "12th century CE",
    description: "Emphasizes internal alchemy, meditation, and monastic discipline. Integrates elements of Buddhism and Confucianism with Taoist practice.",
    icon: SparklesIcon,
    practices: [
      "Internal alchemy",
      "Seated meditation",
      "Breath cultivation",
      "Monastic discipline"
    ],
    keyTexts: [
      "Secret of the Golden Flower",
      "Collections of Wang Chongyang"
    ]
  },
  {
    id: "shangqing",
    name: "Highest Clarity School (上清派)",
    chinese: "上清派",
    founder: "Wei Huacun",
    period: "4th century CE",
    description: "Known for its visionary practices, meditation techniques, and emphasis on individual spiritual cultivation through visualization and communion with celestial beings.",
    icon: FireIcon,
    practices: [
      "Visualization practices",
      "Celestial journeys",
      "Scriptural study",
      "Meditation techniques"
    ],
    keyTexts: [
      "Perfect Scripture of Great Grotto",
      "Declarations of the Perfected"
    ]
  },
  {
    id: "lingbao",
    name: "Numinous Treasure School (灵宝派)",
    chinese: "灵宝派",
    founder: "Ge Chaofu",
    period: "4th-5th century CE",
    description: "Combines elements of Buddhism with Taoist practice, emphasizing ritual, scripture, and universal salvation. Known for its comprehensive liturgical tradition.",
    icon: BeakerIcon,
    practices: [
      "Liturgical ceremonies",
      "Scripture recitation",
      "Talismanic practices",
      "Merit cultivation"
    ],
    keyTexts: [
      "Lingbao Scriptures",
      "Five Talismans"
    ]
  }
];

const comparisonPoints = [
  {
    aspect: "Focus",
    description: "Each school emphasizes different aspects of Taoist practice, from communal rituals to individual cultivation."
  },
  {
    aspect: "Methods",
    description: "Practices range from external ceremonies to internal meditation and alchemy."
  },
  {
    aspect: "Organization",
    description: "Some schools maintain strict monastic traditions while others focus on lay practice."
  },
  {
    aspect: "Influence",
    description: "Different schools have varying degrees of influence on Chinese culture and society."
  }
];

export default function SchoolsPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Exploring the Diverse Schools of Taoism
        </h1>
        <p className="max-w-[900px] text-muted-foreground">
          Discover the rich tapestry of Taoist traditions and their unique approaches to spiritual cultivation
        </p>
      </div>

      {/* Introduction */}
      <section className="mt-16 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-2xl font-bold">The Branches of Taoist Tradition</h2>
        <p className="mt-4 text-muted-foreground">
          Taoism has evolved into various schools over its long history, each offering distinct interpretations and practices while maintaining core principles. These schools represent different paths to understanding and embodying the Dao.
        </p>
      </section>

      {/* Major Schools */}
      <section className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Major Schools</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {schools.map((school) => {
            const Icon = school.icon;
            return (
              <div key={school.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{school.name}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{school.chinese}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Founder:</span> {school.founder}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Established:</span> {school.period}
                  </p>
                </div>
                <p className="mt-4 text-muted-foreground">{school.description}</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold">Key Practices</h4>
                    <ul className="mt-2 space-y-1">
                      {school.practices.map((practice, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Important Texts</h4>
                    <ul className="mt-2 space-y-1">
                      {school.keyTexts.map((text, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{text}</span>
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

      {/* Comparison */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Key Differences</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {comparisonPoints.map((point, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="font-semibold">{point.aspect}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Practice */}
      <section className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold">Modern Practice</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            Today, these schools continue to evolve while maintaining their distinct traditions. Many practitioners combine elements from different schools, creating a rich and dynamic approach to Taoist practice in the modern world.
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
              <p className="mt-2 text-sm text-muted-foreground">Trace the origins and development of Taoism</p>
            </div>
          </Link>
          <Link href="/culture/influence">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Cultural Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">Discover how Taoism shaped Chinese culture</p>
            </div>
          </Link>
          <Link href="/culture/ethics">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:bg-accent">
              <h3 className="font-semibold">Ethics</h3>
              <p className="mt-2 text-sm text-muted-foreground">Learn about Taoist moral principles</p>
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