import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import PageHero from "../common/PageHero";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";

export const metadata: Metadata = {
  title: "Student Testimonials – Kovai Overseas",
  description:
    "Real stories from students who studied MBBS abroad through Kovai Overseas.",
};

const testimonials = [
  {
    avatar: IconsHelper.Student,
    name: "Priya Sharma",
    uni: "Zarmed University, Uzbekistan",
    year: "Batch 2022 · MBBS 3rd Year",
    text: '"Kovai Overseas made my dream of studying MBBS abroad a reality. Their guidance through the entire process was exceptional. From the very first consultation to the day I arrived at Zarmed University, they were with me every step of the way!"',
  },
  {
    avatar: IconsHelper.Student,
    name: "Arjun Krishnamurthy",
    uni: "Zarmed University, Uzbekistan",
    year: "Batch 2021 · MBBS 4th Year",
    text: '"The team was always available to answer my questions, even at odd hours before my visa interview. The visa process was smooth and the pre-departure support gave me so much confidence before leaving India."',
  },
  {
    avatar: IconsHelper.Student,
    name: "Meenakshi Rajan",
    uni: "Zarmed University, Uzbekistan",
    year: "Batch 2023 · MBBS 2nd Year",
    text: '"18 years of experience shows in every interaction. Kovai Overseas is transparent, professional, and genuinely cares about student success. They never made false promises and were always honest about the process."',
  },
  {
    avatar: IconsHelper.Student,
    name: "Karthik Murugan",
    uni: "Zarmed University, Uzbekistan",
    year: "Batch 2022 · MBBS 3rd Year",
    text: '"I was nervous about studying abroad but Kovai Overseas walked me through every step. The documentation support was thorough and the pre-departure orientation prepared me perfectly. Best decision of my life!"',
  },
  {
    avatar: IconsHelper.Student,
    name: "Divya Anbalagan",
    uni: "Zarmed University, Uzbekistan",
    year: "Batch 2021 · MBBS 4th Year",
    text: '"My parents were skeptical about MBBS abroad but the Kovai Overseas team personally addressed all their concerns. The transparency and professionalism convinced my family. Now I\'m in my 4th year and loving every moment."',
  },
  {
    avatar: IconsHelper.Student,
    name: "Selvakumar Palani",
    uni: "Zarmed University, Uzbekistan",
    year: "Batch 2020 · MBBS Intern",
    text: '"Now in my internship year, I look back at how smoothly Kovai Overseas handled everything. The entire journey — from application to graduation — was supported beautifully. I\'m preparing for FMGE now and feel fully confident."',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge="Student Stories"
        title="Student Testimonials"
        highlight="Testimonials"
        subtitle="Real stories from students who achieved their dream of studying MBBS abroad through Kovai Overseas."
        image={img_helper.testimonials.testimonialshomepage.src}
      />

      <section className="section">
        <div className="container">
          <div className="testi-page-grid">
            {testimonials.map((t) => {
              const Icon = t.avatar;
              return (
                <div key={t.name} className="testi-page-card">
                  <div className="tpc-top">
                    <div className="tpc-avatar">
                      <Icon className="text-white" />
                    </div>
                    <div className="tpc-info">
                      <h3>{t.name}</h3>
                      <div className="tpc-uni">{t.uni}</div>
                      <div className="tpc-year">{t.year}</div>
                    </div>
                  </div>
                  <div className="tpc-stars">★★★★★</div>
                  <p className="tpc-text">{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Be Our Next Success Story"
        subtitle="Join our growing family of successful medical students. Start your journey today."
        primaryLabel="Apply Now"
      />
    </>
  );
}
