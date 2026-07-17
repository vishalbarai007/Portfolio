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
    <footer className="bg-background border-t border-border mt-20">
      {/* Quote Section */}
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground leading-relaxed">
          &ldquo;Do so much work that it would be unreasonable
          <br className="hidden md:block" /> for you to not be successful.&rdquo;
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Alex Hormozi
        </p>
      </div>

      <Separator className="bg-border/60" />

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
            vishalbaraiofficial02@gmail.com
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
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-border/60" />

      {/* Icon Row */}
      <div className="flex items-center justify-center gap-2 py-4 flex-wrap">
        {iconLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.label}
          >
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/60 border border-transparent hover:border-border transition-all"
              )}
            >
              <link.icon className="h-4 w-4" />
            </Button>
          </a>
        ))}

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/60 border border-transparent hover:border-border transition-all"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </footer>
  );
}