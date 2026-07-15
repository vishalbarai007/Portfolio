"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Home, Code2, Briefcase, Github, Linkedin, Twitter, Sun, Moon, Mail } from "lucide-react"
import { useTheme } from "next-themes"

interface DockItemProps {
  mouseX: any
  icon: React.ComponentType<any>
  label: string
  onClick?: () => void
  href?: string
}

function DockItem({ mouseX, icon: Icon, label, onClick, href }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Distance from mouse to item center maps to size: 40px when far, 70px when right on it
  const widthTransform = useTransform(distance, [-150, 0, 150], [44, 72, 44])
  const heightTransform = useTransform(distance, [-150, 0, 150], [44, 72, 44])

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 200, damping: 18 })
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 200, damping: 18 })

  const isExternal = href?.startsWith("http") || href?.startsWith("mailto")

  const itemContent = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="relative flex items-center justify-center rounded-2xl bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-white/20 dark:border-neutral-700/30 hover:bg-white dark:hover:bg-neutral-700 transition-colors shadow-sm focus:outline-none cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium rounded-md bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 shadow-md whitespace-nowrap z-50 pointer-events-none"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      <Icon className="w-1/2 h-1/2 select-none pointer-events-none" />
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="focus:outline-none"
      >
        {itemContent}
      </a>
    )
  }

  return (
    <button onClick={onClick} className="focus:outline-none bg-transparent border-none p-0 cursor-pointer">
      {itemContent}
    </button>
  )
}

export default function MacDock() {
  const mouseX = useMotionValue(Infinity)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  const items = [
    { icon: Home, label: "Home", onClick: () => handleScroll("hero") },
    { icon: Code2, label: "Stack", onClick: () => handleScroll("stack") },
    { icon: Briefcase, label: "Experience", onClick: () => handleScroll("experience") },
    { icon: Mail, label: "Contact", onClick: () => handleScroll("contact") },
    { icon: Github, label: "GitHub", href: "https://github.com/vishalbarai007" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/vishalbarai" },
    {
      icon: resolvedTheme === "dark" ? Sun : Moon,
      label: resolvedTheme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    },
  ]

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex h-[80px] items-end gap-3 rounded-3xl bg-neutral-100/30 dark:bg-neutral-900/30 px-4 pb-3.5 border border-white/20 dark:border-neutral-800/30 backdrop-blur-xl shadow-2xl transition-all duration-300"
      >
        {items.map((item, idx) => (
          <DockItem key={idx} mouseX={mouseX} {...item} />
        ))}
      </motion.div>
    </div>
  )
}
