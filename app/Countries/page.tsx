"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Highlight = {
  label: string;
  value: string;
};

type FeeRow = {
  university: string;
  fee: string;
};

type PlacementData = {
  averageSalary: string;
  topRecruiters: string[];
  placementRate: string;
  internshipOpportunities: string;
};

type StudentLife = {
  totalStudents: string;
  internationalStudents: string;
  indianStudents: string;
  studentClubs: string[];
  accommodation: string;
};

type CountryInfo = {
  title: string;
  subtitle: string;
  overviewTitle: string;
  overviewText1: string;
  overviewText2: string;
  highlights: Highlight[];
  advantages: string[];
  eligibility: string[];
  documents: string[];
  feeTable: FeeRow[];
  courses: string[];
  recognitions: string[];
  quickFacts: {
    government: string;
    private: string;
    medium: string;
    neet: string;
  };
  placementData: PlacementData;
  studentLife: StudentLife;
  flagUrl: string;
  currency: string;
  language: string;
  capital: string;
  popularCities: string[];
  relatedContent: string[];
};

const countryData: Record<string, CountryInfo> = {
  bangladesh: {
    title: "Study MBBS in Bangladesh",
    subtitle:
      "A premium course page for your Kovai Overseas website with highlights, fees, eligibility, required documents, and top college information in one modern layout.",
    overviewTitle: "MBBS in Bangladesh for Indian Students",
    overviewText1:
      "Bangladesh is often preferred by Indian students because the academic structure, food habits, climate, and teaching style feel familiar. Many students choose it for affordable tuition and English-medium medical education.",
    overviewText2:
      "It is also popular because several medical colleges are recognized by major international and national bodies, and the admission process is comparatively simple for eligible students.",
    highlights: [
      { label: "Country", value: "Bangladesh" },
      { label: "Course", value: "MBBS" },
      { label: "Duration", value: "6 Years" },
      { label: "NEET", value: "Required" },
      { label: "Medium", value: "English" },
      { label: "Eligibility", value: "60% in PCB in Senior Secondary" },
      { label: "Fees", value: "USD 32,000 to USD 40,500" },
    ],
    advantages: [
      "English medium teaching",
      "Affordable fee structure",
      "Study pattern similar to India",
      "Good infrastructure and faculty",
      "Recognized medical universities",
      "Simple admission process",
      "Suitable culture, food habits and climate for Indian students",
    ],
    eligibility: [
      "Student should be at least 17 years old",
      "60% in Physics, Chemistry and Biology in 12th standard",
      "For some reserved categories, lower qualifying percentage may apply",
      "No study gap of more than two years after 10+2",
      "Physics, Chemistry and Biology must be core subjects",
      "Passing NEET is mandatory",
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "School leaving certificate",
      "Passport size photographs",
      "No criminal certificate",
      "Medical fit certificate",
      "Birth certificate",
      "Nationality proof",
      "Guardian bank statement",
      "Attested documents as required",
    ],
    feeTable: [
      { university: "Dhaka National Medical College", fee: "USD 30,000" },
      { university: "Enam Medical College", fee: "USD 40,000" },
      { university: "Green Life Medical College, Dhaka", fee: "USD 42,000" },
    ],
    courses: [
      "General Medicine",
      "Pediatrics",
      "Dentistry",
      "Nursing",
      "Pharmaceutical",
    ],
    recognitions: [
      "Medical Council of India (MCI)",
      "World Health Organization (WHO)",
      "Bangladesh Medical and Dental Council (BMDC)",
      "Ministry of Health & Family Welfare, Bangladesh",
      "Educational Commission for Foreign Medical Graduates",
      "Ministry of Education, Bangladesh",
    ],
    quickFacts: {
      government:
        "Dhaka National Medical College, Jahurul Islam Medical College, Community Based Medical College",
      private: "Delta Medical College, Marks Medical College",
      medium: "English",
      neet: "Mandatory",
    },
    placementData: {
      averageSalary: "BDT 8,00,000 - 15,00,000 / year",
      topRecruiters: ["Apollo Hospitals", "United Hospital", "Square Hospitals", "Evercare Hospital", "Popular Medical College Hospital"],
      placementRate: "85%",
      internshipOpportunities: "Government and private hospitals across Bangladesh",
    },
    studentLife: {
      totalStudents: "50,000+",
      internationalStudents: "5,000+",
      indianStudents: "3,500+",
      studentClubs: ["Medical Students Association", "Cultural Club", "Sports Club", "Research Society"],
      accommodation: "Hostel facilities available in most medical colleges",
    },
    flagUrl: "https://flagcdn.com/w320/bd.png",
    currency: "Bangladeshi Taka (BDT)",
    language: "Bengali, English",
    capital: "Dhaka",
    popularCities: ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet"],
    relatedContent: [
      "Top 10 Medical Colleges in Bangladesh",
      "MBBS Admission Process in Bangladesh",
      "Cost of Living in Bangladesh for Students",
      "Bangladesh vs India Medical Education",
      "Scholarships for Indian Students in Bangladesh",
    ],
  },

  georgia: {
    title: "Study MBBS in Georgia",
    subtitle:
      "Explore medical education opportunities in Georgia with modern infrastructure, international teaching standards, and globally recognized universities.",
    overviewTitle: "MBBS in Georgia for Indian Students",
    overviewText1:
      "Georgia is a popular destination for students looking for affordable European-standard medical education. Many universities offer English-medium MBBS programs with modern facilities.",
    overviewText2:
      "Students often prefer Georgia for its safe environment, international exposure, and globally recognized degrees. The admission process is straightforward for eligible candidates.",
    highlights: [
      { label: "Country", value: "Georgia" },
      { label: "Course", value: "MBBS" },
      { label: "Duration", value: "6 Years" },
      { label: "NEET", value: "Required" },
      { label: "Medium", value: "English" },
      { label: "Eligibility", value: "50% in PCB in Senior Secondary" },
      { label: "Fees", value: "USD 4,000 to USD 8,000 / year" },
    ],
    advantages: [
      "European-standard education",
      "Affordable tuition fees",
      "Modern laboratories and classrooms",
      "English-medium MBBS programs",
      "Globally recognized universities",
      "Safe and student-friendly environment",
      "Good clinical exposure",
    ],
    eligibility: [
      "Student should be at least 17 years old",
      "50% in Physics, Chemistry and Biology in 12th standard",
      "NEET qualification is mandatory for Indian students",
      "Valid passport and academic certificates required",
      "Basic medical fitness required",
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Valid passport",
      "Passport size photographs",
      "Medical certificate",
      "Birth certificate",
      "Invitation letter if required",
      "Visa documents",
    ],
    feeTable: [
      { university: "Tbilisi State Medical University", fee: "USD 8,000 / year" },
      { university: "Georgian National University", fee: "USD 5,500 / year" },
      { university: "European University Georgia", fee: "USD 5,000 / year" },
    ],
    courses: [
      "General Medicine",
      "Dentistry",
      "Nursing",
      "Pharmacy",
      "Healthcare Management",
    ],
    recognitions: [
      "World Health Organization (WHO)",
      "National Medical Commission (NMC)",
      "Ministry of Education and Science of Georgia",
      "Educational Commission for Foreign Medical Graduates",
    ],
    quickFacts: {
      government: "Tbilisi State Medical University",
      private: "European University, Georgian National University",
      medium: "English",
      neet: "Mandatory",
    },
    placementData: {
      averageSalary: "GEL 30,000 - 50,000 / year",
      topRecruiters: ["Tbilisi Central Hospital", "European Medical Center", "New Hospitals Group", "International Clinics"],
      placementRate: "88%",
      internshipOpportunities: "Partner hospitals across Georgia and Europe",
    },
    studentLife: {
      totalStudents: "35,000+",
      internationalStudents: "8,000+",
      indianStudents: "2,500+",
      studentClubs: ["International Medical Students Association", "Debate Club", "Sports Federation", "Cultural Exchange Group"],
      accommodation: "University hostels and private apartments available",
    },
    flagUrl: "https://flagcdn.com/w320/ge.png",
    currency: "Georgian Lari (GEL)",
    language: "Georgian, English",
    capital: "Tbilisi",
    popularCities: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori"],
    relatedContent: [
      "Why Georgia is Best for Medical Studies",
      "Tbilisi State Medical University Review",
      "Cost of Living in Georgia",
      "Georgia vs Ukraine for MBBS",
      "Post-MBBS Career Options in Georgia",
    ],
  },

  russia: {
    title: "Study MBBS in Russia",
    subtitle:
      "Study medicine in Russia with affordable tuition, experienced faculty, and internationally recognized government medical universities.",
    overviewTitle: "MBBS in Russia for Indian Students",
    overviewText1:
      "Russia has long been a preferred destination for international medical education because of its affordable fees and strong government universities.",
    overviewText2:
      "Many universities offer English-medium options in the initial years and provide good academic infrastructure, hostel facilities, and clinical training.",
    highlights: [
      { label: "Country", value: "Russia" },
      { label: "Course", value: "MBBS" },
      { label: "Duration", value: "6 Years" },
      { label: "NEET", value: "Required" },
      { label: "Medium", value: "English / Russian" },
      { label: "Eligibility", value: "50% in PCB in Senior Secondary" },
      { label: "Fees", value: "USD 3,500 to USD 7,000 / year" },
    ],
    advantages: [
      "Top government medical universities",
      "Affordable tuition fees",
      "Strong academic reputation",
      "Good hostel and campus facilities",
      "Recognized medical degree",
      "Large international student community",
      "Wide clinical exposure",
    ],
    eligibility: [
      "Student should be at least 17 years old",
      "50% in Physics, Chemistry and Biology in 12th standard",
      "NEET qualification required for Indian students",
      "Valid passport required",
      "Basic medical fitness certificate required",
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Passport",
      "Passport size photographs",
      "Birth certificate",
      "Medical test report",
      "Visa application documents",
      "Admission letter",
    ],
    feeTable: [
      { university: "Kazan Federal University", fee: "USD 6,000 / year" },
      { university: "Bashkir State Medical University", fee: "USD 4,500 / year" },
      { university: "Crimea Federal University", fee: "USD 4,000 / year" },
    ],
    courses: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Pediatrics",
      "Nursing",
    ],
    recognitions: [
      "World Health Organization (WHO)",
      "National Medical Commission (NMC)",
      "Ministry of Science and Higher Education of Russia",
      "Educational Commission for Foreign Medical Graduates",
    ],
    quickFacts: {
      government:
        "Kazan Federal University, Bashkir State Medical University, Crimea Federal University",
      private: "Mostly government universities are preferred",
      medium: "English / Russian",
      neet: "Mandatory",
    },
    placementData: {
      averageSalary: "RUB 800,000 - 1,500,000 / year",
      topRecruiters: ["Russian Ministry of Health Hospitals", "International Medical Centers", "Research Institutes", "Private Clinics"],
      placementRate: "87%",
      internshipOpportunities: "Government hospitals and clinical centers across Russia",
    },
    studentLife: {
      totalStudents: "100,000+",
      internationalStudents: "25,000+",
      indianStudents: "8,000+",
      studentClubs: ["International Student Union", "Sports Clubs", "Cultural Society", "Medical Research Club"],
      accommodation: "University dormitories available at low cost",
    },
    flagUrl: "https://flagcdn.com/w320/ru.png",
    currency: "Russian Ruble (RUB)",
    language: "Russian, English",
    capital: "Moscow",
    popularCities: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk", "Yekaterinburg"],
    relatedContent: [
      "Top 10 Medical Universities in Russia",
      "MBBS in Russia vs Ukraine",
      "Living in Russia as an International Student",
      "Russian Medical Degree Recognition",
      "FMGE Pass Rate for Russia Graduates",
    ],
  },

  uzbekistan: {
    title: "Study MBBS in Uzbekistan",
    subtitle:
      "Choose Uzbekistan for affordable medical education, English-medium programs, and growing popularity among Indian students.",
    overviewTitle: "MBBS in Uzbekistan for Indian Students",
    overviewText1:
      "Uzbekistan is becoming a popular destination for medical students due to affordable fee structure and simpler admission processes.",
    overviewText2:
      "Students also prefer it because of decent infrastructure, hostel facilities, and growing international recognition of universities.",
    highlights: [
      { label: "Country", value: "Uzbekistan" },
      { label: "Course", value: "MBBS" },
      { label: "Duration", value: "6 Years" },
      { label: "NEET", value: "Required" },
      { label: "Medium", value: "English" },
      { label: "Eligibility", value: "50% in PCB in Senior Secondary" },
      { label: "Fees", value: "USD 3,000 to USD 6,000 / year" },
    ],
    advantages: [
      "Affordable tuition",
      "English-medium programs",
      "Simple admission process",
      "Good hostel facilities",
      "Recognized universities",
    ],
    eligibility: [
      "Minimum 17 years age",
      "50% in PCB in 12th standard",
      "NEET qualification required",
      "Valid passport",
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Passport",
      "Photographs",
      "Medical certificate",
      "Birth certificate",
    ],
    feeTable: [
      { university: "Tashkent Medical Academy", fee: "USD 4,500 / year" },
      { university: "Samarkand State Medical University", fee: "USD 3,500 / year" },
      { university: "Bukhara State Medical Institute", fee: "USD 4,000 / year" },
    ],
    courses: ["General Medicine", "Dentistry", "Pharmacy", "Nursing"],
    recognitions: [
      "WHO",
      "NMC",
      "Ministry of Higher Education Uzbekistan",
    ],
    quickFacts: {
      government: "Tashkent Medical Academy, Samarkand State Medical University",
      private: "Limited private options",
      medium: "English",
      neet: "Mandatory",
    },
    placementData: {
      averageSalary: "UZS 40,000,000 - 70,000,000 / year",
      topRecruiters: ["Tashkent International Medical Center", "Samarkand Regional Hospital", "Private Clinics", "Research Centers"],
      placementRate: "82%",
      internshipOpportunities: "Partner hospitals across Uzbekistan",
    },
    studentLife: {
      totalStudents: "30,000+",
      internationalStudents: "4,000+",
      indianStudents: "1,800+",
      studentClubs: ["Medical Students Association", "Sports Club", "Cultural Club"],
      accommodation: "University hostels available",
    },
    flagUrl: "https://flagcdn.com/w320/uz.png",
    currency: "Uzbekistani Som (UZS)",
    language: "Uzbek, Russian, English",
    capital: "Tashkent",
    popularCities: ["Tashkent", "Samarkand", "Bukhara", "Andijan", "Namangan"],
    relatedContent: [
      "MBBS in Uzbekistan Complete Guide",
      "Tashkent Medical Academy Review",
      "Cost of Living in Uzbekistan",
      "Uzbekistan vs Kyrgyzstan for MBBS",
    ],
  },

  kyrgyzstan: {
    title: "Study MBBS in Kyrgyzstan",
    subtitle:
      "Kyrgyzstan is a popular low-cost option for Indian students looking for English-medium MBBS programs abroad.",
    overviewTitle: "MBBS in Kyrgyzstan for Indian Students",
    overviewText1:
      "Kyrgyzstan is chosen by many Indian students for its affordable tuition fees and relatively simple admission process.",
    overviewText2:
      "It is known for budget-friendly education, hostel availability, and recognized universities for international students.",
    highlights: [
      { label: "Country", value: "Kyrgyzstan" },
      { label: "Course", value: "MBBS" },
      { label: "Duration", value: "5 to 6 Years" },
      { label: "NEET", value: "Required" },
      { label: "Medium", value: "English" },
      { label: "Eligibility", value: "50% in PCB in Senior Secondary" },
      { label: "Fees", value: "USD 3,000 to USD 6,000 / year" },
    ],
    advantages: [
      "Low tuition fee",
      "English-medium education",
      "Simple admission process",
      "Recognized universities",
      "Affordable living cost",
    ],
    eligibility: [
      "Minimum 17 years age",
      "50% in PCB",
      "NEET required",
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Passport",
      "Photos",
      "Medical certificate",
    ],
    feeTable: [
      { university: "Osh State University", fee: "USD 3,500 / year" },
      { university: "Jalal-Abad State University", fee: "USD 3,800 / year" },
      { university: "Kyrgyz State Medical Academy", fee: "USD 4,500 / year" },
    ],
    courses: ["General Medicine", "Dentistry", "Pharmacy", "Nursing"],
    recognitions: ["WHO", "NMC", "Ministry of Education Kyrgyzstan"],
    quickFacts: {
      government: "Kyrgyz State Medical Academy, Osh State University",
      private: "Some private institutions available",
      medium: "English",
      neet: "Mandatory",
    },
    placementData: {
      averageSalary: "KGS 300,000 - 500,000 / year",
      topRecruiters: ["Bishkek Medical Center", "Osh Regional Hospital", "International Clinics", "Private Hospitals"],
      placementRate: "83%",
      internshipOpportunities: "Government and private hospitals in Kyrgyzstan",
    },
    studentLife: {
      totalStudents: "25,000+",
      internationalStudents: "6,000+",
      indianStudents: "2,500+",
      studentClubs: ["International Student Council", "Sports Club", "Cultural Association"],
      accommodation: "University hostels available",
    },
    flagUrl: "https://flagcdn.com/w320/kg.png",
    currency: "Kyrgyzstani Som (KGS)",
    language: "Kyrgyz, Russian, English",
    capital: "Bishkek",
    popularCities: ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok"],
    relatedContent: [
      "MBBS in Kyrgyzstan vs Kazakhstan",
      "Osh State University Complete Guide",
      "Living in Bishkek as a Student",
      "FMGE Coaching for Kyrgyzstan Graduates",
    ],
  },

  kazakhstan: {
    title: "Study MBBS in Kazakhstan",
    subtitle:
      "Get quality and affordable medical education in Kazakhstan with recognized universities and English-medium study options.",
    overviewTitle: "MBBS in Kazakhstan for Indian Students",
    overviewText1:
      "Kazakhstan is known for cost-effective medical education and universities that welcome international students.",
    overviewText2:
      "It offers recognized degrees, decent campus facilities, and relatively low living expenses.",
    highlights: [
      { label: "Country", value: "Kazakhstan" },
      { label: "Course", value: "MBBS" },
      { label: "Duration", value: "5 to 6 Years" },
      { label: "NEET", value: "Required" },
      { label: "Medium", value: "English" },
      { label: "Eligibility", value: "50% in PCB in Senior Secondary" },
      { label: "Fees", value: "USD 3,500 to USD 6,000 / year" },
    ],
    advantages: [
      "Affordable medical education",
      "International student support",
      "Recognized universities",
      "Low living cost",
      "English-medium options",
    ],
    eligibility: [
      "Minimum 17 years age",
      "50% in PCB in 12th standard",
      "NEET qualification required",
      "Valid passport required",
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Passport",
      "Photos",
      "Medical certificate",
      "Birth certificate",
    ],
    feeTable: [
      { university: "Kazakh National Medical University", fee: "USD 5,500 / year" },
      { university: "Astana Medical University", fee: "USD 4,500 / year" },
      { university: "South Kazakhstan Medical Academy", fee: "USD 4,000 / year" },
    ],
    courses: ["General Medicine", "Dentistry", "Pharmacy", "Nursing"],
    recognitions: ["WHO", "NMC", "Ministry of Education Kazakhstan"],
    quickFacts: {
      government:
        "Kazakh National Medical University, Astana Medical University",
      private: "South Kazakhstan Medical Academy",
      medium: "English",
      neet: "Mandatory",
    },
    placementData: {
      averageSalary: "KZT 4,000,000 - 7,000,000 / year",
      topRecruiters: ["National Medical Center", "Astana International Hospital", "Almaty Medical Centers", "Private Clinics"],
      placementRate: "86%",
      internshipOpportunities: "Major hospitals and clinics across Kazakhstan",
    },
    studentLife: {
      totalStudents: "45,000+",
      internationalStudents: "7,000+",
      indianStudents: "2,000+",
      studentClubs: ["Medical Students Society", "International Club", "Sports Federation", "Cultural Group"],
      accommodation: "Modern hostels and private accommodations",
    },
    flagUrl: "https://flagcdn.com/w320/kz.png",
    currency: "Kazakhstani Tenge (KZT)",
    language: "Kazakh, Russian, English",
    capital: "Astana (Nur-Sultan)",
    popularCities: ["Almaty", "Astana", "Shymkent", "Karaganda", "Aktobe"],
    relatedContent: [
      "Top Medical Universities in Kazakhstan",
      "Kazakhstan vs Russia for MBBS",
      "Cost of Living in Almaty",
      "Career Opportunities After MBBS in Kazakhstan",
    ],
  },
};

function getCountryName(slug: string) {
  return slug
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}

export default function CountriesPage() {
  const searchParams = useSearchParams();
  const country = (searchParams.get("country") || "bangladesh").toLowerCase();
  const data = countryData[country] || countryData["bangladesh"];
  const countryName = getCountryName(country);

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-800">
      {/* Hero Section with Flag */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1e3d] via-[#12315f] to-[#0f4d73] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 overflow-hidden rounded-full border-2 border-white/30 shadow-lg">
                  <img
  src={data.flagUrl}
  alt={`${countryName} flag`}
  className="h-full w-full object-cover"
  style={{ width: 48, height: 48 }}
/>
                </div>
                <span className="inline-flex rounded-full border border-[#c9a84c]/40 bg-white/10 px-4 py-1 text-sm font-medium text-[#f0d889]">
                  Study Abroad • Medical Education
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                {data.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                {data.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#c9a84c] px-6 py-3 font-semibold text-[#0b1e3d] transition hover:scale-[1.02]"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <h2 className="mb-5 text-2xl font-bold text-white">
                {countryName} Highlights
              </h2>
              <div className="grid gap-3">
                {data.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white/75">
                      {item.label}
                    </span>
                    <span className="text-right text-sm font-semibold text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            {/* Overview Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                {data.overviewTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {data.overviewText1}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {data.overviewText2}
              </p>
            </div>

            {/* Why Study Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                Why Study in {countryName}?
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {data.advantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-1 text-[#c9a84c]">✦</span>
                      <p className="font-medium leading-7 text-slate-700">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement & Career Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                📊 Placement & Career Opportunities
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-5">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm text-slate-500">Average Salary</div>
                  <div className="mt-1 text-lg font-bold text-emerald-700">{data.placementData.averageSalary}</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="text-sm text-slate-500">Placement Rate</div>
                  <div className="mt-1 text-lg font-bold text-blue-700">{data.placementData.placementRate}</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="font-semibold text-slate-800 mb-3">Top Recruiters:</div>
                <div className="flex flex-wrap gap-2">
                  {data.placementData.topRecruiters.map((recruiter) => (
                    <span key={recruiter} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                      {recruiter}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-amber-50">
                <div className="font-semibold text-slate-800">🎯 Internship Opportunities:</div>
                <p className="mt-1 text-sm text-slate-600">{data.placementData.internshipOpportunities}</p>
              </div>
            </div>

            {/* Student Life Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                🎓 Student Life & Community
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-purple-50 p-4 text-center">
                  <div className="text-2xl">👨‍🎓</div>
                  <div className="text-xl font-bold text-purple-700">{data.studentLife.totalStudents}</div>
                  <div className="text-xs text-slate-500">Total Students</div>
                </div>
                <div className="rounded-2xl bg-pink-50 p-4 text-center">
                  <div className="text-2xl">🌏</div>
                  <div className="text-xl font-bold text-pink-700">{data.studentLife.internationalStudents}</div>
                  <div className="text-xs text-slate-500">International Students</div>
                </div>
                <div className="rounded-2xl bg-orange-50 p-4 text-center">
                  <div className="text-2xl">🇮🇳</div>
                  <div className="text-xl font-bold text-orange-700">{data.studentLife.indianStudents}</div>
                  <div className="text-xs text-slate-500">Indian Students</div>
                </div>
                <div className="rounded-2xl bg-green-50 p-4 text-center">
                  <div className="text-2xl">🏠</div>
                  <div className="text-sm font-bold text-green-700">{data.studentLife.accommodation}</div>
                  <div className="text-xs text-slate-500">Accommodation</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="font-semibold text-slate-800 mb-2">Student Clubs & Activities:</div>
                <div className="flex flex-wrap gap-2">
                  {data.studentLife.studentClubs.map((club) => (
                    <span key={club} className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700">
                      {club}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Country Information Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                ℹ️ About {countryName}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <div className="text-xs text-slate-400">Currency</div>
                    <div className="font-semibold">{data.currency}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <div className="text-xs text-slate-400">Languages</div>
                    <div className="font-semibold">{data.language}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <div className="text-xs text-slate-400">Capital</div>
                    <div className="font-semibold">{data.capital}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <span className="text-2xl">🏙️</span>
                  <div>
                    <div className="text-xs text-slate-400">Popular Cities</div>
                    <div className="font-semibold text-sm">{data.popularCities.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                ✅ Eligibility Criteria
              </h2>
              <div className="mt-6 space-y-4">
                {data.eligibility.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-4"
                  >
                    <span className="mt-1 text-[#0f9d7a]">✔</span>
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Section */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                📄 Required Documents
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {data.documents.map((doc) => (
                  <div
                    key={doc}
                    className="rounded-2xl border border-slate-200 bg-[#fcfcfd] p-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-1 text-[#2d8cff]">📄</span>
                      <p className="leading-7 text-slate-700">{doc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee Structure */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                💰 Fee Structure
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-[1fr_180px] bg-[#0b1e3d] px-5 py-4 text-sm font-semibold text-white">
                  <div>University</div>
                  <div>Tuition Fee</div>
                </div>
                {data.feeTable.map((row, idx) => (
                  <div
                    key={row.university}
                    className={`grid grid-cols-[1fr_180px] px-5 py-4 text-sm ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <div className="font-medium text-slate-800">
                      {row.university}
                    </div>
                    <div className="font-semibold text-[#0f7e6f]">
                      {row.fee}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses Offered */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                📚 Courses Offered
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {data.courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full bg-[#eaf4ff] px-4 py-2 text-sm font-semibold text-[#1f5f99]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                🏛️ Recognition & Accreditation
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {data.recognitions.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-1 text-[#c9a84c]">🏛</span>
                      <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Content */}
            <div className="rounded-[28px] bg-gradient-to-r from-indigo-50 to-blue-50 p-8">
              <h2 className="text-3xl font-bold text-[#0b1e3d]">
                📖 Related Content
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {data.relatedContent.map((content) => (
                  <span
                    key={content}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm"
                  >
                    {content}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h3 className="text-2xl font-bold text-[#0b1e3d]">
                Top Quick Facts
              </h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-[#f7f9fc] p-4">
                  <div className="text-sm text-slate-500">Top Government Names</div>
                  <div className="mt-2 font-semibold text-slate-800">
                    {data.quickFacts.government}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#f7f9fc] p-4">
                  <div className="text-sm text-slate-500">Top Private Names</div>
                  <div className="mt-2 font-semibold text-slate-800">
                    {data.quickFacts.private}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#f7f9fc] p-4">
                  <div className="text-sm text-slate-500">Medium</div>
                  <div className="mt-2 font-semibold text-slate-800">
                    {data.quickFacts.medium}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#f7f9fc] p-4">
                  <div className="text-sm text-slate-500">NEET</div>
                  <div className="mt-2 font-semibold text-slate-800">
                    {data.quickFacts.neet}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-[#0b1e3d] to-[#12315f] p-6 text-white shadow-[0_12px_40px_rgba(15,23,42,.14)]">
              <h3 className="text-2xl font-bold">Need Admission Help?</h3>
              <p className="mt-3 leading-7 text-white/80">
                Get personalized counseling for university selection, application process, and scholarship opportunities.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#c9a84c] px-5 py-3 text-center font-semibold text-[#0b1e3d] transition hover:bg-[#d4b85c]"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Request Callback
                </Link>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.08)]">
              <h3 className="text-xl font-bold text-[#0b1e3d]">📞 Quick Contact</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📱</span>
                  <span className="text-sm text-slate-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <span className="text-sm text-slate-600">info@kovaioverseas.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <span className="text-sm text-slate-600">WhatsApp Available 24/7</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}