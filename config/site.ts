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
        { title: "Major Schools", href: "/culture/schools" },
        { title: "Deities", href: "/culture/deities" },
        { title: "Cultural Influence", href: "/culture/influence" },
        { title: "Taoist Ethics", href: "/culture/ethics" },
      ]
    },
    {
      title: "Metaphysical Arts",
      href: "/arts",
      subItems: [
        { title: "Zi Wei Dou Shu", href: "/arts/ziwei" },
        { title: "Ba Zi", href: "/arts/bazi" },
        { title: "Love & Relationship", href: "/arts/relationship" },
        { title: "Marriage Compatibility", href: "/arts/compatibility" },
        { title: "Astrological Naming", href: "/arts/naming" },
        { title: "Feng Shui", href: "/arts/fengshui" },
        { title: "Dream Interpretation", href: "/arts/dream" },
      ]
    },
    {
      title: "Services",
      href: "/services",
      subItems: [
        { title: "Online Self-Service Tools", href: "/services/tools" },
        { title: "Expert Consultation", href: "/services/consultation" },
        { title: "Case Studies", href: "/services/cases" },
      ]
    },
    {
      title: "Resources",
      href: "/resources",
      subItems: [
        { title: "Glossary", href: "/resources/glossary" },
        { title: "Reading List", href: "/resources/readings" },
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
