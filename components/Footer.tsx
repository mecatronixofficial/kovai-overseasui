import { IconsHelper } from "@/helper/icon_helper";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      href: "https://www.facebook.com/profile.php?id=100081594755028",
      icon: <IconsHelper.Facebook className="text-blue-600" size={24} />,
    },
    {
      href: "https://www.youtube.com/@kovaioverseas",
      icon: <IconsHelper.Youtube className="text-red-600" size={24} />,
    },
    {
      href: "https://wa.me/96299 17222",
      icon: <IconsHelper.Whatsapp className="text-green-600" size={24} />,
    },
    {
      href: "https://www.instagram.com/kovaioverseas_official/",
      icon: <IconsHelper.Instagram className="text-pink-600" size={24} />,
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              Kovai <span>Overseas</span>
            </div>
            <p className="footer-desc">
              Your trusted partner for international medical education. Helping
              Indian students study MBBS abroad since 2006.
            </p>
            <div className="flex flex-row items-center gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/university">Zarmed University</Link>
              </li>
              <li>
                <Link href="/admission">Admission Process</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a>MBBS Admission Assistance</a>
              </li>
              <li>
                <a>University Selection</a>
              </li>
              <li>
                <a>Documentation Support</a>
              </li>
              <li>
                <a>Visa Assistance</a>
              </li>
              <li>
                <a>Pre-Departure Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="flex items-center gap-4">
              <span>
                <IconsHelper.Phone />
              </span>
              <div>
                +91 95009 88505
                <br />
                +91 96299 17222
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <IconsHelper.Mail />
              </span>
              <div>
                info@kovaioverseas.com
                <br />
                admin@kovaioverseas.com
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <IconsHelper.Location />
              </span>
              <div>
                Nedunchalai Nagar,
                <br />
                Salem – 636005, India
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kovai Overseas. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,.25)" }}>
            Designed with ♥ for aspiring doctors
          </p>
        </div>
      </div>
    </footer>
  );
}
