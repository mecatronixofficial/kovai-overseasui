import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IconsHelper } from '@/helper/icon_helper'
import PageHero from "../common/PageHero";
import "./style.css";
import img_helper from '@/helper/img_helper';

export const metadata: Metadata = {
  title: "Our Services – Kovai Overseas",
  description:
    "Comprehensive MBBS abroad support from admission to arrival — Kovai Overseas.",
};

const services = [
  {
    num: "01",
    icon: "🎓",
    tag: "Admissions",
    title: "MBBS Admission Assistance",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=700&q=80",
    desc: "We guide you through the entire application process for MBBS programs at our partner universities in Uzbekistan — from shortlisting to your official offer letter.",
    list: [
      "University shortlisting based on your profile",
      "Application form preparation and submission",
      "Follow-up with university admission offices",
      "Offer letter and admission confirmation support",
    ],
    color: "#c9a84c",
    colorRgb: "201,168,76",
    darkBg: false,
  },
  {
    num: "02",
    icon: "🔍",
    tag: "Counselling",
    title: "University Selection Guidance",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80",
    desc: "Choosing the right university is one of the most important decisions of your career. We evaluate options based on your academic profile, budget, and long-term goals.",
    list: [
      "One-on-one counselling sessions",
      "Comparison of university programs and fees",
      "Information on campus facilities and student life",
      "Guidance on NMC/WHO recognition status",
    ],
    color: "#1e73be",
    colorRgb: "30,115,190",
    darkBg: true,
  },
  {
    num: "03",
    icon: "📄",
    tag: "Documentation",
    title: "Documentation & Application Support",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=700&q=80",
    desc: "We assist you in preparing and verifying every required document — so nothing is missed, nothing is delayed, and your application is always complete.",
    list: [
      "Application forms (academic & personal)",
      "Academic certificate attestation",
      "Passport assistance and verification",
      "Medical documents and NEET score card",
    ],
    color: "#c9a84c",
    colorRgb: "201,168,76",
    darkBg: false,
  },
  {
    num: "04",
    icon: "✈️",
    tag: "Pre-Departure",
    title: "Pre-Departure Support",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80",
    desc: "From visa processing to travel planning and accommodation — we prepare you thoroughly for life abroad so you arrive confident, informed, and ready.",
    list: [
      "Student visa process and application",
      "Travel planning and flight booking guidance",
      "Accommodation arrangements at university",
      "Pre-departure orientation and briefing session",
    ],
    color: "#1e73be",
    colorRgb: "30,115,190",
    darkBg: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}

      <PageHero
        badge="✦ What We Offer"
        title="Our Services —
              Built Around You"
        highlight="Services"
        subtitle="Comprehensive, end-to-end support from your first enquiry to the
              day you arrive at your university abroad. Every service designed
              for your success."
        image={img_helper.service.serviceheropage.src}
        stats={[
          { num: "18+", label: "Years of Excellence" },
          { num: "500+", label: "Students Placed" },
          { num: "95%", label: "Visa Success Rate" },
        ]}
        primaryCta={{ label: "Book Free Consultation →", href: "/contact" }}
        secondaryCta={{ label: "View Admission Process", href: "/admission" }}
      />

      {/* SERVICES — BENTO GRID */}

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="sp-intro">
            <div className="sp-intro-eyebrow">✦ Four Core Services</div>
            <h2>
              Everything Covered.
              <br />
              Nothing Left to Chance.
            </h2>
            <p>
              From admission to arrival — every step of your MBBS abroad journey is handled with expertise and care.
            </p>
          </div>

          <div className="bento-grid">
            {services.map((svc) => {
              const Icon = svc.icon
              const isGold = svc.color === '#c9a84c'

              const overlayGradient = isGold
                ? "linear-gradient(to top, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.75) 50%, rgba(11,30,61,0.25) 100%)"
                : "linear-gradient(to top, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.78) 50%, rgba(30,115,190,0.20) 100%)";

              return (
                <div key={svc.title} className="bento-card">
                  <div className="bento-card-photo">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="bento-card-overlay" style={{ background: overlayGradient }}></div>

                  <div className="bento-card-num">{svc.num}</div>

                  <div className="bento-card-content">
                    <div
                      className="bento-card-tag"
                      style={{
                        color: svc.color,
                        borderColor: `rgba(${svc.colorRgb},.4)`,
                        background: `rgba(${svc.colorRgb},.1)`,
                      }}
                    >
                      <span className="tag-icon">
                        <Icon size={30} />
                      </span>
                      {svc.tag}
                    </div>

                    <h3>{svc.title}</h3>
                    <p className="bento-card-desc">{svc.desc}</p>

                    <ul className="bento-feature-list">
                      {svc.list.map((item) => (
                        <li key={item}>
                          <span
                            className="bento-check"
                            style={{
                              background: `rgba(${svc.colorRgb},.18)`,
                              color: svc.color,
                            }}
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="bento-cta"
                      style={{
                        color: svc.color,
                        borderColor: `rgba(${svc.colorRgb},.4)`,
                        background: `rgba(${svc.colorRgb},.1)`,
                      }}
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sp-cta-wrap">
        <div className="container">
          <div className="sp-cta-inner">
            <h2>Need Personalised Guidance?</h2>
            <p>
              Our expert counsellors are ready to help you choose the right path for your medical career — completely free of charge.
            </p>
            <div className="sp-cta-btns">
              <Link href="/contact" className="btn btn-gold">
                <IconsHelper.Star size={24} />Talk to a Counsellor
              </Link>
              <Link href="/contact" className="btn btn-outline-white">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
