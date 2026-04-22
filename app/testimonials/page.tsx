import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import PageHero from "../common/PageHero";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";
import { testimonials } from "@/helper/app_helper";

export const metadata: Metadata = {
  title: "Student Testimonials – Kovai Overseas",
  description:
    "Real stories from students who studied MBBS abroad through Kovai Overseas.",
};



export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge="Student Stories"
        title="Student Testimonials"
        highlight="Testimonials"
        subtitle="Real stories from students who achieved their dream of studying MBBS abroad through Kovai Overseas."
        image={img_helper.testimonials.testimonialshomepage}
      />

      <section className="section">
        <div className="container">
          <div className="testi-page-grid">
            {testimonials.map((res, index) => {
              const Icon = res.avatar;
              return (
                <div key={index} className="testi-page-card">
                  <div className="tpc-top">
                    <div className="tpc-avatar">
                      <Icon className="text-white" />
                    </div>
                    <div className="tpc-info">
                      <h3>{res.name}</h3>
                      <div className="tpc-uni">{res.uni}</div>
                      <div className="tpc-year">{res.year}</div>
                    </div>
                  </div>
                  <div className="tpc-stars">★★★★★</div>
                  <p className="tpc-text">{res.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Be Our Next Success Story"
        subtitle="Join our growing family of successful medical students. Start your journey today."
        primaryLabel="Enquiry Now"
      />
    </>
  );
}
