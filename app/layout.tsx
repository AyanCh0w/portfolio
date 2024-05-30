import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ayan Chowdhary",
  description: "Portfolio and About-Me",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
