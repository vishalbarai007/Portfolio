"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import about from "@/data/about.json"
import skills from "@/data/skills.json"
import { Code2, Github, Linkedin, Mail, MapPin, Server, Shield, Smartphone } from "lucide-react"
import { SkillHoverCard } from "@/components/layout/skill-hover-card"

export default function AboutPage() {
  const techLogos: Record<string, string> = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "Swift": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    "Rust": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    "Xcode": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
  }

  const domainConfig = {
    web: {
      icon: Code2,
      label: "Web Development",
      gradient: "from-primary/20 to-accent/20",
      iconColor: "text-primary",
      borderColor: "hover:border-primary/30"
    },
    app: {
      icon: Smartphone,
      label: "App Development",
      gradient: "from-accent/20 to-primary/20",
      iconColor: "text-accent",
      borderColor: "hover:border-accent/30"
    },
    software: {
      icon: Server,
      label: "Software Engineering",
      gradient: "from-secondary/20 to-primary/20",
      iconColor: "text-secondary",
      borderColor: "hover:border-secondary/30"
    },
    security: {
      icon: Shield,
      label: "Security & Pentesting",
      gradient: "from-accent/30 to-destructive/20",
      iconColor: "text-accent",
      borderColor: "hover:border-accent/30"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        {/* Profile Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-8">
          {/* Avatar Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-border bg-muted shrink-0 shadow-lg group">
            <Image
              src="/Images/mypersonal/avatar.png"
              alt={about.name}
              fill
              sizes="(max-w-768px) 160px, 192px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-none">
              {about.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {about.title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {about.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a href={`https://github.com/vishalbarai007`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href={`https://linkedin.com/in/vishalbarai`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href={`mailto:${about.email}`}
                className="group p-3 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* About & Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Card */}
          <Card className="md:col-span-2 bg-card/60 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 shadow-soft hover:shadow-medium group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/15 border border-primary/20 group-hover:bg-primary/25 transition-all">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground font-bold tracking-tight">About Me</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>{about.summary}</p>
              <p>
                I'm passionate about solving complex technical challenges, writing clean and modular code, and continuously learning new technologies.
                My diverse background across multiple domains allows me to bring unique perspectives and cross-functional solutions to every project.
              </p>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-card/60 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 shadow-soft hover:shadow-medium group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/15 border border-accent/20 group-hover:bg-accent/25 transition-all">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground font-bold tracking-tight">Connect</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3.5 group cursor-pointer p-2.5 rounded-xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/35">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">{about.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group cursor-pointer p-2.5 rounded-xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/35">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground truncate">{about.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Technologies I work with across different domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([domain, domainSkills]) => {
              const config = domainConfig[domain as keyof typeof domainConfig]
              const Icon = config.icon

              return (
                <Card key={domain} className={`bg-card border-border shadow-soft hover:shadow-medium ${config.borderColor} transition-all duration-300 group`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${config.gradient} group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${config.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{config.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {Object.entries(domainSkills).map(([category, skillList]) => (
                      <div key={category} className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(skillList as string[]).map((skill) => {
                            const logo = techLogos[skill]
                            return (
                              <SkillHoverCard key={skill} skill={skill} logo={logo}>
                                <Badge
                                  variant="secondary"
                                  className="bg-muted hover:bg-muted/80 text-card-foreground border border-border hover:border-primary/30 transition-all cursor-default pl-2 pr-3 py-1.5 gap-2"
                                >
                                  {logo && (
                                    <img
                                      src={logo}
                                      alt={skill}
                                      className="w-4 h-4 object-contain"
                                      onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                      }}
                                    />
                                  )}
                                  <span>{skill}</span>
                                </Badge>
                              </SkillHoverCard>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
