"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Check, Copy } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const emailAddress = "vishalbaraiofficial02@gmail.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-0 scroll-mt-20">
      <div className="space-y-16">
        
        {/* Quote Section */}
        <div className="text-center py-8 space-y-4">
          <p className="text-lg md:text-2xl font-medium italic text-foreground tracking-wide leading-relaxed font-sans select-none">
            "Do so much work that it would be unreasonable for you to not be successful."
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800" />
            <span className="text-xs md:text-sm uppercase tracking-widest text-neutral-400 font-bold font-mono">
              Alex Hormozi
            </span>
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-800" />
          </div>
        </div>

        {/* Get in Touch Card */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 bg-card text-center space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              Contact
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Get in Touch
          </h2>

          <p className="text-neutral-500 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Want to chat? Just shoot me an email at{" "}
            <span className="font-semibold text-foreground break-all">{emailAddress}</span>{" "}
            or connect on{" "}
            <a
              href="https://linkedin.com/in/vishalbarai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-4 hover:text-neutral-500 transition-colors"
            >
              LinkedIn
            </a>{" "}
            and I'll respond whenever I can.
          </p>

          {/* Copy Button */}
          <div className="pt-2">
            <Button
              onClick={handleCopy}
              className="gap-2 rounded-xl text-xs md:text-sm font-semibold h-11 px-6 border border-neutral-300 dark:border-neutral-700 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm"
            >
              {copied ? (
                <>
                  <Check size={14} /> Copied!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Email
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-neutral-400 select-none pb-24">
          <p>© 2026 Vishal Barai. All rights reserved.</p>
          
          <div className="flex gap-6 font-semibold">
            <a
              href="https://twitter.com/vishalbarai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/vishalbarai007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishalbarai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
