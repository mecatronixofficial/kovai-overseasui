import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us – Kovai Overseas',
  description: 'Get in touch with Kovai Overseas for free MBBS abroad counselling.',
}

export default function ContactPage() {
  return <ContactClient />
}
