'use client'
import { IconsHelper } from '@/helper/icon_helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/university', label: 'Zarmed University' },
  { href: '/admission', label: 'Admission' },
  { href: '/hostel&foods', label: 'Hostel' },
  { href: '/contact', label: 'Contact' },
  
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(11,30,61,.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(201,168,76,.2)' }}>
      <div className="nav-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}><IconsHelper.Cap size={24} /></div>
          <div style={{ color: 'white' }}>
            <span style={{ display: 'block', fontFamily: "'Playfair Display',serif", fontSize: 25, fontWeight: 700, lineHeight: 1.1 }}>Kovai Overseas</span>
            <small style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Medical Education Consultancy</small>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '8px 14px', fontSize: 13.5, fontWeight: 500, borderRadius: 8, cursor: 'pointer', transition: 'all .2s',
              color: pathname === l.href ? '#c9a84c' : 'rgba(255,255,255,.75)',
              background: pathname === l.href ? 'rgba(201,168,76,.15)' : 'transparent',
            }}>{l.label}</Link>
          ))}
          <Link href="/contact" style={{ background: '#c9a84c', color: '#0b1e3d', padding: '9px 20px', fontWeight: 600, borderRadius: 8, fontSize: 13.5, transition: 'all .2s' }}>Apply Now</Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 4, background: 'none', border: 'none' }} className="hamburger-btn">
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2 }}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#0b1e3d', padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ padding: '12px 0', color: 'rgba(255,255,255,.8)', fontSize: 15, borderBottom: '1px solid rgba(255,255,255,.06)' }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
