"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollReveal from "@/components/scroll-reveal"
import SkillMatrixEnhanced from "@/components/skill-matrix-enhanced"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

gsap.registerPlugin(ScrollTrigger)

const skillStats = [
  { domain: "Web", master: 4, expert: 2, advanced: 1, intermediate: 1 },
  { domain: "App", master: 2, expert: 2, advanced: 1, intermediate: 1 },
  { domain: "Software", master: 3, expert: 2, advanced: 1, intermediate: 0 },
  { domain: "Security", master: 3, expert: 2, advanced: 1, intermediate: 0 },
]

const proficiencyData = [
  { domain: "Web", value: 4.5 },
  { domain: "App", value: 4.0 },
  { domain: "Software", value: 4.3 },
  { domain: "Security", value: 4.5 },
]

const skillCategories = [
  { name: "Frontend", skills: 4, color: "bg-blue-500/10 text-blue-400" },
  { name: "Backend", skills: 3, color: "bg-green-500/10 text-green-400" },
  { name: "Mobile", skills: 6, color: "bg-purple-500/10 text-purple-400" },
  { name: "Systems", skills: 6, color: "bg-red-500/10 text-red-400" },
  { name: "Security", skills: 6, color: "bg-yellow-500/10 text-yellow-400" },
]

export default function SkillsPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.5,
          markers: false,
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Comprehensive overview of my technical skills, proficiency levels, and expertise across multiple domains
          </p>
        </ScrollReveal>

        {/* Skill Categories */}
        <ScrollReveal className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="stat-card hover:border-primary/50 transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{category.skills}</p>
                  <p className="text-xs text-muted mt-1">Skills</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Matrix */}
        <ScrollReveal className="mb-16">
          <SkillMatrixEnhanced />
        </ScrollReveal>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Proficiency Radar */}
          <ScrollReveal>
            <Card>
              <CardHeader>
                <CardTitle>Proficiency by Domain</CardTitle>
                <CardDescription>Average skill level across domains</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={proficiencyData}>
                    <PolarGrid stroke="var(--color-border)" />
                    <PolarAngleAxis dataKey="domain" stroke="var(--color-muted)" />
                    <PolarRadiusAxis stroke="var(--color-muted)" domain={[0, 5]} />
                    <Radar
                      name="Proficiency"
                      dataKey="value"
                      stroke="var(--color-primary)"
                      fill="var(--color-primary)"
                      fillOpacity={0.6}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Skill Distribution */}
          <ScrollReveal delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle>Skill Distribution</CardTitle>
                <CardDescription>Skills by proficiency level</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={skillStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="domain" stroke="var(--color-muted)" />
                    <YAxis stroke="var(--color-muted)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="master" fill="var(--color-primary)" name="Master" />
                    <Bar dataKey="expert" fill="var(--color-accent)" name="Expert" />
                    <Bar dataKey="advanced" fill="var(--color-secondary)" name="Advanced" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Skills Overview */}
        <ScrollReveal>
          <Card>
            <CardHeader>
              <CardTitle>Skills Overview</CardTitle>
              <CardDescription>Detailed breakdown of technical expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Frontend Development</h4>
                  <div className="space-y-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Backend Development</h4>
                  <div className="space-y-2">
                    {["Node.js", "PostgreSQL", "GraphQL", "Docker"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Mobile Development</h4>
                  <div className="space-y-2">
                    {["React Native", "Flutter", "Firebase", "Swift"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Security & Systems</h4>
                  <div className="space-y-2">
                    {["Penetration Testing", "Kubernetes", "OWASP", "Cryptography"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
