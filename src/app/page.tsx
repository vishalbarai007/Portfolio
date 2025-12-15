"use client"
import HeroSection from "@/components/sections/hero-section"
import DomainShowcase from "@/components/sections/domain-showcase"
import FeaturedProjects from "@/components/sections/featured-projects"
import Hero from "@/components/sections/hero"
import ClickSpark from "@/components/layout/ClickSpark"
import Techstack from "@/components/sections/webtechstack"
import OtherTechstack from "@/components/sections/othertechstack"
import LandingProject from "@/components/sections/landing-project"
import GitHubContributions from "@/components/GitHubContributions"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo"
import CurvedLoop from "@/components/CurvedLoop"
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo"

export default function Home() {
  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={20}
        sparkRadius={30}
        sparkCount={8}
        duration={500}
      >

        <Hero />
        <HeroSection />
        <HeroParallaxDemo />
        <DomainShowcase />
        <Techstack />
        <OtherTechstack />
        <LandingProject />
        {/* <Techstack /> */}
        <FeaturedProjects />
        <GitHubContributions isDark={true} />
        {/* <AnimatedTestimonialsDemo /> */}

      </ClickSpark>

    </>
  )
}
