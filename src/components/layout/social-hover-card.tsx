"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Github, Linkedin, Twitter, Send, FileText, Mail } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

interface SocialHoverCardProps {
  platform: "github" | "linkedin" | "twitter" | "email" | string
  href: string
  children: React.ReactNode
}

export function SocialHoverCard({ platform, href, children }: SocialHoverCardProps) {
  const normPlatform = platform.toLowerCase()

  // Dynamic contents based on hovered social media icon
  const getPlatformDetails = () => {
    switch (normPlatform) {
      case "github":
        return {
          handle: "github.com/vishalbarai007",
          stats: "1.2k+ followers • 50+ repositories",
          bio: "Full Stack Developer & Security Enthusiast crafting scalable systems.",
        }
      case "linkedin":
        return {
          handle: "linkedin.com/in/vishalbarai",
          stats: "500+ connections • 6+ years experience",
          bio: "Architecting microservices & cross-platform applications.",
        }
      case "twitter":
        return {
          handle: "twitter.com/vishalbarai",
          stats: "200+ followers • 150+ posts",
          bio: "Sharing insights on cybersecurity, full-stack tech, and dev tools.",
        }
      case "email":
      case "mail":
        return {
          handle: "vishalbaraiofficial02@gmail.com",
          stats: "Active response • Open for freelance & roles",
          bio: "Drop a line! Let's collaborate on your next big idea.",
        }
      default:
        return {
          handle: "vishalbarai007",
          stats: "6+ years in software engineering",
          bio: "Full Stack Developer specializing in robust digital solutions.",
        }
    }
  }

  const details = getPlatformDetails()

  // Bottom action links inside the card
  const modalLinks = [
    { label: "GitHub", href: "https://github.com/vishalbarai007", icon: Github },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com/in/vishalbarai", icon: Linkedin },
    { label: "Telegram", href: "https://t.me/vishalbarai", icon: Send },
    { label: "Resume", href: "/resume", icon: FileText },
  ]

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span className="inline-block cursor-pointer">
          {children}
        </span>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="center"
        sideOffset={10}
        className="w-[340px] p-0 overflow-hidden border border-border bg-card text-card-foreground shadow-2xl rounded-2xl transition-all duration-300"
      >
        {/* Banner */}
        <div className="relative h-24 w-full bg-neutral-900 border-b border-border/40 overflow-hidden">
          <Image
            src="/Images/mypersonal/banner.png"
            alt="Vishal Barai Banner"
            fill
            sizes="340px"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Profile Avatar Container */}
        <div className="relative px-4 pb-3">
          <div className="absolute -top-8 left-4 w-18 h-18 rounded-full border-2 border-border overflow-hidden bg-background shadow-lg">
            <Image
              src="/Images/mypersonal/avatar.png"
              alt="Vishal Barai"
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>

          {/* User Details */}
          <div className="pt-11 text-left space-y-2">
            <div>
              <h4 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5">
                Vishal Barai
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 font-semibold uppercase">
                  PRO
                </span>
              </h4>
              <p className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors truncate">
                {details.handle}
              </p>
            </div>

            <p className="text-sm text-foreground leading-snug font-medium">
              {details.bio}
            </p>

            {/* Location & Metadata */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <span>Mumbai, Maharashtra, India</span>
            </div>

            {/* Stats Section */}
            <div className="py-1 px-2.5 rounded-md bg-muted/40 border border-border/40 text-xs font-semibold text-foreground/80 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{details.stats}</span>
            </div>
          </div>
        </div>

        {/* Modal Row of Buttons */}
        <div className="p-3 border-t border-border/80 bg-muted/20 flex flex-wrap items-center justify-center gap-1.5">
          {modalLinks.map((link) => {
            const isCurrent = normPlatform === link.label.toLowerCase()
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Resume" ? undefined : "_blank"}
                rel={link.label === "Resume" ? undefined : "noopener noreferrer"}
                className={cn(
                  "flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-md border transition-all duration-200",
                  isCurrent
                    ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted hover:scale-105"
                )}
              >
                <link.icon className="h-3 w-3 shrink-0" />
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
