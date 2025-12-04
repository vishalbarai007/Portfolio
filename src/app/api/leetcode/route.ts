import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In production, fetch from LeetCode GraphQL API
    // For now, return mock data with realistic statistics
    const leetcodeData = {
      username: process.env.LEETCODE_USERNAME || "your-leetcode-username",
      totalSolved: 450,
      easySolved: 150,
      mediumSolved: 200,
      hardSolved: 100,
      acceptanceRate: 45.2,
      ranking: 125000,
      contests: 25,
      badges: ["100 Days Badge", "Consistent Coder", "Problem Solver"],
      recentSubmissions: [
        { problem: "Two Sum", difficulty: "Easy", status: "Accepted" },
        { problem: "Median of Two Sorted Arrays", difficulty: "Hard", status: "Accepted" },
        { problem: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Accepted" },
      ],
    }

    return NextResponse.json(leetcodeData)
  } catch (error) {
    console.error("LeetCode API error:", error)
    return NextResponse.json({ error: "Failed to fetch LeetCode data" }, { status: 500 })
  }
}
