"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navlinks } from "@/helper/app_helper";
import img_helper from "@/helper/img_helper";

/* ─────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────── */

const COURSES = [
  {
    category: "Medical",
    icon: "🩺",
    items: [
      { label: "MBBS", href: "/CoursesPage?course=MBBS", icon: "🎓" },
      { label: "BDS", href: "/CoursesPage?course=BDS", icon: "🦷" },
      { label: "Nursing", href: "/CoursesPage?course=Nursing", icon: "🏥" },
      { label: "Pharmacy", href: "/CoursesPage?course=Pharmacy", icon: "💊" },
      {
        label: "Allied Health Sciences",
        href: "/CoursesPage?course=Allied Health Sciences",
        icon: "🔬",
      },
    ],
  },
  {
    category: "Engineering",
    icon: "⚙️",
    items: [
      {
        label: "Computer Science Engg.",
        href: "/CoursesPage?course=Computer Science Engineering",
        icon: "💻",
      },
      {
        label: "Electronics & Communication",
        href: "/CoursesPage?course=Electronics & Communication Engineering",
        icon: "📡",
      },
      {
        label: "Mechanical Engineering",
        href: "/CoursesPage?course=Mechanical Engineering",
        icon: "🔧",
      },
      {
        label: "Civil Engineering",
        href: "/CoursesPage?course=Civil Engineering",
        icon: "🏗️",
      },
      {
        label: "Data Science",
        href: "/CoursesPage?course=Data Science",
        icon: "📊",
      },
    ],
  },
  {
    category: "Business & Management",
    icon: "💼",
    items: [
      { label: "BBA", href: "/CoursesPage?course=BBA", icon: "📈" },
      { label: "MBA", href: "/CoursesPage?course=MBA", icon: "🎓" },
      {
        label: "Business Management",
        href: "/CoursesPage?course=Business Management",
        icon: "📊",
      },
    ],
  },
  {
    category: "Architecture",
    icon: "🏛️",
    items: [
      { label: "B.Arch", href: "/CoursesPage?course=B.Arch", icon: "🏗️" },
    ],
  },
  {
    category: "Commerce",
    icon: "💰",
    items: [
      { label: "B.Com", href: "/CoursesPage?course=B.Com", icon: "📚" },
      { label: "M.Com", href: "/CoursesPage?course=M.Com", icon: "🎓" },
    ],
  },
  {
    category: "Aviation",
    icon: "✈️",
    items: [
      {
        label: "Aviation Management",
        href: "/CoursesPage?course=Aviation Management",
        icon: "🛫",
      },
      {
        label: "Pilot Training",
        href: "/CoursesPage?course=Pilot Training",
        icon: "👨‍✈️",
      },
    ],
  },
  {
    category: "Hotel Management",
    icon: "🏨",
    items: [
      {
        label: "Hotel Management",
        href: "/CoursesPage?course=Hotel Management",
        icon: "🍽️",
      },
      {
        label: "Hospitality Management",
        href: "/CoursesPage?course=Hospitality Management",
        icon: "🏨",
      },
    ],
  },
  {
    category: "Humanities",
    icon: "📖",
    items: [
      { label: "History", href: "/CoursesPage?course=History", icon: "📜" },
      {
        label: "Political Science",
        href: "/CoursesPage?course=Political Science",
        icon: "🏛️",
      },
    ],
  },
  {
    category: "Journalism & Media",
    icon: "📰",
    items: [
      {
        label: "Journalism",
        href: "/CoursesPage?course=Journalism",
        icon: "🎙️",
      },
      {
        label: "Mass Communication",
        href: "/CoursesPage?course=Mass Communication",
        icon: "📺",
      },
    ],
  },
  {
    category: "Law",
    icon: "⚖️",
    items: [
      { label: "LLB", href: "/CoursesPage?course=LLB", icon: "📜" },
      { label: "LLM", href: "/CoursesPage?course=LLM", icon: "🎓" },
    ],
  },
  {
    category: "Languages & Teaching",
    icon: "🗣️",
    items: [
      {
        label: "English Language",
        href: "/CoursesPage?course=English Language",
        icon: "🇬🇧",
      },
      { label: "Teaching", href: "/CoursesPage?course=Teaching", icon: "👩‍🏫" },
    ],
  },
  {
    category: "Arts & Design",
    icon: "🎨",
    items: [
      {
        label: "Fashion Design",
        href: "/CoursesPage?course=Fashion Design",
        icon: "👗",
      },
      {
        label: "Interior Design",
        href: "/CoursesPage?course=Interior Design",
        icon: "🛋️",
      },
    ],
  },
  {
    category: "Social Sciences",
    icon: "🌍",
    items: [
      { label: "Sociology", href: "/CoursesPage?course=Sociology", icon: "👥" },
      {
        label: "Psychology",
        href: "/CoursesPage?course=Psychology",
        icon: "🧠",
      },
    ],
  },
  {
    category: "Agriculture & Forestry",
    icon: "🌾",
    items: [
      {
        label: "Agriculture",
        href: "/CoursesPage?course=Agriculture",
        icon: "🚜",
      },
      { label: "Forestry", href: "/CoursesPage?course=Forestry", icon: "🌲" },
    ],
  },
  {
    category: "Computer Science & IT",
    icon: "🖥️",
    items: [
      {
        label: "Computer Science",
        href: "/CoursesPage?course=Computer Science",
        icon: "💻",
      },
      {
        label: "Information Technology",
        href: "/CoursesPage?course=Information Technology",
        icon: "🌐",
      },
    ],
  },
];

const COUNTRIES = [
  { label: "India", href: "/Countries?country=india", flag: "🇮🇳", code: "IN" },
  {
    label: "Uzbekistan",
    href: "/Countries?country=uzbekistan",
    flag: "🇺🇿",
    code: "UZ",
  },
  {
    label: "Georgia",
    href: "/Countries?country=georgia",
    flag: "🇬🇪",
    code: "GE",
  },
  {
    label: "Russia",
    href: "/Countries?country=russia",
    flag: "🇷🇺",
    code: "RU",
  },
  {
    label: "Kyrgyzstan",
    href: "/Countries?country=kyrgyzstan",
    flag: "🇰🇬",
    code: "KG",
  },
  { label: "China", href: "/Countries?country=china", flag: "🇨🇳", code: "CN" },
  { label: "Nepal", href: "/Countries?country=nepal", flag: "🇳🇵", code: "NP" },
  {
    label: "Bangladesh",
    href: "/Countries?country=bangladesh",
    flag: "🇧🇩",
    code: "BD",
  },
  {
    label: "Vietnam",
    href: "/Countries?country=vietnam",
    flag: "🇻🇳",
    code: "VN",
  },
  {
    label: "Timor-Leste",
    href: "/Countries?country=timor-leste",
    flag: "🇹🇱",
    code: "TL",
  },
  {
    label: "Kazakhstan",
    href: "/Countries?country=kazakhstan",
    flag: "🇰🇿",
    code: "KZ",
  },
];

type DropdownType = "courses" | "countries" | null;
type MobileSection = "courses" | "countries" | null;

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);
  const navRef = useRef<HTMLElement>(null);

  /* outside click → close dropdowns */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* route change → close everything */
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  /* body scroll lock while drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggle = useCallback(
    (which: DropdownType) =>
      setOpenDropdown((p) => (p === which ? null : which)),
    [],
  );

  const isCoursesActive = pathname.startsWith("/CoursesPage");
  const isCountriesActive =
    pathname.startsWith("/Countries") || pathname.startsWith("/countries");
  const flagUrl = (code: string) =>
    `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

  return (
    <>
      {/* ── Global keyframes + scrollbar ── */}
      <style>{`
        @keyframes dropIn {
          from { opacity:0; transform:translateY(-8px) scale(0.98); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }
        .nav-dropdown { animation: dropIn 0.2s cubic-bezier(0.22,1,0.36,1) both; }
        .nav-scroll::-webkit-scrollbar        { width:4px; }
        .nav-scroll::-webkit-scrollbar-track  { background:rgba(255,255,255,0.03); border-radius:10px; }
        .nav-scroll::-webkit-scrollbar-thumb  { background:rgba(201,168,76,0.4); border-radius:10px; }
        .nav-scroll::-webkit-scrollbar-thumb:hover { background:rgba(201,168,76,0.7); }
        .dd-item:hover { background:rgba(201,168,76,0.1)!important; color:#f59e0b!important; }
      `}</style>

      {/* ══════════════ NAVBAR ══════════════ */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        style={{
          background: "rgba(7,19,50,0.97)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        {/* gold top-line shimmer */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />

        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 ">
          {/* ─── LOGO ─── */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div
              className="flex w-full h-full"
            >
              <Image
                src={img_helper.logo.logowithfont2}
                alt="Kovai Overseas logo"
                className="h-9 w-auto object-contain"
              />
            </div>
           
          </Link>

          {/* ─── DESKTOP NAV (lg+) ─── */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navlinks.map((link, i) => {
              if (link.label === "Services" || link.label === "Courses") {
                return (
                  <div key={i} className="relative">
                    <NavBtn
                      active={isCoursesActive}
                      open={openDropdown === "courses"}
                      onClick={() => toggle("courses")}
                      icon="📚"
                      label="Courses"
                    />
                    {openDropdown === "courses" && (
                      <CoursesDropdown
                        courses={COURSES}
                        onClose={() => setOpenDropdown(null)}
                      />
                    )}
                  </div>
                );
              }
              if (link.label === "Countries") {
                return (
                  <div key={i} className="relative">
                    <NavBtn
                      active={isCountriesActive}
                      open={openDropdown === "countries"}
                      onClick={() => toggle("countries")}
                      icon="🌍"
                      label="Countries"
                    />
                    {openDropdown === "countries" && (
                      <CountriesDropdown
                        countries={COUNTRIES}
                        flagUrl={flagUrl}
                        onClose={() => setOpenDropdown(null)}
                      />
                    )}
                  </div>
                );
              }
              const active = pathname === link.href;
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-[13.5px] font-medium transition-all duration-150 hover:bg-amber-500/10 hover:text-amber-400 ${
                    active ? "bg-amber-500/15 text-amber-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-[13.5px] font-bold text-[#0b1e3d] shadow-lg shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-amber-400/35 active:translate-y-0"
              style={{ background: "linear-gradient(135deg,#c9a84c,#e8b84b)" }}
            >
              <span>📝</span> Enquiry Now
            </Link>
          </div>

          {/* ─── TABLET NAV (sm–lg): key dropdowns + CTA + hamburger ─── */}
          <div className="hidden items-center gap-1 sm:flex lg:hidden">
            {/* Courses dropdown on tablet */}
            <div className="relative">
              <NavBtn
                active={isCoursesActive}
                open={openDropdown === "courses"}
                onClick={() => toggle("courses")}
                icon="📚"
                label="Courses"
                compact
              />
              {openDropdown === "courses" && (
                <CoursesDropdown
                  courses={COURSES}
                  onClose={() => setOpenDropdown(null)}
                />
              )}
            </div>
            {/* Countries dropdown on tablet */}
            <div className="relative">
              <NavBtn
                active={isCountriesActive}
                open={openDropdown === "countries"}
                onClick={() => toggle("countries")}
                icon="🌍"
                label="Countries"
                compact
              />
              {openDropdown === "countries" && (
                <CountriesDropdown
                  countries={COUNTRIES}
                  flagUrl={flagUrl}
                  onClose={() => setOpenDropdown(null)}
                />
              )}
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold text-[#0b1e3d] shadow-md transition-all hover:-translate-y-px"
              style={{ background: "linear-gradient(135deg,#c9a84c,#e8b84b)" }}
            >
              📝 Enquiry
            </Link>
            <HamburgerBtn
              open={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            />
          </div>

          {/* ─── MOBILE: hamburger only ─── */}
          <div className="flex sm:hidden">
            <HamburgerBtn
              open={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            />
          </div>
        </div>
      </nav>

      {/* ══════════════ MOBILE / TABLET DRAWER ══════════════ */}

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(88vw,360px)] flex-col shadow-[−16px_0_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(6,15,42,0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(201,168,76,0.16)",
        }}
      >
        {/* gold top-line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-amber-600/15 px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl border-[1px] border-white shadow-md shadow-white/5"
            >
              <Image
                src={img_helper.logo.logo2}
                alt=""
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[21px] font-playfair uppercase leading-none text-amber-400 transition-colors group-hover:text-amber-300">
                Kovai Overseas
              </p>
              <p className="mt-0.5 text-[10px] tracking-[0.4px] uppercase text-white">
                Gateway To Global Education
              </p>{" "}
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-amber-400/70 transition-all hover:bg-amber-500/15 hover:text-amber-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable links */}
        <div className="nav-scroll flex-1 overflow-y-auto">
          <div className="py-2">
            {navlinks.map((link, i) => {
              if (link.label === "Services" || link.label === "Courses") {
                return (
                  <MobileAccordion
                    key={i}
                    id="courses"
                    label="📚 Courses"
                    open={mobileSection === "courses"}
                    onToggle={() =>
                      setMobileSection((s) =>
                        s === "courses" ? null : "courses",
                      )
                    }
                  >
                    {COURSES.map((group, gi) => (
                      <div key={gi}>
                        <p className="px-6 pb-1 pt-3 text-[9.5px] font-bold uppercase tracking-[1.5px] text-amber-500/70">
                          {group.icon} {group.category}
                        </p>
                        {group.items.map((item, ii) => (
                          <Link
                            key={ii}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-2.5 border-l-2 py-2.5 pl-10 pr-5 text-[13px] transition-all duration-150 hover:border-amber-400 hover:bg-amber-500/8 hover:text-amber-300 ${
                              pathname === item.href
                                ? "border-amber-400 bg-amber-500/10 text-amber-300"
                                : "border-transparent text-white"
                            }`}
                          >
                            <span className="text-sm">{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </MobileAccordion>
                );
              }

              if (link.label === "Countries") {
                return (
                  <MobileAccordion
                    key={i}
                    id="countries"
                    label="🌍 Countries"
                    open={mobileSection === "countries"}
                    onToggle={() =>
                      setMobileSection((s) =>
                        s === "countries" ? null : "countries",
                      )
                    }
                  >
                    {COUNTRIES.map((c, ci) => (
                      <Link
                        key={ci}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 border-l-2 px-6 py-3 text-[13.5px] font-medium transition-all duration-150 hover:border-amber-400 hover:bg-amber-500/8 hover:text-amber-300 ${
                          pathname === c.href
                            ? "border-amber-400 bg-amber-500/10 text-amber-300"
                            : "border-transparent text-white"
                        }`}
                      >
                        <span className="text-xl leading-none">{c.flag}</span>
                        {c.label}
                      </Link>
                    ))}
                  </MobileAccordion>
                );
              }

              const active = pathname === link.href;
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center border-l-2 px-6 py-3.5 text-[13.5px] font-medium transition-all duration-150 hover:border-amber-400 hover:bg-amber-500/8 hover:text-amber-300 ${
                    active
                      ? "border-amber-400 bg-amber-500/10 text-amber-300"
                      : "border-transparent text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Drawer footer */}
        <div className="border-t border-amber-600/15 p-4">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-bold text-[#0b1e3d] shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-400/35 active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg,#c9a84c,#e8b84b)" }}
          >
            <span>📝</span> Enquiry Now
          </Link>
          <p className="mt-3 text-center text-[10px] tracking-wider text-white">
            © 2025 Kovai Overseas Gateway To Global Education
          </p>
        </div>
      </aside>
    </>
  );
}

/* ─────────────────────────────────────────
   NAV BUTTON (desktop/tablet dropdown trigger)
───────────────────────────────────────── */

function NavBtn({
  active,
  open,
  onClick,
  icon,
  label,
  compact = false,
}: {
  active: boolean;
  open: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <button
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-lg font-medium transition-all duration-150 hover:bg-amber-500/10 hover:text-amber-400 ${
        compact ? "px-2.5 py-2 text-xs" : "px-3 py-2 text-[13.5px]"
      } ${active ? "bg-amber-500/15 text-amber-400" : "text-white"}`}
    >
      <span className={compact ? "text-xs" : "text-sm"}>{icon}</span>
      {label}
      <ChevronIcon open={open} />
    </button>
  );
}

/* ─────────────────────────────────────────
   COURSES DROPDOWN
───────────────────────────────────────── */

function CoursesDropdown({
  courses,
  onClose,
}: {
  courses: typeof COURSES;
  onClose: () => void;
}) {
  return (
    <div
      className="nav-dropdown nav-scroll absolute left-0 top-[calc(100%+10px)] z-50 w-[375px] max-sm:w-[min(92vw,375px)] overflow-y-auto rounded-2xl border border-amber-600/20 shadow-2xl"
      style={{
        maxHeight: 460,
        background: "rgba(5,15,45,0.99)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/55 to-transparent" />
      <div className="py-2">
        {courses.map((group, i) => (
          <div key={i} className="mb-0.5">
            <div className="flex items-center gap-2 border-b border-amber-500/8 px-4 pb-1.5 pt-3">
              <span className="text-sm">{group.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-amber-500/75">
                {group.category}
              </span>
            </div>
            {group.items.map((item, j) => (
              <Link
                key={j}
                href={item.href}
                onClick={onClose}
                className="dd-item flex items-center gap-2.5 py-[9px] pl-10 pr-5 text-[13px] transition-all duration-150"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   COUNTRIES DROPDOWN
───────────────────────────────────────── */

function CountriesDropdown({
  countries,
  flagUrl,
  onClose,
}: {
  countries: typeof COUNTRIES;
  flagUrl: (c: string) => string;
  onClose: () => void;
}) {
  return (
    <div
      className="nav-dropdown nav-scroll absolute left-0 top-[calc(100%+10px)] z-50 w-[235px] overflow-y-auto rounded-2xl border border-amber-600/20 shadow-2xl"
      style={{
        maxHeight: 400,
        background: "rgba(5,15,45,0.99)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/55 to-transparent" />
      <div className="py-2">
        {countries.map((c, i) => (
          <Link
            key={i}
            href={c.href}
            onClick={onClose}
            className="dd-item flex items-center gap-3 px-4 py-2.5 text-[13.5px] font-medium transition-all duration-150"
            style={{ color: "rgba(255,255,255,0.73)" }}
          >
            <span className="text-xl leading-none">{c.flag}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={flagUrl(c.code)}
              alt=""
              aria-hidden
              width={22}
              height={15}
              className="h-[15px] w-[22px] shrink-0 rounded-[3px] border border-white/15 object-cover"
            />
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE ACCORDION
───────────────────────────────────────── */

function MobileAccordion({
  id,
  label,
  open,
  onToggle,
  children,
}: {
  id: string;
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/5">
      <button
        aria-expanded={open}
        aria-controls={`mob-${id}`}
        onClick={onToggle}
        className={`flex w-full items-center justify-between border-l-2 px-6 py-3.5 text-[13.5px] font-medium transition-all duration-200 ${
          open
            ? "border-amber-400 bg-amber-500/10 text-amber-300"
            : "border-transparent text-white hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-300"
        }`}
      >
        <span>{label}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        id={`mob-${id}`}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: open ? 9999 : 0 }}
      >
        <div className="bg-black/20">{children}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   HAMBURGER BUTTON
───────────────────────────────────────── */

function HamburgerBtn({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="ml-1 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-amber-500/10"
    >
      <span
        className={`block h-[2px] w-5 rounded-full bg-amber-400 transition-all duration-300 origin-center ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-5 rounded-full bg-amber-400 transition-all duration-300 ${
          open ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-5 rounded-full bg-amber-400 transition-all duration-300 origin-center ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}

/* ─────────────────────────────────────────
   CHEVRON ICON
───────────────────────────────────────── */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`ml-0.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1.5 3.5L5 7L8.5 3.5"
        stroke={open ? "#f59e0b" : "rgba(255,255,255,0.4)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
