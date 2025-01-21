import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Beginner Path",
    id: "starter",
    href: "/signup",
    price: { monthly: "$99" },
    description: "Start your journey into Taoist wisdom",
    features: [
      "Basic Taoist Theory Learning",
      "Weekly Online Guidance",
      "Basic Meditation Course",
      "Taoist Classics Introduction",
      "Community Forum Access",
    ],
  },
  {
    name: "Cultivation Path",
    id: "professional",
    href: "/signup",
    price: { monthly: "$299" },
    description: "Deepen your Taoist practice and understanding",
    features: [
      "All Beginner Features",
      "3x Weekly One-on-One Guidance",
      "Advanced Meditation Course",
      "In-depth Taoist Classics Study",
      "Feng Shui & I-Ching Guidance",
      "Tai Chi Wellness Course",
      "Private Cultivation Community",
    ],
  },
  {
    name: "Master Path",
    id: "enterprise",
    href: "/signup",
    price: { monthly: "$999" },
    description: "Become a Taoist wisdom inheritor",
    features: [
      "All Cultivation Features",
      "Unlimited One-on-One Guidance",
      "Master-Level Meditation",
      "Complete Taoist Scripture Study",
      "Advanced Feng Shui Consulting",
      "Private Tai Chi Instruction",
      "Taoist Retreat Access",
      "Annual Spiritual Journey",
      "Certified Teacher Qualification",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Choose Your Path of Cultivation
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            Follow the natural way, progress step by step. Choose the path that best suits your spiritual journey.
          </p>
        </div>
        <div className="isolate mx-auto mt-8 sm:mt-16 grid max-w-md grid-cols-1 gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="relative rounded-3xl p-6 sm:p-8 ring-1 ring-muted bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300"
            >
              {tier.id === "professional" && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h2
                id={tier.id}
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                {tier.name}
              </h2>
              <p className="mt-3 sm:mt-4 text-sm leading-6 text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-4 sm:mt-6 flex items-baseline gap-x-1">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {tier.price.monthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">
                  /month
                </span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-4 sm:mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.id === "professional"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary"
                  : "bg-primary/10 text-primary hover:bg-primary/20 focus-visible:outline-primary"
                  }`}
              >
                Begin Your Journey
              </Link>
              <ul
                role="list"
                className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-sm leading-6 text-muted-foreground"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-start">
                    <Check
                      className="h-5 w-5 flex-shrink-0 text-primary mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 sm:mt-16 max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-left">
            <div className="rounded-lg bg-card/50 p-4 sm:p-6">
              <h3 className="font-semibold text-foreground">
                How do I choose the right plan?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                We recommend starting with the Beginner Path to understand basic Taoist theory and practices. As your understanding deepens, you can gradually upgrade to more advanced plans.
              </p>
            </div>
            <div className="rounded-lg bg-card/50 p-4 sm:p-6">
              <h3 className="font-semibold text-foreground">
                How are the courses structured?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Each plan includes a systematic curriculum, progressing from theory to practical guidance. You can flexibly arrange your learning schedule according to your personal time.
              </p>
            </div>
            <div className="rounded-lg bg-card/50 p-4 sm:p-6">
              <h3 className="font-semibold text-foreground">
                Can I change or cancel my plan?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. For cancellations, please notify us 7 days in advance. Unused fees will be refunded proportionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 