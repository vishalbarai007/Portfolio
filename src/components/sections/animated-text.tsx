"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll(".char")
    gsap.from(chars, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      delay,
    })
  }, [delay])

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((char, idx) => (
        <span key={idx} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
