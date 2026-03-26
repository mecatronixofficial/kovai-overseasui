# Kovai Overseas – Next.js App

A full Next.js 14 App Router website for **Kovai Overseas**, a medical education consultancy helping Indian students study MBBS abroad.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
kovai-overseas/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # All global styles & CSS variables
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── university/
│   │   └── page.tsx        # Zarmed University page
│   ├── admission/
│   │   └── page.tsx        # Admission Process page
│   ├── testimonials/
│   │   └── page.tsx        # Testimonials page
│   └── contact/
│       ├── page.tsx         # Contact page (server wrapper)
│       └── ContactClient.tsx # Contact form (client component)
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Footer.tsx          # Site footer
│   └── CTABanner.tsx       # Reusable CTA banner
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services |
| `/university` | Zarmed University |
| `/admission` | Admission Process |
| `/testimonials` | Student Testimonials |
| `/contact` | Contact Us |

---

## 🛠 Tech Stack

- **Next.js 14** – App Router, SSR/SSG
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility classes
- **next/image** – Optimized images
- **next/link** – Client-side routing
- CSS Custom Properties – Design tokens (no CSS-in-JS)

---

## ✏️ Customisation

### Update contact details
Edit `components/Footer.tsx` and `app/contact/ContactClient.tsx`:
- Phone numbers
- Email addresses
- Office address

### Update university info
Edit `app/university/page.tsx` for Zarmed University details.

### Add new pages
Create a new folder under `app/` with a `page.tsx` file and add the route to `components/Navbar.tsx`.

---

## 📞 Business Info

- **Phone:** +91 95009 88505 / +91 96299 17222
- **Email:** info@kovaioverseas.com
- **Address:** Nedunchalai Nagar, Salem – 636005, Tamil Nadu, India
- **Office Hours:** Monday – Saturday, 9 AM – 6 PM IST
