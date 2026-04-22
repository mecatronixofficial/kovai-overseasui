"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type University = {
  id: number;
  name: string;
  country: string;
  studyArea: string;
  availableCourses: string[];
  location: string;
  intakes: string;
  annualTuitionFee: string;
  duration: string;
  logo: string;
  established?: number;
  studentsCount?: number;
  placementRate?: number;
  ranking?: string;
  accreditation?: string;
};

type CourseCategory = {
  category: string;
  items: {
    label: string;
    href: string;
  }[];
};

type CourseInfo = {
  title: string;
  category: string;
  description: string;
  duration: string;
  eligibility: string;
  averageFee: string;
  studentsStudied: string;
  studentsPlaced: string;
  successRate: string;
  careerOptions: string[];
  relatedContents: string[];
  icon: string;
  imageUrl: string;
  topCountries: string[];
  jobRoles: string[];
  topUniversities?: string[];
  entranceExams?: string[];
};

const streams = [
  "Medical",
  "Engineering",
  "Business and Management",
  "Architecture",
  "Commerce",
  "Aviation",
  "Hotel Management",
  "Humanities",
  "Journalism, Media and Mass Comm",
  "Law",
  "Languages and Teaching",
  "Arts and Design",
  "Social Sciences",
  "Agriculture and Forestry",
  "Computer Science and IT",
];

const courses: CourseCategory[] = [
  {
    category: "Medical",
    items: [
      { label: "MBBS", href: "/CoursesPage?course=MBBS" },
      { label: "BDS", href: "/CoursesPage?course=BDS" },
      { label: "Nursing", href: "/CoursesPage?course=Nursing" },
      { label: "Pharmacy", href: "/CoursesPage?course=Pharmacy" },
      { label: "Allied Health Sciences", href: "/CoursesPage?course=Allied%20Health%20Sciences" },
    ],
  },
  {
    category: "Engineering",
    items: [
      { label: "Computer Science Engineering", href: "/CoursesPage?course=Computer%20Science%20Engineering" },
      { label: "Electronics & Communication Engineering", href: "/CoursesPage?course=Electronics%20%26%20Communication%20Engineering" },
      { label: "Mechanical Engineering", href: "/CoursesPage?course=Mechanical%20Engineering" },
      { label: "Civil Engineering", href: "/CoursesPage?course=Civil%20Engineering" },
      { label: "Data Science", href: "/CoursesPage?course=Data%20Science" },
    ],
  },
  {
    category: "Business and Management",
    items: [
      { label: "BBA", href: "/CoursesPage?course=BBA" },
      { label: "MBA", href: "/CoursesPage?course=MBA" },
      { label: "Business Management", href: "/CoursesPage?course=Business%20Management" },
    ],
  },
  {
    category: "Architecture",
    items: [{ label: "B.Arch", href: "/CoursesPage?course=B.Arch" }],
  },
  {
    category: "Commerce",
    items: [
      { label: "B.Com", href: "/CoursesPage?course=B.Com" },
      { label: "M.Com", href: "/CoursesPage?course=M.Com" },
    ],
  },
  {
    category: "Aviation",
    items: [
      { label: "Aviation Management", href: "/CoursesPage?course=Aviation%20Management" },
      { label: "Pilot Training", href: "/CoursesPage?course=Pilot%20Training" },
    ],
  },
  {
    category: "Hotel Management",
    items: [
      { label: "Hotel Management", href: "/CoursesPage?course=Hotel%20Management" },
      { label: "Hospitality Management", href: "/CoursesPage?course=Hospitality%20Management" },
    ],
  },
  {
    category: "Humanities",
    items: [
      { label: "History", href: "/CoursesPage?course=History" },
      { label: "Political Science", href: "/CoursesPage?course=Political%20Science" },
    ],
  },
  {
    category: "Journalism, Media and Mass Comm",
    items: [
      { label: "Journalism", href: "/CoursesPage?course=Journalism" },
      { label: "Mass Communication", href: "/CoursesPage?course=Mass%20Communication" },
    ],
  },
  {
    category: "Law",
    items: [
      { label: "LLB", href: "/CoursesPage?course=LLB" },
      { label: "LLM", href: "/CoursesPage?course=LLM" },
    ],
  },
  {
    category: "Languages and Teaching",
    items: [
      { label: "English Language", href: "/CoursesPage?course=English%20Language" },
      { label: "Teaching", href: "/CoursesPage?course=Teaching" },
    ],
  },
  {
    category: "Arts and Design",
    items: [
      { label: "Fashion Design", href: "/CoursesPage?course=Fashion%20Design" },
      { label: "Interior Design", href: "/CoursesPage?course=Interior%20Design" },
    ],
  },
  {
    category: "Social Sciences",
    items: [
      { label: "Sociology", href: "/CoursesPage?course=Sociology" },
      { label: "Psychology", href: "/CoursesPage?course=Psychology" },
    ],
  },
  {
    category: "Agriculture and Forestry",
    items: [
      { label: "Agriculture", href: "/CoursesPage?course=Agriculture" },
      { label: "Forestry", href: "/CoursesPage?course=Forestry" },
    ],
  },
  {
    category: "Computer Science and IT",
    items: [
      { label: "Computer Science", href: "/CoursesPage?course=Computer%20Science" },
      { label: "Information Technology", href: "/CoursesPage?course=Information%20Technology" },
      { label: "Data Science", href: "/CoursesPage?course=Data%20Science" },
    ],
  },
];

const universities: University[] = [
  {
    id: 1,
    name: "GISMA Business School",
    country: "Germany",
    studyArea: "Social Sciences",
    availableCourses: ["Anthropology", "Archaeology", "Sociology", "Psychology"],
    location: "Dessauer Str. 3-5 10963 Berlin, Germany",
    intakes: "January, May, September",
    annualTuitionFee: "€ 12,000 / year",
    duration: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/240px-HD_transparent_picture.png",
    established: 1999,
    studentsCount: 2450,
    placementRate: 86,
    ranking: "Top 100 Business Schools Europe",
    accreditation: "AACSB, AMBA",
  },
  {
    id: 2,
    name: "Ulster University",
    country: "UK",
    studyArea: "Social Sciences",
    availableCourses: ["Anthropology", "Archaeology", "Psychology"],
    location: "Coleraine, United Kingdom",
    intakes: "September",
    annualTuitionFee: "£ 14,500 / year",
    duration: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/240px-HD_transparent_picture.png",
    established: 1968,
    studentsCount: 18750,
    placementRate: 87,
    ranking: "UK Top 50 University",
    accreditation: "QAA",
  },
  {
    id: 3,
    name: "University of Debrecen",
    country: "Hungary",
    studyArea: "Medical",
    availableCourses: ["MBBS", "BDS", "Nursing", "Pharmacy", "Allied Health Sciences"],
    location: "Debrecen, Hungary",
    intakes: "February, September",
    annualTuitionFee: "$ 16,900 / year",
    duration: "6 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/240px-HD_transparent_picture.png",
    established: 1538,
    studentsCount: 21500,
    placementRate: 92,
    ranking: "Top Medical University in Hungary",
    accreditation: "WHO, MCI, ECFMG",
  },
  {
    id: 4,
    name: "Technical University of Georgia",
    country: "Georgia",
    studyArea: "Engineering",
    availableCourses: [
      "Computer Science Engineering",
      "Electronics & Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Data Science",
    ],
    location: "Tbilisi, Georgia",
    intakes: "March, October",
    annualTuitionFee: "$ 4,500 / year",
    duration: "4 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/240px-HD_transparent_picture.png",
    established: 1922,
    studentsCount: 12500,
    placementRate: 86,
    ranking: "Top Engineering University Caucasus Region",
    accreditation: "ABET",
  },
  {
    id: 5,
    name: "Management Institute of Europe",
    country: "France",
    studyArea: "Business and Management",
    availableCourses: ["BBA", "MBA", "Business Management"],
    location: "Paris, France",
    intakes: "January, September",
    annualTuitionFee: "€ 10,500 / year",
    duration: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/240px-HD_transparent_picture.png",
    established: 1985,
    studentsCount: 8900,
    placementRate: 91,
    ranking: "Top 5 Business Schools France",
    accreditation: "EQUIS, AACSB",
  },
  {
    id: 6,
    name: "International School of Commerce",
    country: "Malaysia",
    studyArea: "Commerce",
    availableCourses: ["B.Com", "M.Com"],
    location: "Kuala Lumpur, Malaysia",
    intakes: "January, July",
    annualTuitionFee: "$ 5,000 / year",
    duration: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/240px-HD_transparent_picture.png",
    established: 1995,
    studentsCount: 5600,
    placementRate: 88,
    ranking: "Top Commerce School Southeast Asia",
    accreditation: "ACBSP",
  },
];

const courseDetails: Record<string, CourseInfo> = {
  MBBS: {
    title: "MBBS",
    category: "Medical",
    description:
      "MBBS is one of the most preferred medical programs for students who want to build a career as a doctor. This course focuses on medical science, clinical practice, diagnosis, patient care, and hospital training. The program includes theoretical knowledge and practical training in hospitals. Students learn anatomy, physiology, biochemistry, pharmacology, pathology, microbiology, and clinical rotations in various specialties.",
    duration: "5 to 6 Years",
    eligibility: "50% to 60% in PCB + NEET Qualification",
    averageFee: "$ 4,000 to $ 18,000 / year",
    studentsStudied: "12,500+",
    studentsPlaced: "9,800+",
    successRate: "92%",
    careerOptions: ["Doctor", "Medical Officer", "Surgeon", "Researcher", "Hospital Consultant", "General Physician"],
    relatedContents: [
      "Top MBBS countries for Indian students",
      "How to apply for MBBS abroad",
      "MBBS eligibility and NEET guide",
      "Best universities for MBBS",
      "MBBS vs MD - Key Differences",
    ],
    icon: "🩺",
    imageUrl: "https://images.unsplash.com/photo-1530026409886-3bb97453a3b3?w=800&h=400&fit=crop",
    topCountries: ["Russia", "Ukraine", "Philippines", "Georgia", "Kyrgyzstan"],
    jobRoles: ["Cardiologist", "Neurologist", "Pediatrician", "Orthopedic Surgeon", "Radiologist", "Pathologist"],
    topUniversities: ["University of Debrecen", "University of Georgia", "Kazan Federal University"],
    entranceExams: ["NEET", "MCAT", "UCAT"],
  },
  BDS: {
    title: "BDS",
    category: "Medical",
    description:
      "BDS is focused on dentistry, oral healthcare, dental surgery, and patient treatment. It is suitable for students interested in becoming professional dentists. The course covers oral anatomy, pathology, radiology, and clinical dental procedures.",
    duration: "4 to 5 Years",
    eligibility: "PCB in 12th standard + entrance requirements",
    averageFee: "$ 3,000 to $ 12,000 / year",
    studentsStudied: "4,800+",
    studentsPlaced: "3,900+",
    successRate: "88%",
    careerOptions: ["Dentist", "Dental Surgeon", "Orthodontist Assistant", "Dental Consultant", "Oral Pathologist"],
    relatedContents: [
      "Top BDS colleges abroad",
      "Dental education overview",
      "BDS admission requirements",
      "Career after BDS",
      "Dental specialization options",
    ],
    icon: "🦷",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37d09?w=800&h=400&fit=crop",
    topCountries: ["India", "Philippines", "Ukraine", "Georgia", "Poland"],
    jobRoles: ["General Dentist", "Orthodontist", "Periodontist", "Endodontist", "Oral Surgeon"],
    topUniversities: ["University of Debrecen", "Medical University of Warsaw", "University of Pécs"],
    entranceExams: ["NEET", "DAT"],
  },
  Nursing: {
    title: "Nursing",
    category: "Medical",
    description:
      "Nursing programs prepare students for patient care, clinical support, hospital operations, and healthcare service management. Nurses play a vital role in healthcare delivery and patient recovery.",
    duration: "3 to 4 Years",
    eligibility: "PCB or relevant biology stream",
    averageFee: "$ 2,500 to $ 8,000 / year",
    studentsStudied: "8,600+",
    studentsPlaced: "7,200+",
    successRate: "90%",
    careerOptions: ["Staff Nurse", "Clinical Nurse", "Nursing Supervisor", "Healthcare Coordinator", "Nurse Educator"],
    relatedContents: [
      "Best nursing destinations",
      "Nursing course abroad fees",
      "Nursing career opportunities",
      "How to apply for nursing programs",
      "Nursing specialization guide",
    ],
    icon: "🏥",
    imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=400&fit=crop",
    topCountries: ["USA", "UK", "Australia", "Canada", "New Zealand"],
    jobRoles: ["Critical Care Nurse", "Pediatric Nurse", "Geriatric Nurse", "Nurse Anesthetist", "Nurse Midwife"],
    topUniversities: ["University of Toronto", "King's College London", "University of Pennsylvania"],
    entranceExams: ["NCLEX", "HESI", "TEAS"],
  },
  Pharmacy: {
    title: "Pharmacy",
    category: "Medical",
    description:
      "Pharmacy teaches students about medicines, drug composition, dosage, clinical support, and pharmaceutical practices. Pharmacists are essential in healthcare for medication management and patient counseling.",
    duration: "4 Years",
    eligibility: "Science stream with Biology/Chemistry",
    averageFee: "$ 2,500 to $ 9,000 / year",
    studentsStudied: "6,200+",
    studentsPlaced: "5,100+",
    successRate: "87%",
    careerOptions: ["Pharmacist", "Medical Store Manager", "Drug Analyst", "Clinical Pharmacology Assistant", "Research Scientist"],
    relatedContents: [
      "Pharmacy admission process",
      "Best pharmacy universities",
      "Pharmacy abroad overview",
      "Career after pharmacy",
      "Pharmaceutical industry careers",
    ],
    icon: "💊",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop",
    topCountries: ["USA", "UK", "Australia", "Canada", "Ireland"],
    jobRoles: ["Clinical Pharmacist", "Hospital Pharmacist", "Community Pharmacist", "Regulatory Affairs Officer", "Drug Safety Associate"],
    topUniversities: ["University of California San Francisco", "University of Toronto", "Monash University"],
    entranceExams: ["PCAT", "PharmD entrance"],
  },
  "Allied Health Sciences": {
    title: "Allied Health Sciences",
    category: "Medical",
    description:
      "Allied Health Sciences includes diagnostic, therapeutic, rehabilitation, and clinical support programs for modern healthcare industries. This field offers diverse career opportunities in healthcare support services.",
    duration: "3 to 4 Years",
    eligibility: "Science background with Biology",
    averageFee: "$ 2,000 to $ 7,500 / year",
    studentsStudied: "5,400+",
    studentsPlaced: "4,300+",
    successRate: "85%",
    careerOptions: ["Lab Technologist", "Radiology Assistant", "Clinical Support Executive", "Therapy Assistant", "Medical Imaging Specialist"],
    relatedContents: [
      "Best allied health programs",
      "Allied health careers",
      "Courses after 12th science",
      "Hospital support careers",
      "Allied health specialization",
    ],
    icon: "🔬",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-0153f3513a2e?w=800&h=400&fit=crop",
    topCountries: ["USA", "UK", "Australia", "Germany", "Canada"],
    jobRoles: ["Medical Lab Technician", "Radiology Technician", "Respiratory Therapist", "Physical Therapy Assistant", "Occupational Therapy Assistant"],
    topUniversities: ["Johns Hopkins University", "University of Sydney", "University of Toronto"],
    entranceExams: ["GRE", "Specific program exams"],
  },
  "Computer Science Engineering": {
    title: "Computer Science Engineering",
    category: "Engineering",
    description:
      "Computer Science Engineering focuses on programming, software development, AI, data structures, and technology systems. This course prepares students for the rapidly evolving tech industry with cutting-edge skills.",
    duration: "4 Years",
    eligibility: "Maths, Physics, Chemistry in 12th standard",
    averageFee: "$ 3,000 to $ 10,000 / year",
    studentsStudied: "18,000+",
    studentsPlaced: "15,500+",
    successRate: "94%",
    careerOptions: ["Software Engineer", "Web Developer", "AI Engineer", "System Analyst", "Cloud Architect", "DevOps Engineer"],
    relatedContents: [
      "Best CSE universities",
      "Top software careers",
      "CSE course fees abroad",
      "Programming roadmap for students",
      "AI and Machine Learning trends",
    ],
    icon: "💻",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    topCountries: ["USA", "Canada", "Germany", "UK", "Australia"],
    jobRoles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Architect", "Technical Lead"],
    topUniversities: ["MIT", "Stanford University", "Carnegie Mellon University", "University of Oxford"],
    entranceExams: ["JEE", "SAT", "GRE"],
  },
  "Data Science": {
    title: "Data Science",
    category: "Engineering",
    description:
      "Data Science teaches data analytics, machine learning, visualization, business intelligence, and decision systems. This high-demand field combines statistics, programming, and business acumen.",
    duration: "3 to 4 Years",
    eligibility: "Maths background preferred",
    averageFee: "$ 4,000 to $ 12,000 / year",
    studentsStudied: "7,600+",
    studentsPlaced: "6,900+",
    successRate: "95%",
    careerOptions: ["Data Analyst", "Data Scientist", "AI Specialist", "Business Intelligence Analyst", "Machine Learning Engineer", "Data Engineer"],
    relatedContents: [
      "Data science future",
      "Best AI and data programs",
      "Top data science countries",
      "Career in analytics",
      "Big Data technologies",
    ],
    icon: "📊",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    topCountries: ["USA", "UK", "Canada", "Germany", "Australia"],
    jobRoles: ["Data Analyst", "Business Analyst", "Data Engineer", "ML Engineer", "Analytics Manager"],
    topUniversities: ["Harvard University", "MIT", "University of Oxford", "National University of Singapore"],
    entranceExams: ["GRE", "GMAT"],
  },
  BBA: {
    title: "BBA",
    category: "Business and Management",
    description:
      "BBA focuses on management basics, business operations, communication, finance, marketing, and entrepreneurship. This degree prepares students for leadership roles in various business sectors.",
    duration: "3 Years",
    eligibility: "Any stream in 12th standard",
    averageFee: "$ 3,000 to $ 9,000 / year",
    studentsStudied: "11,500+",
    studentsPlaced: "8,400+",
    successRate: "87%",
    careerOptions: ["Business Executive", "Marketing Associate", "Sales Manager", "Entrepreneur", "Business Consultant", "Operations Manager"],
    relatedContents: [
      "Best BBA universities",
      "BBA specializations",
      "Business programs abroad",
      "Career after BBA",
      "Management skills development",
    ],
    icon: "📈",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    topCountries: ["USA", "UK", "Canada", "Australia", "Singapore"],
    jobRoles: ["Management Trainee", "Business Development Executive", "Marketing Coordinator", "HR Assistant", "Finance Associate"],
    topUniversities: ["Harvard Business School", "London Business School", "INSEAD"],
    entranceExams: ["SAT", "ACT", "University specific tests"],
  },
  MBA: {
    title: "MBA",
    category: "Business and Management",
    description:
      "MBA is designed for leadership, operations, business analytics, marketing, finance, and strategic management careers. This prestigious degree opens doors to senior management positions worldwide.",
    duration: "2 Years",
    eligibility: "Graduation + institution requirements",
    averageFee: "$ 6,000 to $ 18,000 / year",
    studentsStudied: "13,000+",
    studentsPlaced: "10,900+",
    successRate: "91%",
    careerOptions: ["Manager", "Consultant", "Business Analyst", "Operations Lead", "Strategy Director", "Chief Executive Officer"],
    relatedContents: [
      "Top MBA destinations",
      "MBA admission guide",
      "Management careers abroad",
      "MBA specializations",
      "Executive MBA programs",
    ],
    icon: "🎓",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
    topCountries: ["USA", "UK", "Canada", "France", "Singapore"],
    jobRoles: ["Product Manager", "Marketing Manager", "Finance Manager", "Operations Director", "Business Consultant"],
    topUniversities: ["Stanford GSB", "Harvard Business School", "Wharton School", "London Business School"],
    entranceExams: ["GMAT", "GRE", "CAT"],
  },
};

function getCategoryFromCourse(course: string | null) {
  if (!course) return null;
  for (const group of courses) {
    const found = group.items.find(
      (item) => item.label.toLowerCase() === course.toLowerCase()
    );
    if (found) return group.category;
  }
  return null;
}

function getRelatedCoursesFromCategory(category: string, currentCourse: string | null) {
  const group = courses.find((g) => g.category === category);
  if (!group) return [];
  if (currentCourse) {
    return group.items.filter((item) => item.label !== currentCourse);
  }
  return group.items;
}

function SidebarIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-md transition-all hover:shadow-xl hover:shadow-indigo-100">
      <div className="mb-2 text-3xl">{icon}</div>
      <div className="text-2xl font-black text-indigo-600">{value}</div>
      <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
    </div>
  );
}

function CourseCard({
  label,
  href,
  category,
}: {
  label: string;
  href: string;
  category: string;
}) {
  const courseData = courseDetails[label];
  return (
    <Link href={href} className="group block">
      <div className="rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-xl group-hover:bg-indigo-200">
            {courseData?.icon || "📖"}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800 group-hover:text-indigo-600">
              {label}
            </h4>
            <p className="mt-1 text-xs text-slate-500">{category}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function CoursesPageContent() {
  const [selectedStream, setSelectedStream] = useState("Medical");
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get("course");
  const activeCourse = selectedCourse || "";
  const router = useRouter();

  useEffect(() => {
    const matchedCategory = getCategoryFromCourse(selectedCourse);
    if (matchedCategory) {
      setSelectedStream(matchedCategory);
    }
  }, [selectedCourse]);

  const filteredUniversities = useMemo(() => {
    if (selectedCourse) {
      return universities.filter((u) =>
        u.availableCourses.some(
          (course) => course.toLowerCase() === selectedCourse.toLowerCase()
        )
      );
    }
    return universities.filter((u) => u.studyArea === selectedStream);
  }, [selectedStream, selectedCourse]);

  const relatedCourses = useMemo(() => {
    return getRelatedCoursesFromCategory(selectedStream, selectedCourse);
  }, [selectedStream, selectedCourse]);

  const currentCourseInfo =
    selectedCourse && courseDetails[selectedCourse]
      ? courseDetails[selectedCourse]
      : null;

  const streamCourses = useMemo(() => {
    const group = courses.find((g) => g.category === selectedStream);
    return group?.items || [];
  }, [selectedStream]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-16 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr]">
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-2xl shadow-indigo-100 backdrop-blur-xl">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-6">
                <div className="flex items-center gap-4">
                  <SidebarIcon />
                  <h3 className="text-xl font-bold text-white">Study Categories</h3>
                </div>
              </div>

              <div className="custom-scrollbar max-h-[70vh] overflow-y-auto p-3">
                <div className="space-y-1.5">
                  {streams.map((stream) => (
                    <button
                      key={stream}
                      onClick={() => {
                        setSelectedStream(stream);
                        router.push("/CoursesPage");
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                        !selectedCourse && selectedStream === stream
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                          : selectedCourse && selectedStream === stream
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      <span className="text-sm font-semibold tracking-tight">{stream}</span>
                      {selectedStream === stream && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-indigo-800 p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl backdrop-blur">
                  🎓
                </div>
                <h4 className="text-lg font-bold">Need Expert Guidance?</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-indigo-200">
                Get personalized counseling for university selection, application process, and scholarship opportunities.
              </p>
              <button className="mt-5 w-full rounded-xl bg-white py-3 text-sm font-bold text-indigo-900 transition-all hover:bg-indigo-50 hover:shadow-lg">
                Book Free Consultation
              </button>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-5 shadow-lg">
              <h4 className="font-bold text-slate-800">Quick Stats</h4>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Universities</span>
                  <span className="font-bold text-indigo-600">{universities.length}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Courses</span>
                  <span className="font-bold text-indigo-600">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Countries</span>
                  <span className="font-bold text-indigo-600">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Students Placed</span>
                  <span className="font-bold text-emerald-600">10,000+</span>
                </div>
              </div>
            </div>
          </aside>

          <main>
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                </span>
                {selectedCourse ? "Course Details" : `${filteredUniversities.length} Partner Universities`}
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                {selectedCourse ? (
                  <>
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                      {selectedCourse}
                    </span>{" "}
                    Complete Guide
                  </>
                ) : (
                  <>
                    Study{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                      {selectedStream}
                    </span>{" "}
                    Abroad
                  </>
                )}
              </h1>

              {!selectedCourse && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
                  Explore top universities, course details, career opportunities, and success metrics for {selectedStream} programs worldwide.
                  Get comprehensive information about admission requirements, fees, and placement records.
                </p>
              )}
            </header>

            {currentCourseInfo && (
              <section className="mb-10 space-y-6">
                <div className="relative h-48 w-full overflow-hidden rounded-3xl md:h-64">
                  <Image
                    src={currentCourseInfo.imageUrl}
                    alt={currentCourseInfo.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
                      {currentCourseInfo.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white/80">{currentCourseInfo.category}</span>
                      <h2 className="text-2xl font-black text-white md:text-3xl">{currentCourseInfo.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <h3 className="text-lg font-bold text-slate-800">📖 About this Course</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{currentCourseInfo.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <div className="text-xs text-slate-400">Duration</div>
                      <div className="font-semibold text-slate-800">{currentCourseInfo.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="text-xs text-slate-400">Eligibility</div>
                      <div className="font-semibold text-slate-800">{currentCourseInfo.eligibility}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="text-xs text-slate-400">Avg. Annual Fee</div>
                      <div className="font-semibold text-indigo-600">{currentCourseInfo.averageFee}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <StatCard value={currentCourseInfo.studentsStudied} label="Students Enrolled" icon="👨‍🎓" />
                  <StatCard value={currentCourseInfo.studentsPlaced} label="Successfully Placed" icon="💼" />
                  <StatCard value={currentCourseInfo.successRate} label="Placement Rate" icon="📈" />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h3 className="text-lg font-bold text-slate-800">🚀 Career Opportunities</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {currentCourseInfo.careerOptions.map((career) => (
                        <span
                          key={career}
                          className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-md">
                    <h3 className="text-lg font-bold text-slate-800">🌍 Best Countries to Study</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {currentCourseInfo.topCountries.map((country) => (
                        <span
                          key={country}
                          className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <h3 className="text-lg font-bold text-slate-800">
                    💼 Top Job Roles After {currentCourseInfo.title}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {currentCourseInfo.jobRoles.map((role) => (
                      <div key={role} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                        <span className="text-indigo-500">▹</span>
                        <span className="text-sm text-slate-700">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {currentCourseInfo.topUniversities && (
                    <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-6">
                      <h3 className="text-lg font-bold text-slate-800">
                        🏛️ Top Universities for {currentCourseInfo.title}
                      </h3>
                      <div className="mt-4 space-y-2">
                        {currentCourseInfo.topUniversities.map((uni) => (
                          <div key={uni} className="flex items-center gap-2">
                            <span className="text-amber-500">★</span>
                            <span className="text-sm text-slate-700">{uni}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentCourseInfo.entranceExams && (
                    <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-6">
                      <h3 className="text-lg font-bold text-slate-800">📝 Entrance Exams</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {currentCourseInfo.entranceExams.map((exam) => (
                          <span
                            key={exam}
                            className="rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700"
                          >
                            {exam}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 p-6">
                  <h3 className="text-lg font-bold text-slate-800">📚 You Might Also Like</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {currentCourseInfo.relatedContents.map((content) => (
                      <span
                        key={content}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm"
                      >
                        {content}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {!selectedCourse && streamCourses.length > 0 && (
              <section className="mb-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800">
                    🎓 Popular {selectedStream} Courses
                  </h3>
                  <span className="text-sm text-slate-400">{streamCourses.length} programs</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {streamCourses.map((course) => (
                    <CourseCard
                      key={course.label}
                      label={course.label}
                      href={course.href}
                      category={selectedStream}
                    />
                  ))}
                </div>
              </section>
            )}

            {selectedCourse && relatedCourses.length > 0 && (
              <section className="mb-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800">
                    🔗 More {selectedStream} Programs
                  </h3>
                  <button
                    onClick={() => router.push("/CoursesPage")}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    View All →
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedCourses.slice(0, 6).map((course) => (
                    <CourseCard
                      key={course.label}
                      label={course.label}
                      href={course.href}
                      category={selectedStream}
                    />
                  ))}
                </div>
              </section>
            )}

            <div>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800">
                  🏛️ Top Universities for {selectedCourse || selectedStream}
                </h3>
                <span className="text-sm text-indigo-600">{filteredUniversities.length} universities</span>
              </div>

              <div className="space-y-6">
                {filteredUniversities.length > 0 ? (
                  filteredUniversities.map((university) => (
                    <article
                      key={university.id}
                      className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100"
                    >
                      <div className="flex flex-col gap-6 md:flex-row">
                        <div className="flex-shrink-0">
                          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-slate-50 p-3 transition-transform duration-300 group-hover:scale-105">
                            <Image
                              src={university.logo}
                              alt={university.name}
                              width={80}
                              height={80}
                              unoptimized
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                            <div>
                              <h2 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                                {university.name}
                              </h2>
                              <div className="mt-1 flex items-center gap-2 text-sm text-indigo-600">
                                <span>📍</span>
                                <span>{university.location}</span>
                              </div>
                              <div className="mt-1 flex flex-wrap gap-3 text-xs">
                                {university.established && (
                                  <span className="text-slate-400">Est. {university.established}</span>
                                )}
                                {university.ranking && (
                                  <span className="text-amber-600">🏆 {university.ranking}</span>
                                )}
                                {university.accreditation && (
                                  <span className="text-emerald-600">✓ {university.accreditation}</span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-black text-slate-900">
                                {university.annualTuitionFee?.split("/")?.[0] || "N/A"}
                              </div>
                              <div className="text-[10px] font-semibold uppercase text-slate-400">
                                per year
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-4">
                            <div className="flex items-center gap-1">
                              <span className="text-sm">👨‍🎓</span>
                              <span className="text-sm font-medium text-slate-600">
                                {university.studentsCount?.toLocaleString() || "N/A"} students
                              </span>
                            </div>
                            {university.placementRate && (
                              <div className="flex items-center gap-1">
                                <span className="text-sm">📊</span>
                                <span className="text-sm font-medium text-emerald-600">
                                  {university.placementRate}% placement
                                </span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <span className="text-sm">📅</span>
                              <span className="text-sm font-medium text-slate-600">{university.intakes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm">⌛</span>
                              <span className="text-sm font-medium text-slate-600">{university.duration}</span>
                            </div>
                          </div>

                          <div className="mt-3">
                            <div className="flex flex-wrap gap-1.5">
                              {university.availableCourses.slice(0, 4).map((course) => (
                                <Link
                                  key={course}
                                  href={`/CoursesPage?course=${encodeURIComponent(course)}`}
                                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                                    activeCourse && course.toLowerCase() === activeCourse.toLowerCase()
                                      ? "bg-indigo-600 text-white"
                                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                                  }`}
                                >
                                  {course}
                                </Link>
                              ))}
                              {university.availableCourses.length > 4 && (
                                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                                  +{university.availableCourses.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-5 flex flex-wrap gap-3">
                            <button className="group flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-600">
                              View Details
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                            <button className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:border-indigo-300 hover:text-indigo-600">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
                      🔍
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">No universities found</h3>
                    <p className="mt-2 max-w-md text-sm text-slate-500">
                      We could not find any universities matching your criteria. Try selecting a different category or course.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedStream("Medical");
                        router.push("/CoursesPage");
                      }}
                      className="mt-5 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                      Browse All Categories
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-800 p-6 text-white md:p-8">
              <h3 className="text-xl font-bold">🌟 Why Study Abroad?</h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-semibold">Global Exposure</h4>
                    <p className="text-xs text-indigo-200">International experience and networking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h4 className="font-semibold">Quality Education</h4>
                    <p className="text-xs text-indigo-200">World-class facilities and faculty</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold">Career Growth</h4>
                    <p className="text-xs text-indigo-200">Better job opportunities globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-semibold">Cultural Diversity</h4>
                    <p className="text-xs text-indigo-200">Learn from diverse perspectives</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                📞 Get Free Counseling
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c7d2fe;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #818cf8;
        }
      `}</style>
    </section>
  );
}

function CoursesPageFallback() {
  console.log("good");
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-16">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="rounded-2xl bg-white p-10 text-center shadow-md">
          <div className="text-lg font-semibold text-slate-700">Loading courses...</div>
        </div>
      </div>
    </section>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesPageFallback />}>
      <CoursesPageContent />
    </Suspense>
  );
}