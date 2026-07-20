import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/layout/theme-provider"
import Navbar from "@/components/layout/navbar"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vishalbarai.com"),
  title: {
    default: "Vishal Barai | Software Engineer & Full-Stack Developer",
    template: "%s | Vishal Barai"
  },
  description: "Professional portfolio of Vishal Barai. Software Engineer, Full-Stack Developer, and Cybersecurity Enthusiast. Explore my projects, skills, and resume.",
  keywords: [
    "Vishal Barai",
    "Vishal Barai Portfolio",
    "Vishal Barai Software Engineer",
    "Vishal Barai Full Stack Developer",
    "Vishal Barai Cybersecurity",
    "Software Engineer Portfolio",
    "React Developer India",
    "Next.js Developer"
  ],
  authors: [{ name: "Vishal Barai", url: "https://vishalbarai.com" }],
  creator: "Vishal Barai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishalbarai.com",
    title: "Vishal Barai | Software Engineer & Full-Stack Developer",
    description: "Professional portfolio of Vishal Barai. Software Engineer, Full-Stack Developer, and Cybersecurity Enthusiast.",
    siteName: "Vishal Barai Portfolio",
    images: [
      {
        url: "/Images/Milestones/profile2.png",
        width: 800,
        height: 800,
        alt: "Vishal Barai",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Barai | Software Engineer & Full-Stack Developer",
    description: "Professional portfolio of Vishal Barai. Software Engineer, Full-Stack Developer, and Cybersecurity Enthusiast.",
    images: ["/Images/Milestones/profile2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://vishalbarai.com",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishal Barai",
    "url": "https://vishalbarai.com",
    "sameAs": [
      "https://github.com/vishalbarai007",
      "https://linkedin.com/in/vishalbarai"
    ],
    "jobTitle": "Software Engineer & Full-Stack Developer",
    "description": "Professional portfolio of Vishal Barai showcasing expertise in Web Development, App Development, Software Engineering, and Cybersecurity.",
    "image": "https://vishalbarai.com/Images/Milestones/profile2.png"
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
