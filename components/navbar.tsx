"use client";

import { UserAccountHeader } from "@/components/UserAccountHeader";
import { cn } from "@/lib/utils";
import { UserInfo } from "@/types/user";
import { ChevronDown, Globe, Menu, Search, User, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
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

export const navConfig = {
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "道家文化",
      href: "/culture",
    },
    {
      title: "玄学应用",
      href: "/metaphysical",
    },
    {
      title: "服务案例",
      href: "/services",
    },
    {
      title: "修行计划",
      href: "/pricing",
    },
    {
      title: "关于我们",
      href: "/about",
    },
  ],
}

const mainNavItems: NavItem[] = [
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
  {
    title: "Pricing",
    href: "/pricing",
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
        className={`${mobile ? "w-full" : "relative group inline-block"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClick}
          className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"
            } hover:text-foreground`}
          aria-expanded={isOpen}
        >
          {item.title}
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>
        {isOpen && (
          <div
            className={`${mobile
              ? "relative w-full bg-accent/50 rounded-md mt-1"
              : "absolute left-0 top-full min-w-[200px] rounded-md border bg-background p-2 shadow-md"
              }`}
          >
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={`block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground ${mobile ? "hover:bg-accent/50" : ""
                  }`}
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
        } hover:text-foreground ${mobile ? "block w-full" : ""}`}
      onClick={() => mobile && setIsOpen(false)}
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
      document.body.style.overflow = 'hidden';
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
          Taoist Wisdom
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-full p-2 hover:bg-accent"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-4 px-4 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="space-y-2">
          {mainNavItems.map((item) => (
            <NavItem key={item.href} item={item} mobile />
          ))}
        </div>
        <div className="mt-8 border-t pt-4">
          <Link
            href="/login"
            className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user as UserInfo;
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="relative h-8 w-8">
            {/* SVG logo for light theme */}
            <Image
              src="/logo.svg"
              alt="Taoist Wisdom Logo"
              className={cn("absolute transition-opacity",
                theme === "dark" ? "opacity-0" : "opacity-100"
              )}
              fill
              priority
            />
            {/* PNG logo for dark theme */}
            <Image
              src="/logo.png"
              alt="Taoist Wisdom Logo"
              className={cn("absolute transition-opacity",
                theme === "dark" ? "opacity-100" : "opacity-0"
              )}
              fill
              priority
            />
          </div>
          <span className="hidden font-bold sm:inline-block">
            Taoist Wisdom
          </span>
        </Link>

        {/* Main Navigation */}
        <nav className="hidden md:flex md:flex-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="flex items-center justify-end space-x-4">
          <button className="rounded-full p-2 hover:bg-accent">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-accent">
            <Globe className="h-5 w-5" />
          </button>
          {user ? (
            <UserAccountHeader
              user={{
                email: user.email || "",
                role: user.role || 0,
                platform: user.platform || "",
                userId: user.userId || ""
              }}
            />
          ) : (
            <Link href="/login">
              <button className="rounded-full p-2 hover:bg-accent">
                <User className="h-5 w-5" />
              </button>
            </Link>
          )}
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
}

export default Navbar;