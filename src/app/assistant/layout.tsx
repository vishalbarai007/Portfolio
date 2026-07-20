import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Chat with Vishal Barai's AI portfolio assistant to learn about his experience, skills, projects, and availability.",
  alternates: {
    canonical: "/assistant",
  },
}

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
