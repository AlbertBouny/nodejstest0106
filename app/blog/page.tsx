import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Insights into Taoist Culture and Practices",
  description: "Explore our collection of articles about Taoist philosophy, metaphysical arts, and spiritual practices. Gain deeper insights into Chinese wisdom traditions.",
  keywords: "Taoist blog, Chinese metaphysics articles, spiritual insights, Feng Shui blog, Ba Zi articles",
};

const featuredPosts = [
  {
    title: "Understanding the Five Elements in Daily Life",
    excerpt: "Discover how the Wu Xing theory can help you create harmony in your daily routines and relationships.",
    image: "/images/blog/five-elements.jpg",
    author: "Master Chen Wei",
    date: "2024-01-15",
    readTime: "8 min",
    slug: "five-elements-daily-life",
  },
  {
    title: "Modern Applications of Feng Shui",
    excerpt: "Learn how to apply classical Feng Shui principles in contemporary home and office spaces.",
    image: "/images/blog/modern-fengshui.jpg",
    author: "Dr. Sarah Wong",
    date: "2024-01-10",
    readTime: "10 min",
    slug: "modern-fengshui-applications",
  },
  {
    title: "The Art of Ba Zi Reading",
    excerpt: "Explore the fundamental principles of Ba Zi and how it reveals your life's potential.",
    image: "/images/blog/bazi-reading.jpg",
    author: "Master Liu Ming",
    date: "2024-01-05",
    readTime: "12 min",
    slug: "art-of-bazi-reading",
  },
];

const recentPosts = [
  {
    title: "Meditation Techniques from Taoist Traditions",
    excerpt: "A guide to traditional Taoist meditation practices for modern practitioners.",
    date: "2024-01-01",
    readTime: "6 min",
    slug: "taoist-meditation-techniques",
  },
  {
    title: "Seasonal Living in Taoist Philosophy",
    excerpt: "How to align your lifestyle with natural cycles according to Taoist wisdom.",
    date: "2023-12-28",
    readTime: "7 min",
    slug: "seasonal-living-taoism",
  },
  {
    title: "Understanding Qi in Daily Life",
    excerpt: "Practical ways to work with energy for better health and wellbeing.",
    date: "2023-12-25",
    readTime: "5 min",
    slug: "qi-in-daily-life",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Insights into Taoist Wisdom and Practices
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Articles</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="group rounded-lg border">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <UserIcon className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="mb-8 text-3xl font-bold">Recent Articles</h2>
        <div className="space-y-8">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-lg border p-6 transition-colors hover:bg-muted/50"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 rounded-lg bg-muted p-8 text-center">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="mt-2 text-muted-foreground">
          Subscribe to our newsletter for the latest articles and insights
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-sm rounded-lg border bg-background px-4 py-2"
          />
          <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
} 