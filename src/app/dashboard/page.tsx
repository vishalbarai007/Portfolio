"use client"

import ScrollReveal from "@/components/scroll-reveal"
import SkillMatrix from "@/components/skill-matrix"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const projectStats = [
  { domain: "Web", projects: 12, completed: 10 },
  { domain: "App", projects: 8, completed: 7 },
  { domain: "Software", projects: 6, completed: 5 },
  { domain: "Security", projects: 5, completed: 4 },
]

const domainStats = [
  { domain: "Web Development", yearsExp: 6, projects: 12, technologies: 8 },
  { domain: "App Development", yearsExp: 4, projects: 8, technologies: 5 },
  { domain: "Software Engineering", yearsExp: 5, projects: 6, technologies: 7 },
  { domain: "Cybersecurity", yearsExp: 3, projects: 5, technologies: 6 },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg text-muted max-w-2xl">
            Overview of skills, experience, and project statistics across all domains
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {domainStats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">{stat.domain}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-2xl font-bold">{stat.yearsExp}+</p>
                    <p className="text-xs text-muted">Years Experience</p>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <div>
                      <p className="font-semibold">{stat.projects}</p>
                      <p className="text-muted">Projects</p>
                    </div>
                    <div>
                      <p className="font-semibold">{stat.technologies}</p>
                      <p className="text-muted">Technologies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Skill Matrix */}
        <ScrollReveal className="mb-12">
          <SkillMatrix />
        </ScrollReveal>

        {/* Project Statistics */}
        <ScrollReveal>
          <Card>
            <CardHeader>
              <CardTitle>Project Statistics</CardTitle>
              <CardDescription>Completed projects by domain</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectStats}>
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
                  <Bar dataKey="projects" fill="var(--color-primary)" />
                  <Bar dataKey="completed" fill="var(--color-accent)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
