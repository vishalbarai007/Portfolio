"use client"

import React from "react"
import { Timeline } from "@/components/ui/timeline"
import experiences from "@/data/experiences.json"
import education from "@/data/education.json"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, GraduationCap, MapPin, ExternalLink, Award } from "lucide-react"

export function TimelineDemo() {
  // Helper to render skills section
  const renderSkills = (skillsList?: string[]) => {
    if (!skillsList || skillsList.length === 0) return null
    return (
      <div className="flex flex-wrap items-center gap-1.5 mt-2">
        <span className="text-xs font-semibold text-muted-foreground mr-1">Skills:</span>
        {skillsList.map((skill, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="text-[11px] px-2 py-0.5 bg-muted/60 text-foreground border border-border/80"
          >
            {skill}
          </Badge>
        ))}
      </div>
    )
  }

  // 1. Structure the Education Timeline Data
  const educationTimelineData = education.map((edu) => {
    const title = edu.periodText.split("–")[0].trim() || "Education"

    return {
      title,
      content: (
        <div className="space-y-4 border border-border/80 rounded-xl p-6 bg-card/50 backdrop-blur-xs shadow-sm hover:border-primary/45 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-foreground leading-snug">
                {edu.institution}
              </h4>
              <p className="text-sm font-medium text-foreground/80">
                {edu.degree}, <span className="text-muted-foreground">{edu.field}</span>
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {edu.periodText}
              </p>
            </div>
          </div>

          {edu.grade && (
            <div className="flex items-center gap-1.5 text-sm text-foreground/90 font-medium">
              <Award className="w-4 h-4 text-accent" />
              <span>Grade: <span className="text-accent">{edu.grade}</span></span>
            </div>
          )}

          {edu.description && (
            <p className="text-muted-foreground text-sm leading-relaxed pt-1">
              {edu.description}
            </p>
          )}

          {renderSkills(edu.skills)}

          {edu.linkText && (
            <a
              href={edu.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg border border-border/80 bg-muted/20 hover:bg-muted/40 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 rounded border border-border/60 bg-muted/30 flex items-center justify-center text-[10px] font-bold text-muted-foreground shrink-0 overflow-hidden">
                  MCT
                </div>
                <span className="text-xs font-semibold text-foreground/90 group-hover:text-primary transition-colors line-clamp-1">
                  {edu.linkText}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          )}
        </div>
      ),
    }
  })

  // 2. Structure the Experience Timeline Data
  // Group experiences by company/organization
  const uniqueCompanies = Array.from(new Set(experiences.map((exp) => exp.company)))

  const experienceTimelineData = uniqueCompanies.map((companyName) => {
    const roles = experiences.filter((exp) => exp.company === companyName)
    // Primary date representation for the timeline track indicator
    const primaryPeriod = roles[0].periodText.split("-")[0].trim() || "Experience"

    // If there is only one role in this company/organization
    if (roles.length === 1) {
      const exp = roles[0]
      return {
        title: primaryPeriod,
        content: (
          <div className="space-y-4 border border-border/80 rounded-xl p-6 bg-card/50 backdrop-blur-xs shadow-sm hover:border-primary/45 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-foreground leading-snug">
                  {exp.title}
                </h4>
                <p className="text-sm font-medium text-foreground/80">
                  {exp.company} &bull; <span className="text-muted-foreground">{exp.employmentType}</span>
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.periodText}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location.split("·")[0].trim()}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {exp.description && (
              <p className="text-muted-foreground text-sm leading-relaxed pt-1">
                {exp.description}
              </p>
            )}

            {renderSkills(exp.skills)}
          </div>
        ),
      }
    }

    // If multiple roles (nested timeline) in the same company/organization (e.g. RGIT CESS)
    const sortedRoles = [...roles].sort((a, b) => b.id - a.id) // Sort to put Web Secretary first, then Head of Web Development
    const groupPeriodText = roles[0].groupPeriodText || "Self-employed"

    return {
      title: primaryPeriod,
      content: (
        <div className="border border-border/80 rounded-xl p-6 bg-card/50 backdrop-blur-xs shadow-sm hover:border-primary/45 transition-all space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-foreground leading-snug">
                {companyName}
              </h4>
              <p className="text-sm text-muted-foreground font-medium">
                {groupPeriodText}
              </p>
              {roles[0].location && (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {roles[0].location.split("·")[0].trim()}
                </p>
              )}
            </div>
          </div>

          {/* Nested Roles List */}
          <div className="relative pl-6 border-l border-border/80 space-y-6 ml-3">
            {sortedRoles.map((role, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Connector Dot */}
                <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-background border border-border/85 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="space-y-1">
                  <h5 className="text-base font-bold text-foreground leading-snug">
                    {role.title}
                  </h5>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {role.periodText}
                  </p>
                </div>

                {role.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {role.description}
                  </p>
                )}

                {renderSkills(role.skills)}
              </div>
            ))}
          </div>
        </div>
      ),
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Experience Timeline Section */}
      <div>
        <Timeline
          data={experienceTimelineData}
          title="Work Experience"
          description="A timeline of my professional journey, software roles, leadership, and engineering society activities."
        />
      </div>

      {/* Education Timeline Section */}
      <div className="border-t border-border/50 pt-16">
        <Timeline
          data={educationTimelineData}
          title="Education"
          description="Academic achievements, computer sciences studies, secondary school, and certification history."
        />
      </div>
    </div>
  )
}
