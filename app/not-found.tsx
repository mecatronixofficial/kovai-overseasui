import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', paddingTop: 70 }}>
      <div>
        <div style={{ fontSize: 80, marginBottom: 16 }}>🎓</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--navy)', marginBottom: 16 }}>Page Not Found</h1>
        <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.</p>
        <Link href="/" className="btn btn-gold">← Back to Home</Link>
      </div>
    </div>
  )
}
