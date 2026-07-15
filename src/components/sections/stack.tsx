"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Github, Code } from "lucide-react"

// Define the stack items based on the user's screenshots
const stackCategories = [
  {
    num: "01",
    name: "Language",
    skills: ["Java", "JavaScript", "TypeScript", "PHP"],
  },
  {
    num: "02",
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Motion", "GSAP"],
  },
  {
    num: "03",
    name: "Backend & Database",
    skills: ["Spring Boot", "Apache Kafka", "Spring Security", "Hibernate/JPA", "PostgreSQL", "MongoDB", "Redis", "Microservices"],
  },
  {
    num: "04",
    name: "Workflow & AI",
    skills: ["Git", "GitHub", "Docker", "Kali Linux", "IntelliJ IDEA", "Antigravity IDE", "Maven / Gradle"],
  },
  {
    num: "05",
    name: "Design",
    skills: ["Figma", "Canva", "Blender", "Paper"],
  },
  {
    num: "06",
    name: "CMS",
    skills: ["WordPress", "Shopify", "Wix"],
  },
  {
    num: "07",
    name: "Cloud",
    skills: ["AWS", "Microsoft Azure"],
  },
]

// Project database to show inside the modal when a skill is clicked
const projectsDatabase = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance full-stack e-commerce solution with real-time inventory management, Stripe integration, and analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "React", "Git", "GitHub"],
    repoUrl: "https://github.com/vishalbarai007/nextjs-ecommerce",
    liveUrl: "https://ecommerce-demo.example.com",
  },
  {
    title: "Spring Boot Microservices Platform",
    description: "Distributed microservices backend for financial transactions featuring high-concurrency security, JWT auth, and Dockerized setups.",
    tags: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "PostgreSQL", "Redis", "Microservices", "Docker", "Git"],
    repoUrl: "https://github.com/vishalbarai007/spring-microservices",
  },
  {
    title: "Distributed Log Pipeline",
    description: "Real-time logging analytics pipeline built on Apache Kafka, aggregating events across microservices and pushing metrics to MongoDB.",
    tags: ["Java", "Apache Kafka", "Spring Boot", "MongoDB", "Microservices", "Docker", "IntelliJ IDEA"],
    repoUrl: "https://github.com/vishalbarai007/kafka-log-pipeline",
  },
  {
    title: "Cybersecurity Vulnerability Audit Tool",
    description: "Automated network penetration testing script suite designed for scanning open ports, outdated software packages, and reporting exposures.",
    tags: ["Kali Linux", "Linux", "Docker", "Git", "GitHub"],
    repoUrl: "https://github.com/vishalbarai007/security-audit-tool",
  },
  {
    title: "React Native Fitness Tracker",
    description: "Cross-platform mobile application supporting real-time workout tracking, AI-powered health suggestions, and offline syncing.",
    tags: ["React Native", "React", "TypeScript", "JavaScript", "Firebase", "Design", "Figma"],
    repoUrl: "https://github.com/vishalbarai007/fitness-tracker-app",
  },
  {
    title: "AWS Cloud Serverless Architecture",
    description: "Infrastructure as Code setup deploying serverless APIs using AWS Lambda, API Gateway, and CloudFront with automated GitHub Actions CI/CD.",
    tags: ["AWS", "Docker", "GitHub", "Git"],
    repoUrl: "https://github.com/vishalbarai007/aws-serverless-deploy",
  },
  {
    title: "Custom WordPress Blog Engine",
    description: "A fast, SEO-optimized custom WordPress theme and plugins designed for dynamic media sharing and developer documentation.",
    tags: ["WordPress", "PHP", "JavaScript", "Design", "Figma"],
    repoUrl: "https://github.com/vishalbarai007/wordpress-blog-engine",
  },
]

export default function Stack() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  // Filter projects by technology tags
  const matchingProjects = selectedSkill
    ? projectsDatabase.filter((project) =>
        project.tags.some((tag) => tag.toLowerCase() === selectedSkill.toLowerCase())
      )
    : []

  return (
    <section id="stack" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-0 scroll-mt-20">
      <div className="space-y-12">
        {/* Section Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Stack
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            My technology toolbelt and frameworks I work with. Click any skill to view related GitHub repositories.
          </p>
        </div>

        {/* Stack Rows */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden bg-card divide-y divide-neutral-200 dark:divide-neutral-800 shadow-sm transition-all duration-300">
          {stackCategories.map((cat) => (
            <div
              key={cat.name}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start p-6 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors"
            >
              {/* Category Number & Name */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-sm font-mono text-neutral-400 font-bold select-none">
                  {cat.num}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {cat.name}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(skill)}
                    className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-black rounded-lg transition-transform active:scale-95"
                  >
                    <Badge
                      variant="outline"
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-card hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-300 dark:border-neutral-800 text-foreground cursor-pointer transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={selectedSkill !== null} onOpenChange={(open) => !open && setSelectedSkill(null)}>
        <DialogContent className="max-w-md rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-card p-6 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2 text-foreground">
              <Code size={20} className="text-neutral-500" />
              {selectedSkill} Projects
            </DialogTitle>
            <DialogDescription className="text-neutral-500 text-sm">
              GitHub repositories matching "{selectedSkill}"
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-4 max-h-[350px] overflow-y-auto pr-1">
            {matchingProjects.length > 0 ? (
              matchingProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 space-y-3"
                >
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-semibold px-2 py-0.5 rounded-md border ${
                          tag.toLowerCase() === selectedSkill?.toLowerCase()
                            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white"
                            : "bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 border-neutral-300/30 dark:border-neutral-700/30"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-foreground transition-colors"
                    >
                      <Github size={14} /> Repository
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center space-y-2 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <p className="text-sm text-neutral-500">No public projects listed for {selectedSkill} yet.</p>
                <p className="text-xs text-neutral-400">Check my main GitHub profile for updates.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
