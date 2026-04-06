"use client";

import { timelineItems } from "@/helper/app_helper";
import React, { useEffect, useRef } from "react";

/* ─── Types ─── */
interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: React.ElementType; // FIX 1 (TS + Icon): was "string" — must be a component ref
  side: "left" | "right";
}

/* ─── Component ─── */
export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Scroll-triggered reveal */
  useEffect(() => {
    const cards =
      containerRef.current?.querySelectorAll<HTMLElement>("[data-tl-card]");
    if (!cards?.length) return; // FIX 2 (Animation): guard against empty NodeList

    // FIX 3 (Animation): rootMargin gives cards a head-start before they hit viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" } // FIX 3: was 0.15 — too strict, cards could miss
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase border border-[rgba(201,168,76,.3)] bg-[rgba(201,168,76,.06)] px-4 py-1.5 rounded-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#07122a] tracking-tight leading-tight mb-4">
            18+ Years of Shaping<br />
            <em className="text-[#c9a84c] not-italic">Medical Futures</em>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent mx-auto mb-5" />
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            From a small office in Salem to one of Tamil Nadu&apos;s most trusted
            medical consultancies.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div ref={containerRef} className="relative">

          {/* Centre vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,.3)] to-transparent" />

          <div className="flex flex-col gap-0">
            {(timelineItems as TimelineItem[]).map((item, i) => {
              // FIX 4 (Icon + TS): removed "as unknown as React.ElementType" — type is now correct
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-center"
                >
                  {/* ── Left slot (desktop only) ── */}
                  {/* FIX 5 (Layout): removed redundant md:order-none class that had no effect */}
                  <div
                    className={
                      item.side === "left"
                        ? "md:col-start-1 md:pr-12 hidden md:flex md:justify-end"
                        : "md:col-start-1 hidden md:block"
                    }
                  >
                    {item.side === "left" && (
                      <TimelineCard item={item} align="right" />
                    )}
                  </div>

                  {/* ── Centre dot (desktop only) ── */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center">
                      <Icon size={18} className="text-[#0b1e3d]" />
                    </div>
                  </div>

                  {/* ── Right slot (desktop only) ── */}
                  <div
                    className={
                      item.side === "right"
                        ? "md:col-start-2 md:pl-12 hidden md:flex"
                        : "md:col-start-2 hidden md:block"
                    }
                  >
                    {item.side === "right" && (
                      <TimelineCard item={item} align="left" />
                    )}
                  </div>

                  {/* ── Mobile: single full-width card with icon ── */}
                  {/* FIX 6 (Layout): was always rendered alongside desktop slots causing triple render */}
                  <div className="md:hidden col-span-2 flex gap-4 items-start py-2">
                    <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center">
                      {/* FIX 7 (Icon): was text-[#c9a84c] = gold icon on gold bg (invisible) */}
                      <Icon size={20} className="text-[#0b1e3d]" />
                    </div>
                    <TimelineCard item={item} align="left" mobile />
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom anchor dot */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
            <div className="w-3 h-3 rounded-full bg-[#c9a84c] ring-4 ring-[rgba(201,168,76,.15)]" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Card ─── */
function TimelineCard({
  item,
  align,
  mobile = false,
}: {
  item: TimelineItem;
  align: "left" | "right";
  mobile?: boolean;
}) {
  return (
    // FIX 8 (Animation): switched from Tailwind class toggling to inline style —
    // IntersectionObserver directly sets opacity/transform via style, bypassing
    // Tailwind's purge and specificity issues. Added will-change for GPU hint.
    <div
      data-tl-card
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        willChange: "opacity, transform",
      }}
      className={`
        group relative bg-white border border-gray-100 rounded-xl p-6
        shadow-[0_2px_16px_rgba(0,0,0,.05)]
        hover:shadow-[0_8px_32px_rgba(201,168,76,.12)]
        hover:border-[rgba(201,168,76,.25)]
        hover:-translate-y-1
        ${mobile ? "w-full" : "max-w-sm w-full"}
      `}
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Year pill */}
      <div className="inline-flex items-center gap-1.5 text-[#c9a84c] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
        <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
        {item.year}
      </div>

      <h3 className="text-[#07122a] font-semibold text-[1.05rem] leading-snug mb-2">
        {item.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

      {/* Connector line */}
      <div
        className={`
          hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-px
          bg-gradient-to-r from-[rgba(201,168,76,.3)] to-transparent
          ${align === "right"
            ? "right-0 translate-x-full"
            : "left-0 -translate-x-full rotate-180"
          }
        `}
      />
    </div>
  );
}