"use client"

import ScrollReveal from "@/components/layout/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Smartphone } from "lucide-react"

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 z-10">
        <ScrollReveal className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Smartphone className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">App Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">App Development</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Native and cross-platform mobile applications with seamless user experiences
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appProjects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="h-full bg-card border-border hover:border-green-500/50 hover:scale-[1.02] shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg text-card-foreground group-hover:text-green-400 transition-colors">{project.name}</CardTitle>
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20">{project.status}</Badge>
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
