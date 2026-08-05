# Frontend Documentation

## Overview
This frontend is a modern, high-performance developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. It features rich interactive sections, 3D/parallax effects, dynamic API integrations, and smooth micro-animations.

---

## 🚀 Tech Stack & Core Dependencies
- **Framework**: Next.js 15.5.20 (App Router)
- **UI Framework**: React 19.2.0
- **Styling**: Tailwind CSS v4, CSS Variables, `clsx`, `tailwind-merge`
- **Animations**: Framer Motion 12, Lucide React icons
- **3D & Canvas**: Three.js, `@react-three/fiber`, `@react-three/drei`, OGL
- **UI Components**: Radix UI Primitives, Custom Glassmorphism UI, Sonner

---

## 🗺️ Page Routes & Flow

### 1. Home Page (`/`)
- **Route**: `src/app/page.tsx` -> `src/components/sections/home/home-page-client.tsx`
- **Flow**:
  1. `Hero`: Modern landing banner with CTA buttons, floating status badge, and highlight card.
  2. `Intro`: Custom showcase intro with Framer Motion slide-in typography, backdrop lighting slashes, and a parallax image cutout.
  3. `HeroParallaxDemo`: Aceternity interactive scroll-based project showcase.
  4. `DomainShowcase`: Highlights main technical domains (Web, App, Software, Security).
  5. `Techstack` & `OtherTechstack`: Interactive tech logos grid with hover cards.
  6. `LandingProject`: Featured highlight project showcase.
  7. `FeaturedProjects`: Card grid displaying top software & web projects.
  8. `GitHubContributions`: Live GitHub contribution activity graph.
  9. `MacDock`: MacOS-style floating bottom navigation dock.

### 2. About Page (`/about`)
- **Route**: `src/app/about/page.tsx`
- **Flow**: Displays profile hero, professional bio, key skills matrix breakdown, and contact links.

### 3. Portfolio Showcase (`/portfolio/*`)
- **Route**: `src/app/portfolio/page.tsx`
- **Sub-routes**:
  - Web Development: `/portfolio/web`
  - Mobile App Development: `/portfolio/app`
  - Software Engineering: `/portfolio/software`
  - Cybersecurity & Pentesting: `/portfolio/cybersecurity`

### 4. Skills Matrix (`/skills`)
- **Route**: `src/app/skills/page.tsx`
- **Flow**: Enhanced skill matrix broken down into domains (Web, App, Software, Security, Tools).

### 5. Career & Milestone Timeline (`/timeline`)
- **Route**: `src/app/timeline/page.tsx`
- **Flow**: Interactive vertical timeline showing career milestones, hackathons, and key achievements.

### 6. Interactive AI Assistant (`/assistant`)
- **Route**: `src/app/assistant/page.tsx`
- **Flow**: Real-time AI chat workspace for interacting with the portfolio assistant.

### 7. Resume View (`/resume`)
- **Route**: `src/app/resume/page.tsx`
- **Flow**: Interactive online resume with PDF generation / download triggers.

### 8. Contact Page (`/contact`)
- **Route**: `src/app/contact/page.tsx`
- **Flow**: Interactive contact form with form validation and email API route trigger.

---

## 📡 API Endpoints (`/api/*`)

| Endpoint | Method | File Path | Description |
| :--- | :--- | :--- | :--- |
| `/api/assistant` | `POST` | `src/app/api/assistant/route.ts` | AI portfolio assistant chat handler |
| `/api/contact` | `POST` | `src/app/api/contact/route.tsx` | Contact form submission email dispatch |
| `/api/github` | `GET` | `src/app/api/github/route.ts` | Fetches live GitHub repositories & commit stats |
| `/api/leetcode` | `GET` | `src/app/api/leetcode/route.ts` | Fetches live LeetCode stats & solved problems |
| `/api/resume` | `GET` | `src/app/api/resume/route.ts` | Server-side PDF resume generator/fetcher |
| `/api/stats` | `GET` | `src/app/api/stats/route.ts` | Consolidated portfolio metrics & achievements stats |

---

## 🎨 Component Architecture

### Layout Components (`src/components/layout/`)
- `navbar.tsx`: Header navigation bar with theme toggle & mobile drawer.
- `footer.tsx`: Global footer with social links & copyright.
- `mac-dock.tsx`: macOS style interactive dock navigation.
- `ClickSpark.tsx`: Sparkle cursor animation container.
- `social-hover-card.tsx` & `skill-hover-card.tsx`: Rich tooltip hover cards.

### Section Components (`src/components/sections/`)
- `home/Intro.tsx`: High-impact intro section with Framer Motion text animations and parallax image cutout.
- `home/hero.tsx`: Landing hero grid with CTAs.
- `home/github-contributions.tsx`: GitHub activity graph integration.
- `skills/skill-matrix-enhanced.tsx`: Interactive skill category badges.

---

## ⚙️ Data Files (`src/data/`)
- `about.json`: Personal bio, location, email, and social handles.
- `education.json`: Educational qualifications & degrees.
- `experiences.json`: Work experience history & roles.
- `skills.json`: Detailed skill categories & tech list.
- `skills-projects.json`: Project metadata, tags, image paths, and GitHub/Live links.
