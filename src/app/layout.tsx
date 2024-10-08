import type { Metadata } from 'next'
import { Spline_Sans } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'

const splineSans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
})

export const metadata: Metadata = {
  title: 'LivrosSaaS',
  description: 'Simplifique Seus Estudos ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${splineSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
