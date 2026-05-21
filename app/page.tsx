"use client";

import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";
import { choose, feature, subservices, testimonial } from "@/helper/app_helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const STATS: [string, string][] = [
  ["18+", "Years Experience"],
  ["2500+", "Students Placed"],
  ["100%", "Trusted Guidance"],
  ["100+", "Universities"],
];

export default function HomePage() {
  /* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */

  function DetailRow({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="flex items-center justify-between">
        <dt className="text-[12px] text-[#8a96b0]">{label}</dt>
        <dd>{children}</dd>
      </div>
    );
  }

  function Tag({
    gold,
    children,
  }: {
    gold?: boolean;
    children: React.ReactNode;
  }) {
    return (
      <span
        className={`rounded-md px-2.5 py-[3px] text-[11px] font-semibold ${
          gold ? "bg-amber-50 text-amber-800" : "bg-indigo-50 text-indigo-700"
        }`}
      >
        {children}
      </span>
    );
  }

  return (
    <>
      {/* ── HERO ── */}

      <section
        className="relative min-h-[92vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#050c26 0%,#071332 55%,#0a1a45 100%)",
        }}
        aria-label="Hero"
      >
        <div className="hero-bg-layer"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>

        {/* ── Gold top shimmer (matches navbar) ── */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />

        {/* ── Subtle grid ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-20 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle,#c9a84c,transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 h-[340px] w-[340px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle,#3b82f6,transparent 70%)",
          }}
        />

        {/* ══════════════ MAIN GRID ══════════════ */}
        <div className="relative mx-auto grid min-h-[92vh] max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
          {/* ─── LEFT: Copy ─── */}
          <div>
            {/* Admissions badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="text-[11px] font-bold uppercase tracking-[1.8px] text-amber-400">
                Admissions Open 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              className="mb-4 text-[clamp(38px,5vw,60px)] font-bold leading-[1.08] tracking-[-0.5px] text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Shape Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#f0c040,#c9a84c,#e8a020)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dreams
              </span>{" "}
              Globally
            </h1>

            {/* Subheading */}
            <p className="mb-4 text-xl font-medium text-white/60">
              India &amp; Abroad – We Guide Your Path
            </p>

            {/* Body copy */}
            <p className="mb-8 max-w-[440px] text-[15px] leading-relaxed text-white/45">
              Your trusted partner in higher education abroad. Connecting
              students with leading universities worldwide — seamlessly and
              confidently.
            </p>

            {/* CTA buttons */}
            <div className="mb-12 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[14px] font-bold text-[#0b1e3d] shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 hover:shadow-amber-400/40 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg,#c9a84c,#e8b84b)",
                }}
              >
                <IconsHelper.Star size={18} aria-hidden="true" />
                Enquiry Now
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/5 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                Free Consultation
                <IconsHelper.Rightarrow size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {STATS.map(([num, label]) => (
                <div
                  key={label}
                  className="border-l-2 border-amber-500/30 pl-4"
                >
                  <div
                    className="text-2xl font-bold leading-none text-amber-400"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {num}
                  </div>
                  <div className="mt-1.5 text-[11px] leading-tight text-white/40">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Card stack ─── */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[360px]">
              {/* Glow rings */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/8"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/4"
              />

              {/* Float badge — top right */}
              <div
                className="absolute -right-4 -top-5 z-20 flex items-center gap-2.5 rounded-2xl border border-amber-500/25 px-4 py-2.5"
                style={{
                  background: "rgba(7,19,50,0.92)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                <span className="text-xl leading-none" aria-hidden="true">
                  🏆
                </span>
                <div>
                  <p className="text-[12px] font-bold leading-none text-white">
                    Trusted
                  </p>
                  <p className="mt-1 text-[10px] leading-none text-white/45">
                    Since 2006
                  </p>
                </div>
              </div>

              {/* Main card */}
              <div className="relative z-10 w-full overflow-hidden rounded-[20px] bg-white shadow-[0_32px_64px_rgba(0,0,0,0.45)]">
                {/* Card top bar */}
                <div className="h-[3px] bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600" />

                <div className="p-6">
                  {/* Card header */}
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-2xl"
                      style={{
                        background: "linear-gradient(135deg,#1a6eb5,#2196f3)",
                      }}
                      aria-hidden="true"
                    >
                      🩺
                    </div>
                    <div>
                      <h2 className="text-[15px] font-bold leading-tight text-[#1a2540]">
                        MBBS Admission 2026
                      </h2>
                      <p className="mt-0.5 text-[12px] text-[#6b7a99]">
                        Zarmed University, Uzbekistan
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mb-4 h-px bg-[#f0f2f7]" />

                  {/* Detail rows */}
                  <dl className="space-y-2.5">
                    <DetailRow label="Program">
                      <Tag>MBBS – 6 Years</Tag>
                    </DetailRow>
                    <DetailRow label="Medium">
                      <Tag gold>English Medium</Tag>
                    </DetailRow>
                    <DetailRow label="Eligibility">
                      <span className="text-[12px] font-semibold text-[#1a2540]">
                        NEET Qualified
                      </span>
                    </DetailRow>
                    <DetailRow label="Seats Available">
                      <span className="flex items-center gap-1 text-[12px] font-bold text-blue-600">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                        Open Now
                      </span>
                    </DetailRow>
                  </dl>

                  {/* CTA */}
                  <div className="mt-5 border-t border-[#f0f2f7] pt-5">
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-bold text-white shadow-md shadow-blue-400/25 transition-all hover:-translate-y-0.5 hover:shadow-blue-400/35"
                      style={{
                        background: "linear-gradient(135deg,#1a6eb5,#2196f3)",
                      }}
                    >
                      Enquire Now
                      <IconsHelper.Rightarrow size={18} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Float badge — bottom left */}
              <div
                className="absolute -bottom-5 -left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-amber-500/25 px-4 py-2.5"
                style={{
                  background: "rgba(7,19,50,0.92)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                <span className="text-xl leading-none" aria-hidden="true">
                  🌍
                </span>
                <div>
                  <p className="text-[12px] font-bold leading-none text-white">
                    11 Countries
                  </p>
                  <p className="mt-1 text-[10px] leading-none text-white/45">
                    Global Reach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        <div className="container">
          <div className="features-strip-inner">
            {feature.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index} className="feature-item">
                  <div className="fi-icon text-[#c9a84c]">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h4>{res.title}</h4>
                    <p>{res.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── ABOUT STRIP ── */}
      <section className="section">
        <div className="container">
          <div className="about-strip">
            <div style={{ position: "relative" }}>
              <div className="relative overflow-hidden w-full h-[590px]">
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
                Shaping the Future of{" "}
                <span className="text-gold">Global Education</span>
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Kovai Overseas is committed to guiding students towards the
                right educational path in India and abroad. With years of
                experience, we help students choose the best course and
                university based on their goals and interests.
              </p>

              <ul className="my-6 flex flex-col gap-3">
                {[
                  "Strong partnerships with top universities worldwide",
                  "Guidance for all courses & streams",
                  "Admission support from start to finish",
                  "Complete assistance for study abroad & India",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#0b1e3d] to-[#112550] text-white shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <IconsHelper.checkarrow
                      className="text-yellow-400 mt-1 shrink-0"
                      size={18}
                    />
                    <span className="text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn btn-gold">
                Learn More About Us <IconsHelper.Arrow size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="container center">
          <div className="badge">Why Choose Us</div>
          <h2 className="section-title">
            Why Thousands <span className="text-gold">Trust</span> Kovai
            Overseas
          </h2>
          <p className="section-sub">
            We are more than a consultancy — we are your partner in achieving
            your dream of becoming a doctor.
          </p>

          <div className="why-grid">
            {choose.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index} className="why-card">
                  <div className="wc-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{res.title}</h3>
                  <p>{res.sub}</p>
                </div>
              );
            })}
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
                  Our Global <span className="text-gold">University</span>{" "}
                  Network
                  <br />
                  <span style={{ color: "var(--gold)" }}></span>
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,.65)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 8,
                  }}
                >
                  We collaborate with leading universities across India and
                  abroad to provide students with the best education
                  opportunities.
                </p>

                <div className="uni-facts">
                  {[
                    "Top-ranked universities worldwide",
                    "Wide range of courses & programs",
                    "Globally recognized degrees",
                    "Experienced academic partnerships",
                  ].map((f) => (
                    <div key={f} className="uni-fact">
                      {f}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24 }}>
                  <Link href="/university" className="btn btn-gold">
                    Explore Universities
                    <IconsHelper.Arrow size={20} />
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
            <h2 className="section-title">
              What We <span className="text-gold">Offer</span>
            </h2>
            <p className="section-sub">
              Comprehensive support at every stage of your journey to studying
              medicine abroad.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: 44 }}>
            {subservices.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index} className="service-card">
                  <div className={`icon-box ${res.cls}`}>
                    <Icon size={26} />
                  </div>
                  <h3>{res.title}</h3>
                  <p>{res.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="center" style={{ marginTop: 36 }}>
            <Link href="/services" className="btn btn-gold">
              View All Services <IconsHelper.Arrow size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── JOURNEY STEPS ── */}
      <section className="py-20 bg-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-yellow-400/30 bg-[#0b1e3d] text-yellow-400 text-sm font-semibold shadow-sm">
            Your Journey
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#0b1e3d]">
            Your Path to Study in <span className="text-gold">India</span> &{" "}
            <span className="text-gold">Abroad</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
            A clear, supported journey from first consultation to campus
            arrival.
          </p>

          <div className="relative mt-14">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {[
                ["1", "Consultation", "Understand your goals & interests."],
                [
                  "2",
                  "Course Selection",
                  " Choose the right course & university.",
                ],
                [
                  "3",
                  "Admission Process",
                  "Submit documents and receive your official admission letter.",
                ],
                ["4", "Visa Processing", " Complete formalities."],
                ["5", "Travel & Join", "Begin your academic journey."],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0b1e3d] to-[#1e73be] text-white text-lg font-bold shadow-lg ring-4 ring-yellow-400/20">
                    {num}
                  </div>

                  <h4 className="text-lg font-semibold text-[#0b1e3d]">
                    {title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-navy">
        <div className="container center">
          <div className="badge">Testimonials</div>
          <h2 className="font-bold text-3xl text-white sm:text-4xl lg:text-5xl mb-4">
            What Our <span className="text-gold">Students</span> Say
          </h2>
          <p className="section-sub">
            Helping students achieve their dreams in India and abroad across
            various courses.
          </p>
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              650: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
          >
            {testimonial.map((res, index) => {
              const Icon = res.icon;

              return (
                <SwiperSlide key={index} className="py-16">
                  <div className="testi-card">
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <CTABanner
        title="Start Your Education Journey Today"
        subtitle="Join hundreds of students achieving their dreams with Kovai Overseas.
."
        primaryLabel="Enquiry Now"
        secondaryLabel="Book Free Consultation"
      />
    </>
  );
}
