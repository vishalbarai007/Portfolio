"use client"

import ScrollReveal from "@/components/sections/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const appProjects = [
  {
    name: "Fitness Tracker",
    description: "Cross-platform fitness tracking with AI recommendations",
    technologies: ["React Native", "Firebase", "ML"],
    status: "Live",
  },
  {
    name: "Social Network",
    description: "Real-time messaging and social features",
    technologies: ["Flutter", "Node.js", "WebSocket"],
    status: "Live",
  },
  {
    name: "E-Learning Platform",
    description: "Mobile learning management system",
    technologies: ["Swift", "Kotlin", "GraphQL"],
    status: "In Development",
  },
]

export default function AppPortfolioPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">App Development</h1>
          <p className="text-lg text-muted max-w-2xl">
            Native and cross-platform mobile applications with seamless user experiences
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appProjects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="h-full hover:border-green-400/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20">{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
