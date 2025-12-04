import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get("domain") || "web"

  try {
    const username = process.env.GITHUB_USERNAME || "vishalbarai007"
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      console.warn("[GitHub API] GitHub token not configured, returning mock data")
      return NextResponse.json(getMockRepositories(domain))
    }

    console.log(`[GitHub API] Fetching repos for user: ${username}, domain: ${domain}`)

    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stars`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      console.warn(`[GitHub API] API returned status ${response.status}, returning mock data`)
      return NextResponse.json(getMockRepositories(domain))
    }

    const repos = await response.json()
    console.log(`[GitHub API] Fetched ${repos.length} total repos`)

    const filtered = repos
      .filter((repo: any) => {
        const hasTopics = repo.topics && repo.topics.length > 0
        const matchesDomain = repo.topics?.includes(domain)
        // Include repos that match domain or have no topics (fallback)
        return matchesDomain || (!hasTopics && repos.indexOf(repo) < 10)
      })
      .slice(0, 10) // Limit to 10 repos
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided",
        url: repo.html_url,
        topics: repo.topics || [],
        stars: repo.stargazers_count,
        language: repo.language || "Unknown",
        updatedAt: repo.updated_at,
      }))

    console.log(`[GitHub API] Returning ${filtered.length} filtered repos for domain: ${domain}`)
    return NextResponse.json(filtered)
  } catch (error) {
    console.error("[GitHub API] Error:", error)
    return NextResponse.json(getMockRepositories(domain))
  }
}

function getMockRepositories(domain: string) {
  const mockRepos: Record<string, any[]> = {
    web: [
      {
        id: 1,
        name: "nextjs-ecommerce",
        description: "Full-stack e-commerce platform built with Next.js",
        url: "https://github.com/example/nextjs-ecommerce",
        topics: ["web", "nextjs", "react"],
        stars: 245,
        language: "TypeScript",
        updatedAt: new Date().toISOString(),
      },
    ],
    app: [
      {
        id: 2,
        name: "react-native-fitness",
        description: "Cross-platform fitness tracking app",
        url: "https://github.com/example/react-native-fitness",
        topics: ["app", "react-native"],
        stars: 156,
        language: "JavaScript",
        updatedAt: new Date().toISOString(),
      },
    ],
    software: [
      {
        id: 3,
        name: "distributed-cache",
        description: "High-performance distributed caching system",
        url: "https://github.com/example/distributed-cache",
        topics: ["software", "go", "kubernetes"],
        stars: 389,
        language: "Go",
        updatedAt: new Date().toISOString(),
      },
    ],
    security: [
      {
        id: 4,
        name: "security-audit-tool",
        description: "Automated vulnerability scanning framework",
        url: "https://github.com/example/security-audit-tool",
        topics: ["security", "python"],
        stars: 178,
        language: "Python",
        updatedAt: new Date().toISOString(),
      },
    ],
  }

  return mockRepos[domain] || mockRepos.web
}
