"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    domain: "web",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with AI-powered recommendations",
    domain: "app",
    tags: ["React Native", "Firebase", "Machine Learning"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Distributed System",
    description: "Microservices architecture for high-availability applications",
    domain: "software",
    tags: ["Go", "Kubernetes", "gRPC", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Security Audit Tool",
    description: "Automated vulnerability scanning and penetration testing framework",
    domain: "security",
    tags: ["Python", "Security", "Automation"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

const domainColors: Record<string, string> = {
  web: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  app: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  software: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30",
  security: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
          markers: false,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })

      gsap.from(descRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          scrub: 0.5,
          markers: false,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })

      gsap.from(".project-card-item", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.5,
          markers: false,
        },
        y: 80,
        opacity: 0,
        rotationX: 10,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-border bg-muted/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-muted-foreground">Portfolio</span>
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p ref={descRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcase of recent work across different domains
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <Card 
              key={idx} 
              className="project-card-item group relative overflow-hidden border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card/80 backdrop-blur-sm"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative space-y-4 pb-4">
                <div className="flex items-start justify-between">
                  <Badge 
                    className={`${domainColors[project.domain]} font-medium px-3 py-1 text-xs uppercase tracking-wider`}
                  >
                    {project.domain}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="relative space-y-6 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs font-medium px-3 py-1 bg-secondary/60 hover:bg-secondary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2 border-t border-border/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}