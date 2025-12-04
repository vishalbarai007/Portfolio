import { NextResponse } from "next/server"
import experiences from "@/data/experiences.json"

export async function GET() {
  try {
    const stats = {
      totalExperience: experiences.length,
      byDomain: {
        web: experiences.filter((e) => e.domain === "web").length,
        app: experiences.filter((e) => e.domain === "app").length,
        software: experiences.filter((e) => e.domain === "software").length,
        security: experiences.filter((e) => e.domain === "security").length,
      },
      yearsExperience: {
        web: 6,
        app: 4,
        software: 5,
        security: 3,
      },
      projectsCompleted: {
        web: 12,
        app: 8,
        software: 6,
        security: 5,
      },
      technologiesUsed: 25,
      averageRating: 4.8,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Stats API error:", error)
    return NextResponse.json({ error: "Failed to fetch statistics" }, { status: 500 })
  }
}
