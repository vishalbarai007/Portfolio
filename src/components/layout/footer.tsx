"use client";
import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Pen,
  Home,
  Twitter,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SocialHoverCard } from "./social-hover-card";

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Github", href: "https://github.com/vishalbarai007", icon: Github },
  { label: "Linkedin", href: "https://www.linkedin.com/in/vishalbarai/", icon: Linkedin },
];

const iconLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Code", href: "/portfolio", icon: Code2 },
  { label: "Blog", href: "/about", icon: Pen },
  { label: "Github", href: "https://github.com/vishalbarai007", icon: Github, external: true },
  { label: "Linkedin", href: "https://www.linkedin.com/in/vishalbarai/", icon: Linkedin, external: true },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter, external: true },
];

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();

  return (
    <footer id="contact" className="bg-background border-t border-border mt-20">
      {/* Quote Section */}
      <div className="max-w-3xl mx-auto px-4 py-24 text-center flex flex-col justify-center items-center">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground leading-relaxed">
          &ldquo;How do you expect to learn how to think
          <br className="hidden md:block" /> When you hardly ever practice thinking !&rdquo;
        </blockquote>
        <p className=" mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          - Shwetabh Gangwar
        </p>
      </div>

      {/* <Separator className="bg-border/60" /> */}

      {/* Get in Touch Section */}
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-8">
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="border-border text-muted-foreground bg-transparent text-xs tracking-widest uppercase px-4 py-1.5 rounded-sm"
          >
            Contact
          </Badge>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Get in Touch
        </h2>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Want to chat? Just shoot me an email at{" "}
          <a
            href="mailto:vishalbaraiofficial02@gmail.com"
            className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors font-medium"
          >
            here
          </a>{" "}
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/vishalbarai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors font-medium"
          >
            LinkedIn
          </a>{" "}
          and I&apos;ll respond whenever I can.
        </p>
      </div>

      <Separator className="bg-border/60" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="order-2 md:order-1">
            &copy; {currentYear} Vishal Barai. All rights reserved.
          </p>

          <div className="order-1 md:order-2 flex items-center gap-6">
            {socialLinks.map((link) => (
              <SocialHoverCard
                key={link.label}
                platform={link.label}
                href={link.href}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </SocialHoverCard>
            ))}
          </div>
        </div>
      </div>

      {/* <Separator className="bg-border/60" /> */}

      {/* Icon Row */}
    
    </footer>
  );
}