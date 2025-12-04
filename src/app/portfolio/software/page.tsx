"use client"

import ScrollReveal from "@/components/sections/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const softwareProjects = [
  {
    name: "Distributed Cache System",
    description: "High-performance distributed caching layer",
    technologies: ["Go", "Redis", "gRPC"],
    status: "Live",
  },
  {
    name: "Microservices Framework",
    description: "Scalable microservices orchestration platform",
    technologies: ["Kubernetes", "Docker", "Go"],
    status: "Live",
  },
  {
    name: "Real-time Analytics Engine",
    description: "Stream processing for real-time data analytics",
    technologies: ["Rust", "Apache Kafka", "ClickHouse"],
    status: "In Development",
  },
]

export default function SoftwarePortfolioPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Software Engineering</h1>
          <p className="text-lg text-muted max-w-2xl">
            Designing and implementing robust software solutions with clean architecture principles
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareProjects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="h-full hover:border-purple-400/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">{project.status}</Badge>
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
