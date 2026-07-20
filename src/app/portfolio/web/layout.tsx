import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Web Development Projects",
  description: "Browse full-stack web applications and platforms built by Vishal Barai using React, Next.js, Node.js, and TypeScript.",
  alternates: {
    canonical: "/portfolio/web",
  },
}

export default function WebPortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
