"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "../common/PageHero";
import { hostelFeatures } from "@/helper/app_helper";

/* ─── Data ─── */


const amenities = [
  "Hot Water Supply", "Central Heating", "Reading Room / Study Hall",
  "Common Lounge", "In-house Laundry", "CCTV Surveillance",
  "Key-card Entry", "Fire Safety Systems", "Backup Power", "Nearby Pharmacy",
];

const meals = [
  {
    time: "7am",
    label: "Breakfast",
    desc: "Idli, dosa, poha, upma, paratha with curd and pickle — rotating daily menu.",
  },
  {
    time: "1pm",
    label: "Lunch",
    desc: "Rice, sambar, rasam, sabzi, dal, roti and a seasonal vegetable side — fully home-style.",
  },
  {
    time: "8pm",
    label: "Dinner",
    desc: "Chapati, dal fry, mixed vegetable curry, rice and a sweet dish on weekends.",
  },
];

const dietTags = [
  "100% Vegetarian Available", "South Indian Specials", "North Indian Meals",
  "No Beef / Pork", "Hygienic Kitchen", "RO Drinking Water",
];

const menuItems = [
  { name: "Sambar Rice",    type: "South Indian · Lunch",     img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
  { name: "Masala Dosa",    type: "South Indian · Breakfast",  img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80" },
  { name: "Dal Fry & Roti", type: "North Indian · Dinner",     img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80" },
  { name: "Curd Rice",      type: "South Indian · Lunch",      img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },
];

const stats = [
  { num: "3×",   label: "Meals Daily" },
  { num: "24/7", label: "Security" },
  { num: "100%", label: "Veg Options" },
  { num: "500m", label: "From Campus" },
];

/* ─── Page ─── */
export default function HostelFoodPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <PageHero
        badge="Student Life Abroad"
        title="Hostel & Food Life Abroad"
        highlight="Food"
        subtitle="Comfortable, safe, and fully-equipped student hostels — paired with familiar Indian meals that make your child feel right at home, thousands of kilometres away."
        image="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600&q=80"
      />

      {/* ── STATS BAR ── */}
      <section className="py-10 bg-white border-b border-[#f0ede6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#f0ede6] border border-[#f0ede6] rounded-lg overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-white py-6 text-center">
                <div className="font-serif text-4xl font-bold text-[#c9a84c] leading-none">
                  {s.num}
                </div>
                <div className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-[#9a9488] mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HOSTEL SECTION
      ══════════════════════════════ */}
      <section id="hostel" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 text-[#c9a84c] text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              Accommodation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#07122a] tracking-tight leading-tight mb-4">
              Your Home Away<br />from <em className="text-[#c9a84c] not-italic">Home</em>
            </h2>
            <div className="w-12 h-0.5 mb-5 rounded-full bg-gradient-to-r from-[#c9a84c] to-transparent" />
            <p className="text-[#6b6459] text-base leading-relaxed max-w-xl">
              All hostels are carefully vetted by Kovai Overseas — safe, clean, and within
              walking distance of the university campus.
            </p>
          </div>

          {/* Image collage + features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

            {/* Collage */}
            <div className="grid grid-cols-2 gap-3" style={{ gridTemplateRows: "220px 160px" }}>
              <div className="row-span-2 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                  alt="Hostel room" width={400} height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
                  alt="Modern hostel bedroom" width={300} height={220}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80"
                  alt="Hostel common room" width={300} height={160}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {hostelFeatures.map((res, index) => {
              const Icon = res.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 items-start p-5 rounded-xl border border-[#f0ede6] bg-[#faf9f6]
                             hover:border-[rgba(201,168,76,.3)] transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(201,168,76,.1)] flex items-center justify-center text-lg">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#07122a] text-[0.95rem] mb-1">{res.title}</h4>
                    <p className="text-[#7a7268] text-sm leading-relaxed">{res.desc}</p>
                  </div>
                </div>
              );
})}
            </div>
          </div>

          {/* Amenities grid */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#07122a] mb-5">
              All Included Amenities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {amenities.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-[#f0ede6] bg-[#faf9f6]"
                >
                  <span className="text-[#c9a84c] text-[0.7rem]">✦</span>
                  <span className="text-[0.82rem] text-[#4a4540] font-medium leading-snug">{a}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FULL-WIDTH QUOTE BREAK ── */}
      <div className="relative h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=80"
          alt="Hostel corridor" fill
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07122a]/90 via-[#07122a]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <blockquote className="max-w-xl">
              <p className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                Every student deserves to feel safe,{" "}
                <em className="text-[#c9a84c]">comfortable, and cared for.</em>
              </p>
              <footer className="text-white/50 text-sm tracking-wider">
                — Kovai Overseas Team
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          FOOD SECTION
      ══════════════════════════════ */}
      <section id="food" className="py-24 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 text-[#c9a84c] text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              Dining & Nutrition
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#07122a] tracking-tight leading-tight mb-4">
              Taste of <em className="text-[#c9a84c] not-italic">Home,</em><br />Every Single Day
            </h2>
            <div className="w-12 h-0.5 mb-5 rounded-full bg-gradient-to-r from-[#c9a84c] to-transparent" />
            <p className="text-[#6b6459] text-base leading-relaxed max-w-xl">
              Indian cooks prepare freshly cooked South and North Indian meals three times a day —
              so your child never has to compromise on comfort food.
            </p>
          </div>

          {/* Meals + image collage */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

            {/* Meal cards + tags */}
            <div>
              <div className="flex flex-col gap-3 mb-6">
                {meals.map((m) => (
                  <div
                    key={m.label}
                    className="grid gap-4 p-5 rounded-xl bg-white border border-[#f0ede6] border-l-[3px] border-l-[#c9a84c]"
                    style={{ gridTemplateColumns: "72px 1fr" }}
                  >
                    <div className="text-center">
                      <div className="font-serif text-2xl font-bold text-[#c9a84c] leading-none">
                        {m.time}
                      </div>
                      <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[#b0a898] mt-0.5">
                        {m.label}
                      </div>
                    </div>
                    <p className="text-[0.85rem] text-[#4a4540] leading-relaxed self-center">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Diet tags */}
              <div className="flex flex-wrap gap-2">
                {dietTags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.72rem] font-semibold tracking-wide px-3 py-1.5 rounded-full
                               border border-[rgba(201,168,76,.35)] text-[#c9a84c] bg-[rgba(201,168,76,.07)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image collage (reversed) */}
            <div className="grid grid-cols-2 gap-3" style={{ gridTemplateRows: "160px 220px" }}>
              <div className="rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80"
                  alt="Indian thali" width={300} height={160}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="row-span-2 rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80"
                  alt="Food preparation" width={300} height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80"
                  alt="Indian breakfast" width={300} height={220}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Menu gallery */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#07122a] mb-5">
              A Glimpse of the Menu
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {menuItems.map((item) => (
                <div key={item.name} className="rounded-xl overflow-hidden border border-[#f0ede6]">
                  <div className="h-48 overflow-hidden group">
                    <Image
                      src={item.img} alt={item.name} width={300} height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 py-3 bg-white">
                    <p className="font-semibold text-[0.88rem] text-[#07122a] mb-0.5">{item.name}</p>
                    <p className="text-[0.72rem] text-[#9a9488]">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── PARENT REASSURANCE CTA BAND ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "#07122a" }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#c9a84c 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-[#c9a84c] text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            For Parents
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug mb-4">
            Your Child Is in <em className="text-[#c9a84c] not-italic">Safe Hands</em>
          </h2>
          <div
            className="w-12 h-0.5 mx-auto mb-6 rounded-full"
            style={{ background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }}
          />
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-8">
            We personally inspect every hostel and food arrangement before recommending it to
            our students. Our on-ground support team is available 24/7 for any emergency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-semibold
                         text-[0.85rem] tracking-wide text-[#07122a] hover:-translate-y-0.5
                         transition-all duration-200"
              style={{
                background: "linear-gradient(135deg,#c9a84c,#e4c97e)",
                boxShadow: "0 4px 20px rgba(201,168,76,.3)",
              }}
            >
              Book Free Consultation →
            </Link>
            <Link
              href="/university"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-medium
                         text-[0.85rem] text-white/80 border border-white/25 hover:bg-white/5
                         hover:border-white/50 transition-all duration-200"
            >
              View Universities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
