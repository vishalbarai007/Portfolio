"use client"

import ScrollReveal from "@/components/sections/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import about from "@/data/about.json"
import skills from "@/data/skills.json"
import { Briefcase, Code, Code2, Github, GraduationCap, Linkedin, Mail, MapPin, Server, Shield, Smartphone, Sparkles } from "lucide-react"

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
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              {about.name}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              {about.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {about.bio}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <a href={`https://github.com/vishalbarai007`}
              className="group p-3 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href={`https://linkedin.com/in/vishalbarai`}
              className="group p-3 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href={`mailto:${about.email}`}
              className="group p-3 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>

        {/* About & Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* About Card */}
          <Card className="md:col-span-2 bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all`}>
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">About Me</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">{about.summary}</p>
              <p className="leading-relaxed">
                I'm passionate about solving complex technical challenges and continuously learning new technologies.
                My diverse background across multiple domains allows me to bring unique perspectives to every project.
              </p>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-card-foreground font-medium">{about.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-card-foreground font-medium break-all">{about.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground">Technologies I work with across different domains</p>
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
                              <Badge
                                key={skill}
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
