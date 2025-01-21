"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/culture"
              className={cn(
                "transition-colors hover:text-foreground/80",
                "text-foreground"
              )}
            >
              道教文化
            </Link>
            <Link
              href="/arts"
              className={cn(
                "transition-colors hover:text-foreground/80",
                "text-foreground"
              )}
            >
              玄学法术
            </Link>
            <Link
              href="/services"
              className={cn(
                "transition-colors hover:text-foreground/80",
                "text-foreground"
              )}
            >
              服务咨询
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              登录
            </Link>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/culture"
                className="text-sm font-medium transition-colors hover:text-foreground/80"
                onClick={toggleMenu}
              >
                道教文化
              </Link>
              <Link
                href="/arts"
                className="text-sm font-medium transition-colors hover:text-foreground/80"
                onClick={toggleMenu}
              >
                玄学法术
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium transition-colors hover:text-foreground/80"
                onClick={toggleMenu}
              >
                服务咨询
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar 