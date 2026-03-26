import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">Kovai <span>Overseas</span></div>
            <p className="footer-desc">Your trusted partner for international medical education. Helping Indian students study MBBS abroad since 2006.</p>
            <div className="footer-socials">
              <div className="social-btn">📷</div>
              <div className="social-btn">👥</div>
              <div className="social-btn">▶️</div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/university">Zarmed University</Link></li>
              <li><Link href="/admission">Admission Process</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a>MBBS Admission Assistance</a></li>
              <li><a>University Selection</a></li>
              <li><a>Documentation Support</a></li>
              <li><a>Visa Assistance</a></li>
              <li><a>Pre-Departure Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-info-item"><span>📞</span><div>+91 95009 88505<br />+91 96299 17222</div></div>
            <div className="contact-info-item"><span>✉️</span><div>info@kovaioverseas.com<br />admin@kovaioverseas.com</div></div>
            <div className="contact-info-item"><span>📍</span><div>Nedunchalai Nagar,<br />Salem – 636005, India</div></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kovai Overseas. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,.25)' }}>Designed with ♥ for aspiring doctors</p>
        </div>
      </div>
    </footer>
  )
}
