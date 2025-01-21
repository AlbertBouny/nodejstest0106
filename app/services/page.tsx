import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar, Heart, Home, Sparkles, Star, User } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "服务案例 | 专业玄学服务与实践",
  description: "提供专业的玄学咨询服务，包括八字分析、风水布局、姻缘配对等个性化解决方案。",
}

const services = [
  {
    title: "个人命理分析",
    description: "通过八字与紫微斗数，深入解读您的人生轨迹",
    icon: Star,
    image: "/images/services/destiny.jpg",
    features: [
      "性格特质分析",
      "事业发展方向",
      "财运趋势预测",
      "健康建议指导",
    ],
    price: "¥888",
    href: "/services/destiny",
  },
  {
    title: "风水环境优化",
    description: "专业风水师实地考察，提供整体布局方案",
    icon: Home,
    image: "/images/services/fengshui.jpg",
    features: [
      "场地能量测算",
      "空间布局规划",
      "物品摆放建议",
      "改运方案制定",
    ],
    price: "¥1688",
    href: "/services/fengshui",
  },
  {
    title: "姻缘情感咨询",
    description: "结合命理与玄学，为您的感情生活提供指导",
    icon: Heart,
    image: "/images/services/relationship.jpg",
    features: [
      "桃花运势分析",
      "配对合婚测算",
      "感情障碍化解",
      "良缘时机把握",
    ],
    price: "¥688",
    href: "/services/relationship",
  },
]

const tools = [
  {
    title: "八字排盘",
    description: "在线生成您的八字命盘",
    icon: Calendar,
    href: "/tools/bazi",
  },
  {
    title: "姓名测算",
    description: "分析姓名的五行属性",
    icon: User,
    href: "/tools/name",
  },
  {
    title: "每日运势",
    description: "查看今日吉凶指引",
    icon: Sparkles,
    href: "/tools/daily",
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-8 sm:py-12 animate-in">
      {/* Hero Section */}
      <section className="relative mb-12 sm:mb-16 overflow-hidden rounded-3xl">
        <div className="relative h-[300px] sm:h-[400px]">
          <Image
            src="/images/services/hero.jpg"
            alt="专业服务背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 sm:px-6">
              <div className="max-w-[600px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  专业玄学服务
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  结合传统智慧，解决现代难题
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          特色服务
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.href}
                className="group relative rounded-xl overflow-hidden border bg-card card-hover gradient-border"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
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
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Link
                      href={service.href}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      了解详情
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Online Tools Section */}
      <section className="mt-16 sm:mt-24">
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              在线工具
            </h2>
            <p className="text-lg text-muted-foreground">
              便捷的自助工具，让您随时获取基础分析
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex items-center gap-4 rounded-lg border bg-background p-4 transition-colors hover:border-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="mt-16 sm:mt-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          预约专业咨询
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
          我们的专业团队随时准备为您提供一对一的咨询服务，解答您的疑惑。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "px-8")}
          >
            立即预约
          </Link>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-8"
            )}
          >
            了解更多
          </Link>
        </div>
      </section>
    </div>
  )
} 