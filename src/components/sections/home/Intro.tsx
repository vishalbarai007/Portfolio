"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax scroll effect for the central image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 80])
  const textLeftX = useTransform(scrollYProgress, [0, 1], [0, -30])
  const textRightX = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-br from-[#1e2a4a] via-[#243560] to-[#18233f] flex items-center justify-center overflow-hidden py-12 md:py-0 select-none"
    >
      {/* Dynamic Background Light Effects & Diagonal Shadows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Radial Ambient Glow behind central subject */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/15 rounded-full blur-[140px]" />
        
        {/* Top-Right Glass Beam Lighting */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-gradient-to-bl from-white/10 via-blue-400/5 to-transparent rotate-45 blur-2xl transform origin-top-right pointer-events-none" />

        {/* Diagonal Soft Shadow Slats (Studio Shadow Effect) */}
        <div className="absolute top-0 right-1/4 w-[300px] h-[1200px] bg-black/15 -rotate-45 blur-3xl transform pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[150px] h-[1200px] bg-white/5 -rotate-45 blur-2xl transform pointer-events-none" />
        
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center min-h-[85vh]">
        
        {/* Central Layout Wrapper */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 my-auto">
          
          {/* Left Text Block: "Hi, I'm RUCHI" */}
          <motion.div
            style={{ x: textLeftX }}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="z-10 text-center lg:text-right lg:-mr-12 xl:-mr-16 flex flex-col items-center lg:items-end"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg sm:text-2xl font-medium text-slate-200/90 tracking-wide block mb-1 lg:pr-2"
            >
              Hi, I'm
            </motion.span>
            
            <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[11rem] font-black text-white tracking-tighter leading-none drop-shadow-2xl">
              Vishal
            </h1>
          </motion.div>

          {/* Center Column: Cutout Image with Parallax & Motion */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative z-20 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] aspect-[3/4] flex items-end justify-center shrink-0"
          >
            <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src="/Images/mypersonal/LandingHero.png"
                alt="Vishal Barai"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 460px"
                className="object-contain object-bottom transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Text Block: "PAREKH" & Subtitles */}
          <motion.div
            style={{ x: textRightX }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="z-10 text-center lg:text-left lg:-ml-12 xl:-ml-16 flex flex-col items-center lg:items-start"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[11rem] font-black text-white tracking-tighter leading-none drop-shadow-2xl">
              Barai
            </h1>

            {/* Subtitle Roles & Qualifications */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 lg:mt-4 space-y-1 lg:pl-2 text-center lg:text-left"
            >
              <p className="text-sm sm:text-base md:text-lg font-bold text-white/95 tracking-tight">
                Executive, Career &amp; Life Coach | Lawyer
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-300/85 tracking-tight">
                NLP Practitioner | Author | Keynote Speaker
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}