import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconsHelper } from "@/helper/icon_helper";
import PageHero from "../common/PageHero";
import "./style.css";
import img_helper from "@/helper/img_helper";
import { services } from "@/helper/app_helper";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services – Kovai Overseas",
  description:
    "Comprehensive MBBS abroad support from admission to arrival — Kovai Overseas.",
};

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
        image={img_helper.service.serviceheropage}
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
              From admission to arrival — every step of your MBBS abroad journey
              is handled with expertise and care.
            </p>
          </div>

          <div className="bento-grid">
            {services.map((res, index) => {
              const Icon = res.icon;
              const isGold = res.color === "#c9a84c";

              const overlayGradient = isGold
                ? "linear-gradient(to top, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.75) 50%, rgba(11,30,61,0.25) 100%)"
                : "linear-gradient(to top, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.78) 50%, rgba(30,115,190,0.20) 100%)";

              return (
                <div key={index} className="bento-card">
                  <div className="bento-card-photo">
                    <Image
                      src={res.img}
                      alt={res.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div
                    className="bento-card-overlay"
                    style={{ background: overlayGradient }}
                  ></div>

                  <div className="bento-card-num">{res.num}</div>

                  <div className="bento-card-content">
                    <div
                      className="bento-card-tag"
                      style={{
                        color: res.color,
                        borderColor: `rgba(${res.colorRgb},.4)`,
                        background: `rgba(${res.colorRgb},.1)`,
                      }}
                    >
                      <span className="tag-icon">
                        <Icon />
                      </span>
                      {res.tag}
                    </div>

                    <h3>{res.title}</h3>
                    <p className="bento-card-desc">{res.desc}</p>

                    <ul className="bento-feature-list">
                      {res.list.map((item) => (
                        <li key={item}>
                          <span
                            className="bento-check"
                            style={{
                              background: `rgba(${res.colorRgb},.18)`,
                              color: res.color,
                            }}
                          >
                            <IconsHelper.check />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="bento-cta"
                      style={{
                        color: res.color,
                        borderColor: `rgba(${res.colorRgb},.4)`,
                        background: `rgba(${res.colorRgb},.1)`,
                      }}
                    >
                      Get Started <IconsHelper.Rightarrow />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Personalised Guidance?"
        subtitle="  Our expert counsellors are ready to help you choose the right path
              for your medical career — completely free of charge."
        primaryLabel=" Talk to a Counsellor"
        secondaryLabel="Book Free Consultation"
      />
    </>
  );
}
