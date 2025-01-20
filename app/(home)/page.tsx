import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "道教文化与玄学艺术 - 探索东方智慧的殿堂",
  description: "探索道教文化的精髓，了解玄学艺术的奥秘。我们提供专业的风水咨询、命理分析等服务，帮助您寻找人生的平衡与和谐。",
  keywords: "道教文化,玄学艺术,风水,命理,八字,紫微斗数,东方智慧",
}

export default function HomePage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          探索道教文化<br className="hidden sm:inline" />
          体验东方智慧
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          在这里，您将发现道教文化的精髓，探索玄学艺术的奥秘，获得专业的指导与启发。
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/culture" className={cn(buttonVariants({ size: "lg" }))}>
            开始探索
          </Link>
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            预约咨询
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="mx-auto grid max-w-[980px] gap-6 py-8 md:grid-cols-2 md:py-12 lg:py-24">
        {/* Cultural Insights */}
        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <h2 className="text-2xl font-bold">文化洞察</h2>
          <p className="text-muted-foreground">
            深入了解道教的历史渊源、核心理念、重要人物和文化影响，感受东方智慧的深邃。
          </p>
          <Link
            href="/culture"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            了解更多
          </Link>
        </div>

        {/* Metaphysical Arts */}
        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <h2 className="text-2xl font-bold">玄学艺术</h2>
          <p className="text-muted-foreground">
            探索风水、八字、紫微斗数等玄学艺术，寻找生活中的平衡与和谐。
          </p>
          <Link
            href="/arts"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            了解更多
          </Link>
        </div>
      </section>

      {/* Professional Services */}
      <section className="mx-auto max-w-[980px] py-8 md:py-12 lg:py-24">
        <h2 className="mb-6 text-center text-3xl font-bold">专业服务</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-lg border p-4">
            <h3 className="text-xl font-semibold">个人命理分析</h3>
            <p className="text-sm text-muted-foreground">
              通过八字分析，了解个人命理特点，把握人生方向。
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-4">
            <h3 className="text-xl font-semibold">风水咨询</h3>
            <p className="text-sm text-muted-foreground">
              专业风水布局建议，优化居住和工作环境。
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-4">
            <h3 className="text-xl font-semibold">关系和谐</h3>
            <p className="text-sm text-muted-foreground">
              分析人际关系，促进家庭和谐，改善人际互动。
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-[980px] text-center">
        <div className="rounded-lg bg-muted p-8">
          <h2 className="mb-4 text-2xl font-bold">开启您的东方智慧之旅</h2>
          <p className="mb-6 text-muted-foreground">
            让我们一起探索道教文化的奥秘，寻找生活的平衡与智慧
          </p>
          <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
            立即预约
          </Link>
        </div>
      </section>
    </div>
  )
}
