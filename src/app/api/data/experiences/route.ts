import { NextResponse } from "next/server"
import experiences from "@/data/experiences.json"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const domain = searchParams.get("domain")

    if (domain) {
      const filtered = experiences.filter((exp) => exp.domain === domain)
      return NextResponse.json(filtered)
    }

    return NextResponse.json(experiences)
  } catch (error) {
    console.error("Experiences API error:", error)
    return NextResponse.json({ error: "Failed to fetch experiences" }, { status: 500 })
  }
}
