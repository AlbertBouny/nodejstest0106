"use client";

import { ChevronDown, Globe, Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface NavItem {
  title: string;
  href: string;
  subItems?: Array<{
    title: string;
    href: string;
  }>;
}

const mainNavItems: NavItem[] = [
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
    ],
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
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Online Self-Service Tools", href: "/services/tools" },
      { title: "Expert Consultation", href: "/services/consultation" },
      { title: "Case Studies", href: "/services/cases" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    subItems: [
      { title: "Glossary", href: "/resources/glossary" },
      { title: "Recommended Readings", href: "/resources/readings" },
      { title: "FAQ", href: "/resources/faq" },
      { title: "Cultural Events", href: "/resources/events" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
  },
];

interface NavItemProps {
  item: NavItem;
  mobile?: boolean;
  key?: string;
}

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavItem = ({ item, mobile = false }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.href;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleMouseEnter = useCallback(() => {
    if (!mobile) {
      setIsOpen(true);
    }
  }, [mobile]);

  const handleMouseLeave = useCallback(() => {
    if (!mobile) {
      setIsOpen(false);
    }
  }, [mobile]);

  const handleClick = useCallback(() => {
    if (mobile) {
      setIsOpen(!isOpen);
    }
  }, [mobile, isOpen]);

  if (item.subItems && item.subItems.length > 0) {
    return (
      <div
        className={`relative ${mobile ? "w-full" : "group inline-block"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClick}
          className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"
            } hover:text-foreground`}
        >
          {item.title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        {isOpen && (
          <div
            className={`absolute z-50 min-w-[200px] rounded-md border bg-background p-2 shadow-md ${mobile ? "relative w-full" : "left-0 top-full"
              }`}
          >
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"
        } hover:text-foreground ${mobile && "block w-full"}`}
    >
      {item.title}
    </Link>
  );
};

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform bg-background transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold">
          Taoist Wisdom
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-full p-2 hover:bg-accent"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-4 px-4">
        {mainNavItems.map((item) => (
          <NavItem key={item.href} item={item} mobile />
        ))}
      </nav>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
            Taoist Wisdom
          </Link>
          <nav className="hidden md:flex">
            {mainNavItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <button className="rounded-full p-2 hover:bg-accent">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-accent">
            <Globe className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-accent">
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full p-2 hover:bg-accent md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;