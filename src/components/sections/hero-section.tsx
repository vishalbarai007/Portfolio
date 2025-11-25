"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const domainsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ctaRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )

      gsap.from(".domain-card", {
        scrollTrigger: {
          trigger: domainsRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.5,
          markers: false,
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const domains = [
    { name: "Full Stack Web", color: "domain-web" },
    { name: "App Development", color: "domain-app" },
    { name: "Wordpress Developer", color: "domain-web" },
    { name: "Software Engineering", color: "domain-software" },
    { name: "Cybersecurity", color: "domain-security" },
  ]

  return (

    <div>
      <div className="h-screen w-full">
        <div className="p-4 border">
          Background test:
          <div className="w-10 h-10 bg-background"></div>
        </div>

      </div>
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background via-background to-card/30"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Crafting Digital Solutions Across <span className="text-primary">Multiple Domains</span>
          </h1>

          <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            I'm a versatile developer specializing in {domains.map((d) => d.name).join(", ")}. Explore my work across
            different technical domains and discover how I solve complex problems.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/portfolio">
              <Button size="lg" className="gap-2">
                View Portfolio <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div ref={domainsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
            {domains.map((domain) => (
              <div
                key={domain.name}
                className="domain-card p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <p className={`font-semibold ${domain.color}`}>{domain.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
