import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "修行计划 | 选择您的成长之路",
  description: "探索我们的修行计划，从入门到精通，为您提供全面的道家文化学习和个人成长指导。",
}

const tiers = [
  {
    name: "修行入门",
    nameEn: "Beginner Path",
    price: "¥299",
    description: "适合初次接触道家文化的朋友",
    features: [
      "基础道家理论课程",
      "每月1次在线指导",
      "基础打坐冥想教学",
      "入门风水知识",
      "社区讨论组访问权限",
    ],
    image: "/images/pricing/starter.jpg",
    href: "/checkout?tier=starter",
  },
  {
    name: "修真进阶",
    nameEn: "Cultivation Path",
    price: "¥599",
    description: "适合想深入学习的修行者",
    features: [
      "进阶道家理论课程",
      "每月2次一对一指导",
      "高级打坐冥想教学",
      "风水布局指导",
      "八字基础分析",
      "专属修行社群",
      "线上工作坊参与",
    ],
    image: "/images/pricing/professional.jpg",
    href: "/checkout?tier=professional",
    popular: true,
  },
  {
    name: "道家宗师",
    nameEn: "Master Path",
    price: "¥999",
    description: "为追求更高境界的修行者准备",
    features: [
      "完整道家理论体系",
      "无限次一对一指导",
      "宗师级冥想教学",
      "风水高级布局",
      "八字精进解读",
      "紫微斗数基础",
      "专属修行社群",
      "线下工作坊优先",
      "道家经典深度解读",
    ],
    image: "/images/pricing/master.jpg",
    href: "/checkout?tier=master",
  },
]

const faqs = [
  {
    question: "如何选择适合我的计划？",
    answer: "我们建议从您当前的修行水平和需求出发。入门计划适合初学者，进阶计划适合有一定基础的修行者，宗师计划则为深度学习者准备。",
  },
  {
    question: "课程内容包括哪些？",
    answer: "课程涵盖道家理论、打坐冥想、风水布局、八字分析等多个方面，每个级别都有相应深度的内容。",
  },
  {
    question: "可以更换或升级计划吗？",
    answer: "是的，您可以随时升级到更高级别的计划。如需更改，请联系我们的客服团队。",
  },
  {
    question: "有退款政策吗？",
    answer: "我们提供7天内无条件退款保证，让您可以安心体验我们的服务。",
  },
]

export default function PricingPage() {
  return (
    <div className="container py-8 sm:py-12 animate-in">
      {/* Hero Section */}
      <section className="relative mb-12 sm:mb-16 overflow-hidden rounded-3xl">
        <div className="relative h-[300px] sm:h-[400px]">
          <Image
            src="/images/pricing/hero.jpg"
            alt="选择您的修行之路"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 sm:px-6">
              <div className="max-w-[600px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  选择您的修行之路
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  为每个阶段的修行者提供合适的成长计划
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative overflow-hidden rounded-3xl border bg-background p-8",
                tier.popular && "border-primary shadow-lg"
              )}
            >
              {tier.popular && (
                <div className="absolute -right-20 top-8 rotate-45 bg-primary px-24 py-1 text-center text-sm text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="relative h-[200px] -mx-8 -mt-8 mb-8 overflow-hidden">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.nameEn}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <ul className="space-y-2 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={cn(
                    buttonVariants(),
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  开启修行之旅
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">常见问题</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Need Help Section */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">需要帮助？</h2>
        <p className="text-muted-foreground mb-8">
          我们的客服团队随时为您解答疑问，帮助您选择最适合的修行计划。
        </p>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          联系我们
        </Link>
      </section>
    </div>
  )
} 