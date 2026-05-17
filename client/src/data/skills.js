import { LayoutDashboard, Smartphone, Server, Wrench } from 'lucide-react';

export const skills = {
  frontend: {
    title: "Frontend · Web",
    color: "#4da3ff",
    icon: LayoutDashboard,
    items: [
      { name: "React / Next.js", pct: 92 },
      { name: "Vue.js / Nuxt", pct: 80 },
      { name: "TypeScript", pct: 88 },
      { name: "CSS / Tailwind", pct: 90 }
    ]
  },
  mobile: {
    title: "Mobile Apps",
    color: "#34d399",
    icon: Smartphone,
    items: [
      { name: "Flutter / Dart", pct: 88 },
      { name: "React Native", pct: 80 },
      { name: "Firebase / Supabase", pct: 85 },
      { name: "App Store · Play Store", pct: 78 }
    ]
  },
  backend: {
    title: "Backend · Database",
    color: "#a78bfa",
    icon: Server,
    items: [
      { name: "Node.js / Express", pct: 90 },
      { name: "Python / FastAPI", pct: 78 },
      { name: "PostgreSQL / MySQL", pct: 86 },
      { name: "MongoDB / Redis", pct: 80 }
    ]
  },
  devops: {
    title: "DevOps · Tools",
    color: "#fbbf24",
    icon: Wrench,
    items: [
      { name: "Git / GitHub", pct: 95 },
      { name: "Docker / CI-CD", pct: 78 },
      { name: "AWS / Vercel / Railway", pct: 74 },
      { name: "Figma / Design", pct: 70 }
    ]
  }
};
