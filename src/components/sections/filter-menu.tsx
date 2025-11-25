"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface FilterMenuProps {
  domains: string[]
  selectedDomain: string | null
  onDomainChange: (domain: string | null) => void
}

export default function FilterMenu({ domains, selectedDomain, onDomainChange }: FilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="gap-2">
        Filter by Domain
        <ChevronDown size={16} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-48">
          <div className="p-4 space-y-2">
            <button
              onClick={() => {
                onDomainChange(null)
                setIsOpen(false)
              }}
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                selectedDomain === null ? "bg-primary/10 text-primary" : "hover:bg-background"
              }`}
            >
              All Projects
            </button>
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => {
                  onDomainChange(domain)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-3 py-2 rounded transition-colors capitalize ${
                  selectedDomain === domain ? "bg-primary/10 text-primary" : "hover:bg-background"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
