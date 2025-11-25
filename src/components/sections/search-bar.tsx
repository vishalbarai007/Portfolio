"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
}

const searchableContent: SearchResult[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Building scalable, responsive web applications",
    category: "Portfolio",
    url: "/portfolio/web",
  },
  {
    id: "2",
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    category: "Portfolio",
    url: "/portfolio/app",
  },
  {
    id: "3",
    title: "Software Engineering",
    description: "Distributed systems and backend infrastructure",
    category: "Portfolio",
    url: "/portfolio/software",
  },
  {
    id: "4",
    title: "Cybersecurity",
    description: "Security audits and penetration testing",
    category: "Portfolio",
    url: "/portfolio/cybersecurity",
  },
  {
    id: "5",
    title: "Career Timeline",
    description: "Professional experience and milestones",
    category: "About",
    url: "/timeline",
  },
  {
    id: "6",
    title: "Resume",
    description: "Download domain-specific resumes",
    category: "About",
    url: "/resume",
  },
  {
    id: "7",
    title: "AI Assistant",
    description: "Ask questions about my experience",
    category: "Tools",
    url: "/assistant",
  },
  {
    id: "8",
    title: "Contact",
    description: "Get in touch for projects",
    category: "Contact",
    url: "/contact",
  },
]

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    )

    setResults(filtered)
  }, [query])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors text-muted hover:text-foreground"
      >
        <Search size={18} />
        <span className="hidden sm:inline text-sm">Search...</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Search size={18} className="text-muted" />
              <input
                type="text"
                placeholder="Search portfolio..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent outline-none text-foreground placeholder-muted"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-muted hover:text-foreground">
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {query && (
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="divide-y divide-border">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={() => {
                        setIsOpen(false)
                        setQuery("")
                      }}
                      className="block p-4 hover:bg-background/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{result.title}</p>
                          <p className="text-sm text-muted">{result.description}</p>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary whitespace-nowrap">
                          {result.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-muted">
                  <p>No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {isOpen && query === "" && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-lg z-50 p-4">
          <p className="text-sm text-muted">Start typing to search...</p>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
