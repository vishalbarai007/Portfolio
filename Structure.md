# Project Structure & Architecture (`Structure.md`)

## 📁 Directory Tree Overview

```
Portfolio/
├── .env                       # Local environment variables
├── .env.example               # Example environment variable template
├── .gitignore                 # Git ignore rules
├── components.json            # Shadcn UI configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript compiler configuration
├── Frontend.md                # Frontend routes, endpoints & component documentation
├── Memory.md                  # AI Assistant persistent project memory
├── Structure.md               # Folder structure & architecture (this file)
│
├── public/                    # Static asset files
│   ├── assets/                # 3D assets & models
│   ├── Images/                # Portfolio images
│   │   ├── Milestones/        # Timeline & achievement images
│   │   ├── mypersonal/        # Personal photos & cutout portraits (ruchi.png, LandingHero.png, etc.)
│   │   └── Projects/          # Project thumbnails
│   ├── placeholder-logo.png
│   └── placeholder-user.jpg
│
└── src/                       # Application source code
    ├── app/                   # Next.js 15 App Router Pages & API Routes
    │   ├── api/               # Serverless API routes
    │   │   ├── assistant/     # AI Chat Assistant API route
    │   │   ├── contact/       # Contact form email API route
    │   │   ├── github/        # Live GitHub stats API route
    │   │   ├── leetcode/      # Live LeetCode stats API route
    │   │   ├── resume/        # Resume PDF generator route
    │   │   └── stats/         # Consolidated metrics API route
    │   │
    │   ├── about/             # About Me page (/about)
    │   ├── assistant/         # AI Assistant interactive page (/assistant)
    │   ├── contact/           # Contact Me page (/contact)
    │   ├── dashboard/         # Dashboard view (/dashboard)
    │   ├── portfolio/         # Domain portfolios page (/portfolio)
    │   │   ├── app/           # Mobile App development portfolio (/portfolio/app)
    │   │   ├── cybersecurity/ # Cybersecurity & Security audits (/portfolio/cybersecurity)
    │   │   ├── software/      # Software engineering & tools (/portfolio/software)
    │   │   └── web/           # Web development portfolio (/portfolio/web)
    │   ├── resume/            # Interactive resume view (/resume)
    │   ├── skills/            # Technical skills matrix page (/skills)
    │   ├── timeline/          # Milestones timeline page (/timeline)
    │   │
    │   ├── layout.tsx         # Global Root Layout
    │   ├── page.tsx           # Main Landing Page (Home)
    │   ├── providers.tsx      # Theme & Global Context Providers
    │   ├── error.tsx          # Global Error boundary
    │   ├── not-found.tsx      # Custom 404 page
    │   ├── robots.ts          # SEO robots.txt configuration
    │   └── sitemap.ts         # Dynamic SEO sitemap configuration
    │
    ├── components/            # React UI components
    │   ├── layout/            # Layout components (Navbar, Footer, MacDock, ClickSpark, Tooltips)
    │   ├── sections/          # Page section modules
    │   │   ├── home/          # Home page sections (Hero, Intro, Techstack, FeaturedProjects, etc.)
    │   │   ├── skills/        # Skill matrix components
    │   │   └── timeline/      # Timeline section components
    │   └── ui/                # Base Shadcn/Radix UI components & Aceternity animated widgets
    │
    ├── data/                  # Static JSON data files
    │   ├── about.json         # Bio & social metadata
    │   ├── education.json     # Academic history
    │   ├── experiences.json   # Work history
    │   ├── skills.json        # Skills categorization
    │   └── skills-projects.json # Project showcase data
    │
    ├── hooks/                 # Custom React hooks (use-mobile, use-toast, etc.)
    ├── lib/                   # Utility functions & API clients (github.ts, leetcode.ts, utils.ts, etc.)
    ├── styles/                # CSS stylesheet files
    └── types/                 # TypeScript declaration files
```

---

## 🏗️ Architecture & Data Flow

1. **Routing & Pages Layer**: Next.js 15 App Router handles nested routes under `src/app/`. Each page utilizes standard Next.js metadata API for SEO.
2. **Component Layer**:
   - `src/components/ui`: Atomic reusable components (Buttons, Dialogs, Cards, Badges, Tabs, Aceternity animations).
   - `src/components/layout`: Global navigation framework (Navbar, Dock, ThemeProvider).
   - `src/components/sections`: Page-specific composed sections (e.g. `Intro.tsx`, `Hero.tsx`).
3. **Data Layer**:
   - Static local data is stored in `src/data/*.json`.
   - Dynamic data (GitHub commits, LeetCode stats, AI Assistant responses) is fetched via Next.js API Routes (`src/app/api/*`).
4. **State & Animations**: Client-side state managed via React Hooks & Framer Motion (`useScroll`, `useTransform`, `motion.*`).
