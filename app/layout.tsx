import type { Metadata } from 'next'

import { ThemeProvider } from "@/components/theme-provider";
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenFolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}