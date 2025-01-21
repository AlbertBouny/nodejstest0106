import "@/app/globals.css"
import { NextAuthProvider } from "@/app/providers"
import Navbar from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Noto_Serif_SC as FontHeading, Inter as FontSans } from "next/font/google"
import { Toaster } from "sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
})

export const metadata = {
  title: {
    default: "Taoist Wisdom",
    template: "%s | Taoist Wisdom",
  },
  description: "Explore the wisdom of Taoism and its modern applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <Toaster />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
