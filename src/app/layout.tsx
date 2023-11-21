import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Nyay Vault',
  description: 'Justice will Prevail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}><Navbar />{children}</body>
    </html>
  )
}
