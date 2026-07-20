import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download Vishal Barai's professional resume detailing his software engineering experience, skills, and certifications.",
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
