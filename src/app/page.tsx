"use client"
import DomainShowcase from "@/components/sections/home/domain-showcase"
import FeaturedProjects from "@/components/sections/home/featured-projects"
import Hero from "@/components/sections/home/hero"
import ClickSpark from "@/components/layout/ClickSpark"
import Techstack from "@/components/sections/home/webtechstack"
import OtherTechstack from "@/components/sections/home/othertechstack"
import LandingProject from "@/components/sections/home/landing-project"
import GitHubContributions from "@/components/sections/home/github-contributions"
import { HeroParallaxDemo } from "@/components/sections/home/hero-parallax-demo"

export default function Home() {
  return (
    <>
      <ClickSpark
        sparkColor='var(--primary)'
        sparkSize={20}
        sparkRadius={30}
        sparkCount={8}
        duration={500}
      >
        <Hero />
        <HeroParallaxDemo />
        <DomainShowcase />
        <Techstack />
        <OtherTechstack />
        <LandingProject />
        <FeaturedProjects />
        <GitHubContributions isDark={true} />
      </ClickSpark>
    </>
  )
}
