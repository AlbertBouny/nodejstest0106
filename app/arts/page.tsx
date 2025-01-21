import { Calendar, Compass, Heart, Home, Moon, Star, User } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "玄学应用 | 传统玄学的现代运用",
  description: "探索东方玄学的实践应用，包括紫微斗数、八字、风水、姻缘等专业分析服务。",
}

const arts = [
  {
    title: "紫微斗数",
    description: "通过星盘解读人生命运走向",
    href: "/arts/ziwei",
    icon: Star,
    image: "/images/arts/ziwei.jpg",
    features: ["性格分析", "事业发展", "财运预测"],
  },
  {
    title: "八字命理",
    description: "解析先天命盘与人生规律",
    href: "/arts/bazi",
    icon: Calendar,
    image: "/images/arts/bazi.jpg",
    features: ["命格分析", "流年运势", "吉凶预测"],
  },
  {
    title: "姻缘分析",
    description: "探索感情与婚姻的玄学智慧",
    href: "/arts/relationship",
    icon: Heart,
    image: "/images/arts/relationship.jpg",
    features: ["桃花运势", "配对分析", "感情指导"],
  },
  {
    title: "风水布局",
    description: "调和居住环境的能量场",
    href: "/arts/fengshui",
    icon: Home,
    image: "/images/arts/fengshui.jpg",
    features: ["空间布局", "方位吉凶", "能量调和"],
  },
  {
    title: "命理起名",
    description: "依据八字五行为您命名",
    href: "/arts/naming",
    icon: User,
    image: "/images/arts/naming.jpg",
    features: ["五行分析", "字义考究", "音律和谐"],
  },
  {
    title: "梦境解析",
    description: "揭示梦境中的玄机与启示",
    href: "/arts/dream",
    icon: Moon,
    image: "/images/arts/dream.jpg",
    features: ["象征意义", "心理分析", "预兆解读"],
  },
]

export default function ArtsPage() {
  return (
    <div className="container py-8 sm:py-12 animate-in">
      {/* Hero Section */}
      <section className="relative mb-12 sm:mb-16 overflow-hidden rounded-3xl">
        <div className="relative h-[300px] sm:h-[400px]">
          <Image
            src="/images/arts/hero.jpg"
            alt="玄学应用背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 sm:px-6">
              <div className="max-w-[600px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  东方玄学的智慧
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  运用传统智慧，指引现代生活
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arts Grid */}
      <section className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arts.map((art) => {
            const Icon = art.icon
            return (
              <Link
                key={art.href}
                href={art.href}
                className="group relative rounded-xl overflow-hidden border bg-card card-hover gradient-border"
              >
                <div className="relative h-48">
                  <Image
                    src={art.image}
                    alt={art.title}
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
                    <h3 className="text-xl font-bold">{art.title}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    {art.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {art.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Compass className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              "天人合一，万物相通。玄学之道，即是探索天地与人生的奥秘。"
            </p>
          </blockquote>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="mt-16 sm:mt-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              专业玄学咨询服务
            </h2>
            <p className="text-lg text-muted-foreground">
              我们的专业团队提供个性化的玄学咨询服务，帮助您更好地了解自己，规划人生。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <span>一对一专业解读</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>定期运势分析</span>
              </li>
              <li className="flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                <span>风水环境优化</span>
              </li>
            </ul>
            <Link
              href="/services/consultation"
              className="inline-flex items-center mt-4 text-primary hover:underline"
            >
              了解更多服务
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/arts/consultation.jpg"
              alt="专业咨询服务"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
} 