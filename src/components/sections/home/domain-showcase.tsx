"use client"

import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Cpu, Shield, ArrowRight } from "lucide-react"

const domains = [
  {
    id: "web",
    title: "Full Stack Web Development",
    description: "Building scalable, responsive web applications with modern frameworks and best practices.",
    icon: Code2,
    color: "text-blue-400",
    bgGradient: "gradient-web",
    href: "/portfolio/web",
  },
  {
    id: "app",
    title: "App Development",
    description: "Developing cross-platform and native mobile applications with optimized performance and user experiences.",
    icon: Smartphone,
    color: "text-green-400",
    bgGradient: "gradient-app",
    href: "/portfolio/app",
  },
  {
    id: "software",
    title: "Software Engineering",
    description: "Designing and implementing robust software solutions with clean architecture principles.",
    icon: Cpu,
    color: "text-purple-400",
    bgGradient: "gradient-software",
    href: "/portfolio/software",
  },
  {
    id: "security",
    title: "Cybersecurity",
    description: "Protecting systems and data through security audits, penetration testing, and secure coding.",
    icon: Shield,
    color: "text-red-400",
    bgGradient: "gradient-security",
    href: "/portfolio/cybersecurity",
  },
]

export default function DomainShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="min-h-screen py-0 px-4 bg-background flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Areas of Expertise
          </h2>
          <p ref={descRef} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my professional experience across four distinct technical domains
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon
            return (
              <Link key={domain.id} href={domain.href} className="group">
                <Card className="domain-card-item h-full border-border hover:border-primary/50 transition-all cursor-pointer bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`${domain.color} w-8 h-8`} />
                    </div>
                    <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">{domain.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">{domain.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="gap-2 group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent">
                      Explore <ArrowRight size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
