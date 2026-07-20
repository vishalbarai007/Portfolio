import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Timeline & Milestones",
  description: "Track Vishal Barai's professional journey, key career milestones, and project launches over the years.",
  alternates: {
    canonical: "/timeline",
  },
}

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
