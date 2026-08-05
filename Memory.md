# Project Memory (`Memory.md`)

> **IMPORTANT FOR ALL AI ASSISTANTS**:
> Read this file at the start of any conversation to understand the codebase state, active features, and recent changes.
> **Rule**: You MUST update `Memory.md` whenever you make structural or meaningful changes to the codebase.

---

## 📌 Project Overview
- **Project Name**: Dynamic Portfolio (`dynamicportfolio`)
- **Type**: Next.js 15 Developer & Professional Showcase Portfolio
- **Primary Owner / Scope**: Software Engineering, Web/App Development, Cybersecurity, and Professional Coaching Portfolio.
- **Repository Location**: Workspace `/media/vishal-barai/New Volume/Portfolio/Portfolio`

---

## 🛠️ Technology Stack & Environment
- **Node.js Environment**: Next.js 15.5.20 (App Router), React 19.2.0, TypeScript 5
- **Styling**: Tailwind CSS v4, Vanilla CSS variables, Radix UI Primitives
- **Animation Framework**: Framer Motion 12 (`framer-motion`, `motion`)
- **Icons & Graphics**: Lucide React (`lucide-react`), `@tabler/icons-react`
- **3D Graphics**: Three.js (`three`), React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Server**: Next.js Dev Server (`npm run dev`) on `http://localhost:3000`

---

## 📋 Recent Updates & Log

### 1. Intro Section Redesign (`src/components/sections/home/Intro.tsx`)
- **Date**: 2026-08-03
- **Changes**:
  - Implemented high-impact Intro section based on executive coach layout.
  - Added dark blue slate gradient background (`#1e2a4a` to `#18233f`) with radial ambient glow, glass lighting slashes, and soft studio shadow effects.
  - Added large bold typography: **"Hi, I'm RUCHI"** (left div) and **"PAREKH"** (right div) with tagline:
    - *Executive, Career & Life Coach | Lawyer*
    - *NLP Practitioner | Author | Keynote Speaker*
  - Added transparent image cutout (`/public/Images/mypersonal/ruchi.png`) centered between text blocks with `z-index` layering.
  - Added Framer Motion scroll parallax (`useScroll` + `useTransform`) and slide-in animations.
- **Verification**: `npx tsc --noEmit` passed with 0 errors.

### 2. Next.js 15 & Dependencies Setup
- **Changes**: Configured Next.js 15.5.20 App Router with dynamic client-side imports (`next/dynamic`) for dynamic components (`ClickSpark`, `MacDock`, `GitHubContributions`).

---

## 📝 Guidelines for AI Models
1. **Always maintain TypeScript integrity**: Run `npx tsc --noEmit` after significant component modifications.
2. **Component Conventions**:
   - Client components MUST include `"use client"` directive at the top.
   - Use Lucide icons or Radix UI primitives for UI components.
   - Use Framer Motion for animations.
3. **Memory Update Requirement**:
   - Whenever you add new pages, endpoints, key components, or complete user requests, append the update entry under the **Recent Updates & Log** section of this file (`Memory.md`).
