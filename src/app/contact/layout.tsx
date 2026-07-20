import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vishal Barai for project inquiries, technical collaborations, or professional opportunities.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
