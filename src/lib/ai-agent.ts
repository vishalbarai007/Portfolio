export interface ConversationContext {
  domain?: string
  previousMessages?: Array<{ role: string; content: string }>
}

const knowledgeBase: Record<string, string> = {
  "web development": `I specialize in full-stack web development using Next.js, React, and TypeScript. I build scalable, performant applications with modern tooling and best practices. My expertise includes frontend development, backend APIs, database design, and deployment on cloud platforms.`,

  "app development": `I have extensive experience building cross-platform mobile applications using React Native and Flutter. I focus on creating intuitive user interfaces, optimizing performance, and integrating with backend services. I've shipped multiple production apps to both iOS and Android platforms.`,

  "software engineering": `I design and implement robust software systems using microservices architecture and distributed systems principles. I have expertise in Go, Rust, Kubernetes, and cloud infrastructure. I focus on scalability, reliability, and maintainability in all my projects.`,

  security: `My security expertise includes penetration testing, vulnerability assessment, and secure coding practices. I conduct security audits, perform threat modeling, and help teams build secure systems from the ground up. I'm passionate about protecting systems and data.`,

  experience: `I have over 6 years of professional experience across multiple domains. I've worked as a Senior Full Stack Developer, Mobile App Developer, Software Engineer, and Security Researcher. Each role has given me unique perspectives on solving complex technical challenges.`,

  technologies: `I work with a diverse tech stack including React, Next.js, TypeScript, Node.js, Go, Rust, Kubernetes, Docker, PostgreSQL, MongoDB, and many others. I'm always learning new technologies and best practices.`,

  projects: `I've worked on various projects including e-commerce platforms, fitness tracking apps, distributed systems, and security audit tools. Each project has taught me valuable lessons about architecture, performance, and user experience.`,
}

export function generateAIResponse(message: string, context?: ConversationContext): string {
  const lowerMessage = message.toLowerCase()

  // Find the best matching knowledge base entry
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lowerMessage.includes(key)) {
      return value
    }
  }

  // Default response
  return `Thanks for your question! I'm a versatile developer with expertise across multiple domains. Feel free to ask me about web development, app development, software engineering, cybersecurity, or my experience. What would you like to know?`
}

export function extractDomainFromMessage(message: string): string | null {
  const domains = ["web", "app", "software", "security"]
  const lowerMessage = message.toLowerCase()

  for (const domain of domains) {
    if (lowerMessage.includes(domain)) {
      return domain
    }
  }

  return null
}
