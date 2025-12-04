"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Smartphone, Cpu, Shield, ArrowRight, Sparkles } from "lucide-react"

const portfolioCategories = [
  {
    id: "web",
    title: "Full Stack Web Development",
    description: "Responsive, scalable web applications built with modern frameworks",
    icon: Code2,
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
    borderColor: "hover:border-primary/50",
    bgHover: "group-hover:bg-primary/5",
    href: "/portfolio/web",
    stats: { projects: 12, technologies: 8 },
    highlight: "React • Next.js • TypeScript",
  },
  {
    id: "app",
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
    borderColor: "hover:border-accent/50",
    bgHover: "group-hover:bg-accent/5",
    href: "/portfolio/app",
    stats: { projects: 8, technologies: 5 },
    highlight: "React Native • Flutter • Swift",
  },
  {
    id: "software",
    title: "Software Engineering",
    description: "Distributed systems and backend infrastructure",
    icon: Cpu,
    gradient: "from-secondary/20 to-primary/20",
    iconColor: "text-secondary",
    borderColor: "hover:border-secondary/50",
    bgHover: "group-hover:bg-secondary/5",
    href: "/portfolio/software",
    stats: { projects: 6, technologies: 7 },
    highlight: "Go • Rust • Kubernetes",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Security audits, penetration testing, and secure systems",
    icon: Shield,
    gradient: "from-accent/30 to-destructive/20",
    iconColor: "text-accent",
    borderColor: "hover:border-accent/50",
    bgHover: "group-hover:bg-accent/5",
    href: "/portfolio/cybersecurity",
    stats: { projects: 5, technologies: 6 },
    highlight: "Penetration Testing • OSCP",
  },
]

export default function PortfolioPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Explore My Work</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my professional work across four distinct technical domains, showcasing expertise in web, mobile, systems, and security
          </p>

          {/* Stats Overview */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">31</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">26</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Domains</div>
            </div>
          </div>
        </div>

        {/* Portfolio Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioCategories.map((category) => {
            const Icon = category.icon
            const isHovered = hoveredCard === category.id
            
            return (
              <Link 
                key={category.id} 
                href={category.href}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                <Card className={`h-full bg-card border-border ${category.borderColor} ${category.bgHover} shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] relative overflow-hidden`}>
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`${category.iconColor} w-8 h-8`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-muted text-card-foreground border border-border group-hover:border-primary/30 transition-colors"
                      >
                        {category.stats.projects} Projects
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-4">
                    {/* Technology Highlight */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${category.iconColor.replace('text-', 'bg-')}`}></div>
                      <span>{category.highlight}</span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${category.iconColor.replace('text-', 'bg-')} animate-pulse`}></div>
                        <span className="text-sm text-muted-foreground">
                          {category.stats.technologies} Technologies
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 ${category.iconColor} group-hover:translate-x-1 transition-all`}
                      >
                        Explore
                        <ArrowRight 
                          size={16} 
                          className={`${isHovered ? 'translate-x-1' : ''} transition-transform duration-300`}
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-medium max-w-2xl mx-auto">
            <CardContent className="py-8 px-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your project to life
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-medium transition-all"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}