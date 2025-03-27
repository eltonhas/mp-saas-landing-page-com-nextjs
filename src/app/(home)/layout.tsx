import type { Metadata } from 'next'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'LivrosSaaS',
  description: 'Simplifique Seus Estudos ',
}

export default function InsideLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
