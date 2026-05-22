import { navlinks } from "@/helper/app_helper";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────── */

const SERVICES = [
  { label: "Admission Assistance", href: "/contact" },
  { label: "University Selection", href: "/contact" },
  { label: "Documentation Support", href: "/contact" },
  { label: "Visa Assistance", href: "/contact" },
  { label: "Pre-Departure Support", href: "/contact" },
];

const SOCIALS = [
  {
    href: "https://www.facebook.com/profile.php?id=100081594755028",
    label: "Facebook",
    icon: <IconsHelper.Facebook size={17} />,
    hoverBg: "hover:bg-blue-600 hover:border-blue-500",
  },
  {
    href: "https://www.youtube.com/@kovaioverseas",
    label: "YouTube",
    icon: <IconsHelper.Youtube size={17} />,
    hoverBg: "hover:bg-red-600 hover:border-red-500",
  },
  {
    href: "https://wa.me/919629917222",
    label: "WhatsApp",
    icon: <IconsHelper.Whatsapp size={17} />,
    hoverBg: "hover:bg-green-600 hover:border-green-500",
  },
  {
    href: "https://www.instagram.com/kovaioverseas_official/",
    label: "Instagram",
    icon: <IconsHelper.Instagram size={17} />,
    hoverBg: "hover:bg-pink-600 hover:border-pink-500",
  },
];

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-gray-400"
      style={{ background: "rgb(5,12,38)" }}
    >
      {/* ── Decorative top border matching navbar ── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      {/* ── Subtle ambient glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle,#c9a84c 0%,transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle,#3b82f6 0%,transparent 70%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        {/* ════ GRID ════ */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Brand ── */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            {/* Logo + name */}
            <Link href="/" className="group inline-flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-lg shadow-amber-500/25 ring-1 ring-amber-500/40 transition-all duration-300 group-hover:ring-amber-400"
                style={{
                  background: "linear-gradient(135deg,#c9a84c,#f0d080)",
                }}
              >
                <Image
                  src={img_helper.logo.klogo}
                  alt="Kovai Overseas logo"
                  width={26}
                  height={26}
                  className="h-[26px] w-[26px] object-contain"
                />
              </div>
              <div>
                <p className="text-[21px] font-extrabold uppercase leading-none text-amber-400 transition-colors group-hover:text-amber-300">
                  Kovai Overseas
                </p>
                <p className="mt-0.5 text-[10px] tracking-[0.4px] uppercase text-white">
                  Gateway To Global Education
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Your trusted partner for international education — guiding
              students toward their dream universities across India and the
              world.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:text-white hover:shadow-md ${s.hoverBg}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2.5">
              {navlinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-150 hover:text-amber-400"
                  >
                    <span className="inline-block h-px w-3 bg-amber-500/40 transition-all duration-200 group-hover:w-5 group-hover:bg-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5">
              {SERVICES.map((svc, i) => (
                <li key={i}>
                  <Link
                    href={svc.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-150 hover:text-amber-400"
                  >
                    <span className="inline-block h-px w-3 bg-amber-500/40 transition-all duration-200 group-hover:w-5 group-hover:bg-amber-400" />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-4 text-sm">
              <ContactRow icon={<IconsHelper.Phone />}>
                <a
                  href="tel:+919500988505"
                  className="block hover:text-amber-400 transition-colors"
                >
                  +91 95009 88505
                </a>
                <a
                  href="tel:+919629917222"
                  className="block hover:text-amber-400 transition-colors"
                >
                  +91 96299 17222
                </a>
              </ContactRow>

              <ContactRow icon={<IconsHelper.Mail />}>
                <a
                  href="mailto:info@kovaioverseas.com"
                  className="block hover:text-amber-400 transition-colors break-all"
                >
                  info@kovaioverseas.com
                </a>
                <a
                  href="mailto:admin@kovaioverseas.com"
                  className="block hover:text-amber-400 transition-colors break-all"
                >
                  admin@kovaioverseas.com
                </a>
              </ContactRow>

              <ContactRow icon={<IconsHelper.Location />}>
                <address className="not-italic leading-relaxed text-gray-400">
                  Nedunchalai Nagar,
                  <br />
                  Salem – 636005, India
                </address>
              </ContactRow>
            </ul>
          </div>
        </div>

        {/* ════ DIVIDER ════ */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        {/* ════ BOTTOM BAR ════ */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kovai Overseas Gateway To Global
            Education. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Designed &amp; developed by
            <Link
              href="https://www.mecatronix.one"
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-1 inline-flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white"
            >
              <Image
                src={img_helper.mecatronix.Mecalogo}
                alt="Mecatronix"
                width={18}
                height={18}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span>
                Meca
                <span className="transition-colors group-hover:text-red-500">
                  tronix
                </span>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-5 text-[13px] font-bold uppercase tracking-[1.5px] text-white">
      <span className="mr-2 inline-block h-[10px] w-[3px] rounded-full bg-amber-400 align-middle" />
      {children}
    </h4>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-amber-500/70">{icon}</span>
      <div className="leading-relaxed">{children}</div>
    </li>
  );
}
