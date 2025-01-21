import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Heart, Sparkles, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "道家智慧 - 探索东方玄学的奥秘",
  description: "探索道家文化与东方玄学的精髓，获取专业的风水、八字、紫微斗数分析服务。",
};

const features = [
  {
    title: "传统智慧",
    description: "探索数千年的道家文化精髓，获取生活的平衡与智慧",
    icon: BookOpen,
    href: "/culture",
  },
  {
    title: "现代应用",
    description: "将古老智慧运用于现代生活，解决实际问题",
    icon: Sparkles,
    href: "/arts",
  },
  {
    title: "专业指导",
    description: "资深玄学大师提供个性化咨询与解答服务",
    icon: Heart,
    href: "/services",
  },
  {
    title: "共同成长",
    description: "加入修行社群，与志同道合者一起探索成长",
    icon: Users,
    href: "/community",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 -z-10" />
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] opacity-30 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="animate-fade-in space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                探索东方玄学的奥秘
              </h1>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl text-muted-foreground">
                传承千年智慧，指引现代生活
              </p>
            </div>
            <div className="animate-slide-up space-x-4">
              <Link
                href="/services"
                className={cn(buttonVariants({ size: "lg" }), "px-8")}
              >
                开启修行之旅
                <ArrowRight className="ml-2 h-4 w-4" />
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group relative rounded-2xl border bg-card p-6 card-hover gradient-border"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                专业的玄学服务
              </h2>
              <p className="text-lg text-muted-foreground">
                我们提供全面的东方玄学服务，包括风水布局、八字分析、紫微斗数、姻缘配对等，帮助您在现代生活中获得指引与平衡。
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  <span>个性化八字分析</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  <span>专业风水布局</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  <span>姻缘合婚指导</span>
                </div>
              </div>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-4 w-fit"
                )}
              >
                查看全部服务
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/services-preview.jpg"
                alt="Services Preview"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              开启您的修行之旅
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8">
              无论您是初学者还是进阶修行者，我们都能为您提供合适的指导和服务。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/pricing"
                className={cn(buttonVariants({ size: "lg" }), "px-8")}
              >
                查看修行计划
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-8"
                )}
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 