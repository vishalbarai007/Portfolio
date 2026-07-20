import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Vishal Barai's career, education, bio, and background as a Software Engineer and Full-Stack Developer.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
