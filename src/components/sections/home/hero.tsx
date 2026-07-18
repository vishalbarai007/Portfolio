"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Code2, Shield, Cpu, Smartphone } from "lucide-react"
import Link from "next/link"
import LandingHero from "../../../../public/Images/mypersonal/LandingHero.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function Hero() {
  const domains = [
    { icon: Code2, label: "Web", desc: "React, Next.js, Node", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Smartphone, label: "App", desc: "React Native, Flutter", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: Cpu, label: "Software", desc: "Python, Go, Electron", color: "text-violet-500", bg: "bg-violet-500/10" },
    { icon: Shield, label: "Security", desc: "PenTesting, Auditing", color: "text-rose-500", bg: "bg-rose-500/10" },
  ]

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-12 bg-background">
      {/* Decorative Grid and Blur Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] dark:bg-primary/10" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[120px] dark:bg-accent/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-8 text-left"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-muted/30 text-foreground font-semibold text-xs tracking-wider uppercase"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Available for New Projects
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-foreground">
                DREAM.<br />
                PLAN.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground/80 to-foreground border-b-4 border-primary pb-1">
                  EXECUTE.
                </span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Passionate Full Stack Developer & Security Enthusiast crafting{" "}
              <span className="text-foreground font-semibold">scalable solutions</span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">secure infrastructures</span>{" "}
              across multiple technical domains.
            </motion.p>

            {/* CTAs using Shadcn Buttons with high-contrast borders */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio" passHref>
                <Button
                  size="lg"
                  className="h-12 px-6 rounded-md font-semibold flex items-center gap-2 bg-primary text-primary-foreground border border-border hover:bg-primary/95 transition-all shadow-md group"
                >
                  View Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 rounded-md font-semibold bg-background hover:bg-muted text-foreground border border-border transition-all"
                >
                  Let's Talk
                </Button>
              </Link>
            </motion.div>

            {/* Quick Domain Cards with Borders */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6 border-t border-border"
            >
              {domains.map((domain) => (
                <div
                  key={domain.label}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/45 hover:bg-card transition-all duration-300 group cursor-default"
                >
                  <div className={`p-2 rounded-md ${domain.bg} ${domain.color} group-hover:scale-105 transition-transform`}>
                    <domain.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{domain.label}</h4>
                    <p className="text-[11px] text-muted-foreground">{domain.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Image Container with high contrast border */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-border bg-card p-3 shadow-2xl overflow-visible group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted/20">
                {/* Natural colored image, no heavy grayscale filter overlay, but professional shadow */}
                <Image
                  src={LandingHero}
                  alt="Vishal Barai"
                  fill
                  className="object-cover object-top scale-100 hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Achievements/Stats Card with Border */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-6 -right-6 z-20 bg-card/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-2xl w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">6+</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-foreground">Years Experience</p>
                    <p className="text-[10px] text-muted-foreground">Full Stack & Security</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative outline circles */}
              <div className="absolute -top-6 -left-6 w-20 h-20 border border-dashed border-border rounded-full -z-10 animate-spin-slow opacity-60" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-black">Scroll to Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
