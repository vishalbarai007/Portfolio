"use client"

import React from "react"
import ClickSpark from "@/components/layout/ClickSpark"
import NewHero from "@/components/sections/newhero"
import Stack from "@/components/sections/stack"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={20}
      sparkRadius={30}
      sparkCount={8}
      duration={500}
    >
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Main Content Sections */}
        <main className="space-y-16">
          <NewHero />
          <Stack />
          <Experience />
          <Contact />
        </main>
      </div>
    </ClickSpark>
  )
}
