"use client"
import SkillMatrixEnhanced from "./skill-matrix-enhanced"

interface SkillLevel {
  name: string
  level: number // 1-5
}

const skillLevels: Record<string, SkillLevel[]> = {
  web: [
    { name: "React", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "TypeScript", level: 5 },
    { name: "Tailwind CSS", level: 5 },
    { name: "Node.js", level: 4 },
    { name: "PostgreSQL", level: 4 },
    { name: "GraphQL", level: 4 },
    { name: "Docker", level: 3 },
  ],
  app: [
    { name: "React Native", level: 5 },
    { name: "Flutter", level: 4 },
    { name: "Firebase", level: 4 },
    { name: "Swift", level: 3 },
    { name: "Kotlin", level: 3 },
    { name: "Mobile UI/UX", level: 5 },
  ],
  software: [
    { name: "Go", level: 5 },
    { name: "Kubernetes", level: 4 },
    { name: "Microservices", level: 5 },
    { name: "System Design", level: 5 },
    { name: "Rust", level: 3 },
    { name: "gRPC", level: 4 },
  ],
  security: [
    { name: "Penetration Testing", level: 5 },
    { name: "Vulnerability Assessment", level: 5 },
    { name: "Secure Coding", level: 4 },
    { name: "OWASP", level: 5 },
    { name: "Cryptography", level: 4 },
    { name: "Network Security", level: 4 },
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

export default function SkillMatrix() {
  return <SkillMatrixEnhanced />
}
