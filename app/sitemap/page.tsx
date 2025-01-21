import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Taoist Culture and Metaphysical Arts",
  description: "Complete overview of our website's structure, including all sections about Taoist culture, metaphysical arts, services, and resources.",
  keywords: "sitemap, website structure, Taoist culture, metaphysical arts, navigation",
};

const siteStructure = {
  main: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  culture: [
    { title: "Taoist Culture Overview", href: "/culture" },
    { title: "History", href: "/culture/history" },
    { title: "Core Concepts", href: "/culture/concepts" },
    { title: "Major Schools", href: "/culture/schools" },
    { title: "Deities", href: "/culture/deities" },
    { title: "Cultural Influence", href: "/culture/influence" },
    { title: "Ethics", href: "/culture/ethics" },
  ],
  arts: [
    { title: "Metaphysical Arts Overview", href: "/arts" },
    { title: "Zi Wei Dou Shu", href: "/arts/ziwei" },
    { title: "Ba Zi", href: "/arts/bazi" },
    { title: "Feng Shui", href: "/arts/fengshui" },
    { title: "Marriage Compatibility", href: "/arts/compatibility" },
    { title: "Astrological Naming", href: "/arts/naming" },
    { title: "Dream Interpretation", href: "/arts/dream" },
  ],
  services: [
    { title: "Services Overview", href: "/services" },
    { title: "Online Self-Service Tools", href: "/services/tools" },
    { title: "Expert Consultation", href: "/services/consultation" },
    { title: "Case Studies", href: "/services/cases" },
  ],
  resources: [
    { title: "Resources Overview", href: "/resources" },
    { title: "Glossary", href: "/resources/glossary" },
    { title: "FAQ", href: "/resources/faq" },
    { title: "Events", href: "/resources/events" },
    { title: "Reading List", href: "/resources/readings" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function SitemapPage() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Sitemap</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Complete overview of our website's structure and content
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Main Pages */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Main Pages</h2>
          <ul className="space-y-2">
            {siteStructure.main.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Taoist Culture */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Taoist Culture</h2>
          <ul className="space-y-2">
            {siteStructure.culture.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Metaphysical Arts */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Metaphysical Arts</h2>
          <ul className="space-y-2">
            {siteStructure.arts.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Services</h2>
          <ul className="space-y-2">
            {siteStructure.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Resources</h2>
          <ul className="space-y-2">
            {siteStructure.resources.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Legal</h2>
          <ul className="space-y-2">
            {siteStructure.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Last Updated */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 