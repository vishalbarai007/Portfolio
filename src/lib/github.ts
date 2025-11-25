export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
  stargazers_count: number
  language: string
  updated_at: string
}

export async function fetchGitHubRepos(username: string, token?: string): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {}
  if (token) {
    headers.Authorization = `token ${token}`
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers,
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error)
    return []
  }
}

export function filterReposByDomain(repos: GitHubRepo[], domain: string): GitHubRepo[] {
  return repos.filter((repo) => repo.topics?.includes(domain))
}

export function sortReposByStars(repos: GitHubRepo[]): GitHubRepo[] {
  return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)
}
