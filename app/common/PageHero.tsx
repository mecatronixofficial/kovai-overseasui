"use client";

import React, { useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import "./style.css";

/* ─── Types ─── */
export interface StatItem {
  num: string;
  label: string;
}
export interface CtaLink {
  label: string;
  href: string;
}

export interface PageHeroProps {
  /** Small pill above the title */
  badge?: string;
  /** Main heading */
  title: string;
  /** A word / phrase in `title` to render in gold italic */
  highlight?: string;
  /** Body copy */
  subtitle?: string;
  /** Background photo URL */
  image?: string | StaticImageData; 
  /** Stats row */
  stats?: StatItem[];
  /** Gold primary button */
  primaryCta?: CtaLink;
  /** Ghost secondary button */
  secondaryCta?: CtaLink;
  /** Extra className on root */
  className?: string;
}

/* ─── Component ─── */
export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  image,
  stats = [],
  primaryCta,
  secondaryCta,
  className = "",
}: PageHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  /* Staggered fade-up on mount */
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>("[data-fade]");
    if (!els) return;
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(
        () => {
          el.style.transition = "opacity 0.72s ease, transform 0.72s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        },
        80 + i * 115,
      );
    });
  }, []);

  /* Wrap highlight word in gold <em> */
  const titleNode = useMemo(() => {
    if (!highlight || !title.includes(highlight)) return <>{title}</>;
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <em>{highlight}</em>
        {after}
      </>
    );
  }, [title, highlight]);

  return (
    <>
      <section ref={rootRef} className={`ph ${className}`}>
        {/* Background */}
        <div className="ph-bg" aria-hidden="true">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              priority
              className="ph-bg-img"
              sizes="100vw"
            />
          ) : (
            <div className="ph-bg-fallback" />
          )}
          <div className="ph-ov ph-ov-b" />
          <div className="ph-ov ph-ov-l" />
          <div className="ph-ov ph-ov-t" />
        </div>

        {/* Decorative arcs */}
        <svg
          className="ph-arcs"
          viewBox="0 0 500 600"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="500"
            cy="300"
            r="380"
            stroke="#c9a84c"
            strokeWidth="1"
            strokeDasharray="6 5"
          />
          <circle
            cx="500"
            cy="300"
            r="270"
            stroke="#c9a84c"
            strokeWidth="0.6"
          />
          <circle
            cx="500"
            cy="300"
            r="160"
            stroke="#c9a84c"
            strokeWidth="0.5"
            strokeDasharray="3 8"
          />
        </svg>

        {/* Top-right gold accent line */}
        <div className="ph-accent-line" aria-hidden="true" />

        {/* Content */}
        <div className="ph-wrap">
          <div className="ph-content">
            {badge && (
              <div className="ph-badge" data-fade>
                <span className="ph-badge-dot" aria-hidden="true" />
                {badge}
              </div>
            )}

            <h1 className="ph-title" data-fade>
              {titleNode}
            </h1>

            <div className="ph-rule" data-fade aria-hidden="true" />

            {subtitle && (
              <p className="ph-sub" data-fade>
                {subtitle}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="ph-ctas" data-fade>
                {primaryCta && (
                  <Link href={primaryCta.href} className="ph-btn ph-btn-gold">
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="ph-btn ph-btn-ghost"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}

            {stats.length > 0 && (
              <div className="ph-stats" data-fade>
                {stats.map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <div className="ph-stats-sep" aria-hidden="true" />
                    )}
                    <div className="ph-stat">
                      <span className="ph-stat-n">{s.num}</span>
                      <span className="ph-stat-l">{s.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="ph-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 64 Q360 4 720 34 Q1080 64 1440 22 L1440 64 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
