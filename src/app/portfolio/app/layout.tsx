import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Mobile App Projects",
  description: "Explore mobile application projects designed and developed by Vishal Barai using React Native and Flutter.",
  alternates: {
    canonical: "/portfolio/app",
  },
}

export default function AppPortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
