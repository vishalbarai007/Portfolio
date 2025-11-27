import React from 'react'
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

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

const webTechstack = () => {
    return (
        <div className='h-[60vh] w-full flex justify-center items-center '>
            <div style={{ height: '60vh', position: 'relative', overflow: 'hidden' }}>
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={100}
                    gap={40}
                    hoverSpeed={30}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="primary"
                    ariaLabel="Technology partners"
                />
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

export default webTechstack;
