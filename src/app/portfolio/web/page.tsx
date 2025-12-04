"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Loader2, Star, Code2, ExternalLink, GitFork, Sparkles } from "lucide-react"

interface Project {
  id: string
  name: string
  description: string
  url: string
  homepage?: string
  topics: string[]
  stars: number
  forks?: number
  language: string
}

export default function WebPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/github?domain=web")
        if (!response.ok) throw new Error("Failed to fetch projects")
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Language color mapping
  const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400/20 text-yellow-600 dark:text-yellow-400",
      TypeScript: "bg-blue-400/20 text-blue-600 dark:text-blue-400",
      Python: "bg-green-400/20 text-green-600 dark:text-green-400",
      React: "bg-cyan-400/20 text-cyan-600 dark:text-cyan-400",
      "Next.js": "bg-foreground/20 text-foreground",
      Go: "bg-cyan-400/20 text-cyan-600 dark:text-cyan-400",
      Rust: "bg-orange-400/20 text-orange-600 dark:text-orange-400",
      default: "bg-muted text-muted-foreground"
    }
    return colors[language] || colors.default
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Web Development</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Full Stack Web Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Building scalable, responsive web applications with modern frameworks and best practices
          </p>

          {/* Stats */}
          {!loading && projects.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{projects.length}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Star className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {projects.reduce((acc, p) => acc + p.stars, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Stars</div>
                </div>
              </div>
              {projects.some(p => p.forks) && (
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <GitFork className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {projects.reduce((acc, p) => acc + (p.forks || 0), 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Forks</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
            <div className="relative">
              <Loader2 className="animate-spin text-primary" size={48} />
              <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse"></div>
            </div>
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Card className="bg-destructive/10 border-destructive/20 shadow-soft">
            <CardContent className="py-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-destructive/20">
                  <Sparkles className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-destructive mb-1">Error Loading Projects</h3>
                  <p className="text-sm text-destructive/80">{error}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={project.id}
                className="group h-full bg-card border-border hover:border-primary/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] flex flex-col"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardHeader className="flex-none">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {project.name}
                    </CardTitle>
                    {project.stars > 0 && (
                      <Badge variant="secondary" className="flex items-center gap-1 bg-muted shrink-0">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        {project.stars}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                    {project.description || "No description available"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  {/* Topics */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 flex-1">
                      {project.topics.slice(0, 4).map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground border border-border"
                        >
                          {topic}
                        </Badge>
                      ))}
                      {project.topics.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          +{project.topics.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Language and Stats */}
                  <div className="flex items-center gap-4 text-sm pt-2 border-t border-border">
                    {project.language && (
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getLanguageColor(project.language)}`}>
                          {project.language}
                        </span>
                      </div>
                    )}
                    {project.forks !== undefined && project.forks > 0 && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2 hover:bg-accent/10 hover:text-accent hover:border-accent/50"
                      >
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && !error && (
          <Card className="bg-card border-border shadow-soft">
            <CardContent className="py-16 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No Projects Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Configure your GitHub API integration to display your web development projects here.
              </p>
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Configure GitHub Integration
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}