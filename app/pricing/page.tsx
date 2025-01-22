import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing Plans | Choose Your Path",
  description: "Explore our comprehensive learning paths and find the perfect plan for your spiritual journey in Taoist wisdom and practices.",
}

const tiers = [
  {
    name: "Beginner Path",
    id: "starter",
    href: "#",
    price: { monthly: "$29" },
    description: "Perfect for those beginning their journey into Taoist wisdom",
    features: [
      "Basic Feng Shui principles",
      "Introduction to I-Ching",
      "Fundamental Taoist concepts",
      "Weekly group meditation sessions",
      "Access to beginner courses",
      "Community forum access",
    ],
    image: "/images/pricing/starter.jpg",
    featured: false,
  },
  {
    name: "Cultivation Path",
    id: "professional",
    href: "#",
    price: { monthly: "$59" },
    description: "For dedicated practitioners seeking deeper understanding",
    features: [
      "Advanced Feng Shui consultations",
      "Personal I-Ching readings",
      "Tai Chi & Qigong classes",
      "1-on-1 monthly guidance",
      "All beginner features",
      "Priority support",
      "Exclusive workshops",
      "Personal practice tracking",
    ],
    image: "/images/pricing/professional.jpg",
    featured: true,
  },
  {
    name: "Master Path",
    id: "master",
    href: "#",
    price: { monthly: "$99" },
    description: "For those pursuing mastery of Taoist practices",
    features: [
      "Master-level teachings",
      "Personal mentorship program",
      "Advanced energy work",
      "Custom spiritual guidance",
      "All cultivation features",
      "Private consultation calls",
      "Certification program",
      "Teaching opportunities",
    ],
    image: "/images/pricing/master.jpg",
    featured: false,
  },
]

const faqs = [
  {
    question: "How do I choose the right plan?",
    answer: "We recommend starting with the Beginner Path if you're new to Taoist practices. You can upgrade anytime as you progress in your journey. For experienced practitioners, the Cultivation or Master Path might be more suitable.",
  },
  {
    question: "What's included in the course materials?",
    answer: "Each plan includes comprehensive learning materials, video lessons, practice guides, and access to our community. Higher tiers offer additional personalized guidance and advanced content.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Your benefits will be adjusted accordingly at the start of your next billing cycle.",
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not satisfied with your experience, contact us for a full refund of your first month's subscription.",
  },
]

export default function PricingPage() {
  return (
    <div className="container pb-8 pt-6 md:pb-12 md:pt-8 lg:pb-16 lg:pt-10">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Choose Your Path of Growth
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Select the journey that resonates with your spiritual goals. Each path offers unique opportunities for learning and growth in Taoist wisdom.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-background p-6 shadow-lg",
              tier.featured && "border-primary shadow-primary/10"
            )}
          >
            {tier.featured && (
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                Most Popular
              </div>
            )}

            {/* Tier Image */}
            <div className="relative mb-6 h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={tier.image}
                alt={tier.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>

            {/* Tier Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-muted-foreground">{tier.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">{tier.price.monthly}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-4 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href={tier.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                tier.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                "w-full"
              )}
            >
              Begin Your Journey
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mx-auto mt-24 max-w-3xl">
        <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-bold">Ready to Start Your Journey?</h2>
        <p className="mt-4 text-muted-foreground">
          Join our community of practitioners and begin your path to spiritual growth today.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Contact Us
          </Link>
          <Link href="#" className={buttonVariants()}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
} 