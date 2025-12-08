"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import SearchBar from "./search-bar"
import { ThemeToggle } from "./theme-toggle"
import PillNavbar from "./pillnavbar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Timeline", href: "/timeline" },
    { label: "Resume", href: "/resume" },
    { label: "Assistant", href: "/assistant" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky h-20 top-0 z-50 border-b bg-background/30 backdrop-blur-md rounded-tl-[0%] rounded-tr-[0%] rounded-bl-[100%] rounded-br-[100%]
 shadow-accent/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            Dev
          </Link>

          {/* Desktop Navigation */}
          {/* <PillNavbar/> */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground hover:text-muted-foreground transition-colors text-CTA"
              >
                {item.label}
              </Link>
            ))}
            {/* <SearchBar /> */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
