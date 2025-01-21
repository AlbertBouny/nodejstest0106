import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - TaoismZen",
  description: "Login to access your TaoismZen account",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 