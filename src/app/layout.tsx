import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/sections/theme-provider"
import MacDock from "@/components/layout/mac-dock"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Professional single page portfolio showcasing developer expertise and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
        >
          <main>{children}</main>
          
          {/* Floating macOS-style Dock Navigation */}
          <MacDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
