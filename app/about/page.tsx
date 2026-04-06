import CTABanner from "@/components/CTABanner";
import img_helper from "@/helper/img_helper";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../common/PageHero";
import "./style.css";
import Timeline from "../common/Timeline";
import { IconsHelper } from "@/helper/icon_helper";
import { trustCards, values } from "@/helper/app_helper";

export const metadata: Metadata = {
  title: "About Us – Kovai Overseas",
  description:
    "For over 18 years, Kovai Overseas has been the bridge between Tamil Nadu's brightest medical aspirants and world-class universities abroad. Trusted by 500+ families.",
};

const galleryImages = [
  {
    src: img_helper.about.aboutblog1.src,
    alt: "Lecture hall",
  },
  {
    src: img_helper.about.aboutblog2.src,
    alt: "Medical lab",
  },
  {
    src: img_helper.about.aboutblog3.src,
    alt: "Students",
  },
  {
    src: img_helper.about.aboutblog4.src,
    alt: "Campus",
  },
  {
    src: img_helper.about.aboutblog5.src,
    alt: "University",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}

      <PageHero
        badge="Our Story · Since 2006"
        title="Shaping Medical Careers Since 2006"
        highlight="Medical"
        subtitle="  For over 18 years, Kovai Overseas has been the bridge between
                Tamil Nadu's brightest medical aspirants and world-class
                universities abroad. Trusted by 500+ families."
        image={img_helper.about.heropage}
        stats={[
          { num: "18+", label: "Years of Excellence" },
          { num: "500+", label: "Students Placed" },
          { num: "95%", label: "Visa Success Rate" },
        ]}
        primaryCta={{ label: "Book Free Consultation →", href: "/contact" }}
        secondaryCta={{ label: "Our Universities", href: "/university" }}
      />

      {/* WHO WE ARE */}

      <section className="section">
        <div className="container">
          <div className="about-strip">
            {/* Image collage */}
            <div className="collage">
              <div className="collage-main">
                <Image
                  src={img_helper.about.companyintroduction}
                  alt="Medical students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="collage-inset">
                <Image
                  src={img_helper.about.companyintroduction2}
                  alt="Counselling session"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="collage-badge">
                <div className="num">18+</div>
                <p>Years of Excellence</p>
              </div>
              <div className="collage-pill">
                <span className="pi">
                  <IconsHelper.Cap />
                </span>
                <div>
                  <strong>500+ Students</strong>
                  <br />
                  <small>Successfully Placed</small>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="badge">Company Introduction</div>
              <h2 className="section-title">Who We Are</h2>
              <div className="about-rule"></div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15.5,
                  lineHeight: 1.9,
                  marginBottom: 18,
                }}
              >
                Kovai Overseas is Tamil Nadu&apos;s most trusted medical
                education consultancy, dedicated to helping aspiring Indian
                students pursue internationally recognised MBBS degrees abroad.
                Through deep partnerships with premier universities in
                Uzbekistan — led by Zarmed University — we provide access to
                high-quality medical programs and a globally focused learning
                environment.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15.5,
                  lineHeight: 1.9,
                  marginBottom: 28,
                }}
              >
                Our experienced counsellors understand both the Indian education
                system and the nuances of international admissions — making us
                uniquely positioned to guide you from NEET scores to campus
                arrival.
              </p>
              <ul className="check-list">
                <li>
                  Over 500 students successfully placed in MBBS programs abroad
                </li>
                <li>Transparent admission process with no hidden fees</li>
                <li>
                  Continuous student support even after university enrolment
                </li>
                <li>
                  Partnerships with WHO &amp; NMC-recognised medical
                  universities
                </li>
                <li>18+ years of unmatched experience in Tamil Nadu</li>
              </ul>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 32,
                }}
              >
                <Link href="/contact" className="btn btn-gold">
                  Start Your Journey →
                </Link>
                <Link href="/services" className="btn btn-sky">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}

      <section className="section" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge">Our Foundation</div>
            <h2 className="font-bold text-3xl text-white sm:text-4xl lg:text-5xl mb-4">
              Values That Guide Everything We Do
            </h2>
            <p className="section-sub">
              These aren&apos;t just words on a wall — they define every
              interaction, every recommendation, and every decision we make on
              your behalf.
            </p>
          </div>
          <div className="values-grid">
            {values.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index} className="value-card">
                  <div
                    className="accent"
                    style={{ background: res.accent }}
                  ></div>
                  <div className="vi flex flex-row items-center justify-center">
                    <Icon />
                  </div>
                  <h3>{res.title}</h3>
                  <p>{res.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}

      <Timeline />

      {/* MISSION & VISION */}

     <section className="relative overflow-hidden bg-white py-20">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"></div>
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl"></div>
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-16 text-center">
      <div className="badge">
        Mission &amp; Vision
      </div>
      <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
        What Drives Us Every Day
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
        We guide ambitious students with clarity, trust, and long-term support
        toward a successful medical career abroad.
      </p>
    </div>

    <div className="space-y-16">
      {/* Mission */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative h-[320px] overflow-hidden rounded-[32px] sm:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
            alt="Our Mission"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1e3d]/80 via-[#0b1e3d]/40 to-transparent" />
        </div>

        <div className="lg:pl-8">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1e3d] text-white shadow-xl">
            <IconsHelper.target className="h-7 w-7" />
          </div>

          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Our Mission
          </div>

          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Making global medical education accessible and achievable
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-600">
            To connect talented students with world-class universities and guide
            them toward becoming successful medical professionals. We are
            committed to making quality MBBS education abroad accessible,
            affordable, and achievable for every deserving student.
          </p>

          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#0b1e3d] to-[#1e73be]" />
        </div>
      </div>

      {/* Vision */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1 lg:pr-8">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1e73be] text-white shadow-xl">
            <IconsHelper.World className="h-7 w-7" />
          </div>

          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Our Vision
          </div>

          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Building trust, transparency, and lifelong student success
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-600">
            To become one of India&apos;s most trusted overseas medical education
            consultants — known for integrity, transparency, and the enduring
            success of every student we guide. A future where no talent is held
            back by geographical or financial barriers.
          </p>

          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#1e73be] to-[#c9a84c]" />
        </div>

        <div className="order-1 relative h-[320px] overflow-hidden rounded-[32px] sm:h-[420px] lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80"
            alt="Our Vision"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#1e73be]/70 via-[#0b1e3d]/35 to-transparent" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* TEAM */}

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge">Meet The Team</div>
            <h2 className="section-title">The People Behind Your Success</h2>
            <p className="section-sub">
              Our counsellors are not just advisors — they are dedicated
              advocates for your future medical career.
            </p>
          </div>
          <div className="team-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
                name: "Dr. R. Krishnamoorthy",
                role: "Founder & Chief Counsellor",
                exp: "18+ Years",
                desc: "Pioneer of overseas medical education consultancy in Tamil Nadu, with personal connections at partner universities and a track record of 500+ placements.",
              },
              {
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
                name: "Mrs. S. Preethi",
                role: "Senior Admissions Advisor",
                exp: "10+ Years",
                desc: "Specialist in NEET counselling and university application processing. Has guided 200+ students personally through admission, documentation, and enrolment.",
              },
              {
                img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80",
                name: "Mr. A. Vijayakumar",
                role: "Visa & Documentation Head",
                exp: "8+ Years",
                desc: "Expert in student visa applications with a 95%+ approval rate across Uzbekistan and CIS countries. Meticulous, fast, and always thorough.",
              },
            ].map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-photo" style={{ position: "relative" }}>
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
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

      {/* TRUST SECTION */}

      <section className="section trust-section">
        <div className="trust-bg-dots"></div>
        <div className="trust-bg-glow"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="badge badge-light">Why Students Trust Us</div>
            <h2 className="section-title" style={{ color: "white" }}>
              The Kovai Overseas Difference
            </h2>
            <p
              className="section-sub"
              style={{ color: "rgba(255,255,255,.55)", margin: "0 auto" }}
            >
              What sets us apart from every other consultancy — in the words of
              our values and actions.
            </p>
          </div>
          <div className="trust-grid">
            {trustCards.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index} className="trust-card">
                  <div className={`trust-icon ${res.iconCls}`}>
                    <Icon />
                  </div>
                  <div>
                    <h3>{res.title}</h3>
                    <p>{res.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}

      <div className="gallery-strip mt-20">
        {galleryImages.map((img) => (
          <div key={img.src} className="gallery-strip-item">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover", transition: "transform .5s" }}
            />
          </div>
        ))}
      </div>

      {/* CTA BANNER */}

      <CTABanner
        title="Start Your Medical Career Abroad Today"
        subtitle="Join hundreds of students who achieved their dream of becoming a doctor through Kovai Overseas."
        primaryLabel="Apply Now"
        secondaryLabel="Book Free Consultation"
      />
    </>
  );
}
