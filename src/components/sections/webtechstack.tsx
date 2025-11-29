import React from 'react'
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiSupabase } from "react-icons/si";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <DiMsqlServer />, title: "Microsoft SQL Server", href: "https://www.microsoft.com/en-us/sql-server" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
];

// Alternative with image sources
// const imageLogos = [
//     { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//     { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//     { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

const webTechstack = () => {
    return (
        <div className='h-auto w-full flex justify-center items-center '>
            <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }} className='w-full flex flex-col justify-center items-center gap-10'>
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

            </div>
        </div>
    )
}

export default webTechstack;
