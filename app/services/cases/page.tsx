import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ChartBarIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Taoist Consultation Success Stories",
  description: "Explore real-world examples of how Taoist wisdom and practices have helped individuals achieve harmony and success in their lives.",
  keywords: "Taoist case studies, Ba Zi success stories, Feng Shui transformations, life improvement testimonials, Taoist consultation results",
};

const caseStudies = [
  {
    id: 1,
    category: "Ba Zi Analysis",
    title: "Career Transition Success Through Ba Zi Guidance",
    description: "A client facing career uncertainty found clarity and direction through Ba Zi analysis, leading to a successful career change aligned with their natural talents.",
    results: [
      "Identified optimal career timing",
      "Discovered hidden strengths",
      "Successfully transitioned to a new role",
      "Improved work-life satisfaction"
    ],
    image: "/images/cases/career-success.jpg"
  },
  {
    id: 2,
    category: "Feng Shui Consultation",
    title: "Business Growth After Feng Shui Implementation",
    description: "A small business owner experienced significant growth after implementing targeted Feng Shui adjustments in their office space.",
    results: [
      "30% increase in customer flow",
      "Improved team dynamics",
      "Enhanced workplace atmosphere",
      "Sustained business growth"
    ],
    image: "/images/cases/business-growth.jpg"
  },
  {
    id: 3,
    category: "Relationship Analysis",
    title: "Relationship Harmony Through Combined Analysis",
    description: "A couple seeking relationship guidance gained deeper understanding and improved their partnership through combined Ba Zi and Feng Shui analysis.",
    results: [
      "Better mutual understanding",
      "Improved communication",
      "Enhanced living space harmony",
      "Stronger relationship foundation"
    ],
    image: "/images/cases/relationship-harmony.jpg"
  },
  {
    id: 4,
    category: "Life Path Analysis",
    title: "Personal Growth Journey Through Taoist Guidance",
    description: "An individual seeking life direction discovered their true path through comprehensive Taoist analysis and guidance.",
    results: [
      "Enhanced self-awareness",
      "Better decision-making ability",
      "Improved life satisfaction",
      "Greater sense of purpose"
    ],
    image: "/images/cases/personal-growth.jpg"
  },
  {
    id: 5,
    category: "Combined Analysis",
    title: "Family Harmony Restoration",
    description: "A family experiencing conflicts found peace through combined Ba Zi and Feng Shui consultation.",
    results: [
      "Resolved family tensions",
      "Created harmonious living space",
      "Improved family relationships",
      "Enhanced home energy"
    ],
    image: "/images/cases/family-harmony.jpg"
  }
];

const categories = [
  {
    icon: ChartBarIcon,
    title: "Career & Business",
    count: "50+ cases",
    description: "Success stories in professional growth and business development"
  },
  {
    icon: HeartIcon,
    title: "Relationships",
    count: "40+ cases",
    description: "Transformations in personal and family relationships"
  },
  {
    icon: HomeIcon,
    title: "Living Spaces",
    count: "60+ cases",
    description: "Feng Shui implementations for homes and offices"
  }
];

const testimonials = [
  {
    id: 1,
    text: "The Ba Zi analysis provided insights that helped me make confident decisions about my career path. I'm now in a role that truly aligns with my natural abilities.",
    author: "Sarah L.",
    location: "United States"
  },
  {
    id: 2,
    text: "The Feng Shui consultation transformed our business space. The changes were subtle but the impact on our success was remarkable.",
    author: "Michael C.",
    location: "Canada"
  },
  {
    id: 3,
    text: "Understanding our Ba Zi compatibility has helped us build a stronger relationship. The insights were practical and eye-opening.",
    author: "Emma and James",
    location: "United Kingdom"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Success Stories & Case Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover how Taoist wisdom has transformed lives through real-world examples and testimonials
        </p>
      </section>

      {/* Categories Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <category.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-primary mb-2">{category.count}</p>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Case Studies with enhanced grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.id} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 hover:bg-primary/20 transition-colors">
                  {study.category}
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 hover:translate-x-1 transition-transform">
                      <ArrowRightIcon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Consultation Process</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { number: "01", title: "Initial Assessment", desc: "Understanding your situation and goals" },
            { number: "02", title: "Analysis", desc: "Comprehensive evaluation using traditional methods" },
            { number: "03", title: "Recommendations", desc: "Detailed guidance and practical solutions" },
            { number: "04", title: "Follow-up", desc: "Ongoing support and progress monitoring" }
          ].map((step, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Our Approach Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <ShieldCheckIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Methodology</h3>
            <p className="text-muted-foreground">
              Our consultations combine traditional Taoist wisdom with practical modern applications
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <UserGroupIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
            <p className="text-muted-foreground">
              Each consultation is tailored to your unique situation and goals
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <StarIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lasting Results</h3>
            <p className="text-muted-foreground">
              Our clients experience meaningful and sustainable positive changes
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-12 mb-16">
        <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of individuals who have found clarity, purpose, and success through Taoist wisdom
        </p>
        <div className="space-x-4">
          <Link href="/services/consultation">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book a Consultation
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 