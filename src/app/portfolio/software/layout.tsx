import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Software Engineering Projects",
  description: "Review systems programming, CLI tools, backend engines, and backend integrations developed by Vishal Barai in Go, Python, and C++.",
  alternates: {
    canonical: "/portfolio/software",
  },
}

export default function SoftwarePortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
