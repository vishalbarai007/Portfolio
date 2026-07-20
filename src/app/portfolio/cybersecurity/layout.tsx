import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Cybersecurity Projects",
  description: "Examine security audits, penetration testing scripts, and secure infrastructures created by Vishal Barai.",
  alternates: {
    canonical: "/portfolio/cybersecurity",
  },
}

export default function CybersecurityPortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


