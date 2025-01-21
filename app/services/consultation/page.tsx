import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "专家咨询 - Expert Consultation | Personalized Taoist Guidance",
  description: "获得专业的八字和紫微斗数分析指导。我们的专家团队提供个性化的咨询服务，帮助您探索人生道路。",
  keywords: "专家咨询,八字分析,紫微斗数,expert consultation,Ba Zi analysis,Zi Wei Dou Shu,personalized guidance",
}

const practitioners = [
  {
    name: "Master Zhang Wei",
    chinese: "张伟",
    title: "Senior Ba Zi & Zi Wei Dou Shu Practitioner",
    expertise: "Life Path Analysis, Career Guidance",
    approach: "Combines traditional wisdom with modern life applications",
    experience: "15+ years of experience working with international clients",
    image: "/images/team/practitioner_1.jpg",
  },
  {
    name: "Dr. Li Ming",
    chinese: "李明",
    title: "Relationship Analysis Specialist",
    expertise: "Relationship Dynamics, Marriage Compatibility",
    approach: "Focuses on practical relationship insights and harmony",
    experience: "Expert in cross-cultural relationship analysis",
    image: "/images/team/practitioner_2.jpg",
  },
  {
    name: "Master Chen Yu",
    chinese: "陈宇",
    title: "Destiny Analysis Expert",
    expertise: "Personal Development, Life Transitions",
    approach: "Specializes in guiding through major life changes",
    experience: "Trained in both Eastern and Western methodologies",
    image: "/images/team/practitioner_3.jpg",
  },
]

const consultationTypes = [
  {
    title: "Comprehensive Ba Zi Analysis",
    chinese: "八字全面分析",
    description: "In-depth analysis of your Four Pillars chart for personal and professional insights",
    duration: "90 minutes",
    price: "$188",
    includes: [
      "Detailed personality analysis",
      "Career and life path guidance",
      "Timing of opportunities",
      "Written summary report"
    ],
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Zi Wei Dou Shu Reading",
    chinese: "紫微斗数解读",
    description: "Detailed exploration of your life chart using Purple Star Astrology",
    duration: "90 minutes",
    price: "$188",
    includes: [
      "12 palace analysis",
      "Key life area insights",
      "Timing predictions",
      "Written summary report"
    ],
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Relationship Compatibility",
    chinese: "关系合婚分析",
    description: "Comprehensive analysis of relationship dynamics and potential",
    duration: "120 minutes",
    price: "$288",
    includes: [
      "Combined chart analysis",
      "Relationship dynamics",
      "Growth opportunities",
      "Harmony strategies"
    ],
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
]

const processSteps = [
  {
    title: "Choose Your Expert",
    description: "Select the practitioner whose expertise best matches your needs",
  },
  {
    title: "Select Consultation Type",
    description: "Choose from our range of specialized consultation services",
  },
  {
    title: "Schedule Your Session",
    description: "Pick a convenient date and time for your consultation",
  },
  {
    title: "Provide Information",
    description: "Share your birth details for chart preparation",
  },
  {
    title: "Consultation Session",
    description: "Receive personalized insights and practical guidance",
  },
]

const benefits = [
  {
    title: "Personalized Guidance",
    description: "Receive insights tailored to your unique situation",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Expert Analysis",
    description: "Benefit from years of professional experience",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Practical Advice",
    description: "Get actionable steps for positive change",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "Ongoing Support",
    description: "Access follow-up guidance when needed",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
]

export default function ConsultationPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_2.jpg"
            alt="专家咨询"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Receive Personalized Guidance<br className="hidden sm:inline" />
            from Our Expert Practitioners
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Connect with experienced practitioners for in-depth analysis and actionable advice
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#consultations" className={cn(buttonVariants({ size: "lg" }))}>
              Schedule Consultation
            </Link>
            <Link
              href="#practitioners"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Meet Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-6 text-center text-3xl font-bold">Why Choose an Expert Consultation?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Our expert consultation services offer you a powerful opportunity to gain in-depth guidance from practitioners with years of experience in both Ba Zi and Zi Wei Dou Shu analysis. These consultations go beyond basic insights to provide personalized advice and detailed exploration of your specific situation.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {benefit.title}
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Practitioners Section */}
      <section id="practitioners" className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Expert Practitioners</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practitioners.map((practitioner) => (
            <div key={practitioner.name} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={practitioner.image}
                  alt={practitioner.chinese}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">
                  {practitioner.name} ({practitioner.chinese})
                </h3>
                <p className="text-primary">{practitioner.title}</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Expertise:</strong> {practitioner.expertise}</p>
                <p><strong>Approach:</strong> {practitioner.approach}</p>
                <p><strong>Experience:</strong> {practitioner.experience}</p>
              </div>
              <Link
                href="#consultations"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Book with {practitioner.name.split(" ")[0]}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Types Section */}
      <section id="consultations" className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Explore Our Consultation Options</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {consultationTypes.map((consultation) => (
            <div key={consultation.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={consultation.icon}
                  alt={consultation.chinese}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">
                  {consultation.title}
                </h3>
                <p className="text-primary">({consultation.chinese})</p>
              </div>
              <p className="text-center text-muted-foreground">
                {consultation.description}
              </p>
              <div className="rounded-lg bg-muted p-4">
                <p className="mb-2 text-center font-semibold">Includes:</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {consultation.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto space-y-2 text-center">
                <p className="text-lg font-semibold">{consultation.price}</p>
                <p className="text-sm text-muted-foreground">{consultation.duration}</p>
              </div>
              <Link
                href="#booking"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Process Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">The Consultation Process</h2>
        <div className="rounded-lg border p-6">
          <ol className="space-y-6">
            {processSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Call to Action */}
      <section id="booking" className="mx-auto max-w-[1200px] text-center">
        <div className="relative overflow-hidden rounded-lg p-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arts/chinese_astrology_3.jpg"
              alt="预约咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Begin Your Journey?</h2>
            <p className="mb-6">
              Take the first step towards deeper understanding and personal growth
            </p>
            <Link href="#booking-form" className={cn(buttonVariants({ size: "lg" }))}>
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 