import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up - TaoismZen",
  description: "Create your TaoismZen account",
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 