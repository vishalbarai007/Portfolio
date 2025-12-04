"use client"

import ScrollReveal from "@/components/sections/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const securityProjects = [
  {
    name: "Vulnerability Scanner",
    description: "Automated security vulnerability detection tool",
    technologies: ["Python", "OWASP", "Automation"],
    status: "Live",
  },
  {
    name: "Penetration Testing Framework",
    description: "Comprehensive penetration testing toolkit",
    technologies: ["Python", "Metasploit", "Burp Suite"],
    status: "Live",
  },
  {
    name: "Security Audit Platform",
    description: "Enterprise security audit and compliance management",
    technologies: ["Go", "PostgreSQL", "React"],
    status: "In Development",
  },
]

export default function CybersecurityPortfolioPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cybersecurity</h1>
          <p className="text-lg text-muted max-w-2xl">
            Protecting systems and data through security audits, penetration testing, and secure coding
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityProjects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="h-full hover:border-red-400/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">{project.status}</Badge>
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
