"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
// import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Adventurer",
    link: "https://github.com/vishalbarai007/Adventurer",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Weather Forecast",
    link: "https://weather-forecast-six-theta.vercel.app/",
    thumbnail:
      "/Images/Projects/thumbnails/weather.png",
  },
  {
    title: "ScriptCrafter",
    link: "https://aiscripter-lake.vercel.app/",
    thumbnail:
      "/Images/Projects/thumbnails/ScriptCrafter.png",
  },

  {
    title: "Cupid",
    link: "https://cupid2-0-programmer-s-date.vercel.app/",
    thumbnail:
      "/Images/Projects/thumbnails/cupid.png",
  },
  {
    title: "DietPlanner",
    link: "https://die-ate-planner.vercel.app",
    thumbnail:
      "/Images/Projects/thumbnails/DietPlanner.png",
  },
  {
    title: "PhotoBooth",
    link: "https://photo-booth-opal.vercel.app/",
    thumbnail:
      "/Images/Projects/thumbnails/PhotoBooth.png",
  },

  {
    title: "Fire Predict",
    link: "https://forest-fire-predictor-nine.vercel.app/",
    thumbnail:
      "/Images/Projects/thumbnails/Firepredict.png",
  },
  {
    title: "Momentum Science Academy",
    link: "https://momentum-science-academy.vercel.app/",
    thumbnail:
      "/Images/Projects/thumbnails/momentum.png",
  },
  {
    title: "Zodiac 2025",
    link: "https://zodiac.rgitstudentcouncil.in/",
    thumbnail:
      "/Images/Projects/thumbnails/Zodiac2025.png",
  },
  {
    title: "Cess RGIT",
    link: "https://rgitcess.in/",
    thumbnail:
      "/Images/Projects/thumbnails/cess.png",
  },
  {
    title: "Phoenix Infra",
    link: "https://phoenixinfra.in/",
    thumbnail:
      "/Images/Projects/thumbnails/Phoenix.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
