export type AuthorsConfig = {
  name: string
  url: string
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  subItems?: NavItem[]
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  keywords: string[]
  authors: Array<{
    name: string
    url: string
  }>
  creator: string
  ogImage: string
  metadataBase: URL
  themeColor: string
  icons: {
    icon: string
    shortcut: string
    apple: string
  }
  openGraph: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
  },
  twitter: {
    card: string
    title: string
    description: string
    images: string[]
    creator: string
  },
  mainNav: MainNavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  },
}
