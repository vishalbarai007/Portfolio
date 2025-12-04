"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"
import { Download, Loader2 } from "lucide-react"
import about from "@/data/about.json"
import skills from "@/data/skills.json"

const domains = [
  { id: "web", label: "Web Developer Resume", color: "bg-blue-500/10 text-blue-400" },
  { id: "app", label: "App Developer Resume", color: "bg-green-500/10 text-green-400" },
  { id: "software", label: "Software Engineer Resume", color: "bg-purple-500/10 text-purple-400" },
  { id: "security", label: "Security Specialist Resume", color: "bg-red-500/10 text-red-400" },
]

export default function ResumePage() {
  const [selectedDomain, setSelectedDomain] = useState<string>("web")
  const [loading, setLoading] = useState(false)

  const handleDownload = async (domain: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/resume?domain=${domain}`)
      if (!response.ok) throw new Error("Failed to generate resume")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `resume-${domain}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download error:", error)
    } finally {
      setLoading(false)
    }
  }

  const domainSkills = skills[selectedDomain as keyof typeof skills] || skills.web

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Generate domain-specific resumes tailored to your professional focus
          </p>
        </ScrollReveal>

        {/* Domain Selection */}
        <ScrollReveal className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedDomain === domain.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold">{domain.label}</p>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Resume Preview */}
        <ScrollReveal className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{about.name}</CardTitle>
              <CardDescription>{about.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Professional Summary</h3>
                <p className="text-muted">{about.summary}</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Skills</h3>
                <div className="space-y-3">
                  {Object.entries(domainSkills).map(([category, skillList]) => (
                    <div key={category}>
                      <p className="text-sm font-medium text-primary mb-2 capitalize">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {(skillList as string[]).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted">Email:</span> {about.email}
                  </p>
                  <p>
                    <span className="text-muted">Location:</span> {about.location}
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <Button
                onClick={() => handleDownload(selectedDomain)}
                disabled={loading}
                className="w-full gap-2"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Generating...
                  </>
                ) : (
                  <>
                    <Download size={20} /> Download {selectedDomain.charAt(0).toUpperCase() + selectedDomain.slice(1)}{" "}
                    Resume
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
