import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'KASHIWA SATO - CREATIVE DIRECTOR  /  SAMURAI INC. TOKYO',
  description: 'Official Website of Kashiwa Sato : Art Director / Creative Director, Tokyo Japan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="page">{children}</body>
    </html>
  )
}
