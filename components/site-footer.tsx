"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const footerLinks = {
  about: [
    { title: "About Us", href: "/about" },
    { title: "Our Mission", href: "/about#mission" },
    { title: "Our Experts", href: "/about#experts" },
    { title: "Contact Us", href: "/contact" },
  ],
  quickLinks: [
    { title: "Taoist Culture", href: "/culture" },
    { title: "Metaphysical Arts", href: "/arts" },
    { title: "Services", href: "/services" },
    { title: "Resources", href: "/resources" },
    { title: "Sitemap", href: "/sitemap" },
  ],
  resources: [
    { title: "Glossary", href: "/resources/glossary" },
    { title: "FAQ", href: "/resources/faq" },
    { title: "Blog", href: "/blog" },
    { title: "Events", href: "/resources/events" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/daoistculture",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/daoistculture",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 pb-8 pt-10 md:grid-cols-2 lg:grid-cols-4">
        {/* About Us Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-sm text-muted-foreground">
            Discover the profound wisdom of Chinese metaphysical arts and Taoist practices through expert guidance and modern interpretation.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "hover:text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.quickLinks.map((link) => (
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
        </div>

        {/* Resources Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.resources.map((link) => (
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
        </div>

        {/* Contact & Legal Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@daoistculture.com</li>
              <li>Hours: Mon-Fri 9:00-17:00 EST</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container flex flex-col items-center gap-4 py-6 md:h-16 md:flex-row md:justify-between md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground hover:text-primary"
              )}
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 