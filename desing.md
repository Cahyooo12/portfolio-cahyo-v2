# Prompt: Portfolio Website — Full Stack & Apps Developer
## Tech Stack: React + Node.js (Express) + Apple Design System

---

## 🎯 KONTEKS PROYEK

Buatkan **website portofolio profesional** untuk seorang **Full Stack Developer & Apps Developer** bernama **Ahmad**, berbasis di Yogyakarta, Indonesia.

**Tech Stack yang digunakan:**
- **Frontend:** React (Vite atau Create React App), React Router DOM, Tailwind CSS atau CSS Modules
- **Backend:** Node.js + Express.js (untuk form kontak, API endpoint)
- **State Management:** React useState / useEffect (tidak perlu Redux)
- **Animasi:** Framer Motion untuk page transitions dan scroll reveal
- **Icons:** Lucide React atau React Icons
- **Font:** `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif`

---

## 🎨 DESIGN SYSTEM — APPLE STYLE

### Tema: Dark Apple Style
Gunakan dark theme sebagai default dengan toggle ke light mode.

### Color Palette (CSS Variables)
```css
:root {
  /* Dark Theme (default) */
  --bg-primary: #0a0a0b;
  --bg-secondary: #111113;
  --bg-card: #1c1c1e;
  --bg-elevated: #2c2c2e;

  --text-primary: #f5f5f7;
  --text-secondary: #d1d1d6;
  --text-tertiary: #8e8e93;
  --text-muted: #636366;

  --accent-blue: #0071e3;
  --accent-blue-hover: #006edb;
  --accent-blue-light: #4da3ff;
  --accent-green: #34d399;
  --accent-purple: #a78bfa;
  --accent-amber: #fbbf24;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.14);

  --nav-bg: rgba(10, 10, 11, 0.85);
}

[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f7;
  --bg-card: #ffffff;
  --bg-elevated: #ededf2;

  --text-primary: #1d1d1f;
  --text-secondary: #333336;
  --text-tertiary: #6e6e73;
  --text-muted: #aeaeb2;

  --accent-blue-light: #0071e3;
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-medium: rgba(0, 0, 0, 0.14);

  --nav-bg: rgba(255, 255, 255, 0.82);
}
```

### Typography
```css
/* Display / Heading */
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
font-weight: 600–700;
letter-spacing: -0.03em;

/* Body / UI */
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
font-size: 17px;
font-weight: 400;
line-height: 1.65;
```

### Spacing System
`8 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 56 → 80 → 96px`

### Component Rules
- **Buttons:** `border-radius: 50px` (pill), min-height 44px
- **Cards:** `border-radius: 0` (sharp), `border: 1px solid var(--border-subtle)`
- **Nav:** height 44px, `backdrop-filter: blur(24px) saturate(180%)`
- **Max container width:** 1262px, centered
- **Primary CTA color:** `#0071e3`

---

## 📁 STRUKTUR PROJECT

```
portfolio/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ScrollReveal.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── data/
│   │   │   ├── projects.js
│   │   │   └── skills.js
│   │   ├── hooks/
│   │   │   ├── useTheme.js
│   │   │   └── useScrollReveal.js
│   │   ├── styles/
│   │   │   ├── variables.css
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   └── photo.jpg          # Foto profil
│   └── package.json
│
├── server/                    # Node.js + Express Backend
│   ├── routes/
│   │   └── contact.js         # POST /api/contact
│   ├── middleware/
│   │   └── rateLimiter.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📄 SECTION-BY-SECTION DETAIL

### 1. NAVBAR — `Navbar.jsx`
```
- Sticky, height: 44px
- Logo: "</ >" icon + "Ahmad." text
- Links: About | Projects | Skills | Contact
- Kanan: ThemeToggle button (moon/sun icon) + "Hire me" pill button (#0071e3)
- backdrop-filter blur saat scroll
- Mobile: hamburger menu dengan slide-down drawer
```

### 2. HERO — `Hero.jsx`
```
Layout: CSS Grid 2 kolom — [konten kiri + foto] | [sidebar kanan]

KIRI (full height):
- Foto profil full-height, object-fit: cover, di belakang teks (z-index)
- Garis dekoratif (width: 40px, height: 2px, bg: white) di atas headline
- Headline: "I'm Ahmad, a Full Stack & Apps Dev."
  → font-size: clamp(42px, 5vw, 64px), font-weight: 700
- Sub: "Building end-to-end web apps and mobile apps..."
- Scroll-down button: circle (48px), bg: #0071e3, bounce animation

KANAN (sidebar, border-left: 1px solid border-subtle):
- Block 1 — ABOUT ME: teks singkat + "Learn more →" link uppercase
- Block 2 — MY WORK: teks singkat + "Browse portfolio →" link uppercase
- Block 3 — FOLLOW ME: icon buttons (GitHub, LinkedIn, Instagram, Twitter, YouTube)
  → masing-masing 36x36px, border-radius: 8px, hover: bg #0071e3
```

### 3. ABOUT — `About.jsx`
```
- Eyebrow: "/ ABOUT ME" (slash biru + text uppercase)
- Grid 2 kolom: [teks bio + stats] | [info card]

KIRI:
- Heading: "Web developer. App builder. Problem solver."
- Bio 2 paragraf tentang Full Stack + Apps Developer
- Skill tags: Clean Architecture, Cross-platform, API Design, UI/UX Aware, Open Source
- Stats row (3 kolom, sharp border grid):
  → "3+" Years exp. | "20+" Projects | "8+" Mobile apps

KANAN (info card, bg: var(--bg-card), border: 1px solid var(--border-subtle)):
- Name: Ahmad (Your Name)
- Role: Full Stack · Apps Developer
- Based in: Yogyakarta, Indonesia
- Platforms: Web · iOS · Android
- Available for: Freelance · Full-time · Remote
- Languages: Indonesian · English
- Button: "Download CV" (pill, full width, #0071e3)
```

### 4. PROJECTS — `Projects.jsx`
```
Data dari: src/data/projects.js

Filter buttons: All | Web | Mobile App | Web + App
→ filter state di React, animasi fade saat switch

Grid 3 kolom (collapse ke 1 di mobile):
Background grid: 1px solid var(--border-subtle)

Setiap ProjectCard:
- Emoji icon (44x44px, border-radius: 10px, bg: var(--bg-elevated))
- Category tag (warna berbeda: web=biru, app=hijau, both=ungu)
- Nama project (font-size: 20px, weight: 600)
- Deskripsi (font-size: 14px, color: var(--text-tertiary))
- Tech stack pills (kecil, bg: var(--bg-elevated))
- "View project →" link (color: var(--accent-blue-light))

DATA PROJECTS (src/data/projects.js):
[
  { id:1, name:"ShopFlow", cat:"web", icon:"🛒", tag:"Web · E-commerce",
    desc:"Full-featured online store with real-time inventory, payment gateway, and admin dashboard.",
    stack:["Next.js","Node.js","PostgreSQL","Stripe"], link:"#" },

  { id:2, name:"TravelMate", cat:"app", icon:"🗺️", tag:"Mobile · Travel",
    desc:"AI itinerary planner app with map integration, offline mode, and push notifications.",
    stack:["Flutter","FastAPI","Mapbox","Firebase"], link:"#" },

  { id:3, name:"AnalytIQ", cat:"both", icon:"📊", tag:"Web + App · SaaS",
    desc:"Business analytics platform with live dashboards on web and companion mobile app.",
    stack:["React","React Native","Express","Redis"], link:"#" },

  { id:4, name:"SakuQ", cat:"app", icon:"💸", tag:"Mobile · Finance",
    desc:"Personal finance tracker with budgeting, expense categorization, and monthly reports.",
    stack:["Flutter","Dart","Firebase","Hive"], link:"#" },

  { id:5, name:"ChatSpace", cat:"web", icon:"💬", tag:"Web · Real-time",
    desc:"Real-time team chat with channels, threads, file sharing, and end-to-end encryption.",
    stack:["Vue.js","Socket.io","MongoDB","JWT"], link:"#" },

  { id:6, name:"MenuGo", cat:"both", icon:"🍽️", tag:"Web + App · F&B",
    desc:"Digital menu & ordering system — restaurant web dashboard + Flutter app with QR scan ordering.",
    stack:["Flutter","Next.js","Node.js","Supabase"], link:"#" }
]
```

### 5. SKILLS — `Skills.jsx`
```
Grid 2x2 (2 kolom, 2 baris), sharp border grid

Setiap SkillGroup:
- Icon (Lucide) + Group title
- List skill dengan progress bar:
  → Label kiri + persentase kanan
  → Bar: height 2px, animasi scaleX dari 0 → 1 saat scroll masuk viewport
  → Gunakan IntersectionObserver atau Framer Motion whileInView

SKILL DATA (src/data/skills.js):
{
  frontend: {
    title: "Frontend · Web", color: "#4da3ff",
    icon: "LayoutDashboard",
    items: [
      { name:"React / Next.js", pct:92 },
      { name:"Vue.js / Nuxt", pct:80 },
      { name:"TypeScript", pct:88 },
      { name:"CSS / Tailwind", pct:90 }
    ]
  },
  mobile: {
    title: "Mobile Apps", color: "#34d399",
    icon: "Smartphone",
    items: [
      { name:"Flutter / Dart", pct:88 },
      { name:"React Native", pct:80 },
      { name:"Firebase / Supabase", pct:85 },
      { name:"App Store · Play Store", pct:78 }
    ]
  },
  backend: {
    title: "Backend · Database", color: "#a78bfa",
    icon: "Server",
    items: [
      { name:"Node.js / Express", pct:90 },
      { name:"Python / FastAPI", pct:78 },
      { name:"PostgreSQL / MySQL", pct:86 },
      { name:"MongoDB / Redis", pct:80 }
    ]
  },
  devops: {
    title: "DevOps · Tools", color: "#fbbf24",
    icon: "Wrench",
    items: [
      { name:"Git / GitHub", pct:95 },
      { name:"Docker / CI-CD", pct:78 },
      { name:"AWS / Vercel / Railway", pct:74 },
      { name:"Figma / Design", pct:70 }
    ]
  }
}
```

### 6. CONTACT — `Contact.jsx`
```
- Eyebrow: "LET'S WORK TOGETHER" (uppercase, color: accent-blue-light)
- Heading: "Have a project in mind?"
- Sub: "Web app, mobile app, or both — open to freelance, full-time, and remote."
- Email button: pill, bg #0071e3, href: mailto:hello@yourdomain.com

Form kontak (kirim ke Node.js backend POST /api/contact):
- Input: Name, Email, Message (textarea)
- Submit button: "Send Message" (pill, #0071e3)
- Success/error state feedback

Social links row (border-top):
GitHub | LinkedIn | Instagram | Twitter | Resume
```

---

## 🖥️ BACKEND — Node.js + Express

### `server/server.js`
```javascript
// Setup Express server
// Port: 5000
// CORS: allow localhost:5173 (Vite) dan localhost:3000
// Routes: /api/contact
// Static: serve client/dist saat production

const express = require('express');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRouter);

app.listen(5000, () => console.log('Server running on port 5000'));
```

### `server/routes/contact.js`
```javascript
// POST /api/contact
// Body: { name, email, message }
// Validasi: semua field wajib, email format valid
// Response: { success: true, message: "Message sent!" }
// Opsional: kirim email via Nodemailer ke email kamu
// Rate limiting: max 5 request per 15 menit per IP
```

---

## ⚙️ FITUR TEKNIS WAJIB

```
✅ React Router DOM — single page app
✅ Dark/Light theme toggle — simpan ke localStorage
✅ Smooth scroll ke setiap section
✅ Scroll reveal animation — Framer Motion whileInView
✅ Skill bar animation — IntersectionObserver
✅ Project filter — React state, animasi fade
✅ Contact form — fetch ke Express API
✅ Responsive — mobile first, breakpoints: 768px, 1024px
✅ Lazy loading foto
✅ Meta tags SEO dasar
✅ Loading state di contact form
✅ 404 page sederhana
```

---

## 📦 PACKAGE.JSON DEPENDENCIES

### Client (React)
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

### Server (Node.js)
```json
{
  "dependencies": {
    "express": "^4.x",
    "cors": "^2.x",
    "dotenv": "^16.x",
    "express-rate-limit": "^7.x",
    "nodemailer": "^6.x"
  },
  "devDependencies": {
    "nodemon": "^3.x"
  }
}
```

---

## 🚀 CARA MENJALANKAN

```bash
# 1. Clone / setup project
mkdir portfolio && cd portfolio

# 2. Setup client
cd client
npm install
npm run dev        # → http://localhost:5173

# 3. Setup server (terminal baru)
cd server
npm install
cp .env.example .env   # isi EMAIL_USER, EMAIL_PASS
node server.js         # → http://localhost:5000

# 4. Build production
cd client && npm run build
# Serve static dari Express
```

---

## 🔧 INSTRUKSI UNTUK AI / DEVELOPER

Saat generate kode ini, pastikan:

1. **Setiap section adalah komponen terpisah** — Hero.jsx, About.jsx, Projects.jsx, Skills.jsx, Contact.jsx
2. **Data dipisah** dari komponen — `src/data/projects.js` dan `src/data/skills.js`
3. **Custom hook** untuk theme: `useTheme.js` (toggle dark/light, simpan ke localStorage)
4. **Framer Motion** untuk animasi: `initial={{ opacity:0, y:30 }}` `whileInView={{ opacity:1, y:0 }}` `viewport={{ once:true }}`
5. **CSS Variables** digunakan konsisten — jangan hardcode warna
6. **Navbar sticky** dengan backdrop-filter blur
7. **Form contact** terhubung ke Express endpoint via `fetch('/api/contact', { method:'POST', ... })`
8. **Responsive** — grid 3 kolom collapse ke 1 di mobile
9. **Foto hero** menggunakan `<img src="/photo.jpg" alt="Ahmad" />` dengan object-fit: cover
10. **Apple typography** — letter-spacing negatif untuk heading besar, generous line-height untuk body

---

## 🎨 REFERENSI VISUAL

- **Hero layout:** split — foto full-height di kiri, sidebar info di kanan (border-left)
- **Theme:** dark deep black `#0a0a0b` (bukan abu-abu), Apple-style minimalist
- **Accent:** `#0071e3` untuk semua CTA dan interaktif
- **Sidebar kanan:** 3 blok (About Me, My Work, Follow Me) dipisah border horizontal
- **Section eyebrow:** `/ NAMA SECTION` dengan slash biru
- **Project grid:** 3 kolom, background grid dari border 1px (bukan card shadow)
- **Skill bars:** tipis 2px, warna berbeda per kategori (biru/hijau/ungu/amber)

---

*Prompt ini mencakup seluruh isi percakapan desain portofolio Ahmad — Full Stack & Apps Developer, Yogyakarta.*
*Generate dengan React + Node.js sesuai struktur di atas untuk hasil yang selaras dengan Apple Design System.*