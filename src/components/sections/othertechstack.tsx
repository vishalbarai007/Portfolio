import React from 'react'
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa";

import { SiPython } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { SiElectron } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { SiGoland } from "react-icons/si";
const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

const OtherTechstack = () => {
    return (
        <div className='h-auto w-full flex justify-center items-center '>
            <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }} className='w-full flex flex-col justify-center items-center gap-10'>
                {/* Basic horizontal loop */}

                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="right"
                    logoHeight={100}
                    gap={40}
                    hoverSpeed={30}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="primary"
                    ariaLabel="Technology partners"
                />

            </div>
        </div>
    )
}

export default OtherTechstack;
