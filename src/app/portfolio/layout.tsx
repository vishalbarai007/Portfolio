import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the development and security projects created by Vishal Barai across web development, mobile apps, software engineering, and cybersecurity.",
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
