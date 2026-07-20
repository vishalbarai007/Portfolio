import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description: "Explore Vishal Barai's technical expertise across programming languages, web technologies, mobile frameworks, databases, and DevOps/security tools.",
  alternates: {
    canonical: "/skills",
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
