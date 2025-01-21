import { BookOpen, Globe, Heart, History, Lightbulb, Users } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "道家文化 | 探索道家智慧与传统",
  description: "深入了解道家文化的精髓，包括历史、核心概念、流派、神仙体系等内容。",
}

const topics = [
  {
    title: "历史起源",
    description: "探索道家思想的历史渊源与发展历程",
    href: "/culture/history",
    icon: History,
    image: "/images/culture/history.jpg",
  },
  {
    title: "核心概念",
    description: "理解道、阴阳、无为等道家核心思想",
    href: "/culture/concepts",
    icon: Lightbulb,
    image: "/images/culture/concepts.jpg",
  },
  {
    title: "主要流派",
    description: "了解道家各大流派的特色与传承",
    href: "/culture/schools",
    icon: Users,
    image: "/images/culture/schools.jpg",
  },
  {
    title: "神仙体系",
    description: "探索道教神仙体系与修炼文化",
    href: "/culture/deities",
    icon: Heart,
    image: "/images/culture/deities.jpg",
  },
  {
    title: "文化影响",
    description: "道家思想对中国文化的深远影响",
    href: "/culture/influence",
    icon: Globe,
    image: "/images/culture/influence.jpg",
  },
  {
    title: "经典著作",
    description: "道家重要典籍与经文解读",
    href: "/culture/classics",
    icon: BookOpen,
    image: "/images/culture/classics.jpg",
  },
]

export default function CulturePage() {
  return (
    <div className="container py-8 sm:py-12 animate-in">
      {/* Hero Section */}
      <section className="relative mb-12 sm:mb-16 overflow-hidden rounded-3xl">
        <div className="relative h-[300px] sm:h-[400px]">
          <Image
            src="/images/culture/hero.jpg"
            alt="道家文化背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 sm:px-6">
              <div className="max-w-[600px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  探索道家文化
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  传承千年智慧，感悟生命真谛
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative rounded-xl overflow-hidden border bg-card card-hover gradient-border"
              >
                <div className="relative h-48">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{topic.title}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section className="mt-16 sm:mt-24">
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 sm:p-12 text-center">
          <blockquote className="max-w-[800px] mx-auto">
            <p className="text-xl sm:text-2xl font-medium italic text-muted-foreground">
              "道法自然，天人合一。修道即修心，明理方能明己。"
            </p>
          </blockquote>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mt-16 sm:mt-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              开启您的修道之旅
            </h2>
            <p className="text-lg text-muted-foreground">
              我们提供丰富的学习资源和指导，帮助您更好地理解和实践道家文化。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>在线课程与讲座</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>修行社群交流</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>一对一指导服务</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/culture/learning.jpg"
              alt="学习资源"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
} 