"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import GlassCard from "../ui/glass-card"

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
            <div className="h-[80vh] w-[90%] bg-primary rounded-4xl my-10 p-10 grid grid-cols-[65%_35%] gap-5">
                <div>
                    <GlassCard>
                        <div className="h-full w-full flex justify-center items-center">
                            <h1>
                                Hello workdssfsfwertyuio
                            </h1>
                        </div>

                    </GlassCard>

                </div>
                <div>

                </div>

            </div>

        </div>
    )
}
