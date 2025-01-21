import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "星座起名 - Astrological Naming | Traditional Chinese Baby Name Selection",
  description: "探索中国传统星座起名的智慧，为您的宝宝选择一个吉祥而富有意义的名字。我们提供专业的命理起名咨询服务。",
  keywords: "星座起名,传统起名,宝宝起名,Chinese baby naming,astrological naming,name selection,命理起名",
}

const namingPrinciples = [
  {
    title: "Ba Zi Analysis",
    chinese: "生辰八字",
    description: "The Four Pillars of Destiny chart provides insights for name selection",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    title: "Constellations",
    chinese: "星宿",
    description: "Specific constellations influence name choices and potential",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    title: "Five Elements",
    chinese: "五行",
    description: "Balance of wood, fire, earth, metal, and water elements",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
  {
    title: "Numerology",
    chinese: "数理",
    description: "Character strokes and their numerical significance",
    icon: "/images/icons/bagua_symbol_2.jpg",
  },
  {
    title: "Character Meaning",
    chinese: "字义",
    description: "Careful selection of characters with positive meanings",
    icon: "/images/icons/taoism_symbol_1.jpg",
  },
  {
    title: "Yin and Yang",
    chinese: "阴阳",
    description: "Balance of energies in the name composition",
    icon: "/images/icons/taoism_symbol_2.jpg",
  },
]

const namingSteps = [
  {
    step: 1,
    title: "Share Birth Information",
    description: "Provide your child's birth date and time for chart creation",
    icon: "/images/icons/chinese_calligraphy_1.jpg",
  },
  {
    step: 2,
    title: "Expert Analysis",
    description: "Professional analysis of birth chart and element selection",
    icon: "/images/icons/chinese_calligraphy_2.jpg",
  },
  {
    step: 3,
    title: "Name Selection",
    description: "Choose from carefully selected name options with guidance",
    icon: "/images/icons/bagua_symbol_1.jpg",
  },
]

export default function NamingPage() {
  return (
    <div className="container relative pb-10">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-4 overflow-hidden rounded-xl py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arts/chinese_astrology_1.jpg"
            alt="传统宝宝起名"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Craft a Meaningful Future<br className="hidden sm:inline" />
            Through Traditional Name Selection
          </h1>
          <p className="mt-4 max-w-[750px] text-center text-lg sm:text-xl">
            Discover the ancient art of choosing names that resonate with positive energy and support your child's unique potential
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Book Consultation
            </Link>
            <Link
              href="#introduction"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-6 text-center text-3xl font-bold">Why Choose Astrological Naming for Your Baby?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          In Chinese culture, choosing a name for a new baby is a significant and deeply personal process. It is understood that a name can influence a child's personality, their potential, and their overall life path. Astrological naming takes this further by incorporating traditional Chinese astrological practices to select a name that aligns with your child's unique birth energy and supports a life filled with joy and prosperity.
        </p>
        <div className="relative mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl">
          <Image
            src="/images/arts/chinese_astrology_2.jpg"
            alt="宝宝起名的文化意义"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">The Power of Names in Chinese Culture</h2>
        <div className="space-y-6 rounded-lg border p-6">
          <p className="text-lg text-muted-foreground">
            Names in China are deeply significant and represent the hopes, dreams, and expectations of an entire family for their child. They are carefully chosen to:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            <li>Reflect the family's aspirations for the child's future</li>
            <li>Represent the child's unique destiny and life path</li>
            <li>Bring harmony with the natural world</li>
            <li>Support the flow of positive Qi (energy)</li>
            <li>Connect with cultural heritage and tradition</li>
          </ul>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Core Principles of Astrological Naming</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {namingPrinciples.map((principle) => (
            <div key={principle.title} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={principle.icon}
                  alt={principle.chinese}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                {principle.title} ({principle.chinese})
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-[1200px] py-12 lg:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Name Selection Process</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {namingSteps.map((step) => (
            <div key={step.step} className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={step.icon}
                  alt={`Step ${step.step}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                Step {step.step}: {step.title}
              </h3>
              <p className="text-center text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Astrological Naming</h2>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Choosing a name through astrological guidance offers your child:
          </p>
          <ul className="list-inside list-disc space-y-4 text-muted-foreground">
            <li>A strong foundation for their unique identity and potential</li>
            <li>Support in achieving their dreams through positive energy</li>
            <li>An auspicious start with balanced and harmonious energy</li>
            <li>Connection to cultural heritage and tradition</li>
            <li>Protection and guidance through life's journey</li>
          </ul>
        </div>
      </section>

      {/* Professional Guidance Section */}
      <section className="mx-auto max-w-[800px] py-12 lg:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Expert Support for Your Baby's Name</h2>
        <div className="rounded-lg border p-6">
          <p className="mb-6 text-lg text-muted-foreground">
            Choosing the perfect name for your baby is one of the most important decisions you'll make. Our professional consultants combine traditional wisdom with modern understanding to help you select a name that will bless your child with:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">Our Expertise:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Traditional astrological analysis</li>
                <li>Character meaning and harmony</li>
                <li>Modern name considerations</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">What You Receive:</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Personalized name selections</li>
                <li>Detailed explanations</li>
                <li>Ongoing support and guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-[1200px] text-center">
        <div className="relative overflow-hidden rounded-lg p-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/arts/chinese_astrology_3.jpg"
              alt="宝宝起名咨询"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to Choose the Perfect Name?</h2>
            <p className="mb-6">
              Take the first step in blessing your child with an auspicious name
            </p>
            <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 