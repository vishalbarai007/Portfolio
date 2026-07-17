"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../../ui/button"
import { Badge } from "../../ui/badge"
import { ArrowRight, Sparkles, Code2, Shield, Cpu, Smartphone } from "lucide-react"
import Link from "next/link"
import LandingHero from "../../../../public/Images/mypersonal/LandingHero.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
}

export default function Hero() {
  const domains = [
    { icon: Code2, label: "Web", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Smartphone, label: "App", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: Cpu, label: "Software", color: "text-violet-500", bg: "bg-violet-500/10" },
    { icon: Shield, label: "Security", color: "text-rose-500", bg: "bg-rose-500/10" },
  ]

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-transparent border-border text-muted-foreground hover:bg-muted/30 transition-colors text-xs tracking-widest uppercase font-semibold"
              >
                <Sparkles className="w-3 h-3" />
                Available for New Projects
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none text-foreground">
                DREAM <br />
                PLAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x underline decoration-primary/30 underline-offset-8">
                  EXECUTE
                </span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Passionate Full Stack Developer & Security Enthusiast crafting 
              <span className="text-foreground font-medium"> scalable solutions </span> 
              and <span className="text-foreground font-medium"> secure infrastructures </span> 
              across multiple technical domains.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link href="/portfolio">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full group bg-primary text-primary-foreground hover:bg-primary/90">
                  View Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border hover:bg-muted/50">
                  Let&apos;s Talk
                </Button>
              </Link>
            </motion.div>

            {/* Quick Domain Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-8 border-t border-border/40">
              {domains.map((domain) => (
                <div key={domain.label} className="flex items-center gap-2 group cursor-default">
                  <div className={`p-2 rounded-lg ${domain.bg} ${domain.color} group-hover:scale-110 transition-transform`}>
                    <domain.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {domain.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Interactive Image Container */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="relative z-10 w-full aspect-square max-w-[500px] ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-[60px] rotate-6 blur-2xl opacity-30" />
              <div className="absolute inset-0 bg-background border-2 border-border/50 rounded-[60px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  src={LandingHero}
                  alt="Vishal Barai Portfolio"
                  fill
                  className="object-contain p-4 scale-110 -mt-10 grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-primary/20 rounded-full"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl blur-xl" />
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 right-10 z-20 bg-card/80 backdrop-blur-md border border-border p-6 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">6+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Years Experience</p>
                  <p className="text-xs text-muted-foreground">in Full Stack Dev</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
