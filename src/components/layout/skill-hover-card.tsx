"use client"

import * as React from "react"
import { Github, ExternalLink, Code2 } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import skillsProjectsData from "@/data/skills-projects.json"

interface ProjectItem {
  name: string
  description: string
  repoUrl: string
  liveUrl?: string
}

interface SkillHoverCardProps {
  skill: string
  logo?: string
  children: React.ReactNode
}

const typedSkillsProjects = skillsProjectsData as Record<string, ProjectItem[]>

export function SkillHoverCard({ skill, logo, children }: SkillHoverCardProps) {
  const projects = typedSkillsProjects[skill] || []

  return (
    <HoverCard openDelay={150} closeDelay={150}>
      <HoverCardTrigger asChild>
        <span className="inline-block cursor-pointer">
          {children}
        </span>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="center"
        sideOffset={8}
        className="w-[320px] p-4 border border-border bg-card text-card-foreground shadow-xl rounded-xl z-50 transition-all duration-300"
      >
        <div className="space-y-4 text-left">
          {/* Header */}
          <div className="flex items-center gap-2 pb-2 border-b border-border/60">
            {logo ? (
              <img
                src={logo}
                alt={skill}
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            ) : (
              <Code2 className="w-5 h-5 text-primary" />
            )}
            <h4 className="text-sm font-bold text-foreground">
              {skill} Projects
            </h4>
          </div>

          {/* Project List */}
          {projects.length > 0 ? (
            <div className="space-y-3">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg border border-border/80 bg-muted/20 hover:bg-muted/40 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-foreground font-mono">
                      {project.name}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="Source Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-normal">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-2 space-y-2">
              <p className="text-[11px] text-muted-foreground leading-normal">
                Currently working on projects in this tech stack. Check out my GitHub for active repositories!
              </p>
              <a
                href="https://github.com/vishalbarai007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-primary hover:underline"
              >
                <Github className="w-3 h-3" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
