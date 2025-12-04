import { NextResponse } from "next/server"
import skills from "@/data/skills.json"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const domain = searchParams.get("domain")

    if (domain && domain in skills) {
      return NextResponse.json(skills[domain as keyof typeof skills])
    }

    if (domain) {
      return NextResponse.json({ error: "Invalid domain" }, { status: 400 })
    }

    return NextResponse.json(skills)
  } catch (error) {
    console.error("Skills API error:", error)
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 })
  }
}
