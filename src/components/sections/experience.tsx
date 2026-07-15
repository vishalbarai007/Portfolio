"use client"

import React from "react"
import experiences from "@/data/experiences.json"
import { Briefcase, ArrowRight } from "lucide-react"

export default function Experience() {
  // Sort experiences by start date (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    // If endDate is null, it is current
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0
    return dateB - dateA
  })

  return (
    <section id="experience" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-0 scroll-mt-20">
      <div className="space-y-12">
        {/* Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            A timeline of my professional journey and projects.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12 py-2">
          {sortedExperiences.map((exp) => {
            const startYear = exp.startDate ? new Date(exp.startDate).getFullYear() : ""
            const endYear = exp.endDate ? new Date(exp.endDate).getFullYear() : "Present"
            const duration = startYear ? `${startYear} — ${endYear}` : "Present"

            return (
              <div key={exp.id} className="relative group">
                {/* Bullet Node */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-white dark:group-hover:bg-black transition-colors" />
                </div>

                {/* Timeline Card */}
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 bg-card hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-300 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-neutral-500 font-mono mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-mono w-fit">
                      {duration}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 pl-1.5">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          <ArrowRight size={12} className="mt-1 shrink-0 text-neutral-400 dark:text-neutral-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
