import { Metadata } from "next"

export const metadata: Metadata = {
  title: "常见问题解答 - FAQ | Common Questions About Taoist Practices",
  description: "Find answers to frequently asked questions about Taoist practices, metaphysical arts, and our consultation services. Clear explanations for Ba Zi, Zi Wei Dou Shu, and more.",
  keywords: "Taoist FAQ, Chinese metaphysics questions, Ba Zi FAQ, Zi Wei Dou Shu questions, Feng Shui consultation, metaphysical services FAQ",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 