"use client";


import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";
import { choose, feature, subservices, testimonial } from "@/helper/app_helper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function HomePage() {

  return (
    <>
      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-bg-layer"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>

        <div className="hero-content">
          <div className="fade-up">
           

            <h1>
             Shape Your <span className="text-gold">Dreams</span> Globally
            </h1>
            <h5 className="text-white text-2xl">India & Abroad – We Guide Your Path</h5>

            <p className="hero-sub">
             Your trusted partner in higher education abroad.
Connecting students with leading universities worldwide.
            </p>

            <div className="hero-btns">
              <Link href="/contact" className="btn btn-gold">
                <IconsHelper.Star size={24} />
                Enquiry Now
              </Link>

              <Link href="/contact" className="btn btn-outline-white">
                Free Consultation
                <IconsHelper.Rightarrow />
              </Link>
            </div>

            <div className="hero-stats">
              {[
                ["18+", "Years Experience"],
                ["2500+", "Students Placed (India & Abroad)"],
                ["100% ", "Trusted Global Guidance"],
              ["100+","  Universities"],
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
                    <h4>MBBS Admission 2026</h4>
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
                    Enquiry Now
                    <IconsHelper.Rightarrow size={20} />
                  </Link>
                </div>
              </div>

              

              <div className="float-badge float-badge-2">
                <div className="fb-icon ">
                  <IconsHelper.Toprank size={34} />
                </div>
                <div className="fb-text">
                  <strong>TRUSTED     </strong>
                  <small></small>
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
            {feature.map((res, index) =>{
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
              <div className="relative overflow-hidden w-full h-[590px]" >
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
               Shaping the Future of <span className="text-gold">Global Education</span> 
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Kovai Overseas is committed to guiding students towards the right educational path in India and abroad. With years of experience, we help students choose the best course and university based on their goals and interests.
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
      <span className="text-sm leading-relaxed">
        {text}
      </span>
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
          <h2 className="section-title">Why Thousands <span className="text-gold">Trust</span> Kovai Overseas</h2>
          <p className="section-sub">
            We are more than a consultancy — we are your partner in achieving
            your dream of becoming a doctor.
          </p>

          <div className="why-grid">
            {choose.map((res, index) => {
            const Icon = res.icon;
            return(
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
                  Our Global <span className="text-gold">University</span> Network
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
                 We collaborate with leading universities across India and abroad to provide students with the best education opportunities.
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
                    Explore Universities<IconsHelper.Arrow size={20} />
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
            <h2 className="section-title">What We <span className="text-gold">Offer</span></h2>
            <p className="section-sub">
              Comprehensive support at every stage of your journey to studying
              medicine abroad.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: 44 }}>
            {subservices.map((res, index) => {
            const Icon = res.icon;
            return(
              <div key={index} className="service-card">
                <div className={`icon-box ${res.cls}`}>
                  <Icon size={26} />
                </div>
                <h3>{res.title}</h3>
                <p>{res.desc}</p>
              </div>
            )})}
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
     Your Path to Study in <span className="text-gold">India</span> & <span className="text-gold">Abroad</span>
    </h2>

    <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
      A clear, supported journey from first consultation to campus arrival.
    </p>

    <div className="relative mt-14">
      <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
        {[
          [
            "1",
            "Consultation",
            "Understand your goals & interests.",
          ],
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
          [
            "4",
            "Visa Processing",
            " Complete formalities.",
          ],
          [
            "5",
            "Travel & Join",
            "Begin your academic journey.",
          ],
        ].map(([num, title, desc]) => (
          <div
            key={num}
            className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0b1e3d] to-[#1e73be] text-white text-lg font-bold shadow-lg ring-4 ring-yellow-400/20">
              {num}
            </div>

            <h4 className="text-lg font-semibold text-[#0b1e3d]">{title}</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
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
    <h2 className="font-bold text-3xl text-white sm:text-4xl lg:text-5xl mb-4">What Our <span className="text-gold">Students</span> Say</h2>
       <p className="section-sub">
              Helping students achieve their dreams in India and abroad across various courses.
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
