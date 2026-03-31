import type { Metadata } from "next";
import { IconsHelper } from "@/helper/icon_helper";
import PageHero from "../common/PageHero";
import img_helper from "@/helper/img_helper";
import { services } from "@/helper/app_helper";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Services – Kovai Overseas",
  description: "Elite support for your international medical education.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#fcfcfd]">
      {/* ── HERO ── */}
      <PageHero
        badge="Expert Guidance"
        title="Your Medical Future, Guided by Experts"
        highlight="Future"
        subtitle="We bridge the gap between your ambition and the world's leading medical universities."
        image={img_helper.service.serviceheropage}
        stats={[
          { num: "18y", label: "Experience" },
          { num: "500+", label: "Success Stories" },
          { num: "100%", label: "Transparency" },
        ]}
        primaryCta={{ label: "Start Application", href: "/contact" }}
        secondaryCta={{ label: "View Countries", href: "/countries" }}
      />

      {/* ── SERVICES GRID ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-bold text-[#04112b] tracking-tighter leading-none mb-6">
              Our Pillars of <br />
              <span className="text-[#c9a84c]">Support.</span>
            </h2>
            <div className="h-1.5 w-20 bg-[#c9a84c] rounded-full mb-6" />
          </div>
          <p className="max-w-sm text-[#5a6a85] text-lg font-medium leading-relaxed">
            From documentation to the first day of class, we manage the
            complexity so you can focus on your studies.
          </p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((res, index) => {
            const Icon = res.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col bg-white p-10 md:p-14 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9a84c]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

                {/* Header: Icon & Index */}
                <div className="flex items-center justify-between mb-12">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                    style={{ backgroundColor: res.color }}
                  >
                    <Icon size={32} />
                  </div>
                  <span className="text-6xl font-black text-slate-100 group-hover:text-[#c9a84c]/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-[#04112b] mb-4">
                  {res.title}
                </h3>
                <p className="text-[#5a6a85] text-lg leading-relaxed mb-8">
                  {res.desc}
                </p>

                {/* Features List (Horizontal Scroller on Mobile) */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {res.list.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-sm font-semibold border border-slate-100 group-hover:bg-white group-hover:border-[#c9a84c]/30 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal Link */}
                <Link
                  href="/contact"
                  className="mt-10 flex items-center gap-2 text-[#c9a84c] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn More <IconsHelper.Rightarrow size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PROCESS STEPS (MINIMALIST) ── */}
      <section className="bg-[#04112b] py-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <span className="text-[#c9a84c] uppercase tracking-[0.3em] text-xs font-bold">
            The Journey
          </span>
          <h2 className="text-white text-4xl font-bold mt-4">
            Simple. Fast. Reliable.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Free Consultation",
              desc: "Understand your eligibility and pick your dream country.",
            },
            {
              step: "02",
              title: "Documentation",
              desc: "We handle the heavy lifting—visas, translations, and stamps.",
            },
            {
              step: "03",
              title: "Departure",
              desc: "Guided travel and airport pick-up to ensure you settle in well.",
            },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <div
                className="text-5xl font-outline font-black text-transparent stroke-white/20 mb-4"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                {item.step}
              </div>
              <h4 className="text-white text-xl font-bold mb-2">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to take the first step?"
        subtitle="Our team is standing by to help you navigate your medical journey."
        primaryLabel="Talk to an Expert"
        secondaryLabel="View Gallery"
      />
    </main>
  );
}
