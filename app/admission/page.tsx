import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Admission Process – Kovai Overseas',
  description: 'Step-by-step MBBS admission process to study abroad with Kovai Overseas.',
}

const steps = [
  { num: '1', title: 'Free Student Consultation', desc: 'Begin with a free one-on-one counselling session with our expert advisors. We understand your academic background, budget, and career aspirations to recommend the best path forward. We discuss everything — from NEET eligibility to life abroad — so you can make a fully informed decision.' },
  { num: '2', title: 'University Selection', desc: 'Based on your profile, we help you select the most suitable medical university. We present detailed comparisons covering tuition fees, academic reputation, facilities, and recognition status.' },
  { num: '3', title: 'Application & Document Submission', desc: 'We guide you through preparing and submitting all required documents: application forms, academic transcripts, NEET scorecard, passport copies, and medical certificates.' },
  { num: '4', title: 'Admission Confirmation', desc: 'Once the university reviews your application, you receive the official admission/invitation letter. This letter is the key document required for your student visa application.' },
  { num: '5', title: 'Student Visa Processing', desc: 'With your admission letter in hand, we guide you through the student visa application process step by step. Our visa success rate is above 95%.' },
  { num: '6', title: 'Travel & Pre-Departure Support', desc: 'Before you leave, we conduct a detailed pre-departure orientation covering what to pack, travel insurance, currency, accommodation, and what to expect on arrival.' },
]

const docGroups = [
  { icon: '📜', title: 'Academic Documents', items: ['10th Mark Sheet', '12th Mark Sheet (PCB)', 'NEET Scorecard', 'Transfer Certificate'] },
  { icon: '🪪', title: 'Personal Documents', items: ['Valid Passport (min. 2 years)', 'Birth Certificate', 'Passport-size photographs', 'Medical fitness certificate'] },
  { icon: '📋', title: 'Application Documents', items: ['Completed application form', 'Bank statement (financial proof)', 'No-objection certificate', 'Invitation letter (from university)'] },
]

export default function AdmissionPage() {
  return (
    <>
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center top' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg,rgba(11,30,61,.90),rgba(11,30,61,.80))' }}></div>
        <div className="container">
          <div className="badge badge-sky">Step by Step</div>
          <h1>Admission Process</h1>
          <p>A clear, guided pathway from enquiry to your first day at university.</p>
        </div>
      </div>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="badge" style={{ marginBottom: 32 }}>Your Journey to MBBS Abroad</div>
            <div className="timeline">
              {steps.map(s => (
                <div key={s.num} className="timeline-item">
                  <div className="tl-dot">{s.num}</div>
                  <div className="tl-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container center">
          <div className="badge">Documents Required</div>
          <h2 className="section-title">What You&apos;ll Need</h2>
          <div className="grid-3" style={{ marginTop: 40, textAlign: 'left' }}>
            {docGroups.map(g => (
              <div key={g.title} className="card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{g.icon}</div>
                <h3 style={{ marginBottom: 12, fontSize: 16 }}>{g.title}</h3>
                <ul className="service-list">{g.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Start Your Application Today" subtitle="Don't wait — seats fill up fast. Contact us to begin your admission process now." primaryLabel="Apply Now →" secondaryLabel="Book Free Consultation" />
    </>
  )
}
