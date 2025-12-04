import { NextResponse } from "next/server"
import about from "@/data/about.json"

export async function GET() {
  try {
    return NextResponse.json(about)
  } catch (error) {
    console.error("About API error:", error)
    return NextResponse.json({ error: "Failed to fetch about data" }, { status: 500 })
  }
}
