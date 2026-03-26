import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kovai Overseas – Study MBBS Abroad',
  description: 'Your trusted partner for internationally recognized medical education. We connect aspiring doctors with world-class universities in Uzbekistan.',
  keywords: 'MBBS abroad, study medicine abroad, Zarmed University, Uzbekistan MBBS, medical education consultant, Kovai Overseas',
  openGraph: {
    title: 'Kovai Overseas – Study MBBS Abroad',
    description: 'Trusted since 2006. 18+ years helping Indian students pursue MBBS abroad.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
