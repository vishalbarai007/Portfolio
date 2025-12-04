"use client"

import { useEffect, useState } from "react"
import ScrollReveal from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import experiences from "@/data/experiences.json"

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
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Career Timeline</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A chronological journey through my professional experience across multiple domains
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {sortedExperiences.map((experience, idx) => {
              const isEven = idx % 2 === 0
              const endDate = experience.endDate ? new Date(experience.endDate) : new Date()
              const startDate = new Date(experience.startDate)
              const duration = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30))

              return (
                <ScrollReveal key={experience.id} delay={idx * 0.1}>
                  <div className={`flex ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <Card className="hover:border-primary/50 transition-all">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <CardTitle className="text-xl">{experience.title}</CardTitle>
                              <CardDescription className="text-base">{experience.company}</CardDescription>
                            </div>
                            <Badge className={domainColors[experience.domain]}>
                              {experience.domain.charAt(0).toUpperCase() + experience.domain.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted mt-2">{experience.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="text-sm text-muted">
                            {startDate.toLocaleDateString("en-US", { year: "numeric", month: "short" })} -{" "}
                            {experience.endDate
                              ? endDate.toLocaleDateString("en-US", { year: "numeric", month: "short" })
                              : "Present"}{" "}
                            ({duration} months)
                          </div>
                          <ul className="space-y-2">
                            {experience.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="text-sm text-foreground flex gap-2">
                                <span className="text-primary">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex w-1/2 justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
