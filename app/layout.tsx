import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ListProvider } from '@/contexts/ListContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Years Bingo',
  description: 'A different type of resolutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ListProvider>
        <body className={inter.className}>{children}</body>
      </ListProvider>
    </html>
  )
}
