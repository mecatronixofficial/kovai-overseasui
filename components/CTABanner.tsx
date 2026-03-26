import Link from 'next/link'

interface CTABannerProps {
  title: string
  subtitle: string
  primaryLabel?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  title,
  subtitle,
  primaryLabel = 'Apply Now',
  secondaryLabel,
  secondaryHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="cta-banner-btns">
            <Link href="/contact" className="btn btn-gold">✦ {primaryLabel}</Link>
            {secondaryLabel && (
              <Link href={secondaryHref} className="btn btn-outline-white">{secondaryLabel}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
