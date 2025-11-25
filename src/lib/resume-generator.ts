export interface ResumeData {
  name: string
  title: string
  email: string
  location: string
  summary: string
  skills: Record<string, string[]>
  experience: Array<{
    title: string
    company: string
    startDate: string
    endDate?: string
    description: string
    highlights: string[]
  }>
}

export function generateResumeMarkdown(data: ResumeData, domain: string): string {
  const domainSkills = data.skills[domain] || []

  return `# ${data.name}
${data.title}

## Contact
- Email: ${data.email}
- Location: ${data.location}

## Professional Summary
${data.summary}

## Skills
${domainSkills.map((skill) => `- ${skill}`).join("\n")}

## Experience
${data.experience
  .map(
    (exp) => `
### ${exp.title}
**${exp.company}** | ${exp.startDate} - ${exp.endDate || "Present"}

${exp.description}

${exp.highlights.map((h) => `- ${h}`).join("\n")}
`,
  )
  .join("\n")}
`
}

export function generateResumeJSON(data: ResumeData, domain: string): string {
  const domainSkills = data.skills[domain] || []

  return JSON.stringify(
    {
      name: data.name,
      title: data.title,
      email: data.email,
      location: data.location,
      summary: data.summary,
      skills: domainSkills,
      experience: data.experience,
    },
    null,
    2,
  )
}
