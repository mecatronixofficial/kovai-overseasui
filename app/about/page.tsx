import CTABanner from '@/components/CTABanner'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us – Kovai Overseas',
  description:
    "For over 18 years, Kovai Overseas has been the bridge between Tamil Nadu's brightest medical aspirants and world-class universities abroad. Trusted by 500+ families.",
}

/* ─── Data ─────────────────────────────────────────────────────────── */
const timelineItems = [
  {
    side: 'left',
    icon: '🌱',
    year: '2006',
    yearColor: 'var(--gold)',
    dotBg: 'var(--gold)',
    dotShadow: 'rgba(201,168,76,.22)',
    title: 'Our Beginning',
    desc: 'Founded in Salem, Tamil Nadu with a single mission — to make international medical education accessible to every deserving Indian student.',
  },
  {
    side: 'right',
    icon: '🤝',
    year: '2010',
    yearColor: 'var(--sky)',
    dotBg: 'var(--sky)',
    dotShadow: 'rgba(30,115,190,.2)',
    title: 'First Partnership',
    desc: 'Established our first formal university partnership with an internationally recognised medical institution, opening doors for Tamil Nadu students.',
  },
  {
    side: 'left',
    icon: '🚀',
    year: '2015',
    yearColor: 'var(--gold)',
    dotBg: 'var(--gold)',
    dotShadow: 'rgba(201,168,76,.22)',
    title: 'Rapid Growth',
    desc: 'Expanded to serve students across Tamil Nadu and beyond, with a growing team of expert counsellors dedicated to student success.',
  },
  {
    side: 'right',
    icon: '🎓',
    year: '2018',
    yearColor: 'var(--sky)',
    dotBg: 'var(--sky)',
    dotShadow: 'rgba(30,115,190,.2)',
    title: '300 Students Milestone',
    desc: 'Crossed 300 students successfully placed in MBBS programs abroad — cementing our reputation as Tamil Nadu\'s most trusted consultancy.',
  },
  {
    side: 'left',
    icon: '🏆',
    year: '2022',
    yearColor: 'var(--gold)',
    dotBg: 'var(--gold)',
    dotShadow: 'rgba(201,168,76,.22)',
    title: 'Zarmed Partnership',
    desc: 'Forged a premier partnership with Zarmed University, Uzbekistan — one of the finest WHO-recognised English-medium MBBS institutions.',
  },
  {
    side: 'right',
    icon: '🌟',
    year: '2025',
    yearColor: 'var(--sky)',
    dotBg: 'var(--sky)',
    dotShadow: 'rgba(30,115,190,.2)',
    title: '500+ & Growing',
    desc: 'Over 500 students placed, new university partnerships, and an expanded team — stronger than ever, ready to serve the next generation.',
  },
]

const trustCards = [
  { icon: '👨‍💼', iconCls: 'trust-icon-gold', title: 'Experienced Counselling Team', desc: 'Our counsellors have each helped hundreds of students navigate international medical admissions with clarity and confidence.' },
  { icon: '🔍', iconCls: 'trust-icon-sky',  title: 'Transparent at Every Step',    desc: 'No hidden fees. No false promises. We give you the complete picture so you can make the best decision for your future.' },
  { icon: '🏛️', iconCls: 'trust-icon-gold', title: 'Strong University Partnerships', desc: 'We only partner with universities that meet our strict quality standards — all recognized by WHO and NMC.' },
  { icon: '💬', iconCls: 'trust-icon-sky',  title: 'Support That Never Stops',     desc: 'Our relationship doesn\'t end when you board the flight. We remain your point of contact for your entire MBBS journey.' },
  { icon: '📋', iconCls: 'trust-icon-gold', title: 'Zero Documentation Stress',    desc: 'We handle the paperwork. From application forms to visa documents, we manage every detail with meticulous care.' },
  { icon: '✈️', iconCls: 'trust-icon-sky',  title: '95%+ Visa Success Rate',       desc: 'Our deep expertise in student visa applications ensures a smooth, successful process for the vast majority of our students.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80', alt: 'Lecture hall' },
  { src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80', alt: 'Medical lab' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', alt: 'Students' },
  { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80', alt: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80', alt: 'University' },
]

/* ─── Component ─────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ── PAGE-SCOPED STYLES ── */}
      <style>{`
        /* ── HERO ── */
        .about-hero {
          position: relative; min-height: 520px;
          display: flex; align-items: center; overflow: hidden;
          background: var(--navy); padding-top: 70px;
        }
        .about-hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1920&q=80');
          background-size: cover; background-position: center 30%; z-index: 0;
        }
        .about-hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, rgba(11,30,61,.96) 40%, rgba(11,30,61,.70) 100%);
        }
        .hero-arc {
          position: absolute; right: 0; top: 0; height: 100%;
          z-index: 1; opacity: .08;
        }
        .hero-inner { position: relative; z-index: 2; width: 100%; padding: 60px 0; }
        .hero-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,.12); border: 1px solid rgba(201,168,76,.3);
          border-radius: 100px; padding: 5px 16px; margin-bottom: 24px;
        }
        .hero-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
        .hero-eyebrow span { color: var(--gold); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
        .about-hero h1 { font-size: clamp(2.4rem,5vw,3.8rem); color: white; line-height: 1.08; margin-bottom: 20px; }
        .about-hero h1 em { font-style: normal; color: var(--gold); }
        .hero-sub { font-size: 17px; color: rgba(255,255,255,.65); line-height: 1.8; max-width: 480px; margin-bottom: 36px; }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .stats-card {
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.10);
          border-radius: 20px; padding: 32px; backdrop-filter: blur(12px);
          display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
        }
        .stat-cell { padding: 28px 24px; text-align: center; }
        .stat-cell:nth-child(odd)   { border-right:  1px solid rgba(255,255,255,.08); }
        .stat-cell:nth-child(-n+2)  { border-bottom: 1px solid rgba(255,255,255,.08); }
        .stat-num   { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 700; color: var(--gold); line-height: 1; }
        .stat-label { font-size: 12.5px; color: rgba(255,255,255,.5); margin-top: 6px; letter-spacing: .04em; }
        .wave { position: absolute; bottom: -2px; left: 0; right: 0; z-index: 3; }

        /* ── WHO WE ARE COLLAGE ── */
        .collage { position: relative; height: 500px; }
        .collage-main {
          position: absolute; top: 0; left: 0; right: 60px; bottom: 60px;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 24px 60px rgba(11,30,61,.18);
        }
        .collage-inset {
          position: absolute; bottom: 0; right: 0; width: 200px; height: 220px;
          border-radius: 16px; overflow: hidden;
          border: 5px solid white; box-shadow: 0 16px 48px rgba(11,30,61,.22);
          z-index: 2;
        }
        .collage-badge {
          position: absolute; top: 24px; left: -16px;
          background: var(--navy); color: white;
          border-radius: 14px; padding: 16px 22px;
          box-shadow: 0 8px 28px rgba(11,30,61,.3); z-index: 4;
        }
        .collage-badge .num { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--gold); line-height: 1; }
        .collage-badge p { font-size: 12px; color: rgba(255,255,255,.6); margin-top: 4px; }
        .collage-pill {
          position: absolute; bottom: 24px; left: 20px;
          background: white; border-radius: 12px; padding: 12px 16px;
          box-shadow: 0 8px 28px rgba(11,30,61,.2);
          display: flex; align-items: center; gap: 10px; z-index: 4;
        }
        .collage-pill .pi { font-size: 26px; }
        .collage-pill strong { font-weight: 700; font-size: 15px; color: var(--navy); }
        .collage-pill small  { font-size: 11px; color: var(--muted); }
        .about-rule { width: 48px; height: 3px; background: linear-gradient(90deg,var(--gold),var(--sky)); border-radius: 2px; margin-bottom: 24px; }
        .about-strip { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }

        /* ── VALUES ── */
        .values-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        .value-card {
          background: white; border-radius: 18px; padding: 36px 28px;
          border: 1px solid rgba(11,30,61,.07); box-shadow: var(--shadow);
          text-align: center; position: relative; overflow: hidden; transition: all .25s;
        }
        .value-card:hover { transform: translateY(-8px); box-shadow: 0 20px 56px rgba(201,168,76,.22); border-color: rgba(201,168,76,.5); }
        .value-card .accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; }
        .value-card .vi { font-size: 40px; margin-bottom: 16px; }
        .value-card h3 { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 10px; font-family: 'DM Sans', sans-serif; }
        .value-card p  { font-size: 13.5px; color: var(--muted); line-height: 1.7; }

        /* ── TIMELINE ── */
        .tl-wrap { position: relative; }
        .tl-line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(to bottom, var(--gold), var(--sky), var(--gold));
          opacity: .25;
        }
        .tl-row { display: grid; grid-template-columns: 1fr 60px 1fr; align-items: center; margin-bottom: 32px; }
        .tl-card { background: white; border-radius: 16px; padding: 28px 32px; box-shadow: var(--shadow); border: 1px solid rgba(11,30,61,.07); transition: all .25s; }
        .tl-card:hover { box-shadow: var(--shadow2); transform: translateY(-3px); }
        .tl-card .year  { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
        .tl-card .t-icon{ font-size: 28px; margin-bottom: 10px; }
        .tl-card h3  { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 8px; font-family: 'DM Sans', sans-serif; }
        .tl-card p   { font-size: 14px; color: var(--muted); line-height: 1.7; }
        .tl-dot-wrap { display: flex; justify-content: center; align-items: center; }
        .tl-dot { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; z-index: 2; }
        .left-card  { padding-right: 40px; }
        .right-card { padding-left:  40px; }

        /* ── MISSION / VISION ── */
        .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .mv-card { border-radius: 20px; overflow: hidden; position: relative; min-height: 340px; }
        .mv-overlay { position: absolute; inset: 0; }
        .mv-content { position: relative; z-index: 1; padding: 40px; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; }
        .mv-icon-box { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
        .mv-content h3 { font-family: 'Playfair Display', serif; font-size: 26px; color: white; margin-bottom: 14px; }
        .mv-content p  { color: rgba(255,255,255,.75); font-size: 15px; line-height: 1.8; }

        /* ── TEAM ── */
        .team-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
        .team-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow); border: 1px solid rgba(11,30,61,.07); transition: all .25s; }
        .team-card:hover { transform: translateY(-6px); box-shadow: var(--shadow2); }
        .team-photo { height: 220px; position: relative; overflow: hidden; }
        .team-photo-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(11,30,61,.5) 0%,transparent 50%); }
        .team-exp { position: absolute; bottom: 12px; right: 12px; background: var(--gold); color: var(--navy); font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 100px; }
        .team-info { padding: 24px 28px; }
        .team-info h3  { font-family: 'Playfair Display', serif; font-size: 19px; color: var(--navy); margin-bottom: 4px; }
        .team-role     { font-size: 13px; color: var(--sky); font-weight: 600; margin-bottom: 12px; }
        .team-info p   { font-size: 14px; color: var(--muted); line-height: 1.7; }

        /* ── TRUST ── */
        .trust-section { background: var(--navy); position: relative; overflow: hidden; }
        .trust-bg-dots { position: absolute; inset: 0; background-image: radial-gradient(rgba(201,168,76,.06) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
        .trust-bg-glow { position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle,rgba(30,115,190,.12) 0%,transparent 70%); pointer-events: none; }
        .trust-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
        .trust-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 28px 32px; display: flex; align-items: flex-start; gap: 18px; transition: all .25s; }
        .trust-card:hover { background: rgba(201,168,76,.08); border-color: rgba(201,168,76,.25); transform: translateX(6px); }
        .trust-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
        .trust-icon-gold { background: rgba(201,168,76,.15); }
        .trust-icon-sky  { background: rgba(30,115,190,.2); }
        .trust-card h3   { font-size: 16px; font-weight: 700; color: white; margin-bottom: 7px; font-family: 'DM Sans', sans-serif; }
        .trust-card p    { font-size: 13.5px; color: rgba(255,255,255,.55); line-height: 1.7; }

        /* ── GALLERY ── */
        .gallery-strip { display: grid; grid-template-columns: repeat(5,1fr); height: 200px; }
        .gallery-strip-item { position: relative; overflow: hidden; }
        .gallery-strip-item::after { content: ''; position: absolute; inset: 0; background: rgba(11,30,61,.25); transition: opacity .3s; }
        .gallery-strip-item:hover::after { opacity: 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-grid, .about-strip, .mv-grid, .values-grid, .team-grid { grid-template-columns: 1fr; }
          .trust-grid { grid-template-columns: 1fr; }
          .stats-card { display: none; }
          .tl-row     { grid-template-columns: 1fr; }
          .tl-line    { display: none; }
          .left-card, .right-card { padding: 0; }
          .gallery-strip { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 600px) {
          .gallery-strip { height: 120px; }
          .cta-banner    { padding: 44px 24px; }
        }
      `}</style>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>

        {/* Decorative arc rings */}
        <svg className="hero-arc" viewBox="0 0 400 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="260" r="320" stroke="#c9a84c" strokeWidth="2"/>
          <circle cx="400" cy="260" r="240" stroke="#c9a84c" strokeWidth="1"/>
          <circle cx="400" cy="260" r="160" stroke="#c9a84c" strokeWidth="1"/>
        </svg>

        <div className="container hero-inner">
          <div className="hero-grid">
            {/* Left — text */}
            <div>
              <div className="hero-eyebrow fade-up">
                <span className="dot"></span>
                <span>Our Story · Since 2006</span>
              </div>
              <h1 className="fade-up d1">Shaping <em>Medical</em><br />Careers Since 2006</h1>
              <p className="hero-sub fade-up d2">
                For over 18 years, Kovai Overseas has been the bridge between Tamil Nadu&apos;s brightest
                medical aspirants and world-class universities abroad. Trusted by 500+ families.
              </p>
              <div className="hero-btns fade-up d3">
                <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
                <Link href="/university" className="btn btn-outline-white">Our Universities</Link>
              </div>
            </div>

            {/* Right — stats card */}
            <div className="fade-up d4">
              <div className="stats-card">
                <div className="stat-cell"><div className="stat-num">18+</div><div className="stat-label">Years of Excellence</div></div>
                <div className="stat-cell"><div className="stat-num">500+</div><div className="stat-label">Students Placed</div></div>
                <div className="stat-cell"><div className="stat-num">95%</div><div className="stat-label">Visa Success Rate</div></div>
                <div className="stat-cell"><div className="stat-num">3+</div><div className="stat-label">Partner Universities</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG bottom */}
        <div className="wave">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════
          WHO WE ARE
      ════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="about-strip">
            {/* Image collage */}
            <div className="collage">
              <div className="collage-main">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Medical students"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="collage-inset">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
                  alt="Counselling session"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="collage-badge">
                <div className="num">18+</div>
                <p>Years of Excellence</p>
              </div>
              <div className="collage-pill">
                <span className="pi">🎓</span>
                <div>
                  <strong>500+ Students</strong><br />
                  <small>Successfully Placed</small>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="badge">Company Introduction</div>
              <h2 className="section-title">Who We Are</h2>
              <div className="about-rule"></div>
              <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.9, marginBottom: 18 }}>
                Kovai Overseas is Tamil Nadu&apos;s most trusted medical education consultancy, dedicated to helping
                aspiring Indian students pursue internationally recognised MBBS degrees abroad. Through deep
                partnerships with premier universities in Uzbekistan — led by Zarmed University — we provide access
                to high-quality medical programs and a globally focused learning environment.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.9, marginBottom: 28 }}>
                Our experienced counsellors understand both the Indian education system and the nuances of
                international admissions — making us uniquely positioned to guide you from NEET scores to campus arrival.
              </p>
              <ul className="check-list">
                <li>Over 500 students successfully placed in MBBS programs abroad</li>
                <li>Transparent admission process with no hidden fees</li>
                <li>Continuous student support even after university enrolment</li>
                <li>Partnerships with WHO &amp; NMC-recognised medical universities</li>
                <li>18+ years of unmatched experience in Tamil Nadu</li>
              </ul>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                <Link href="/contact" className="btn btn-gold">Start Your Journey →</Link>
                <Link href="/services" className="btn btn-sky">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CORE VALUES
      ════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge">Our Foundation</div>
            <h2 className="section-title">Values That Guide Everything We Do</h2>
            <p className="section-sub">
              These aren&apos;t just words on a wall — they define every interaction, every recommendation,
              and every decision we make on your behalf.
            </p>
          </div>
          <div className="values-grid">
            {[
              { icon: '🔍', title: 'Transparency', accent: 'linear-gradient(90deg,var(--gold),var(--gold2))', desc: 'No hidden fees, no false promises. We give you the complete picture so you can make the best decision for your future.' },
              { icon: '🤝', title: 'Integrity',     accent: 'linear-gradient(90deg,var(--sky),var(--sky2))',   desc: 'We only recommend universities that we genuinely believe will serve your best interests and career goals.' },
              { icon: '💛', title: 'Student-First', accent: 'linear-gradient(90deg,var(--gold),var(--gold2))', desc: 'Every decision we make is guided by one question: what is best for our students, both now and in the long run?' },
              { icon: '🌐', title: 'Excellence',    accent: 'linear-gradient(90deg,var(--sky),var(--sky2))',   desc: 'From first consultation to arrival on campus, we deliver the highest standard of service at every stage.' },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <div className="accent" style={{ background: v.accent }}></div>
                <div className="vi">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          JOURNEY TIMELINE
      ════════════════════════════════ */}
      <section className="section" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Subtle radial glow bg */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,168,76,.04) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container">
          <div className="center" style={{ marginBottom: 64 }}>
            <div className="badge">Our Journey</div>
            <h2 className="section-title">18+ Years of Shaping Medical Futures</h2>
            <p className="section-sub">From a small office in Salem to one of Tamil Nadu&apos;s most trusted medical consultancies.</p>
          </div>

          <div className="tl-wrap">
            <div className="tl-line"></div>
            {timelineItems.map((item, i) => (
              <div key={i} className="tl-row">
                {/* Left slot */}
                {item.side === 'left' ? (
                  <div className="left-card">
                    <div className="tl-card">
                      <div className="t-icon">{item.icon}</div>
                      <div className="year" style={{ color: item.yearColor }}>{item.year}</div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* Centre dot */}
                <div className="tl-dot-wrap">
                  <div
                    className="tl-dot"
                    style={{ background: item.dotBg, boxShadow: `0 0 0 6px ${item.dotShadow}` }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Right slot */}
                {item.side === 'right' ? (
                  <div className="right-card">
                    <div className="tl-card">
                      <div className="t-icon">{item.icon}</div>
                      <div className="year" style={{ color: item.yearColor }}>{item.year}</div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          MISSION & VISION
      ════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge">Mission &amp; Vision</div>
            <h2 className="section-title">What Drives Us Every Day</h2>
          </div>
          <div className="mv-grid">
            {/* Mission */}
            <div className="mv-card">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                alt="Mission"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="mv-overlay" style={{ background: 'linear-gradient(135deg,rgba(11,30,61,0.93),rgba(11,30,61,0.80))' }}></div>
              <div className="mv-content">
                <div className="mv-icon-box" style={{ background: 'rgba(201,168,76,.2)', border: '1px solid rgba(201,168,76,.4)' }}>🎯</div>
                <h3>Our Mission</h3>
                <p>To connect talented students with world-class universities and guide them toward becoming successful medical professionals. We are committed to making quality MBBS education abroad accessible, affordable, and achievable for every deserving student.</p>
              </div>
            </div>
            {/* Vision */}
            <div className="mv-card">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
                alt="Vision"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="mv-overlay" style={{ background: 'linear-gradient(135deg,rgba(11,30,61,0.88),rgba(30,115,190,0.82))' }}></div>
              <div className="mv-content">
                <div className="mv-icon-box" style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)' }}>🌐</div>
                <h3>Our Vision</h3>
                <p>To become one of India&apos;s most trusted overseas medical education consultants — known for integrity, transparency, and the enduring success of every student we guide. A future where no talent is held back by geographical or financial barriers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TEAM
      ════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge">Meet The Team</div>
            <h2 className="section-title">The People Behind Your Success</h2>
            <p className="section-sub">Our counsellors are not just advisors — they are dedicated advocates for your future medical career.</p>
          </div>
          <div className="team-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', name: 'Dr. R. Krishnamoorthy', role: 'Founder & Chief Counsellor', exp: '18+ Years', desc: 'Pioneer of overseas medical education consultancy in Tamil Nadu, with personal connections at partner universities and a track record of 500+ placements.' },
              { img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80', name: 'Mrs. S. Preethi',         role: 'Senior Admissions Advisor',  exp: '10+ Years', desc: 'Specialist in NEET counselling and university application processing. Has guided 200+ students personally through admission, documentation, and enrolment.' },
              { img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80', name: 'Mr. A. Vijayakumar',    role: 'Visa & Documentation Head',  exp: '8+ Years',  desc: 'Expert in student visa applications with a 95%+ approval rate across Uzbekistan and CIS countries. Meticulous, fast, and always thorough.' },
            ].map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-photo" style={{ position: 'relative' }}>
                  <Image src={m.img} alt={m.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  <div className="team-photo-overlay"></div>
                  <div className="team-exp">{m.exp}</div>
                </div>
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <div className="team-role">{m.role}</div>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TRUST SECTION
      ════════════════════════════════ */}
      <section className="section trust-section">
        <div className="trust-bg-dots"></div>
        <div className="trust-bg-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge badge-light">Why Students Trust Us</div>
            <h2 className="section-title" style={{ color: 'white' }}>The Kovai Overseas Difference</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,.55)', margin: '0 auto' }}>
              What sets us apart from every other consultancy — in the words of our values and actions.
            </p>
          </div>
          <div className="trust-grid">
            {trustCards.map((c) => (
              <div key={c.title} className="trust-card">
                <div className={`trust-icon ${c.iconCls}`}>{c.icon}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          GALLERY STRIP
      ════════════════════════════════ */}
      <div className="gallery-strip">
        {galleryImages.map((img) => (
          <div key={img.src} className="gallery-strip-item">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover', transition: 'transform .5s' }} />
          </div>
        ))}
      </div>

      {/* ════════════════════════════════
          CTA BANNER
      ════════════════════════════════ */}
       <CTABanner title="Start Your Medical Career Abroad Today" subtitle="Join hundreds of students who achieved their dream of becoming a doctor through Kovai Overseas." primaryLabel="Apply Now" secondaryLabel="Book Free Consultation" />
    </>
  )
}
