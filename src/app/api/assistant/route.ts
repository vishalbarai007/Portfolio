import { NextResponse } from "next/server"
import about from "@/data/about.json"
import skills from "@/data/skills.json"

const contextResponses: Record<string, string> = {
  "tech stack": `I use a diverse tech stack depending on the project domain. For web development, I primarily work with Next.js, React, TypeScript, and Tailwind CSS. For app development, I use React Native and Flutter. For software engineering, I work with Go, Rust, and Kubernetes. For security, I use Python and specialized security tools.`,

  "web development": `In web development, I specialize in building full-stack applications using Next.js and React. I focus on creating responsive, performant applications with modern tooling and best practices. I have experience with databases like PostgreSQL and MongoDB, and I'm proficient in both frontend and backend development.`,

  "app development": `I have extensive experience building cross-platform mobile applications. I've worked with React Native for iOS and Android development, and Flutter for high-performance apps. I focus on creating intuitive user interfaces and optimizing app performance.`,

  security: `My security expertise includes penetration testing, vulnerability assessment, and secure coding practices. I hold certifications in ethical hacking and have conducted security audits for multiple organizations. I'm passionate about helping teams build secure systems from the ground up.`,

  "software engineering": `I design and implement robust software systems using microservices architecture and distributed systems principles. I have experience with Kubernetes, Docker, and cloud platforms. I focus on scalability, reliability, and maintainability in all my projects.`,

  experience: `I have over 6 years of professional experience across multiple domains. I've worked as a Senior Full Stack Developer, Mobile App Developer, Software Engineer, and Security Researcher. Each role has given me unique perspectives on solving complex technical challenges.`,

  project: `My most complex projects involve distributed systems and microservices architecture. I've built real-time analytics engines, high-performance caching systems, and security audit platforms. Each project taught me valuable lessons about scalability and system design.`,

  cloud: `I have experience with major cloud platforms including AWS, Google Cloud, and Azure. I'm proficient in deploying and managing applications on these platforms, with a focus on cost optimization and security.`,

  skills: `I have expertise across multiple technical domains. My key skills include: ${Object.entries(skills)
    .map(([domain, domainSkills]) => {
      const allSkills = Object.values(domainSkills).flat()
      return `${domain}: ${(allSkills as string[]).slice(0, 3).join(", ")}`
    })
    .join("; ")}`,

  about: `${about.bio} I'm passionate about solving complex technical challenges and continuously learning new technologies.`,
}

function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Check for keyword matches
  for (const [keyword, response] of Object.entries(contextResponses)) {
    if (lowerMessage.includes(keyword)) {
      return response
    }
  }

  // Default response
  return `Thanks for your question! I'm a versatile developer with expertise across multiple domains including web development, app development, software engineering, and cybersecurity. Feel free to ask me more specific questions about any of these areas or my experience.`
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    // Generate response based on context
    const response = findBestResponse(message.trim())

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Assistant API error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
