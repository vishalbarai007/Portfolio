"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { SocialHoverCard } from "./social-hover-card"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Timeline", href: "/timeline" },
    // { label: "Resume", href: "/resume" },
    // { label: "Assistant", href: "/assistant" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/vishalbarai007", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vishalbarai", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vishalbaraiofficial02@gmail.com", label: "Email" },
  ]

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.2,
      },
    },
    opened: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  }

  const linkVariants = {
    closed: {
      y: 80,
      opacity: 0,
    },
    opened: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  }

  return (
    <nav className="fixed w-full top-0 z-50 h-20 flex items-center bg-background/80 backdrop-blur-md border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative z-50">
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary hover:scale-110 transition-transform"
          onClick={() => setIsOpen(false)}
        >
          V
        </Link>

        {/* Desktop Navigation */}
        {/* <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          <ThemeToggle />
        </div> */}

        {/* Mobile/Tablet Menu Button */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:bg-muted rounded-full transition-colors relative z-[60]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex flex-col md:flex-row pt-32 pb-12 px-8 md:px-24 overflow-y-auto h-screen"
          >
            {/* Left Column: Nav Items */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4 md:space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={linkVariants}
                    className="overflow-hidden"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 text-4xl md:text-7xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                        0{i + 1}
                      </span>
                      {item.label}
                      <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Socials & Info */}
            <div className="mt-16 md:mt-0 md:w-1/3 flex flex-col justify-center md:border-l border-border md:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-semibold">Socials</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social) => (
                      <SocialHoverCard
                        key={social.label}
                        platform={social.label}
                        href={social.href}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                        >
                          <social.icon className="w-5 h-5" />
                          <span>{social.label}</span>
                        </a>
                      </SocialHoverCard>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-semibold">Get in Touch</h3>
                  <a 
                    href="mailto:vishalbaraiofficial02@gmail.com" 
                    className="text-xl md:text-2xl font-medium hover:text-primary underline decoration-primary/30 underline-offset-8 transition-colors"
                  >
                    Let's build something together
                  </a>
                </div>
                
                <div className="pt-8">
                  <div className="md:hidden flex items-center gap-4 p-4 rounded-2xl bg-muted/50 w-fit">
                    <span className="text-sm font-medium">Switch Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
