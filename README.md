# 🚀 Mohamed Ibrahim — Personal Brand & Engineering Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![i18n](https://img.shields.io/badge/i18n-English%20%7C%20Arabic-green?style=for-the-badge)](https://next-intl-docs.vercel.app/)

> **Live Portfolio & Engineering Platform** for **Mohamed Ibrahim** — Software Engineer specializing in Full-Stack Web Development, High-Performance APIs, and Scalable Digital Products across **Egypt (EG)**, **Saudi Arabia (KSA)**, and the **GCC region**.

---

## ✨ Features & Engineering Highlights

- 🌐 **Bilingual Internationalization (EN / AR)**: Native Right-to-Left (RTL) & Left-to-Right (LTR) support powered by `next-intl`, featuring tailored typography (`Tajawal` for Arabic & `Inter` for English) and natural Egyptian Tech Freelancer dialect copy.
- 🎨 **Dual Theme Engine**:
  - **Sleek Dark Mode**: Deep void canvas (`#08090a`), glowing glassmorphism, electric lime (`#a8ff3e`), sky blue (`#38bdf8`), and indigo (`#818cf8`) accents.
  - **Warm Editorial Light Mode**: Premium warm soft beige & light cafe background palette (`#f5f2eb`), crisp warm off-white cards (`#fdfbf7`), and high-contrast charcoal stone typography (`#1c1917`).
- 💼 **Production Case Studies**: In-depth architecture overviews, client roles, live site links, tech stacks, and key metrics for real-world projects:
  - 🛒 **Razana E-Commerce Platform**: Multi-vendor marketplace with real-time stock sync & payment gateway.
  - 👶 **Veluna Kids Store**: Custom interactive shopping experience & checkout funnel.
  - 📈 **Trado Trading Platform**: Investment & asset management dashboard.
  - 🍞 **Yamizad Bakery Platform**: Local ordering & delivery logistics engine.
- 🛠️ **Engineering Capabilities & Services**: Interactive tab selectors detailing Full-Stack Web Apps, RESTful & GraphQL APIs, Database Architecture, Performance & SEO Optimization, and UI/UX Implementation.
- ⏳ **LOST / Dharma Initiative (`4 8 15 16 23 42`) Easter Egg Ecosystem**:
  - **Phase 1 Boot Sequence**: Retro black CRT terminal loading screen auto-typing `4 8 15 16 23 42`.
  - **Live 108-Minute Hatch Countdown**: Real-time countdown timer in status badges.
  - **Interactive Terminal Modal**: Pop-up CRT terminal reset prompt triggered via key combo `4815162342` or status badge click.
  - **Counter Matrix Shuffling**: Dynamic slot-machine number rolling when stats scroll into view (`useInView`).
- 📱 **Pixel-Perfect Responsive Layout**: Tailored mobile drawer navigation, centered mobile hero call-to-actions, and seamless desktop multi-column grids.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Native CSS Custom Properties |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Localization** | [`next-intl`](https://next-intl-docs.vercel.app/) (i18n routing & JSON message dictionaries) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Image Processing** | Sharp (Favicon & Gradient Composite Generation) |

---

## 📁 Project Structure

```text
portfolio/
├── messages/
│   ├── en.json          # English translation strings & metadata
│   └── ar.json          # Arabic translation strings & dialect copy
├── public/
│   ├── images/          # Project screenshots, client logos, & headshot
│   ├── icon.png         # Custom gradient ring logo favicon
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/    # Internationalized route handlers & layout
│   │   ├── globals.css  # Global CSS tokens (Light/Dark themes, grid bg, typography)
│   │   └── layout.tsx   # Root html/body layout & favicon metadata
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, LoadingScreen, BrandLogo
│   │   ├── projects/    # CaseStudyClient, Project Cards
│   │   ├── providers/   # DharmaProvider (108-timer & secret shortcut listener)
│   │   ├── sections/    # Hero, Engineering, SelectedWork, Experience, Services, About, Contact
│   │   └── ui/          # DharmaModal, ThemeToggle, LanguageSwitcher
│   ├── i18n/            # Routing configuration & locale detection
│   └── lib/             # Utility helpers & WhatsApp URL generators
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚡ Getting Started & Installation

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Clone the Repository

```bash
git clone https://github.com/Mhmdibrahime/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📩 Contact & Connect

- 💬 **WhatsApp**: [+20 109 620 9741](https://wa.me/201096209741)
- ✉️ **Email**: [moibrahime697@gmail.com](mailto:moibrahime697@gmail.com)
- 🐙 **GitHub**: [@Mhmdibrahime](https://github.com/Mhmdibrahime)
- 💼 **LinkedIn**: [Mohamed Ibrahim](https://linkedin.com/in/mhmdibrahime)

---

Developed with ❤️ by **Mohamed Ibrahim** © 2026. All rights reserved.
