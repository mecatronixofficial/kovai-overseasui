import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import "./style.css";
import PageHero from "../common/PageHero";
import img_helper from "@/helper/img_helper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admission Process – Kovai Overseas",
  description:
    "Step-by-step MBBS admission process to study abroad with Kovai Overseas.",
};

const steps = [
  {
    num: "01",
    title: "Free Student Consultation",
    tag: "Start Here",
    desc: "Begin with a free one-on-one counselling session with our expert advisors. We understand your academic background, budget, and career aspirations to recommend the best path forward — from NEET eligibility to life abroad.",
  },
  {
    num: "02",
    title: "University Selection",
    tag: "Find Your Fit",
    desc: "Based on your profile, we help you select the most suitable medical university, presenting detailed comparisons covering tuition fees, academic reputation, facilities, and recognition status.",
  },
  {
    num: "03",
    title: "Application & Documents",
    tag: "Paperwork",
    desc: "We guide you through preparing and submitting all required documents: application forms, academic transcripts, NEET scorecard, passport copies, and medical certificates.",
  },
  {
    num: "04",
    title: "Admission Confirmation",
    tag: "Official Letter",
    desc: "Once the university reviews your application, you receive the official admission/invitation letter — the key document required for your student visa application.",
  },
  {
    num: "05",
    title: "Visa Processing",
    tag: "95%+ Success",
    desc: "With your admission letter in hand, we guide you through the student visa application process step by step. Our visa success rate is above 95%.",
  },
  {
    num: "06",
    title: "Pre-Departure Support",
    tag: "Ready to Fly",
    desc: "Before you leave, we conduct a detailed pre-departure orientation covering what to pack, travel insurance, currency, accommodation, and what to expect on arrival.",
  },
];

const docGroups = [
  {
    icon: "📜",
    accent: "#F97316",
    title: "Academic",
    items: [
      "10th Mark Sheet",
      "12th Mark Sheet (PCB)",
      "NEET Scorecard",
      "Transfer Certificate",
    ],
  },
  {
    icon: "🪪",
    accent: "#3B82F6",
    title: "Personal",
    items: [
      "Valid Passport (min. 2 years)",
      "Birth Certificate",
      "Passport-size photographs",
      "Medical fitness certificate",
    ],
  },
  {
    icon: "📋",
    accent: "#10B981",
    title: "Application",
    items: [
      "Completed application form",
      "Bank statement (financial proof)",
      "No-objection certificate",
      "Invitation letter (from university)",
    ],
  },
];

export default function AdmissionPage() {
  return (
    <>
      <div className="ap-root">
        {/* ── HERO ── */}

        <PageHero
          badge="Step-by-Step Guide"
          title="Your Path to MBBS Abroad"
          highlight="MBBS"
          subtitle="A clear, guided pathway from your very first enquiry to your first
              day sitting in a lecture hall, halfway around the world."
          image={img_helper.admission.homepage}
          stats={[
            { num: "6", label: "Simple Steps" },
            { num: "500+", label: "Students Placed" },
            { num: "95%", label: "Visa Success Rate" },
          ]}
          primaryCta={{ label: "Book Free Consultation →", href: "/contact" }}
          secondaryCta={{ label: "Our Universities", href: "/university" }}
        />

        {/* ── TIMELINE ── */}
        <section className="ap-section ap-timeline-section">
          <div className="ap-container">
            <div className="ap-timeline-inner">
              {/* Left sticky column */}
              <div className="ap-timeline-lhs">
                <span className="ap-eyebrow">The Process</span>
                <h2 className="ap-title" style={{ marginBottom: 16 }}>
                  Six steps to your
                  <br />
                  dream degree
                </h2>
                <p className="ap-subtitle">
                  Every step is handled with our team alongside you. No
                  guesswork, no stress — just a straight line from where you are
                  to where you want to be.
                </p>
                <div className="ap-lhs-visual" style={{ marginTop: 48 }}>
                  <Image
                    src={img_helper.admission.free}
                    alt="Students walking on campus"
                    fill
                  />
                  <div className="ap-lhs-badge">
                    <p>Free Consultation</p>
                    <span>
                      Start your journey today — no cost, no commitment
                    </span>
                  </div>
                </div>
              </div>

              {/* Right steps column */}
              <div className="ap-timeline-rhs">
                {steps.map((s) => (
                  <div className="ap-step" key={s.num}>
                    <div className="ap-step-num">{s.num}</div>
                    <div className="ap-step-tag">{s.tag}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DOCUMENTS ── */}
        <section className="ap-section ap-docs-section">
          <div className="ap-container">
            <div className="ap-docs-header">
              <span className="ap-eyebrow" style={{ color: "var(--gold-l)" }}>
                Checklist
              </span>
              <h2 className="ap-title ap-title-white">
                Documents you&apos;ll need
              </h2>
              <p
                className="ap-subtitle"
                style={{ color: "rgba(255,255,255,.55)" }}
              >
                Gather these in advance to keep your application moving fast.
              </p>
            </div>
            <div className="ap-docs-grid">
              {docGroups.map((g) => (
                <div
                  className="ap-doc-card"
                  key={g.title}
                  style={{ ["--accent-color" as string]: g.accent }}
                >
                  <div className="ap-doc-icon">{g.icon}</div>
                  <h3>{g.title} Documents</h3>
                  <ul className="ap-doc-list">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Start Your Application Today"
          subtitle=" Don't wait — seats fill up fast. Contact us to begin your
              admission process now."
          primaryLabel="Apply Now →"
          secondaryLabel="Book Free Consultation"
        />
      </div>
    </>
  );
}
