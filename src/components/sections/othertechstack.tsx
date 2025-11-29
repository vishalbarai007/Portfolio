import React from "react";
import LogoLoop from "../LogoLoop";
import {
  SiPython, SiElectron, SiGithub, SiLinux,
  SiPostman, SiGoland
} from "react-icons/si";
import { FaJava, FaGit } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";

const techLogos = [
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <CgCPlusPlus />, title: "C++", href: "https://isocpp.org" },
  { node: <SiElectron />, title: "Electron", href: "https://www.electronjs.org" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <FaGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiGoland />, title: "Go", href: "https://golang.org" },
];

export default function OtherTechstack() {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-10 relative overflow-hidden">
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
  );
}
