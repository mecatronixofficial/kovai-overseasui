import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import PageHero from "../common/PageHero";

export const metadata: Metadata = {
  title: "Zarmed University – Kovai Overseas",
  description:
    "Learn about Zarmed University, Uzbekistan — WHO recognized MBBS program in English medium.",
};

export default function UniversityPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* ─── HERO ─── */}
      <PageHero
        badge="Partner University"
        title="Zarmed University"
        highlight="Zarmed"
        subtitle="Zarmed University stands as a premier medical institution in Uzbekistan, recognized by the World Health Organization (WHO) and listed in the World Directory of Medical Schools."
        image="/images/about-bg.jpg"
        stats={[
          { num: "15+", label: "Countries" },
          { num: "2008", label: "Established" },
          { num: "6 Yrs", label: "Program" },
        ]}
        primaryCta={{ label: "Book Free Consultation →", href: "/contact" }}
        secondaryCta={{ label: "Our Universities", href: "/university" }}
      />

      {/* ─── INTRO ─── */}
      <section className="py-28">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          {/* Left copy */}
          <div className="space-y-7">
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">
              The Institution
            </span>
            <h2 className="text-5xl font-bold text-[#0b1e3d] leading-tight">
              Global Excellence
              <br />
              in Medical
              <br />
              Education
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-yellow-500 rounded-full" />
              <div className="w-4 h-1 bg-yellow-500/40 rounded-full" />
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              Zarmed University stands as a premier medical institution in
              Uzbekistan, recognized by the{" "}
              <span className="font-semibold text-[#0b1e3d]">
                World Health Organization (WHO)
              </span>{" "}
              and listed in the World Directory of Medical Schools.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              The university offers high-quality, internationally recognized
              MBBS programs delivered entirely in English, specifically tailored
              for the international medical community.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#0b1e3d] text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 hover:text-[#0b1e3d] transition-all duration-300 shadow-xl hover:shadow-yellow-500/30"
              >
                Apply for Admission 2026
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right image stack */}
          <div className="relative h-[560px]">
            {/* Main image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="Medical Faculty"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Gold tint overlay on hover */}
              <div className="absolute inset-0 bg-yellow-500/0 hover:bg-yellow-500/10 transition-colors duration-500" />
            </div>

            {/* Gold border accent */}
            <div className="absolute -inset-3 rounded-3xl border-2 border-yellow-500/20 pointer-events-none" />

            {/* Established badge */}
            <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-2xl text-center border-b-4 border-yellow-500 min-w-[90px]">
              <span className="block text-xs text-gray-400 uppercase tracking-widest font-bold">
                Est.
              </span>
              <span className="text-yellow-500 font-black text-3xl leading-none">
                2008
              </span>
            </div>

            {/* Bottom floating thumbnails */}
            <div className="absolute -bottom-6 -left-6 flex gap-3">
              {[
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80",
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-24 h-24 rounded-xl border-4 border-white shadow-xl overflow-hidden hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    alt="Facility"
                    width={100}
                    height={100}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY ZARMED FEATURES ─── */}
      <section className="py-28 bg-[#0b1e3d] relative overflow-hidden">
        {/* Background texture dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gold blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl" />

        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">
              Advantages
            </span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              Why Indian Students
              <br />
              Choose Zarmed
            </h2>
            <p className="text-white/50">
              A perfect balance of affordability, quality, and global
              recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                title: "English Medium",
                desc: "No language barrier. Full curriculum and exams in English.",
              },
              {
                icon: "💰",
                title: "Affordable Fees",
                desc: "Low tuition costs compared to private Indian colleges.",
              },
              {
                icon: "🌍",
                title: "Global Network",
                desc: "Diverse student body from over 15+ countries.",
              },
              {
                icon: "🔬",
                title: "Smart Labs",
                desc: "Advanced simulation labs and modern research centers.",
              },
              {
                icon: "👨‍🏫",
                title: "Top Faculty",
                desc: "Mentored by doctors with global clinical experience.",
              },
              {
                icon: "🏆",
                title: "WHO & NMC",
                desc: "Fully eligible for FMGE/NExT screening in India.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Card number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black text-white/5 group-hover:text-yellow-500/10 transition-colors leading-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="text-4xl mb-5">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Bottom hover accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSE & ELIGIBILITY ─── */}
      <section className="py-28">
        <div className="container">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-0.5 bg-yellow-500" />
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">
              Program Details
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            {/* Course Overview — dark panel */}
            <div className="bg-[#0b1e3d] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-500/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />

              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
                Course Overview
              </h3>
              <div className="space-y-0 relative z-10">
                {[
                  ["Duration", "6 Years (incl. Internship)"],
                  ["Medium", "100% English"],
                  ["Intake", "September / October"],
                  ["Degree", "MD (Equiv. to MBBS)"],
                  ["Internship", "1-Year Clinical Rotation"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="group flex justify-between items-center py-5 border-b border-white/10 last:border-0 hover:border-yellow-500/30 transition-colors"
                  >
                    <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="font-bold text-yellow-500 text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility — light panel */}
            <div className="bg-slate-50 p-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-yellow-500/10 translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <h3 className="text-2xl font-bold text-[#0b1e3d] mb-8 relative z-10">
                Eligibility Criteria
              </h3>
              <ul className="space-y-5 relative z-10">
                {[
                  "12th Grade with PCB (Physics, Chemistry, Biology)",
                  "Min 50% Aggregate in PCB (45% for Reserved)",
                  "Must be NEET Qualified (As per NMC rules)",
                  "Minimum age of 17 by Dec 31st",
                  "Valid Indian Passport",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#0b1e3d] flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300 shadow-md">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL / QUOTE STRIP ─── */}
      <section className="py-20 bg-yellow-500 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #0b1e3d 0, #0b1e3d 1px, transparent 0, transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="container relative z-10 text-center">
          <p className="text-[#0b1e3d] text-2xl md:text-4xl font-black leading-tight max-w-4xl mx-auto">
            A globally recognized MBBS degree, taught entirely in English —{" "}
            <span className="underline decoration-[#0b1e3d]/40 decoration-wavy underline-offset-4">
              at a fraction of the cost
            </span>{" "}
            of Indian private colleges.
          </p>
          <p className="mt-6 text-[#0b1e3d]/60 font-semibold uppercase tracking-widest text-sm">
            Kovai Overseas · Trusted Education Partner
          </p>
        </div>
      </section>

      <CTABanner
        title="Your Medical Journey Begins Here"
        subtitle="Admissions for the 2026-27 session are now open. Get expert guidance for Zarmed University."
        primaryLabel="Apply Now"
        secondaryLabel="Download Brochure"
        secondaryHref="/admission"
      />
    </main>
  );
}
