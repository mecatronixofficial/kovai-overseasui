import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";

export default function HomePage() {
  const feature = [
    {
      icon: IconsHelper.AwardIcon,
      title: "18+ Years Experience",
      sub: "Trusted consultancy",
    },
    {
      icon: IconsHelper.Cap,
      title: "University Partnerships",
      sub: "Verified institutions",
    },
    {
      icon: IconsHelper.Clipboard,
      title: "Complete Support",
      sub: "End-to-end guidance",
    },
    {
      icon: IconsHelper.Money,
      title: "Affordable Fees",
      sub: "Value for money",
    },
    {
      icon: IconsHelper.Visa,
      title: "Visa Assistance",
      sub: "High success rate",
    },
  ];

  const choose = [
    {
      icon: IconsHelper.AwardIcon,
      title: "18+ Years Experience",
      sub: "Decades of expertise in international medical education consultancy with proven track record.",
    },
    {
      icon: IconsHelper.Handshake,
      title: "Trusted University Partnerships",
      sub: "Official partnerships with recognized, WHO-approved medical universities in Uzbekistan.",
    },
    {
      icon: IconsHelper.Clipboard,
      title: "Complete Admission Support",
      sub: "From documentation to admission letter — we handle every step of your application.",
    },
    {
      icon: IconsHelper.Money,
      title: "Affordable Medical Education",
      sub: "Quality MBBS education at a fraction of Indian private college costs.",
    },
    {
      icon: IconsHelper.Visa,
      title: "Student Visa Assistance",
      sub: "Expert visa guidance with high approval rates and complete documentation support.",
    },
    {
      icon: IconsHelper.Phone,
      title: "Continuous Student Support",
      sub: "We stay with you even after you reach your university — our support never stops.",
    },
    {
      icon: IconsHelper.Cap,
      title: "Expert Career Guidance",
      sub: "Our experienced advisors help students choose the right course and university.",
    },
    {
      icon: IconsHelper.File,
      title: "Admission Assistance",
      sub: "We guide students through the entire admission process including application and documentation.",
    },
  ];

  const services = [
    {
      cls: "icon-box-gold",
      icon: IconsHelper.Cap,
      title: "MBBS Admission Assistance",
      desc: "Complete guidance through the university application and admission process.",
    },
    {
      cls: "icon-box-sky",
      icon: IconsHelper.Search,
      title: "University Selection Guidance",
      desc: "Personalised advice on choosing the right university for your profile and budget.",
    },
    {
      cls: "icon-box-navy",
      icon: IconsHelper.File,
      title: "Documentation Support",
      desc: "Help preparing and verifying all required academic and personal documents.",
    },
    {
      cls: "icon-box-gold",
      icon: IconsHelper.Visa,
      title: "Pre-Departure Support",
      desc: "Visa guidance, travel planning, and accommodation arrangements before you leave.",
    },
  ];

  const testimonial = [
    {
      icon: IconsHelper.Student,
      name: "Priya Sharma",
      university: "MBBS Student · Zarmed University",
      review:
        '"Kovai Overseas made my dream of studying MBBS abroad a reality. Their guidance through the entire process was exceptional. I am now proudly studying at Zarmed University!"',
    },
    {
      icon: IconsHelper.Student,
      name: "Arjun Krishnamurthy",
      university: "MBBS Student · Zarmed University",
      review:
        '"The team was always available to answer my questions. The visa process was smooth and the pre-departure support gave me so much confidence before leaving India."',
    },
    {
      icon: IconsHelper.Student,
      name: "Meenakshi Rajan",
      university: "MBBS Student · Zarmed University",
      review:
        '"18 years of experience shows in every interaction. Kovai Overseas is transparent, professional, and genuinely cares about student success. Highly recommended!"',
    },
  ];

  const RightArrow = IconsHelper.Arrow;

  return (
    <>
      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-bg-layer"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>

        <div className="hero-content">
          <div className="fade-up">
            <div className="hero-eyebrow">
              <span>Trusted Since 2006 • 18+ Years Experience</span>
            </div>

            <h1>
              Study <em>MBBS Abroad</em> with Kovai Overseas
            </h1>

            <p className="hero-sub">
              Your trusted partner for internationally recognized medical
              education. We connect aspiring doctors with world-class
              universities in Uzbekistan.
            </p>

            <div className="hero-btns">
              <Link href="/contact" className="btn btn-gold">
                <IconsHelper.Star size={24} />
                Apply Now
              </Link>

              <Link href="/contact" className="btn btn-outline-white">
                Free Consultation
                <IconsHelper.Rightarrow />
              </Link>
            </div>

            <div className="hero-stats">
              {[
                ["18+", "Years Experience"],
                ["500+", "Students Placed"],
                ["95%", "Visa Success Rate"],
                ["3+", "Partner Universities"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="hero-stat-num">{num}</div>
                  <div className="hero-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual fade-up delay-2">
            <div className="hero-card-stack" style={{ position: "relative" }}>
              <div className="hero-main-card">
                <div className="card-top">
                  <div className="card-avatar">
                    <IconsHelper.Doctor className="text-white" />
                  </div>
                  <div className="hc-info">
                    <h4>MBBS Admission 2025</h4>
                    <p>Zarmed University, Uzbekistan</p>
                  </div>
                </div>

                <div className="hc-detail">
                  <div className="hc-row">
                    <span>Program</span>
                    <span className="tag">MBBS – 6 Years</span>
                  </div>
                  <div className="hc-row">
                    <span>Medium</span>
                    <span className="tag tag-gold">English Medium</span>
                  </div>
                  <div className="hc-row">
                    <span>Eligibility</span>
                    <span style={{ fontSize: 13, color: "#1a2540" }}>
                      NEET Qualified
                    </span>
                  </div>
                  <div className="hc-row">
                    <span>Seats Available</span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#1e73be",
                      }}
                    >
                      Open Now
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px solid #f0f0f0",
                  }}
                >
                  <Link
                    href="/contact"
                    className="btn btn-sky"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Apply for Admission
                    <IconsHelper.Rightarrow size={20} />
                  </Link>
                </div>
              </div>

              <div className="float-badge float-badge-1">
                <div className="fb-icon">
                  <IconsHelper.World size={34} />
                </div>
                <div className="fb-text">
                  <strong>Uzbekistan</strong>
                  <small>WHO Recognized</small>
                </div>
              </div>

              <div className="float-badge float-badge-2">
                <div className="fb-icon">
                  <IconsHelper.Toprank size={34} />
                </div>
                <div className="fb-text">
                  <strong>Top Ranked</strong>
                  <small>Zarmed University</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        <div className="container">
          <div className="features-strip-inner">
            {feature.map(({ icon: Icon, title, sub }, index) => (
              <div key={index} className="feature-item">
                <div className="fi-icon text-[#c9a84c]">
                  <Icon size={28} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT STRIP ── */}
      <section className="section">
        <div className="container">
          <div className="about-strip">
            <div style={{ position: "relative" }}>
              <div className="about-img-placeholder">
                <Image
                  src={img_helper.home.homeabout}
                  alt="Medical Students"
                  fill
                  style={{ objectFit: "cover", borderRadius: 20 }}
                />
              </div>
              <div className="exp-badge">
                <div className="num">18+</div>
                <p>Years of Excellence</p>
              </div>
            </div>

            <div>
              <div className="badge">About Kovai Overseas</div>
              <h2 className="section-title">
                Shaping the Future of Medical Education
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Kovai Overseas is committed to helping aspiring Indian students
                pursue internationally recognized medical education. With over
                18 years of experience, we have guided hundreds of students
                toward successful medical careers abroad.
              </p>

              <ul className="check-list">
                <li>
                  Strong academic partnerships with Zarmed University,
                  Uzbekistan
                </li>
                <li>
                  Access to high-quality MBBS programs with modern
                  infrastructure
                </li>
                <li>Globally focused, English-medium learning environment</li>
                <li>Complete support from application to arrival</li>
              </ul>

              <Link href="/about" className="btn btn-gold">
                Learn More About Us <RightArrow size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="container center">
          <div className="badge">Why Choose Us</div>
          <h2 className="section-title">Why Thousands Trust Kovai Overseas</h2>
          <p className="section-sub">
            We are more than a consultancy — we are your partner in achieving
            your dream of becoming a doctor.
          </p>

          <div className="why-grid">
            {choose.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="why-card">
                <div className="wc-icon">
                  <Icon size={30} />
                </div>
                <h3>{title}</h3>
                <p>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIVERSITY HIGHLIGHT ── */}
      <section className="section">
        <div className="container">
          <div className="uni-highlight">
            <div className="uni-inner">
              <div>
                <div
                  className="badge"
                  style={{
                    background: "rgba(201,168,76,.15)",
                    color: "var(--gold)",
                    borderColor: "rgba(201,168,76,.4)",
                  }}
                >
                  Featured University
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.8rem,3vw,2.4rem)",
                    color: "white",
                    marginBottom: 14,
                  }}
                >
                  Zarmed University
                  <br />
                  <span style={{ color: "var(--gold)" }}>Uzbekistan</span>
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,.65)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 8,
                  }}
                >
                  A premier medical institution offering internationally
                  recognized MBBS programs in English medium with
                  state-of-the-art facilities.
                </p>

                <div className="uni-facts">
                  {[
                    "WHO Recognized MBBS Program",
                    "English Medium Education",
                    "6-Year MBBS including Internship",
                    "Affordable Tuition & Living Costs",
                    "Experienced International Faculty",
                  ].map((f) => (
                    <div key={f} className="uni-fact">
                      {f}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24 }}>
                  <Link href="/university" className="btn btn-gold">
                    Explore University <RightArrow size={20} />
                  </Link>
                </div>
              </div>

              <div className="uni-stats-grid">
                {[
                  ["WHO", "Recognized & Approved"],
                  ["6 Yrs", "MBBS Program Duration"],
                  ["2008", "Year Established"],
                  ["ENG", "Medium of Instruction"],
                ].map(([num, label]) => (
                  <div key={label} className="uni-stat-box">
                    <span className="usn">{num}</span>
                    <p>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="container">
          <div className="center">
            <div className="badge">Our Services</div>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-sub">
              Comprehensive support at every stage of your journey to studying
              medicine abroad.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: 44 }}>
            {services.map(({ cls, icon: Icon, title, desc }) => (
              <div key={title} className="service-card">
                <div className={`icon-box ${cls}`}>
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="center" style={{ marginTop: 36 }}>
            <Link href="/services" className="btn btn-gold">
              View All Services <RightArrow size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── JOURNEY STEPS ── */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="container center">
          <div className="badge">Your Journey</div>
          <h2 className="section-title">Your Path to Becoming a Doctor</h2>
          <p className="section-sub">
            A clear, supported journey from first consultation to campus
            arrival.
          </p>

          <div className="steps-wrap">
            <div className="steps-line"></div>

            <div className="steps-grid">
              {[
                [
                  "1",
                  "Consultation",
                  "Free counselling session to understand your goals and options.",
                ],
                [
                  "2",
                  "University Selection",
                  "Choose the best-fit university based on your profile and budget.",
                ],
                [
                  "3",
                  "Admission Process",
                  "Submit documents and receive your official admission letter.",
                ],
                [
                  "4",
                  "Visa Processing",
                  "Expert guidance through the student visa application process.",
                ],
                [
                  "5",
                  "Travel & Arrival",
                  "Pre-departure briefing, travel support, and accommodation help.",
                ],
              ].map(([num, title, desc]) => (
                <div key={num} className="step-item">
                  <div className="step-num">{num}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-bg">
        <div className="container center">
          <div className="badge">Testimonials</div>
          <h2 className="section-title">What Our Students Say</h2>

          <div className="testi-grid">
            {testimonial.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index} className="testi-card">
                  <div className="testi-stars">★★★★★</div>
                  <p className="testi-text">{res.review}</p>
                  <div className="testi-author">
                    <div className="testi-avatar">
                      <Icon />
                    </div>
                    <div>
                      <div className="testi-name">{res.name}</div>
                      <div className="testi-meta">{res.university}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Your Medical Career Abroad Today"
        subtitle="Join hundreds of students who achieved their dream of becoming a doctor through Kovai Overseas."
        primaryLabel="Apply Now"
        secondaryLabel="Book Free Consultation"
      />
    </>
  );
}
