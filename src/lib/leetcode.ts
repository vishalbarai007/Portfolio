export interface LeetCodeStats {
  username: string
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  ranking: number
  contests: number
}

// Mock LeetCode data fetcher (LeetCode doesn't have a public API)
export async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats | null> {
  try {
    // In production, you might use a GraphQL endpoint or scraping
    // For now, return mock data
    return {
      username,
      totalSolved: 450,
      easySolved: 150,
      mediumSolved: 200,
      hardSolved: 100,
      acceptanceRate: 45.2,
      ranking: 125000,
      contests: 25,
    }
  } catch (error) {
    console.error("Failed to fetch LeetCode stats:", error)
    return null
  }
}
