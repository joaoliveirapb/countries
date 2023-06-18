import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Countries',
  description:
    'A website that displays information from different countries. Made with React, Next.js and TailwindCSS.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
