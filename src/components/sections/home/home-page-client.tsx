"use client"

import DomainShowcase from "@/components/sections/home/domain-showcase"
import FeaturedProjects from "@/components/sections/home/featured-projects"
import Hero from "@/components/sections/home/hero"
import Techstack from "@/components/sections/home/webtechstack"
import OtherTechstack from "@/components/sections/home/othertechstack"
import LandingProject from "@/components/sections/home/landing-project"
import dynamic from "next/dynamic"

// Dynamic imports to optimize bundle sizes and page load times
const ClickSpark = dynamic(() => import("@/components/layout/ClickSpark"), {
  ssr: true, // Render container on server to keep children indexable for SEO
})

const HeroParallaxDemo = dynamic(() => 
  import("@/components/sections/home/hero-parallax-demo").then(mod => mod.HeroParallaxDemo),
  { ssr: true }
)

const GitHubContributions = dynamic(() => import("@/components/sections/home/github-contributions"), {
  ssr: false, // Skip rendering on server as it is client-only and not critical for page SEO
})

const MacDock = dynamic(() => import("@/components/layout/mac-dock"), {
  ssr: false, // Skip rendering on server
})

export default function HomePageClient() {
  return (
    <ClickSpark
      sparkColor="var(--primary)"
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
      <MacDock />
    </ClickSpark>
  )
}
