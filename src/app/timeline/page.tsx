"use client"

import { useEffect, useState } from "react"
import ScrollReveal from "@/components/sections/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import experiences from "@/data/experiences.json"
import { TimelineDemo } from "@/components/TimelineDemo"

const domainColors: Record<string, string> = {
  web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  app: "bg-green-500/10 text-green-400 border-green-500/20",
  software: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  security: "bg-red-500/10 text-red-400 border-red-500/20",
}

export default function TimelinePage() {
  const [sortedExperiences, setSortedExperiences] = useState(experiences)

  useEffect(() => {
    const sorted = [...experiences].sort((a, b) => {
      const aEnd = a.endDate ? new Date(a.endDate).getTime() : Date.now()
      const bEnd = b.endDate ? new Date(b.endDate).getTime() : Date.now()
      return bEnd - aEnd
    })
    setSortedExperiences(sorted)
  }, [])

  return (
    <div>
      <TimelineDemo/>
    </div>
  )
}
