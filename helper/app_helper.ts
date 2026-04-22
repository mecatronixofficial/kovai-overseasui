import React from "react";
import { IconsHelper } from "./icon_helper";
import img_helper from "./img_helper";


export const navlinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "#", label: "Courses" },
  { href: "#", label: "Countries" },
  { href: "#", label: "Scholarships" },
  { href: "/hostel&foods", label: "Hostel" },
  { href: "/contact", label: "Contact Us" },
];

export const services = [
  {
    num: "01",
    icon: IconsHelper.Cap,
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
    icon: IconsHelper.Search,
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
    icon: IconsHelper.Clipboard,
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
    icon: IconsHelper.Visa,
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

export const trustCards = [
  {
    icon: IconsHelper.team,
    iconCls: "trust-icon-gold",
    title: "Experienced Counselling Team",
    desc: "Our counsellors have each helped hundreds of students navigate international medical admissions with clarity and confidence.",
  },
  {
    icon: IconsHelper.Search,
    iconCls: "trust-icon-sky",
    title: "Transparent at Every Step",
    desc: "No hidden fees. No false promises. We give you the complete picture so you can make the best decision for your future.",
  },
  {
    icon: IconsHelper.university,
    iconCls: "trust-icon-gold",
    title: "Strong University Partnerships",
    desc: "We only partner with universities that meet our strict quality standards — all recognized by WHO and NMC.",
  },
  {
    icon: IconsHelper.chatbox,
    iconCls: "trust-icon-sky",
    title: "Support That Never Stops",
    desc: "Our relationship doesn't end when you board the flight. We remain your point of contact for your entire MBBS journey.",
  },
  {
    icon: IconsHelper.Clipboard,
    iconCls: "trust-icon-gold",
    title: "Zero Documentation Stress",
    desc: "We handle the paperwork. From application forms to visa documents, we manage every detail with meticulous care.",
  },
  {
    icon: IconsHelper.Visa,
    iconCls: "trust-icon-sky",
    title: "95%+ Visa Success Rate",
    desc: "Our deep expertise in student visa applications ensures a smooth, successful process for the vast majority of our students.",
  },
];

export const values = [
  {
    icon: IconsHelper.Search,
    title: "Transparency",
    accent: "linear-gradient(90deg,var(--gold),var(--gold2))",
    desc: "No hidden fees, no false promises. We give you the complete picture so you can make the best decision for your future.",
  },
  {
    icon: IconsHelper.handshake,
    title: "Integrity",
    accent: "linear-gradient(90deg,var(--sky),var(--sky2)) ",
    desc: "We only recommend universities that we genuinely believe will serve your best interests and career goals.",
  },
  {
    icon: IconsHelper.heart,
    title: "Student-First",
    accent: "linear-gradient(90deg,var(--gold),var(--gold2))",
    desc: "Every decision we make is guided by one question: what is best for our students, both now and in the long run?",
  },
  {
    icon: IconsHelper.World,
    title: "Excellence",
    accent: "linear-gradient(90deg,var(--sky),var(--sky2))",
    desc: "From first consultation to arrival on campus, we deliver the highest standard of service at every stage.",
  },
];

export const docGroups = [
  {
    icon: IconsHelper.Clipboard,
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
    icon: IconsHelper.passport,
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
    icon: IconsHelper.Clipboard,
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

export const hostelFeatures = [
  {
    icon: IconsHelper.bed,
    title: "Furnished Rooms",
    desc: "Fully furnished single and shared rooms with study desks, wardrobes, and comfortable beds.",
  },
  {
    icon: IconsHelper.signal,
    title: "High-Speed Wi-Fi",
    desc: "Dedicated fibre internet throughout — ideal for online classes and video calls home.",
  },
  {
    icon: IconsHelper.lock,
    title: "24/7 Security",
    desc: "Round-the-clock CCTV, key-card entry, and an on-site warden for complete peace of mind.",
  },
  {
    icon: IconsHelper.housekeeping,
    title: "Laundry & Housekeeping",
    desc: "Weekly housekeeping service and laundry facilities within the hostel premises.",
  },
];

export const testimonials = [
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

 export const feature = [
    {
      icon: IconsHelper.AwardIcon,
      title: "18+ Years Experience",
      sub: "Trusted consultancy",
    },
    {
      icon: IconsHelper.Cap,
      title: "University Partnerships",
      sub: "Verified institutions",
    },
    {
      icon: IconsHelper.Clipboard,
      title: "Complete Support",
      sub: "End-to-end guidance",
    },
    {
      icon: IconsHelper.Money,
      title: "Affordable Fees",
      sub: "Value for money",
    },
    {
      icon: IconsHelper.Visa,
      title: "Visa Assistance",
      sub: "High success rate",
    },
  ];

  export const choose = [
    {
      icon: IconsHelper.AwardIcon,
      title: "18+ Years Experience",
      sub: "Decades of expertise in international medical education consultancy with proven track record.",
    },
    {
      icon: IconsHelper.Handshake,
      title: "Trusted University Partnerships",
      sub: "Official partnerships with recognized, WHO-approved medical universities in Uzbekistan.",
    },
    {
      icon: IconsHelper.Clipboard,
      title: "Complete Admission Support",
      sub: "From documentation to admission letter — we handle every step of your application.",
    },
    {
      icon: IconsHelper.Money,
      title: "Affordable & Transparent Process",
      sub: "Quality MBBS education at a fraction of Indian private college costs.",
    },
    {
      icon: IconsHelper.Visa,
      title: "Student Visa Assistance",
      sub: "Expert visa guidance with high approval rates and complete documentation support.",
    },
    {
      icon: IconsHelper.Phone,
      title: "Continuous Student Support",
      sub: "We stay with you even after you reach your university — our support never stops.",
    },
    {
      icon: IconsHelper.Cap,
      title: "Expert Career Guidance",
      sub: "Our experienced advisors help students choose the right course and university.",
    },
    {
      icon: IconsHelper.File,
      title: "End-to-End Admission Assistance",
      sub: "We guide students through the entire admission process including application and documentation.",
    },
  ];

  export   const subservices = [
    {
      cls: "icon-box-gold",
      icon: IconsHelper.Cap,
      title: "Admission Assistance (All Courses)",
      desc: "Complete guidance through the university application and admission process.",
    },
    {
      cls: "icon-box-sky",
      icon: IconsHelper.Search,
      title: "University & Course Selection Guidance",
      desc: "Personalised advice on choosing the right university for your profile and budget.",
    },
    {
      cls: "icon-box-navy",
      icon: IconsHelper.File,
      title: "Documentation Support",
      desc: "Help preparing and verifying all required academic and personal documents.",
    },
{
      cls: "icon-box-gold",
      icon: IconsHelper.Visa,
      title: "Visa & Travel Assistance",
      desc: "Visa guidance, travel planning, and accommodation arrangements before you leave.",
    },

    {
      cls: "icon-box-gold",
      icon: IconsHelper.passport,
      title: "Pre-Departure Support",
      desc: "We guide you with travel planning, documentation, and essential tips to ensure a smooth and stress-free departure.",
    },
  ];

export  const testimonial = [
    {
      icon: IconsHelper.Student,
      name: "Priya Sharma",
      university: "MBBS Student · Zarmed University",
      review:
        '"Kovai Overseas made my dream of studying MBBS abroad a reality. Their guidance through the entire process was exceptional. I am now proudly studying at Zarmed University!"',
    },
    {
      icon: IconsHelper.Student,
      name: "Arjun Krishnamurthy",
      university: "MBBS Student · Zarmed University",
      review:
        '"The team was always available to answer my questions. The visa process was smooth and the pre-departure support gave me so much confidence before leaving India."',
    },
    {
      icon: IconsHelper.Student,
      name: "Meenakshi Rajan",
      university: "MBBS Student · Zarmed University",
      review:
        '"18 years of experience shows in every interaction. Kovai Overseas is transparent, professional, and genuinely cares about student success. Highly recommended!"',
    },
    {
      icon: IconsHelper.Student,
      name: "Priya Sharma",
      university: "MBBS Student · Zarmed University",
      review:
        '"Kovai Overseas made my dream of studying MBBS abroad a reality. Their guidance through the entire process was exceptional. I am now proudly studying at Zarmed University!"',
    },
    {
      icon: IconsHelper.Student,
      name: "Arjun Krishnamurthy",
      university: "MBBS Student · Zarmed University",
      review:
        '"The team was always available to answer my questions. The visa process was smooth and the pre-departure support gave me so much confidence before leaving India."',
    },
    {
      icon: IconsHelper.Student,
      name: "Meenakshi Rajan",
      university: "MBBS Student · Zarmed University",
      review:
        '"18 years of experience shows in every interaction. Kovai Overseas is transparent, professional, and genuinely cares about student success. Highly recommended!"',
    },
    {
      icon: IconsHelper.Student,
      name: "Priya Sharma",
      university: "MBBS Student · Zarmed University",
      review:
        '"Kovai Overseas made my dream of studying MBBS abroad a reality. Their guidance through the entire process was exceptional. I am now proudly studying at Zarmed University!"',
    },
    {
      icon: IconsHelper.Student,
      name: "Arjun Krishnamurthy",
      university: "MBBS Student · Zarmed University",
      review:
        '"The team was always available to answer my questions. The visa process was smooth and the pre-departure support gave me so much confidence before leaving India."',
    },
    {
      icon: IconsHelper.Student,
      name: "Meenakshi Rajan",
      university: "MBBS Student · Zarmed University",
      review:
        '"18 years of experience shows in every interaction. Kovai Overseas is transparent, professional, and genuinely cares about student success. Highly recommended!"',
    },
  ];

  export  const timelineItems = [
  {
    year: "2006",
    title: "Founded in Salem",
    desc: "Started from a small office with one mission: help Tamil Nadu's medical aspirants reach the world.",
    icon: IconsHelper.house,
    side: "left",
  },
  {
    year: "2010",
    title: "First 100 Students",
    desc: "Crossed a milestone — 100 students successfully placed in top medical universities across Russia and Ukraine.",
    icon: IconsHelper.Student,
    side: "right",
  },
  {
    year: "2014",
    title: "Expanded to Coimbatore",
    desc: "Opened our flagship Coimbatore office to serve the growing demand from across Tamil Nadu.",
    icon: IconsHelper.Location,
    side: "left",
  },
  {
    year: "2018",
    title: "500+ Families Trusted Us",
    desc: "Half a thousand families chose Kovai Overseas — a testament to our 95% visa success rate.",
   icon: IconsHelper.Users,
    side: "right",
  },
  {
    year: "2021",
    title: "New University Partners",
    desc: "Signed partnerships with WHO-recognised universities in Uzbekistan, Kyrgyzstan and Kazakhstan.",
    icon: IconsHelper.World,
    side: "left",
  },
  {
    year: "2024",
    title: "18 Years Strong",
    desc: "Today we're Tamil Nadu's most trusted MBBS abroad consultancy, still driven by the same founding mission.",
    icon: IconsHelper.Trophy,
    side: "right",
  },
];

  export  const advantages = [
    {
                icon: IconsHelper.World,
                title: "English Medium",
                desc: "No language barrier. Full curriculum and exams in English.",
              },
              {
                icon: IconsHelper.Money,

                title: "Affordable Fees",
                desc: "Low tuition costs compared to private Indian colleges.",
              },
              {
                icon: IconsHelper.Globe,
                title: "Global Network",
                desc: "Diverse student body from over 15+ countries.",
              },
              {
                icon: IconsHelper.Microscope,
                title: "Smart Labs",
                desc: "Advanced simulation labs and modern research centers.",
              },
              {
                icon: IconsHelper.Teacher,
                title: "Top Faculty",
                desc: "Mentored by doctors with global clinical experience.",
              },
              {
                icon: IconsHelper.Trophy,
                title: "WHO & NMC",
                desc: "Fully eligible for FMGE/NExT screening in India.",
              },
  ];