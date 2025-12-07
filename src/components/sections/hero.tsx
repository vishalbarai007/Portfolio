"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import GlassCard from "../ui/glass-card"
import LandingHero from "../../../public/Images/mypersonal/LandingHero.png"
import { Button } from "../ui/button"
import SplashCursor from "../SplashCursor"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const domainsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!heroRef.current) return

        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
                .from(
                    subtitleRef.current,
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6",
                )
                .from(
                    ctaRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5",
                )

            gsap.from(".domain-card", {
                scrollTrigger: {
                    trigger: domainsRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 0.5,
                    markers: false,
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    const domains = [
        { name: "Full Stack Web", color: "domain-web" },
        { name: "App Development", color: "domain-app" },
        { name: "Wordpress Developer", color: "domain-web" },
        { name: "Software Engineering", color: "domain-software" },
        { name: "Cybersecurity", color: "domain-security" },
    ]


    return (

        <div className="h-screen w-full flex justify-center ">
            {/* <SplashCursor /> */}
            <div className="h-[80vh] w-[90%] bg-background rounded-4xl my-10 p-10 grid grid-cols-[65%_35%] gap-5">

                <div className="flex justify-center items-center">
                    {/* <GlassCard>
                        <div className="h-full w-full flex justify-center items-center">
                            <h1>
                                Hello workdssfsfwertyuio
                            </h1>    

                        </div>

                    </GlassCard> */}
                    {/* <div
                        ref={containerRef}
                        style={{ position: 'relative' }}
                    >


                        <div style={{ height: '600px', position: 'relative' }}>
                            <FluidGlass
                                mode="lens" // or "bar", "cube"
                                lensProps={{
                                    scale: 0.25,
                                    ior: 1.15,
                                    thickness: 5,
                                    chromaticAberration: 0.1,
                                    anisotropy: 0.01
                                }}
                            />
                        </div>

                        <h1 className="font-extrabold text-[100px] text-background"> Hii Myself Vishal Barai</h1>

                    </div> */}



                    <div className="h-auto flex items-center text-primary justify-center p-8">
                        <div className="max-w-4xl">
                            {/* Welcome Text */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-2xl text-popover text-primary">✦</span>
                                <h2 className=" uppercase tracking-wider text-2xl font-medium text-popover text-primary">
                                    Welcome to Portfolio
                                </h2>
                                <span className="text-2xl text-popover text-primary">✦</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-popover text-primary" ref={titleRef}>
                                I'm Vishal Barai<br />
                                Software <span className="text-foreground underline decoration-4 underline-offset-8">Engineer</span><br />
                                {/* <span className="font-bold">Based In USA</span> */}
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 text-lg max-w-xl text-primary">
                                Passionate about crafting efficient and scalable software solutions. Let's build something amazing together!
                            </p>
                            <div className="flex  gap-10 mt-8" ref={ctaRef}>
                                <Button>
                                    Contact Me
                                </Button>
                                <Button>
                                    Hire me
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center">
                    <div className="h-[500px] w-[500px] bg-primary rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                        <div className="h-full w-full flex justify-center items-center">
                            <Image
                                src={LandingHero}
                                alt="Landing Hero"
                                width={600}
                                height={600}
                                className="rounded-full -mt-40 object-contain drop-shadow-[#FB770D] drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}