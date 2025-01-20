import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "Daoist Culture & Metaphysics",
  description: "Explore the profound wisdom of Chinese Daoist culture, metaphysics, and divination arts.",
  url: "https://daoistculture.com",
  ogImage: "https://smartexcel.cc/og.jpg",
  metadataBase: new URL("https://www.smartexcel.cc"),
  keywords: ["SmartExcel", "ChatGPT", "Excel formulas", "Excel AI", "文心一言", "智谱"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  links: {
    twitter: "https://twitter.com/daoistculture",
    github: "https://github.com/daoistculture",
    docs: "https://daoistculture.com/docs",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Taoist Culture",
      href: "/culture",
      subItems: [
        { title: "Origins & History", href: "/culture/history" },
        { title: "Core Concepts", href: "/culture/concepts" },
        { title: "Schools & Lineages", href: "/culture/schools" },
        { title: "Deities & Immortals", href: "/culture/deities" },
        { title: "Cultural Impact", href: "/culture/impact" },
      ]
    },
    {
      title: "Metaphysical Arts",
      href: "/arts",
      subItems: [
        { title: "Purple Star Astrology", href: "/arts/purple-star" },
        { title: "Four Pillars of Destiny", href: "/arts/four-pillars" },
        { title: "Relationship Analysis", href: "/arts/relationships" },
        { title: "Marriage Compatibility", href: "/arts/marriage" },
        { title: "Astrological Names", href: "/arts/names" },
        { title: "Feng Shui", href: "/arts/feng-shui" },
        { title: "Dream Interpretation", href: "/arts/dreams" },
      ]
    },
    {
      title: "Services",
      href: "/services",
      subItems: [
        { title: "Online Tools", href: "/services/tools" },
        { title: "Expert Consultation", href: "/services/consultation" },
        { title: "Case Studies", href: "/services/cases" },
      ]
    },
    {
      title: "Resources",
      href: "/resources",
      subItems: [
        { title: "Glossary", href: "/resources/glossary" },
        { title: "Reading List", href: "/resources/reading" },
        { title: "FAQ", href: "/resources/faq" },
        { title: "Cultural Events", href: "/resources/events" },
      ]
    },
    {
      title: "About",
      href: "/about",
    },
  ],
}
