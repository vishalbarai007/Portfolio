"use client"

import ScrollReveal from "@/components/layout/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Cpu } from "lucide-react"

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 z-10">
        <ScrollReveal className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Software Engineering</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Software Engineering</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Designing and implementing robust software solutions with clean architecture principles
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareProjects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="h-full bg-card border-border hover:border-purple-500/50 hover:scale-[1.02] shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg text-card-foreground group-hover:text-purple-400 transition-colors">{project.name}</CardTitle>
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground border border-border">
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
