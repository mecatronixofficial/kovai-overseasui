import { navlinks } from "@/helper/app_helper";
import { IconsHelper } from "@/helper/icon_helper";
import img_helper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      href: "https://www.facebook.com/profile.php?id=100081594755028",
      icon: <IconsHelper.Facebook size={18} />,
      color: "hover:bg-blue-600",
    },
    {
      href: "https://www.youtube.com/@kovaioverseas",
      icon: <IconsHelper.Youtube size={18} />,
      color: "hover:bg-red-600",
    },
    {
      href: "https://wa.me/919629917222",
      icon: <IconsHelper.Whatsapp size={18} />,
      color: "hover:bg-green-600",
    },
    {
      href: "https://www.instagram.com/kovaioverseas_official/",
      icon: <IconsHelper.Instagram size={18} />,
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <footer className="relative bg-[#020617] text-gray-300 overflow-hidden">
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black opacity-90" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* 🔲 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Kovai <span className="text-yellow-400">Overseas</span>
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for international medical education. Helping
              Indian students study MBBS abroad since 2006.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-6 h-[2px] bg-yellow-400"></span>
            </h4>

            <ul className="space-y-2">
              {navlinks.map((res, index) => (
                <li key={index}>
                  <Link
                    href={res.href}
                    className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {res.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4 relative inline-block">
              Services
              <span className="absolute left-0 -bottom-1 w-6 h-[2px] bg-yellow-400"></span>
            </h4>

            <ul className="space-y-2">
              {[
                "MBBS Admission Assistance",
                "University Selection",
                "Documentation Support",
                "Visa Assistance",
                "Pre-Departure Support",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-400 cursor-pointer transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-1 w-6 h-[2px] bg-yellow-400"></span>
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-center hover:text-yellow-400 transition">
                <IconsHelper.Phone />
                <div>
                  +91 95009 88505 <br />
                  +91 96299 17222
                </div>
              </div>

              <div className="flex gap-3 items-center hover:text-yellow-400 transition">
                <IconsHelper.Mail />
                <div>
                  info@kovaioverseas.com <br />
                  admin@kovaioverseas.com
                </div>
              </div>

              <div className="flex gap-3 items-center hover:text-yellow-400 transition">
                <IconsHelper.Location />
                <div>
                  Nedunchalai Nagar, <br />
                  Salem – 636005, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p >
            © {new Date().getFullYear()} Kovai Overseas. All rights reserved.
          </p>
          <p className="flex flex-row items-center gap-5">
            {" "}
            Designed by{" "}
            <Link
              href="https://www.mecatronix.one"
              className="flex items-center gap-3 group"
            >
              <Image
                src={img_helper.mecatronix.Mecalogo}
                alt="mecatronix"
                width={20}
                height={20}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="group-hover:text-red-600 transition">
                Mecatronix
              </span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
