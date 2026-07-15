"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Github, Linkedin, ExternalLink, Play, Pause, Sun, Moon } from "lucide-react"

export default function NewHero() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState("")

  // Spotify Mock States
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(35) // start at 35%
  const songDuration = 232 // 3:52 in seconds

  useEffect(() => {
    setMounted(true)

    // Running clock
    const updateClock = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, "0")
      const seconds = String(now.getSeconds()).padStart(2, "0")
      const ampm = hours >= 12 ? "pm" : "am"
      hours = hours % 12
      hours = hours ? hours : 12 // the hour '0' should be '12'
      const hoursStr = String(hours).padStart(2, "0")
      setTime(`${hoursStr}:${minutes}:${seconds} ${ampm}`)
    }

    updateClock()
    const clockInterval = setInterval(updateClock, 1000)

    return () => clearInterval(clockInterval)
  }, [])

  // Spotify Progress Interval
  useEffect(() => {
    if (!isPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 100 / songDuration
      })
    }, 1000)

    return () => clearInterval(progressInterval)
  }, [isPlaying])

  const formatProgressTime = (percent: number) => {
    const currentSeconds = Math.floor((percent / 100) * songDuration)
    const mins = Math.floor(currentSeconds / 60)
    const secs = String(currentSeconds % 60).padStart(2, "0")
    return `${mins}:${secs}`
  }

  if (!mounted) return null

  return (
    <section id="hero" className="w-full max-w-4xl mx-auto pt-28 pb-16 px-4 md:px-0">
      <div className="relative border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden bg-card shadow-xl transition-all duration-300">
        
        {/* Banner - Dimension Locked */}
        <div className="relative w-full h-[200px] md:h-[260px] bg-neutral-900 overflow-hidden">
          <Image
            src="/Images/mypersonal/banner.png"
            alt="Hero Banner"
            fill
            priority
            sizes="(max-w-768px) 100vw, 896px"
            className="object-cover object-center select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-widest uppercase text-center px-4 font-mono select-none">
              "building what you're not thinking"
            </h2>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="px-6 md:px-12 pb-8 pt-16 relative">
          
          {/* Circular Overlapping Avatar */}
          <div className="absolute left-6 md:left-12 -top-12 md:-top-16 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-card bg-neutral-900 shadow-lg select-none">
            <Image
              src="/Images/mypersonal/avatar.png"
              alt="Profile Avatar"
              fill
              className="object-cover"
            />
          </div>

          {/* Real-time Clock & Theme Toggle */}
          <div className="absolute right-6 md:right-12 -top-6 md:-top-8 flex items-center gap-3 bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl px-4 py-2 shadow-md backdrop-blur-md">
            <span className="text-xs md:text-sm font-mono text-neutral-800 dark:text-neutral-200 select-none">
              {time || "00:00:00 am"}
            </span>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none"
              title="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Profile Header */}
          <div className="space-y-4 pt-2">
            <div>
              <div className="flex items-baseline gap-2">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Vishal Barai
                </h1>
                <span className="text-lg md:text-xl font-medium text-neutral-500">20</span>
              </div>
              <p className="text-neutral-500 font-mono text-sm md:text-base mt-1">
                Full Stack Developer • Security Enthusiast
              </p>
            </div>

            {/* Bio bullet points */}
            <div className="space-y-2 text-sm md:text-base text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
              <p className="font-semibold text-foreground">Engineer / Artist. I love building, breaking, and shipping things.</p>
              <ul className="space-y-1.5 pl-1">
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-xs">✨</span>
                  <span>AI, open source, and developer tools excite me.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-xs">💻</span>
                  <span>I believe actions speak louder than words, so I put my code where my mouth is.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-xs">🌍</span>
                  <span>I love महाराष्ट्र 🤝</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-xs">🏎️</span>
                  <span>always 🏎️ fanboy</span>
                </li>
              </ul>
            </div>

            {/* Direct contact action buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Button onClick={() => window.open("mailto:vishalbaraiofficial02@gmail.com")} className="gap-2 rounded-xl text-xs md:text-sm font-semibold h-11 px-6 shadow-sm border border-neutral-300 dark:border-neutral-700 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200">
                <Calendar size={16} /> Book a call
              </Button>
              <Button onClick={() => window.open("mailto:vishalbaraiofficial02@gmail.com")} variant="outline" className="gap-2 rounded-xl text-xs md:text-sm font-semibold h-11 px-6 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Mail size={16} /> Send an email
              </Button>
            </div>

            {/* Social accounts buttons */}
            <div className="pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-3">
                Find me on the Internet
              </h3>
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/vishalbarai007" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-lg border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs">
                    <Github size={14} /> GitHub
                  </Button>
                </a>
                <a href="https://twitter.com/vishalbarai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-lg border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs">
                    <ExternalLink size={14} /> Twitter
                  </Button>
                </a>
                <a href="https://linkedin.com/in/vishalbarai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-lg border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs">
                    <Linkedin size={14} /> LinkedIn
                  </Button>
                </a>
                <a href="https://t.me/vishalbarai" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-lg border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs">
                    <ExternalLink size={14} /> Telegram
                  </Button>
                </a>
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 rounded-lg border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs">
                    <ExternalLink size={14} /> Resume
                  </Button>
                </a>
              </div>
            </div>

            {/* Spotify interactive widget */}
            <div className="pt-4 mt-2">
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-3">
                Recently Listening
              </h3>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 shadow-inner">
                {/* Album Art - Simulated disk or cover */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow bg-neutral-800 flex-shrink-0 select-none">
                  <Image
                    src="/Images/mypersonal/avatar.png"
                    alt="Album Art"
                    fill
                    className={`object-cover ${isPlaying ? "animate-[spin_10s_linear_infinite]" : ""}`}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Track Details & Play Controls */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-foreground truncate select-none">
                        All The Stars
                      </h4>
                      <p className="text-xs text-neutral-500 truncate select-none">
                        Kendrick Lamar, SZA
                      </p>
                    </div>
                    
                    {/* Play/Pause Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-neutral-900 hover:bg-green-400 transition-colors focus:outline-none flex-shrink-0 shadow-sm"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                    </button>
                  </div>

                  {/* Playback Progress Slider */}
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all duration-1000 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-neutral-400 font-mono select-none">
                      <span>{formatProgressTime(progress)}</span>
                      <span>3:52</span>
                    </div>
                  </div>
                </div>

                {/* Spotify Brand Icon */}
                <div className="flex flex-col items-center gap-1 text-[9px] font-mono text-green-500 font-bold uppercase select-none pr-1">
                  <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.077-.337.135-.668.47-.743 3.856-.88 7.15-.502 9.813 1.13.295.18.387.563.207.858zm1.226-2.724c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.412.125-.845-.107-.97-.52-.125-.412.107-.845.52-.97 3.668-1.112 8.243-.574 11.34 1.328.367.227.487.708.26 1.075zm.105-2.836C14.652 8.8 9.27 8.62 6.16 9.566c-.473.143-.974-.127-1.117-.6-.144-.473.127-.974.6-1.117 3.587-1.088 9.524-.877 13.27 1.348.425.253.565.803.312 1.228-.252.426-.802.565-1.227.312z" />
                  </svg>
                  <span>Spotify</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
