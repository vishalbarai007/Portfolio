"use client"
import HeroSection from "@/components/sections/hero-section"
import DomainShowcase from "@/components/sections/domain-showcase"
import FeaturedProjects from "@/components/sections/featured-projects"
import Hero from "@/components/sections/hero"
import ClickSpark from "@/components/layout/ClickSpark"
import Ribbons from "@/components/Ribbons"
import Techstack from "@/components/sections/webtechstack"

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
        <DomainShowcase />
        <Techstack />
        {/* <Techstack /> */}
        <FeaturedProjects />
        
      </ClickSpark>

    </>
  )
}
