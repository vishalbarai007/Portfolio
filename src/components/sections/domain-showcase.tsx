"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Cpu, Shield, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

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
    id: "WordPress",
    title: "WordPress Development",
    description: "Creating custom WordPress themes and plugins to deliver dynamic and user-friendly websites.",
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

      gsap.from(".domain-card-item", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.5,
          markers: false,
        },
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
            Areas of Expertise
          </h2>
          <p ref={descRef} className="text-lg text-muted max-w-2xl mx-auto">
            Explore my professional experience across four distinct technical domains
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon
            return (
              <Link key={domain.id} href={domain.href}>
                <Card className="domain-card-item h-full hover:border-primary/50 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`${domain.color} w-8 h-8`} />
                    </div>
                    <CardTitle className="text-2xl">{domain.title}</CardTitle>
                    <CardDescription className="text-base">{domain.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="gap-2 group-hover:translate-x-1 transition-transform">
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
