import { NextResponse } from "next/server"
import about from "@/data/about.json"
import skills from "@/data/skills.json"
import experiences from "@/data/experiences.json"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get("domain") || "web"

  try {
    // Get domain-specific skills
    const domainSkills = skills[domain as keyof typeof skills] || skills.web
    const domainExperiences = experiences.filter((exp) => exp.domain === domain)

    // Build resume content
    const resumeContent = `
================================================================================
                              ${about.name.toUpperCase()}
================================================================================

${about.title} | ${about.location}
Email: ${about.email}
GitHub: ${about.social.github}
LinkedIn: ${about.social.linkedin}

================================================================================
PROFESSIONAL SUMMARY
================================================================================

${about.summary}

Specialized in ${domain} development with a proven track record of delivering 
high-quality solutions. Experienced in leading technical initiatives and 
collaborating with cross-functional teams.

================================================================================
CORE COMPETENCIES
================================================================================

${Object.entries(domainSkills)
  .map(([category, skillList]) => {
    return `${category.toUpperCase()}: ${(skillList as string[]).join(", ")}`
  })
  .join("\n")}

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================

${domainExperiences
  .map((exp) => {
    const startDate = new Date(exp.startDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
    const endDate = exp.endDate
      ? new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
      : "Present"

    return `
${exp.title.toUpperCase()}
${exp.company} | ${startDate} - ${endDate}

${exp.description}

Key Achievements:
${exp.highlights.map((h) => `• ${h}`).join("\n")}
    `
  })
  .join("\n")}

================================================================================
EDUCATION
================================================================================

Bachelor of Science in Computer Science
University of Technology

================================================================================
CERTIFICATIONS & ACHIEVEMENTS
================================================================================

• Advanced Proficiency in ${domain} Development
• Strong Problem-Solving and System Design Skills
• Team Leadership and Mentoring Experience
• Continuous Learning and Technology Adoption

================================================================================
    `.trim()

    // Return as text file
    return new NextResponse(resumeContent, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="resume-${domain}.txt"`,
      },
    })
  } catch (error) {
    console.error("Resume generation error:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
