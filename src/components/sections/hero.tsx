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
import CircularText from "../CircularText"
import CircularLogos from "./circularlogos"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    return (

        <div className="h-[90vh] w-full flex justify-center ">
            {/* <SplashCursor /> */}
            <div className="h-[80vh] w-[90%] bg-background rounded-4xl my-10 p-10 grid grid-cols-[65%_35%] gap-5">

                <div className="flex justify-center items-center">
                    <div className="h-auto flex items-center text-primary justify-center p-8">
                        <div className="fixed bottom-0 right-0">
                            <CircularText
                                text="DREAM*PLAN*EXECUTE*"
                                onHover="speedUp"
                                spinDuration={20}
                                className="custom-class bottom-10 right-10 text-foreground"
                            />
                        </div>
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
                    <div className="absolute right-20">
                        <CircularLogos />
                    </div>
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