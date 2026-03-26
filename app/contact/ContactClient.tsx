'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: 'MBBS Admission Assistance', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg,rgba(11,30,61,.90),rgba(11,30,61,.80))' }}></div>
        <div className="container">
          <div className="badge badge-sky">Get in Touch</div>
          <h1>Contact Us</h1>
          <p>Have questions? Our expert counsellors are ready to guide you — completely free of charge.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form">
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: 'var(--navy)', marginBottom: 6 }}>Send Us a Message</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 28 }}>Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 22, color: 'var(--navy)', marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--muted)' }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Interested In</label>
                    <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}>
                      <option>MBBS Admission Assistance</option>
                      <option>University Selection Guidance</option>
                      <option>Documentation Support</option>
                      <option>Visa Assistance</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea rows={5} placeholder="Tell us about your academic background, goals, and any specific questions..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ resize: 'none' }} />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>Send Message →</button>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12, textAlign: 'center' }}>We respond within 24 hours. Your information is kept confidential.</p>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div className="ci-block">
                <h3>Contact Information</h3>
                <div className="ci-item">
                  <div className="ci-ic">📞</div>
                  <div><strong>Call Us</strong>+91 95009 88505<br />+91 96299 17222</div>
                </div>
                <div className="ci-item">
                  <div className="ci-ic">✉️</div>
                  <div><strong>Email Us</strong>info@kovaioverseas.com<br />admin@kovaioverseas.com</div>
                </div>
                <div className="ci-item">
                  <div className="ci-ic">📍</div>
                  <div><strong>Visit Us</strong>Nedunchalai Nagar,<br />Salem – 636005, Tamil Nadu, India</div>
                </div>
                <div className="ci-item">
                  <div className="ci-ic">🕐</div>
                  <div><strong>Office Hours</strong>Monday – Saturday<br />9:00 AM – 6:00 PM IST</div>
                </div>
              </div>

              <div className="ci-block">
                <h3>Follow Us</h3>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  {[['📷','#e1306c'],['👥','#1877f2'],['▶️','#ff0000']].map(([icon, color]) => (
                    <div key={icon} className="social-btn" style={{ width: 46, height: 46, background: 'rgba(11,30,61,.06)', color: 'var(--navy)', fontSize: 22, borderRadius: 12 }}
                      onMouseEnter={e => { (e.target as HTMLDivElement).style.background = color; (e.target as HTMLDivElement).style.color = 'white' }}
                      onMouseLeave={e => { (e.target as HTMLDivElement).style.background = 'rgba(11,30,61,.06)'; (e.target as HTMLDivElement).style.color = 'var(--navy)' }}>
                      {icon}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)' }}>Follow us on Instagram, Facebook, and YouTube for student stories, tips, and updates.</p>
              </div>

              <div className="ci-block" style={{ marginBottom: 0 }}>
                <h3>Location</h3>
                <div className="map-placeholder">
                  📍 Nedunchalai Nagar, Salem – 636005<br />
                  <span style={{ fontSize: 12, marginTop: 8, display: 'block' }}>Salem, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
