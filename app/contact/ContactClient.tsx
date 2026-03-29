'use client'
import { useState } from 'react'
import { IconsHelper } from '@/helper/icon_helper'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'MBBS Admission Assistance',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <div
        className="page-hero"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          className="page-hero-overlay"
          style={{ background: 'linear-gradient(135deg,rgba(11,30,61,.90),rgba(11,30,61,.80))' }}
        ></div>

        <div className="container">
          <div className="badge badge-sky">Get in Touch</div>
          <h1>Contact Us</h1>
          <p>Have questions? Our expert counsellors are ready to guide you — completely free of charge.</p>
        </div>
      </div>

      {/* CONTACT */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* FORM */}
            <div className="contact-form">
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: 'var(--navy)', marginBottom: 6 }}>
                Send Us a Message
              </h3>

              <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 28 }}>
                Fill in the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 22, color: 'var(--navy)', marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--muted)' }}>
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="grid-2" style={{ gap: 16 }}>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Interested In</label>
                    <select
                      value={form.interest}
                      onChange={e => setForm({ ...form, interest: e.target.value })}
                    >
                      <option>MBBS Admission Assistance</option>
                      <option>University Selection Guidance</option>
                      <option>Documentation Support</option>
                      <option>Visa Assistance</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* INFO SIDE */}
            <div>

              <div className="ci-block">
                <h3>Contact Information</h3>

                <div className="ci-item">
                  <div className="ci-ic"><IconsHelper.Phone size={18} /></div>
                  <div><strong>Call Us</strong>+91 95009 88505<br />+91 96299 17222</div>
                </div>

                <div className="ci-item">
                  <div className="ci-ic"><IconsHelper.Mail size={18} /></div>
                  <div><strong>Email Us</strong>info@kovaioverseas.com<br />admin@kovaioverseas.com</div>
                </div>

                <div className="ci-item">
                  <div className="ci-ic"><IconsHelper.Location size={18} /></div>
                  <div><strong>Visit Us</strong>Nedunchalai Nagar,<br />Salem – 636005</div>
                </div>

                <div className="ci-item">
                  <div className="ci-ic"><IconsHelper.Clock size={18} /></div>
                  <div><strong>Office Hours</strong>Mon – Sat<br />9:00 AM – 6:00 PM</div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="ci-block">
                <h3>Follow Us</h3>

                <div style={{ display: 'flex', gap: 12 }}>
                  <IconsHelper.Instagram size={24} />
                  <IconsHelper.Facebook size={24} />
                  <IconsHelper.Youtube size={24} />
                </div>
              </div>

              {/* MAP */}
              <div className="ci-block">
                <h3>Location</h3>
                <div className="map-placeholder">
                  <IconsHelper.Location size={16} /> Salem, Tamil Nadu
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}