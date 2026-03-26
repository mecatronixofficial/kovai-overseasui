import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services – Kovai Overseas',
  description: 'Comprehensive MBBS abroad support from admission to arrival — Kovai Overseas.',
}

const services = [
  {
    num: '01',
    icon: '🎓',
    tag: 'Admissions',
    title: 'MBBS Admission Assistance',
    img: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=700&q=80',
    desc: 'We guide you through the entire application process for MBBS programs at our partner universities in Uzbekistan — from shortlisting to your official offer letter.',
    list: ['University shortlisting based on your profile', 'Application form preparation and submission', 'Follow-up with university admission offices', 'Offer letter and admission confirmation support'],
    color: '#c9a84c',
    colorRgb: '201,168,76',
    darkBg: false,
  },
  {
    num: '02',
    icon: '🔍',
    tag: 'Counselling',
    title: 'University Selection Guidance',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80',
    desc: 'Choosing the right university is one of the most important decisions of your career. We evaluate options based on your academic profile, budget, and long-term goals.',
    list: ['One-on-one counselling sessions', 'Comparison of university programs and fees', 'Information on campus facilities and student life', 'Guidance on NMC/WHO recognition status'],
    color: '#1e73be',
    colorRgb: '30,115,190',
    darkBg: true,
  },
  {
    num: '03',
    icon: '📄',
    tag: 'Documentation',
    title: 'Documentation & Application Support',
    img: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=700&q=80',
    desc: 'We assist you in preparing and verifying every required document — so nothing is missed, nothing is delayed, and your application is always complete.',
    list: ['Application forms (academic & personal)', 'Academic certificate attestation', 'Passport assistance and verification', 'Medical documents and NEET score card'],
    color: '#c9a84c',
    colorRgb: '201,168,76',
    darkBg: false,
  },
  {
    num: '04',
    icon: '✈️',
    tag: 'Pre-Departure',
    title: 'Pre-Departure Support',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80',
    desc: 'From visa processing to travel planning and accommodation — we prepare you thoroughly for life abroad so you arrive confident, informed, and ready.',
    list: ['Student visa process and application', 'Travel planning and flight booking guidance', 'Accommodation arrangements at university', 'Pre-departure orientation and briefing session'],
    color: '#1e73be',
    colorRgb: '30,115,190',
    darkBg: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      <style>{`
        /* ── HERO ── */
        .sp-hero {
          position: relative; padding-top: 70px; min-height: 400px;
          display: flex; align-items: center; overflow: hidden;
        }
        .sp-hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80');
          background-size: cover; background-position: center;
        }
        .sp-hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(11,30,61,.95) 0%, rgba(11,30,61,.80) 60%, rgba(30,115,190,.55) 100%);
        }
        .sp-hero-inner {
          position: relative; z-index: 2;
          width: 100%; padding: 72px 0 100px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .sp-hero-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,.12); border: 1px solid rgba(201,168,76,.3);
          border-radius: 100px; padding: 6px 18px; margin-bottom: 24px;
          font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
          color: #c9a84c;
        }
        .sp-hero h1 {
          font-size: clamp(2.6rem,5.5vw,4rem);
          color: white; line-height: 1.05; margin-bottom: 18px;
          max-width: 700px;
        }
        .sp-hero h1 em { font-style: normal; color: #c9a84c; }
        .sp-hero-desc {
          font-size: 17px; color: rgba(255,255,255,.62); line-height: 1.8;
          max-width: 520px; margin-bottom: 38px;
        }
        .sp-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }
        .sp-hero-wave {
          position: absolute; bottom: -2px; left: 0; right: 0; z-index: 3;
        }

        /* ── JOURNEY TRACKER ── */
        .journey-track {
          background: #0b1e3d; padding: 44px 0;
          border-bottom: 1px solid rgba(201,168,76,.15);
        }
        .journey-steps {
          display: flex; align-items: center; justify-content: center;
          gap: 0; max-width: 900px; margin: 0 auto; padding: 0 24px;
        }
        .journey-node { display: flex; flex-direction: column; align-items: center; gap: 10px; flex: 1; }
        .journey-node-circle {
          width: 58px; height: 58px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; border: 2px solid; position: relative; z-index: 1;
          transition: transform .25s;
        }
        .journey-node-circle:hover { transform: scale(1.1); }
        .journey-node-label { font-size: 11.5px; font-weight: 600; letter-spacing: .04em; text-align: center; }
        .journey-arrow {
          flex: 0.4; display: flex; align-items: center; justify-content: center;
          padding-bottom: 22px;
        }
        .journey-arrow svg { width: 100%; opacity: .5; }

        /* ── SERVICES BENTO GRID ── */
        .sp-intro {
          text-align: center; max-width: 580px; margin: 0 auto 64px; padding: 0 24px;
        }
        .sp-intro-eyebrow {
          display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: #c9a84c; margin-bottom: 14px;
        }
        .sp-intro h2 { font-size: clamp(1.9rem,3.5vw,2.8rem); color: #0b1e3d; margin-bottom: 12px; }
        .sp-intro p { font-size: 16px; color: #6b7a99; line-height: 1.75; }

        /* Bento layout: 2 tall cards side by side, each card is a full panel */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          border-radius: 28px;
          overflow: hidden;
         
        }
        .bento-card {
          position: relative; min-height: 640px;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
        }
        /* Photo background fills card */
        .bento-card-photo {
          position: absolute; inset: 0;
        }
        .bento-card-photo img {
          transition: transform .6s ease;
        }
        .bento-card:hover .bento-card-photo img {
          transform: scale(1.05);
        }
        /* Dark overlay gradient */
        .bento-card-overlay {
          position: absolute; inset: 0; z-index: 1;
        }
        /* Content sits on top */
        .bento-card-content {
          position: relative; z-index: 2;
          padding: 36px 40px 40px;
        }
        .bento-card-num {
          position: absolute; top: 28px; right: 32px; z-index: 3;
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem; font-weight: 700; line-height: 1;
          opacity: .12; color: white; pointer-events: none;
        }
        .bento-card-tag {
          display: inline-flex; align-items: center; gap: 7px;
          border: 1px solid; border-radius: 100px;
          padding: 5px 14px; font-size: 11px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .bento-card-tag .tag-icon { font-size: 14px; }
        .bento-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem; color: white;
          margin-bottom: 12px; line-height: 1.2;
        }
        .bento-card-desc {
          font-size: 14.5px; color: rgba(255,255,255,.7);
          line-height: 1.8; margin-bottom: 22px; max-width: 380px;
        }
        .bento-feature-list {
          list-style: none; display: flex; flex-direction: column; gap: 9px; margin-bottom: 28px;
        }
        .bento-feature-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: rgba(255,255,255,.8);
        }
        .bento-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700;
        }
        .bento-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 10px;
          font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif;
          text-decoration: none; transition: all .22s; border: 2px solid;
        }
        .bento-cta:hover { transform: translateY(-2px); }

        /* ── STATS BAR ── */
        .sp-stats-bar {
          background: linear-gradient(135deg, #0b1e3d, #112550);
          padding: 52px 0; margin-top: 80px;
          position: relative; overflow: hidden;
        }
        .sp-stats-bar::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(201,168,76,.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .sp-stats-inner {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          position: relative; z-index: 1;
        }
        .sp-stat {
          text-align: center; padding: 16px 24px;
          border-right: 1px solid rgba(255,255,255,.08);
        }
        .sp-stat:last-child { border-right: none; }
        .sp-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.6rem; font-weight: 700; color: #c9a84c; line-height: 1; margin-bottom: 6px;
        }
        .sp-stat-label { font-size: 13px; color: rgba(255,255,255,.5); letter-spacing: .04em; }

        /* ── CTA BANNER ── */
        .sp-cta-wrap { padding: 80px 0; }
        .sp-cta-inner {
          background: linear-gradient(135deg, #1e73be, #0b1e3d);
          border-radius: 24px; padding: 68px 56px; text-align: center;
          position: relative; overflow: hidden;
        }
        .sp-cta-inner::before { content: ''; position: absolute; top: -80px; left: -80px; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,.04); }
        .sp-cta-inner::after  { content: ''; position: absolute; bottom: -60px; right: -60px; width: 240px; height: 240px; border-radius: 50%; background: rgba(201,168,76,.08); }
        .sp-cta-inner h2 { font-size: clamp(1.8rem,3.5vw,2.5rem); color: white; margin-bottom: 14px; }
        .sp-cta-inner p  { color: rgba(255,255,255,.68); font-size: 16px; margin-bottom: 34px; max-width: 480px; margin-left: auto; margin-right: auto; }
        .sp-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; position: relative; z-index: 1; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-card { min-height: 560px; }
          .sp-stats-inner { grid-template-columns: repeat(2,1fr); }
          .sp-stat:nth-child(2) { border-right: none; }
          .sp-stat:nth-child(1), .sp-stat:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,.08); }
          .journey-steps { flex-wrap: wrap; gap: 16px; justify-content: flex-start; }
          .journey-arrow { display: none; }
          .journey-node { flex: 0 0 calc(33% - 12px); }
        }
        @media (max-width: 600px) {
          .bento-card-content { padding: 28px 24px 32px; }
          .sp-cta-inner { padding: 44px 24px; }
          .sp-stats-inner { grid-template-columns: 1fr 1fr; }
          .journey-node { flex: 0 0 calc(50% - 8px); }
        }
      `}</style>

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="sp-hero">
        <div className="sp-hero-bg"></div>
        <div className="container">
          <div className="sp-hero-inner">
            <div className="sp-hero-pill">✦ What We Offer</div>
            <h1>Our <em>Services</em> —<br />Built Around You</h1>
            <p className="sp-hero-desc">
              Comprehensive, end-to-end support from your first enquiry to the day you arrive
              at your university abroad. Every service designed for your success.
            </p>
            <div className="sp-hero-btns">
              <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
              <Link href="/admission" className="btn btn-outline-white">View Admission Process</Link>
            </div>
          </div>
        </div>
        <div className="sp-hero-wave">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 56 Q360 0 720 28 Q1080 56 1440 16 L1440 56 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════
          JOURNEY TRACKER STRIP
      ═══════════════════════════════════ */}
      {/* <div className="journey-track">
        <div className="container">
          <div className="journey-steps">
            {[
              { icon: '🎓', label: 'Admission',    color: '#c9a84c', bg: 'rgba(201,168,76,.15)' },
              { icon: '🔍', label: 'Selection',    color: '#4a9fd4', bg: 'rgba(74,159,212,.15)'  },
              { icon: '📄', label: 'Documents',    color: '#c9a84c', bg: 'rgba(201,168,76,.15)' },
              { icon: '✈️', label: 'Pre-Departure',color: '#4a9fd4', bg: 'rgba(74,159,212,.15)'  },
              { icon: '🏥', label: 'University',   color: '#c9a84c', bg: 'rgba(201,168,76,.15)' },
              { icon: '🩺', label: 'Doctor!',      color: '#66bb6a', bg: 'rgba(102,187,106,.15)' },
            ].map((s, i, arr) => (
              <>
                <div key={s.label} className="journey-node">
                  <div className="journey-node-circle" style={{ background: s.bg, borderColor: s.color }}>
                    {s.icon}
                  </div>
                  <div className="journey-node-label" style={{ color: s.color }}>{s.label}</div>
                </div>
                {i < arr.length - 1 && (
                  <div key={`arrow-${i}`} className="journey-arrow">
                    <svg viewBox="0 0 40 10" fill="none">
                      <line x1="0" y1="5" x2="32" y2="5" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="4,3"/>
                      <polygon points="30,1 38,5 30,9" fill="#c9a84c"/>
                    </svg>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div> */}

      {/* ═══════════════════════════════════
          SERVICES — BENTO GRID
      ═══════════════════════════════════ */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="sp-intro">
            <div className="sp-intro-eyebrow">✦ Four Core Services</div>
            <h2>Everything Covered.<br />Nothing Left to Chance.</h2>
            <p>From admission to arrival — every step of your MBBS abroad journey is handled with expertise and care.</p>
          </div>

          <div className="bento-grid">
            {services.map((svc) => {
              const isGold = svc.color === '#c9a84c'
              const overlayGradient = isGold
                ? 'linear-gradient(to top, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.75) 50%, rgba(11,30,61,0.25) 100%)'
                : 'linear-gradient(to top, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.78) 50%, rgba(30,115,190,0.20) 100%)'

              return (
                <div key={svc.title} className="bento-card">
                  {/* Photo */}
                  <div className="bento-card-photo">
                    <Image src={svc.img} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                  </div>

                  {/* Overlay */}
                  <div className="bento-card-overlay" style={{ background: overlayGradient }}></div>

                  {/* Big watermark number */}
                  <div className="bento-card-num">{svc.num}</div>

                  {/* Content */}
                  <div className="bento-card-content">
                    <div
                      className="bento-card-tag"
                      style={{ color: svc.color, borderColor: `rgba(${svc.colorRgb},.4)`, background: `rgba(${svc.colorRgb},.1)` }}
                    >
                      <span className="tag-icon">{svc.icon}</span>
                      {svc.tag}
                    </div>
                    <h3>{svc.title}</h3>
                    <p className="bento-card-desc">{svc.desc}</p>
                    <ul className="bento-feature-list">
                      {svc.list.map(item => (
                        <li key={item}>
                          <span
                            className="bento-check"
                            style={{ background: `rgba(${svc.colorRgb},.18)`, color: svc.color }}
                          >✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="bento-cta"
                      style={{
                        color: svc.color,
                        borderColor: `rgba(${svc.colorRgb},.4)`,
                        background: `rgba(${svc.colorRgb},.1)`,
                      }}
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAR
      ═══════════════════════════════════ */}
      {/* <div className="sp-stats-bar">
        <div className="container">
          <div className="sp-stats-inner">
            {[
              { num: '500+', label: 'Students Placed'    },
              { num: '18+',  label: 'Years Experience'   },
              { num: '95%',  label: 'Visa Success Rate'  },
              { num: '4',    label: 'Core Services'       },
            ].map(s => (
              <div key={s.label} className="sp-stat">
                <div className="sp-stat-num">{s.num}</div>
                <div className="sp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section className="sp-cta-wrap">
        <div className="container">
          <div className="sp-cta-inner">
            <h2>Need Personalised Guidance?</h2>
            <p>Our expert counsellors are ready to help you choose the right path for your medical career — completely free of charge.</p>
            <div className="sp-cta-btns">
              <Link href="/contact" className="btn btn-gold">✦ Talk to a Counsellor</Link>
              <Link href="/contact" className="btn btn-outline-white">Book Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
