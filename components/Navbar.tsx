"use client";
import { navlinks } from "@/helper/app_helper";
import { IconsHelper } from "@/helper/icon_helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);

  const courses = [
    {
      category: "Medical",
      icon: "🩺",
      color: "#e74c3c",
      items: [
        { label: "MBBS", href: "/CoursesPage?course=MBBS", icon: "🎓" },
        { label: "BDS", href: "/CoursesPage?course=BDS", icon: "🦷" },
        { label: "Nursing", href: "/CoursesPage?course=Nursing", icon: "🏥" },
        { label: "Pharmacy", href: "/CoursesPage?course=Pharmacy", icon: "💊" },
        { label: "Allied Health Sciences", href: "/CoursesPage?course=Allied Health Sciences", icon: "🔬" },
      ],
    },
    {
      category: "Engineering",
      icon: "⚙️",
      color: "#3498db",
      items: [
        { label: "Computer Science Engineering", href: "/CoursesPage?course=Computer Science Engineering", icon: "💻" },
        { label: "Electronics & Communication Engineering", href: "/CoursesPage?course=Electronics & Communication Engineering", icon: "📡" },
        { label: "Mechanical Engineering", href: "/CoursesPage?course=Mechanical Engineering", icon: "🔧" },
        { label: "Civil Engineering", href: "/CoursesPage?course=Civil Engineering", icon: "🏗️" },
        { label: "Data Science", href: "/CoursesPage?course=Data Science", icon: "📊" },
      ],
    },
    {
      category: "Business and Management",
      icon: "💼",
      color: "#2ecc71",
      items: [
        { label: "BBA", href: "/CoursesPage?course=BBA", icon: "📈" },
        { label: "MBA", href: "/CoursesPage?course=MBA", icon: "🎓" },
        { label: "Business Management", href: "/CoursesPage?course=Business Management", icon: "📊" },
      ],
    },
    {
      category: "Architecture",
      icon: "🏛️",
      color: "#f39c12",
      items: [
        { label: "B.Arch", href: "/CoursesPage?course=B.Arch", icon: "🏗️" },
      ],
    },
    {
      category: "Commerce",
      icon: "💰",
      color: "#1abc9c",
      items: [
        { label: "B.Com", href: "/CoursesPage?course=B.Com", icon: "📚" },
        { label: "M.Com", href: "/CoursesPage?course=M.Com", icon: "🎓" },
      ],
    },
    {
      category: "Aviation",
      icon: "✈️",
      color: "#9b59b6",
      items: [
        { label: "Aviation Management", href: "/CoursesPage?course=Aviation Management", icon: "🛫" },
        { label: "Pilot Training", href: "/CoursesPage?course=Pilot Training", icon: "👨‍✈️" },
      ],
    },
    {
      category: "Hotel Management",
      icon: "🏨",
      color: "#e67e22",
      items: [
        { label: "Hotel Management", href: "/CoursesPage?course=Hotel Management", icon: "🍽️" },
        { label: "Hospitality Management", href: "/CoursesPage?course=Hospitality Management", icon: "🏨" },
      ],
    },
    {
      category: "Humanities",
      icon: "📖",
      color: "#16a085",
      items: [
        { label: "History", href: "/CoursesPage?course=History", icon: "📜" },
        { label: "Political Science", href: "/CoursesPage?course=Political Science", icon: "🏛️" },
      ],
    },
    {
      category: "Journalism, Media and Mass Comm",
      icon: "📰",
      color: "#c0392b",
      items: [
        { label: "Journalism", href: "/CoursesPage?course=Journalism", icon: "🎙️" },
        { label: "Mass Communication", href: "/CoursesPage?course=Mass Communication", icon: "📺" },
      ],
    },
    {
      category: "Law",
      icon: "⚖️",
      color: "#8e44ad",
      items: [
        { label: "LLB", href: "/CoursesPage?course=LLB", icon: "📜" },
        { label: "LLM", href: "/CoursesPage?course=LLM", icon: "🎓" },
      ],
    },
    {
      category: "Languages and Teaching",
      icon: "🗣️",
      color: "#d35400",
      items: [
        { label: "English Language", href: "/CoursesPage?course=English Language", icon: "🇬🇧" },
        { label: "Teaching", href: "/CoursesPage?course=Teaching", icon: "👩‍🏫" },
      ],
    },
    {
      category: "Arts and Design",
      icon: "🎨",
      color: "#e91e63",
      items: [
        { label: "Fashion Design", href: "/CoursesPage?course=Fashion Design", icon: "👗" },
        { label: "Interior Design", href: "/CoursesPage?course=Interior Design", icon: "🛋️" },
      ],
    },
    {
      category: "Social Sciences",
      icon: "🌍",
      color: "#00bcd4",
      items: [
        { label: "Sociology", href: "/CoursesPage?course=Sociology", icon: "👥" },
        { label: "Psychology", href: "/CoursesPage?course=Psychology", icon: "🧠" },
      ],
    },
    {
      category: "Agriculture and Forestry",
      icon: "🌾",
      color: "#4caf50",
      items: [
        { label: "Agriculture", href: "/CoursesPage?course=Agriculture", icon: "🚜" },
        { label: "Forestry", href: "/CoursesPage?course=Forestry", icon: "🌲" },
      ],
    },
    {
      category: "Computer Science and IT",
      icon: "🖥️",
      color: "#2196f3",
      items: [
        { label: "Computer Science", href: "/CoursesPage?course=Computer Science", icon: "💻" },
        { label: "Information Technology", href: "/CoursesPage?course=Information Technology", icon: "🌐" },
        { label: "Data Science", href: "/CoursesPage?course=Data Science", icon: "📊" },
      ],
    },
  ];

  const Countries = [
    { label: "INDIA", href: "/Countries?country=india", flag: "🇮🇳", code: "IN" },
    { label: "UZBEKISTAN", href: "/Countries?country=uzbekistan", flag: "🇺🇿", code: "UZ" },
    { label: "GEORGIA", href: "/Countries?country=georgia", flag: "🇬🇪", code: "GE" },
    { label: "RUSSIA", href: "/Countries?country=russia", flag: "🇷🇺", code: "RU" },
    { label: "KYRGYZSTAN", href: "/Countries?country=kyrgyzstan", flag: "🇰🇬", code: "KG" },
    { label: "CHINA", href: "/Countries?country=china", flag: "🇨🇳", code: "CN" },
    { label: "NEPAL", href: "/Countries?country=nepal", flag: "🇳🇵", code: "NP" },
    { label: "BANGLADESH", href: "/Countries?country=bangladesh", flag: "🇧🇩", code: "BD" },
    { label: "VIETNAM", href: "/Countries?country=vietnam", flag: "🇻🇳", code: "VN" },
    { label: "TIMOR-LESTE", href: "/Countries?country=timor-leste", flag: "🇹🇱", code: "TL" },
    { label: "KAZAKHSTAN", href: "/Countries?country=kazakhstan", flag: "🇰🇿", code: "KZ" },
  ];

  // Country flag image URLs (using flagcdn or similar service)
  const getCountryFlagUrl = (countryCode: string) => {
    return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
  };

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 1000,
        background: "rgba(11,30,61,.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "3px solid rgba(201,168,76,.2)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width:45,
              height:45,
              background: "white  ",
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconsHelper.Cap size={30 } />
          </div>

          <div style={{ color: "white" }}>
            <span style={{ fontSize: 25, fontWeight: 700,color:"#c9a84c" }}>       
              Kovai Overseas
            </span>
            <small style={{ display: "block", fontSize: 10, opacity: 0.5 }}>
               Educational   Consultancy
            </small>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {navlinks.map((res, index) => {
            if (res.label === "Services" || res.label === "Courses") {
              return (
                <div key={index} style={{ position: "relative" }}>
                  <button
                    onClick={() => {
                      setCoursesOpen(!coursesOpen);
                      setCountriesOpen(false);
                    }}
                    style={{
                      padding: "8px 14px",
                      fontSize: 13.5,
                      borderRadius: 8,
                      cursor: "pointer",
                      color:
                        pathname === "/CoursesPage"
                          ? "#c9a84c"
                          : "rgba(255,255,255,.75)",
                      background:
                        pathname === "/CoursesPage"
                          ? "rgba(201,168,76,.15)"
                          : "transparent",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span>📚</span>
                    Courses
                    <span style={{ fontSize: 10, marginLeft: 3 }}>
                      {coursesOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {coursesOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        minWidth: 360,
                        maxWidth: 420,
                        maxHeight: 450,
                        overflowY: "auto",
                        background: "rgba(11,30,61,.98)",
                        border: "1px solid rgba(201,168,76,.15)",
                        borderRadius: 12,
                        padding: "8px 0",
                        marginTop: 8,
                        boxShadow: "0 15px 35px rgba(0,0,0,.3)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {courses.map((group, i) => (
                        <div key={i} style={{ paddingBottom: 4 }}>
                          <div
                            style={{
                              padding: "12px 16px 6px 16px",
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#c9a84c",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              borderBottom: "1px solid rgba(201,168,76,.1)",
                              marginBottom: 4,
                            }}
                          >
                            <span style={{ fontSize: 16 }}>{group.icon}</span>
                            {group.category}
                          </div>

                          <div style={{ display: "flex", flexDirection: "column" }}>
                            {group.items.map((item, j) => (
                              <Link
                                key={j}
                                href={item.href}
                                onClick={() => setCoursesOpen(false)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  padding: "8px 16px 8px 40px",
                                  fontSize: 13,
                                  color: "rgba(255,255,255,.8)",
                                  textDecoration: "none",
                                  transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(201,168,76,.1)";
                                  e.currentTarget.style.color = "#c9a84c";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.color = "rgba(255,255,255,.8)";
                                }}
                              >
                                <span style={{ fontSize: 14 }}>{item.icon}</span>
                                <span>{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (res.label === "Countries") {
              return (
                <div key={index} style={{ position: "relative" }}>
                  <button
                    onClick={() => {
                      setCountriesOpen(!countriesOpen);
                      setCoursesOpen(false);
                    }}
                    style={{
                      padding: "8px 14px",
                      fontSize: 13.5,
                      borderRadius: 8,
                      cursor: "pointer",
                      color:
                        pathname.startsWith("/Countries") || pathname.startsWith("/countries")
                          ? "#c9a84c"
                          : "rgba(255,255,255,.75)",
                      background:
                        pathname.startsWith("/Countries") || pathname.startsWith("/countries")
                          ? "rgba(201,168,76,.15)"
                          : "transparent",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span>🌍</span>
                    Countries
                    <span style={{ fontSize: 10, marginLeft: 3 }}>
                      {countriesOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {countriesOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        minWidth: 260,
                        background: "rgba(11,30,61,.98)",
                        border: "1px solid rgba(201,168,76,.15)",
                        borderRadius: 12,
                        padding: "8px 0",
                        marginTop: 8,
                        boxShadow: "0 15px 35px rgba(0,0,0,.3)",
                        backdropFilter: "blur(8px)",
                        maxHeight: 400,
                        overflowY: "auto",
                      }}
                    >
                      {Countries.map((country, i) => (
                        <Link
                          key={i}
                          href={country.href}
                          onClick={() => setCountriesOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "10px 16px",
                            fontSize: 13.5,
                            color: "rgba(255,255,255,.8)",
                            textDecoration: "none",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(201,168,76,.1)";
                            e.currentTarget.style.color = "#c9a84c";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "rgba(255,255,255,.8)";
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 50 }}>
                            <span style={{ fontSize: 20 }}>{country.flag}</span>
                            <img
                              src={getCountryFlagUrl(country.code)}
                              alt={country.label}
                              style={{
                                width: 24,
                                height: 16,
                                objectFit: "cover",
                                borderRadius: 2,
                                border: "1px solid rgba(255,255,255,.2)",
                              }}
                            />
                          </div>
                          <span style={{ fontWeight: 500 }}>{country.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={res.href}
                style={{
                  padding: "8px 14px",
                  fontSize: 13.5,
                  borderRadius: 8,
                  color:
                    pathname === res.href
                      ? "#c9a84c"
                      : "rgba(255,255,255,.75)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== res.href) {
                    e.currentTarget.style.color = "#c9a84c";
                    e.currentTarget.style.background = "rgba(201,168,76,.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== res.href) {
                    e.currentTarget.style.color = "rgba(255,255,255,.75)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {res.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            style={{
              background: "#c9a84c",
              color: "#0b1e3d",
              padding: "9px 20px",
              fontWeight: 600,
              borderRadius: 8,
              fontSize: 13.5,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d4b85c";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c9a84c";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>📝</span>
            Enquiry Now
          </Link>
        </div>
      </div>

      {/* Custom scrollbar styles for dropdowns */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(201, 168, 76, 0.5);
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 168, 76, 0.8);
        }
      `}</style>
    </nav>
  );
}