import React from "react";
import LogoLoop from "../LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,
  SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiSupabase, SiWordpress
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

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
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
];

export default function WebTechstack() {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-10 relative overflow-hidden">
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
  );
}
