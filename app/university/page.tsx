import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import img_helper from '@/helper/img_helper'

export const metadata: Metadata = {
  title: 'Zarmed University – Kovai Overseas',
  description: 'Learn about Zarmed University, Uzbekistan — WHO recognized MBBS program in English medium.',
}

export default function UniversityPage() {
  return (
    <>
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg,rgba(11,30,61,.90),rgba(28,59,106,.85))' }}></div>
        <div className="container">
          <div className="badge" style={{ background: 'rgba(201,168,76,.15)', color: 'var(--gold)', borderColor: 'rgba(201,168,76,.4)' }}>Partner University</div>
          <h1>Zarmed University</h1>
          <p>Namangan, Uzbekistan · WHO Recognized · English Medium MBBS</p>
        </div>
      </div>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="about-strip">
            <div>
              <div className="badge">About the University</div>
              <h2 className="section-title">About Zarmed University</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>Zarmed University is a premier medical institution in Uzbekistan, recognized by the World Health Organization (WHO) and listed in the World Directory of Medical Schools. The university offers high-quality, internationally recognized MBBS programs delivered entirely in English, attracting students from India and across the globe.</p>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>With modern infrastructure, experienced faculty, and a vibrant international student community, Zarmed University provides the ideal environment to begin your medical career.</p>
              <Link href="/contact" className="btn btn-gold">Apply to Zarmed University →</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="uni-img-showcase">
                <Image src={img_helper.zarmeduniversity.aboutuniversity} alt="Zarmed University Campus" fill style={{ objectFit: 'cover' }} />
                <div className="uni-who-badge float-anim"><span>WHO</span><span>Recognized</span></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, background: 'linear-gradient(to top,rgba(11,30,61,.95) 0%,transparent 100%)', padding: '40px 24px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div><h3 style={{ color: 'white', fontSize: 20, marginBottom: 4 }}>Zarmed University</h3><p style={{ color: 'rgba(255,255,255,.65)', fontSize: 13 }}>Namangan, Uzbekistan · Est. 2008</p></div>
                  <div style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: 11, fontWeight: 700, padding: '5px 12px', borderRadius: 100 }}>English Medium</div>
                </div>
              </div>
              <div className="uni-gallery">
                {['https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80','https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'].map((src,i) => (
                  <div key={i} className="uni-gallery-item"><Image src={src} alt="Campus" fill style={{ objectFit: 'cover' }} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zarmed */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container center">
          <div className="badge">Why Choose Zarmed</div>
          <h2 className="section-title">Why Study MBBS at Zarmed University?</h2>
          <p className="section-sub">Six compelling reasons why Indian students choose Zarmed for their MBBS journey.</p>
          <div className="zarmed-why-list">
            {[
              [['🌐','English Medium Education','Full MBBS program taught entirely in English — no language barrier for Indian students. Study, learn, and excel from Day 1.'],['💰','Affordable Tuition Fees','Significantly lower fees compared to private medical colleges in India. Quality education that won\'t drain your family\'s savings over 6 years.']],
              [['🌍','International Environment','Study alongside students from across the globe. Build a global professional network and gain a truly international medical perspective.'],['🔬','Modern Laboratories','State-of-the-art medical labs with the latest equipment for practical and hands-on training across anatomy, biochemistry, pathology, and more.']],
              [['👨‍🏫','Experienced Faculty','Learn from highly qualified, internationally experienced medical professors who bring real clinical expertise into every lecture and practicum session.'],['🏆','WHO Recognition','Degree recognized by the World Health Organization and accepted for FMGE/NExT screening exams in India. Your qualification is valued globally.']],
            ].map((row, ri) => (
              <div key={ri} className="zarmed-why-row">
                {row.map(([icon,title,desc]) => (
                  <div key={title} className="zwc">
                    <div className="zwc-icon">{icon}</div>
                    <div className="zwc-body"><h3>{title}</h3><p>{desc}</p></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course + Eligibility */}
      <section className="section">
        <div className="container">
          <div className="course-grid">
            <div className="course-col">
              <div className="badge">Course Details</div>
              <h2 className="section-title">MBBS at Zarmed</h2>
              <div className="card">
                <div className="hc-detail">
                  {[['Program','MBBS','tag'],['Duration','6 Years (incl. Internship)','text'],['Medium','English','tag-gold'],['Recognition','WHO / NMC','text'],['Location','Namangan, Uzbekistan','text'],['Intake','September / October','text'],['Internship','Included (Final Year)','text']].map(([label,val,type]) => (
                    <div key={label} className="hc-row">
                      <span style={{ color: 'var(--muted)' }}>{label}</span>
                      {type === 'tag' ? <span className="tag">{val}</span> : type === 'tag-gold' ? <span className="tag tag-gold">{val}</span> : <span style={{ fontWeight: 600 }}>{val}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="course-col">
              <div className="badge">Eligibility Criteria</div>
              <h2 className="section-title">Who Can Apply?</h2>
              <div className="eligibility-box">
                <ul className="check-list">
                  {['Completed 12th grade with Physics, Chemistry, and Biology','Minimum 50% marks in PCB (45% for reserved categories)','Qualified NEET examination (mandatory for Indian students)','Minimum age of 17 years at time of admission','Valid Indian passport (minimum 2 years validity)','Good physical and mental health — medical certificate required','No prior MBBS degree or equivalent medical qualification'].map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container center">
          <div className="badge">Campus Facilities</div>
          <h2 className="section-title">World-Class Infrastructure</h2>
          <div className="grid-4" style={{ marginTop: 40 }}>
            {[['🏥','Teaching Hospital','Attached hospital for hands-on clinical training from early years.'],['🔬','Medical Laboratories','Fully equipped labs for anatomy, biochemistry, pathology, and more.'],['📚','Library & E-Resources','Extensive medical library with digital access to journals and books.'],['🏠','Hostel Facilities','Comfortable, secure hostel accommodation for international students.']].map(([icon,title,desc]) => (
              <div key={title} className="why-card"><div className="wc-icon">{icon}</div><h3>{title}</h3><p>{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Apply to Zarmed University?" subtitle="Contact us today for a free counselling session and begin your admission process." primaryLabel="Apply Now →" secondaryLabel="View Admission Process" secondaryHref="/admission" />
    </>
  )
}
