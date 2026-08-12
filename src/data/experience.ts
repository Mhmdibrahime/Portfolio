export type ExperienceType =
  | "freelance"
  | "full-time"
  | "part-time-remote"
  | "trainee"
  | "volunteer";

export type Experience = {
  id: string;
  company: string;
  companyAr: string;
  role: string;
  roleAr: string;
  period: string;
  periodAr: string;
  type: ExperienceType;
  description: string;
  descriptionAr: string;
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "freelance",
    company: "Freelance",
    companyAr: "Freelance",
    role: "Software Engineer",
    roleAr: "مهندس برمجيات",
    period: "Sep 2024 – Present",
    periodAr: "سبتمبر 2024 – حتى الآن",
    type: "freelance",
    featured: true,
    description:
      "Working directly with clients, founders, and businesses across Egypt, Saudi Arabia, Italy, and the GCC. Building digital products from the initial idea to a deployed, production-ready solution — including web applications, backend systems, APIs, mobile apps, payment integrations, and custom business software.",
    descriptionAr:
      "من سبتمبر 2024 وأنا بشتغل Freelance مع عملاء وأصحاب مشاريع في مصر والسعودية وإيطاليا والخليج. بشتغل على المشروع من أول الفكرة والتخطيط، لحد التطوير والإطلاق، سواء كان Web App، Backend، APIs، Mobile App، نظام دفع، أو Software مخصص للبيزنس.",
  },

  {
    id: "east-kodia",
    company: "East Kodia",
    companyAr: "إيست كوديا",
    role: "Full Stack Developer",
    roleAr: "Full Stack Developer",
    period: "Aug 2025 – Present",
    periodAr: "أغسطس 2025 – حتى الآن",
    type: "full-time",
    description:
      "Building and maintaining production web applications across the full stack. Working on backend systems, APIs, databases, and user-facing features while following clean and maintainable engineering practices.",
    descriptionAr:
      "بشتغل على تطوير وصيانة تطبيقات Web شغالة في الإنتاج، من الـ Frontend والـ Backend لحد الـ APIs وقواعد البيانات. كمان بشتغل على Features كاملة وبحافظ إن الكود يفضل منظم وسهل يتطور مع الوقت.",
  },

  {
    id: "saqr-al-bina",
    company: "Saqr Al-Binaa Al-Hadith",
    companyAr: "صقر البناء الحديث",
    role: "Software Engineer",
    roleAr: "مهندس برمجيات",
    period: "Mar 2026 – Present",
    periodAr: "مارس 2026 – حتى الآن",
    type: "part-time-remote",
    description:
      "Part-time remote software engineering for a construction company. Working on backend systems, REST APIs, database design, and internal business solutions that support day-to-day operations.",
    descriptionAr:
      "بشتغل Part-time وRemote مع شركة صقر البناء الحديث، وبشارك في تطوير الأنظمة البرمجية اللي بتستخدمها الشركة في شغلها اليومي، خصوصًا الـ Backend والـ REST APIs وقواعد البيانات والحلول الداخلية.",
  },

  {
    id: "al-ahly-momkn",
    company: "Al Ahly Momkn for E-Payments",
    companyAr: "الأهلي ممكن للمدفوعات الإلكترونية",
    role: "Software Engineer Trainee",
    roleAr: "متدرب هندسة برمجيات",
    period: "Sep 2024 – Dec 2024",
    periodAr: "سبتمبر 2024 – ديسمبر 2024",
    type: "trainee",
    description:
      "Hands-on software engineering training in a fintech environment. Worked with payment-related APIs, backend development, system integrations, and real-world software development practices.",
    descriptionAr:
      "كانت تجربة عملية في مجال الـ FinTech، اشتغلت خلالها على Backend Development وAPIs وتكاملات مرتبطة بالمدفوعات، واتعلمت أكتر عن طريقة بناء وتشغيل الأنظمة البرمجية في بيئة حقيقية.",
  },

  {
    id: "ieee",
    company: "IEEE Student Chapter",
    companyAr: "IEEE Student Chapter",
    role: "Head of Back-End Committee",
    roleAr: "رئيس لجنة الـ Back-End",
    period: "Oct 2024 – May 2025",
    periodAr: "أكتوبر 2024 – مايو 2025",
    type: "volunteer",
    description:
      "Led the backend committee, organized technical sessions and workshops, mentored junior developers, and helped build a practical learning environment for students interested in backend development.",
    descriptionAr:
      "قدت لجنة الـ Back-End في IEEE، ونظمت Sessions وWorkshops تقنية، وساعدت أعضاء الفريق يتعلموا بشكل عملي، وكمان كنت بوجّه المطورين الجدد وأشاركهم خبرتي في الـ Backend والبرمجة.",
  },
];

export const experienceTypeLabels: Record<
  ExperienceType,
  { en: string; ar: string; color: string; bg: string; border: string }
> = {
  freelance: {
    en: "Freelance",
    ar: "Freelance",
    color: "#a8ff3e",
    bg: "rgba(168,255,62,0.12)",
    border: "rgba(168,255,62,0.25)",
  },

  "full-time": {
    en: "Full-time",
    ar: "دوام كامل",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.25)",
  },

  "part-time-remote": {
    en: "Part-time · Remote",
    ar: "Part-time · Remote",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.12)",
    border: "rgba(192,132,252,0.25)",
  },

  trainee: {
    en: "Trainee",
    ar: "تدريب",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.25)",
  },

  volunteer: {
    en: "Volunteer",
    ar: "تطوع",
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    border: "rgba(249,115,22,0.25)",
  },
};

// Technology ecosystem
export const techEcosystem = [
  {
    id: "web",
    label: "Web & Frameworks",
    labelAr: "الويب والـ Frameworks",
    icon: "globe",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "jQuery",
      "Bootstrap",
    ],
  },

  {
    id: "backend",
    label: "Backend & APIs",
    labelAr: "الـ Backend والـ APIs",
    icon: "server",
    items: [
      "C#",
      "ASP.NET Core",
      ".NET Web API",
      "EF Core",
      "Node.js",
      "REST APIs",
      "SignalR",
      "WCF",
      "SOAP",
    ],
  },

  {
    id: "mobile",
    label: "Mobile Development",
    labelAr: "تطبيقات الموبايل",
    icon: "smartphone",
    items: [
      "Flutter",
      "Dart",
      "GetX",
      "Firebase",
      "FCM",
      "REST APIs",
    ],
  },

  {
    id: "database",
    label: "Databases",
    labelAr: "قواعد البيانات",
    icon: "database",
    items: [
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "EF Core",
      "Prisma",
      "Stored Procedures",
      "Indexing",
      "Query Optimization",
      "Data Migration",
    ],
  },

  {
    id: "cloud",
    label: "Cloud & DevOps",
    labelAr: "Cloud و DevOps",
    icon: "cloud",
    items: [
      "Microsoft Azure",
      "Azure DevOps",
      "Git",
      "TFS",
      "CI/CD",
      "Hostinger",
      "SmarterASP.NET",
      "MonsterASP.NET",
      "Production Monitoring",
    ],
  },

  {
    id: "integrations",
    label: "Payments & Integrations",
    labelAr: "المدفوعات والتكاملات",
    icon: "plug",
    items: [
      "Stripe",
      "PayPal",
      "Paymob",
      "Kashier",
      "JWT",
      "OAuth",
      "ASP.NET Identity",
      "RBAC",
      "Swagger / OpenAPI",
      "Webhooks",
      "REST Integrations",
    ],
  },

  {
    id: "architecture",
    label: "Architecture & Engineering",
    labelAr: "الهندسة والمعمارية",
    icon: "layers",
    items: [
      "Clean Architecture",
      "N-Tier Architecture",
      "SOLID",
      "OOP",
      "Design Patterns",
      "Repository Pattern",
      "Unit of Work",
      "Agile / Scrum",
      "Full Project Life-Cycle",
    ],
  },

  {
    id: "security",
    label: "Security",
    labelAr: "الأمان والحماية",
    icon: "shield",
    items: [
      "SSL",
      "HTTPS",
      "JWT Authentication",
      "OAuth2",
      "Authorization",
      "RBAC",
      "CORS",
      "Secure File Uploads",
    ],
  },

  {
    id: "performance",
    label: "Performance & Quality",
    labelAr: "الأداء وجودة الكود",
    icon: "zap",
    items: [
      "SignalR",
      "In-Memory Caching",
      "Distributed Caching",
      "Query Optimization",
      "Unit Testing",
      "Code Reviews",
      "Error Handling",
      "Performance Optimization",
    ],
  },
];