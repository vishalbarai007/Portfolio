"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface SkillLevel {
  name: string
  level: number
  category: string
}

const skillLevels: Record<string, SkillLevel[]> = {
  web: [
    { name: "React", level: 5, category: "frontend" },
    { name: "Next.js", level: 5, category: "frontend" },
    { name: "TypeScript", level: 5, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "PostgreSQL", level: 4, category: "backend" },
    { name: "GraphQL", level: 4, category: "backend" },
    { name: "Docker", level: 3, category: "tools" },
  ],
  app: [
    { name: "React Native", level: 5, category: "mobile" },
    { name: "Flutter", level: 4, category: "mobile" },
    { name: "Firebase", level: 4, category: "backend" },
    { name: "Swift", level: 3, category: "mobile" },
    { name: "Kotlin", level: 3, category: "mobile" },
    { name: "Mobile UI/UX", level: 5, category: "mobile" },
  ],
  software: [
    { name: "Go", level: 5, category: "languages" },
    { name: "Kubernetes", level: 4, category: "systems" },
    { name: "Microservices", level: 5, category: "systems" },
    { name: "System Design", level: 5, category: "systems" },
    { name: "Rust", level: 3, category: "languages" },
    { name: "gRPC", level: 4, category: "systems" },
  ],
  security: [
    { name: "Penetration Testing", level: 5, category: "specialties" },
    { name: "Vulnerability Assessment", level: 5, category: "specialties" },
    { name: "Secure Coding", level: 4, category: "specialties" },
    { name: "OWASP", level: 5, category: "specialties" },
    { name: "Cryptography", level: 4, category: "specialties" },
    { name: "Network Security", level: 4, category: "specialties" },
  ],
}

const domainColors: Record<string, string> = {
  web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  app: "bg-green-500/10 text-green-400 border-green-500/20",
  software: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  security: "bg-red-500/10 text-red-400 border-red-500/20",
}

const domainBgColors: Record<string, string> = {
  web: "bg-blue-500",
  app: "bg-green-500",
  software: "bg-purple-500",
  security: "bg-red-500",
}

export default function SkillMatrixEnhanced() {
  const [selectedDomain, setSelectedDomain] = useState("web")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLevel, setFilterLevel] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.5,
          markers: false,
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selectedDomain])

  const getLevelLabel = (level: number) => {
    const labels = ["", "Beginner", "Intermediate", "Advanced", "Expert", "Master"]
    return labels[level] || ""
  }

  const filteredSkills = skillLevels[selectedDomain].filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = filterLevel === null || skill.level === filterLevel
    return matchesSearch && matchesLevel
  })

  const skillsByCategory = filteredSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, SkillLevel[]>,
  )

  return (
    <Card ref={containerRef}>
      <CardHeader>
        <CardTitle>Skill Matrix</CardTitle>
        <CardDescription>Proficiency levels across different domains</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={selectedDomain} onValueChange={setSelectedDomain}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="app">App</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {Object.keys(skillLevels).map((domain) => (
            <TabsContent key={domain} value={domain} className="space-y-6">
              {/* Search and Filter */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                  <Input
                    placeholder="Search skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Level Filter */}
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setFilterLevel(null)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      filterLevel === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border hover:border-primary/50"
                    }`}
                  >
                    All Levels
                  </button>
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setFilterLevel(level)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        filterLevel === level
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border hover:border-primary/50"
                      }`}
                    >
                      {getLevelLabel(level)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills by Category */}
              <div ref={skillsRef} className="space-y-6">
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary capitalize">{category}</h4>
                    <div className="space-y-3">
                      {skills.map((skill) => (
                        <div key={skill.name} className="skill-item space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {getLevelLabel(skill.level)}
                            </Badge>
                          </div>
                          <div className="w-full bg-card border border-border rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full ${domainBgColors[domain]} transition-all`}
                              style={{ width: `${(skill.level / 5) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {filteredSkills.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted">No skills found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
