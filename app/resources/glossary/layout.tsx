import { Metadata } from "next"

export const metadata: Metadata = {
  title: "术语表 - Glossary | Key Terms in Taoist and Esoteric Practices",
  description: "探索道教和玄学的关键术语。A comprehensive glossary of Taoist and esoteric terms, with clear definitions, cultural context, and pronunciation guides.",
  keywords: "道教术语,玄学词汇,术语表,taoist terms,chinese metaphysics glossary,ba zi terms,zi wei dou shu terms,feng shui glossary",
}

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 