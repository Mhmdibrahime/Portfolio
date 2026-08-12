export type Project = {
  slug: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  year: string;
  description: string;
  descriptionAr: string;
  shortDesc: string;
  shortDescAr: string;
  liveUrl: string;
  role: string;
  roleAr: string;
  tech: string[];
  accentColor: string;
  // Asset slots — drop real images here when provided
  imageUrl: string | null;
  imageAlt: string | null;
  // Case study content
  overview: string;
  overviewAr: string;
  problem: string;
  problemAr: string;
  solution: string;
  solutionAr: string;
  contribution: string;
  contributionAr: string;
};

// Total projects delivered (selected + private/inactive)
export const TOTAL_PROJECTS = 10;
export const SELECTED_PROJECTS = 6;

export const projects: Project[] = [
  {
    slug: "trado",
    title: "TRADO",
    titleAr: "تريدو",
    category: "Investment Platform",
    categoryAr: "منصة استثمارية",
    year: "2025",
    description:
      "A confidential B2B platform connecting business owners who want to sell their companies with investors seeking real opportunities in the GCC market.",
    descriptionAr:
      "منصة B2B سرية بتربط أصحاب الأعمال اللي عايزين يبيعوا شركاتهم بالمستثمرين اللي بيدوروا على فرص حقيقية في سوق الخليج.",
    shortDesc: "Business-investment matchmaking platform for the GCC market.",
    shortDescAr: "منصة مطابقة أعمال واستثمار لسوق الخليج العربي.",
    liveUrl: "https://tradoplatform.com",
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    tech: ["ASP.NET Core", "React", "SQL Server", "Azure", "JWT Auth"],
    accentColor: "#5C8A6E",
    imageUrl: "/projects/trado.png",
    imageAlt: "TRADO — Business Investment Matchmaking Platform",
    overview:
      "TRADO is a digital matchmaking platform for the Saudi and GCC market. It connects business owners looking to sell their projects with investors and brokers — while keeping all listings completely anonymous and confidential. The platform supports multi-role registration (Seller, Buyer, Broker) and includes an AI-powered financial evaluation engine.",
    overviewAr:
      "تريدو منصة رقمية لمطابقة الأعمال في السوق السعودي ودول الخليج. بتربط أصحاب الأعمال اللي عايزين يبيعوا مشاريعهم بالمستثمرين والوسطاء، مع الحفاظ على سرية تامة لكل الإعلانات. المنصة بتدعم تسجيل متعدد الأدوار وفيها محرك تقييم مالي بالذكاء الاصطناعي.",
    problem:
      "Business owners in the GCC region lacked a secure, anonymous channel to list their companies for sale without exposing sensitive financial and operational data. Investors had no structured way to discover vetted acquisition opportunities.",
    problemAr:
      "أصحاب الأعمال في الخليج ماكانش عندهم قناة آمنة وسرية يعرضوا فيها شركاتهم للبيع من غير ما يكشفوا البيانات المالية والتشغيلية الحساسة. والمستثمرين ماكانش عندهم طريقة منظمة يلاقوا فيها فرص استحواذ موثوقة.",
    solution:
      "Built a full-stack platform with anonymous listing capabilities, multi-role authentication, an AI financial evaluation engine, and a broker-facilitated deal flow. The platform manages the entire lifecycle from listing to investor introduction.",
    solutionAr:
      "بنيت منصة متكاملة بإمكانية الإدراج المجهول، والمصادقة متعددة الأدوار، ومحرك التقييم المالي بالذكاء الاصطناعي، وتدفق الصفقات بمساعدة الوسطاء.",
    contribution:
      "Architected and built the full-stack application — backend APIs, multi-role JWT authentication, database schema, React frontend, AI-assisted financial evaluation module, and the confidential listing system.",
    contributionAr:
      "صممت وبنيت التطبيق الكامل — APIs الخلفية، مصادقة JWT متعددة الأدوار، قاعدة البيانات، واجهة React، وحدة التقييم المالي بالذكاء الاصطناعي، ونظام الإدراج السري.",
  },
  {
    slug: "veluna-kids",
    title: "Veluna Kids",
    titleAr: "فيلونا كيدز",
    category: "E-Commerce",
    categoryAr: "تجارة إلكترونية",
    year: "2026",
    description:
      "A custom-built e-commerce store for a premium Egyptian kids' personal care brand — bilingual, with full product catalogue and integrated order management.",
    descriptionAr:
      "متجر إلكتروني مخصص لعلامة تجارية مصرية متميزة لمستحضرات عناية الأطفال — بالعربي والإنجليزي، مع كتالوج منتجات كامل وإدارة طلبات متكاملة.",
    shortDesc: "Premium e-commerce platform for kids' personal care products.",
    shortDescAr: "منصة تجارة إلكترونية متميزة لمنتجات عناية الأطفال.",
    liveUrl: "https://velunakids.com",
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    tech: ["ASP.NET Core", "React", "SQL Server", "Payment Integration"],
    accentColor: "#7F9D3D",
    imageUrl: "/projects/veluna-kids.png",
    imageAlt: "Veluna Kids — E-Commerce Platform for Kids' Personal Care",
    overview:
      "Veluna Kids is an Egyptian personal care brand specializing in gentle, natural products for children. The platform serves hundreds of customers and supports a bilingual Arabic/English shopping experience with promotions, bundles, and flexible shipping options.",
    overviewAr:
      "فيلونا كيدز علامة تجارية مصرية متخصصة في منتجات العناية الطبيعية اللطيفة للأطفال. المنصة بتخدم مئات العملاء وبتدعم تجربة تسوق بالعربي والإنجليزي مع عروض ترويجية وباقات وخيارات شحن مرنة.",
    problem:
      "The brand needed a fully custom e-commerce platform reflecting its premium positioning, supporting Arabic-first customers in Egypt, with local payment methods and a robust order management backend.",
    problemAr:
      "العلامة التجارية كانت محتاجة منصة تجارة إلكترونية مخصصة تعكس مكانتها المتميزة، تدعم العملاء العرب في مصر، بطرق دفع محلية وخلفية إدارة طلبات قوية.",
    solution:
      "Developed a complete full-stack e-commerce solution with product catalogue management, inventory tracking, promotions engine, bilingual content (AR/EN), integrated Egyptian payment processing, customer reviews, and newsletter functionality.",
    solutionAr:
      "طورت حل تجارة إلكترونية متكامل مع إدارة كتالوج المنتجات، تتبع المخزون، محرك العروض، محتوى ثنائي اللغة، معالجة الدفع المصرية، مراجعات العملاء، والنشرة الإخبارية.",
    contribution:
      "Built the complete platform from database design to frontend — product management system, cart and checkout flow, order processing backend, and bilingual CMS.",
    contributionAr:
      "بنيت المنصة الكاملة من تصميم قاعدة البيانات للواجهة — نظام إدارة المنتجات، عملية الطلب، الخلفية، ونظام CMS ثنائي اللغة.",
  },
  {
    slug: "razana",
    title: "RAZANA",
    titleAr: "رزانة",
    category: "Fashion E-Commerce",
    categoryAr: "موضة إلكترونية",
    year: "2025",
    description:
      "A sleek e-commerce platform for an Egyptian women's modest fashion boutique — curated catalogue, category filtering, and a seamless shopping experience.",
    descriptionAr:
      "منصة إلكترونية أنيقة لبوتيك أزياء محتشمة للمرأة المصرية — كتالوج منسق وتصفية بالفئات وتجربة تسوق سلسة.",
    shortDesc: "Modern e-commerce for women's modest fashion in Egypt.",
    shortDescAr: "تجارة إلكترونية عصرية لأزياء المرأة المحتشمة في مصر.",
    liveUrl: "https://razanawebsite.com",
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    tech: ["ASP.NET Core", "React", "SQL Server", "REST API"],
    accentColor: "#2D2D2D",
    imageUrl: "/projects/Razana.png",
    imageAlt: "RAZANA — Women's Modest Fashion E-Commerce",
    overview:
      "RAZANA is an Egyptian women's modest fashion boutique operating under the brand tagline 'FEEL MODESTY IN YOU'. The platform offers a curated catalogue across Abayas, Dresses, Sets, Chemises, and Long Blazers, with search, filtering, and sorting capabilities.",
    overviewAr:
      "رزانة بوتيك أزياء محتشمة للمرأة المصرية بشعار 'FEEL MODESTY IN YOU'. المنصة بتقدم كتالوج منسق عبر فئات مختلفة مع إمكانيات البحث والتصفية والفرز.",
    problem:
      "The boutique needed a fast, visually clean SPA-style store that could handle real-time inventory, product categories, and provide an elegant shopping experience matching the brand's premium aesthetic.",
    problemAr:
      "البوتيك كانت محتاجة متجر SPA سريع ونظيف بصريًا يتعامل مع المخزون الفوري وفئات المنتجات ويقدم تجربة تسوق أنيقة تتناسب مع هوية العلامة التجارية.",
    solution:
      "Built a single-page application e-commerce store with instant navigation, category-based filtering, sort by price/popularity, cart management, and user accounts.",
    solutionAr:
      "بنيت متجر تطبيق صفحة واحدة مع التنقل الفوري، التصفية بالفئات، الفرز حسب السعر والشعبية، إدارة العربة، وحسابات المستخدم.",
    contribution:
      "Developed the full-stack platform including RESTful API, product and inventory management, user authentication, cart and order processing, and the React SPA frontend.",
    contributionAr:
      "طورت المنصة الكاملة بما في ذلك REST API، إدارة المنتجات والمخزون، مصادقة المستخدم، معالجة العربة والطلبات، وواجهة React SPA.",
  },
  {
    slug: "yamizad",
    title: "Yamizad",
    titleAr: "يميزاد",
    category: "Mobile App Backend",
    categoryAr: "خلفية تطبيق موبايل",
    year: "2026",
    description:
      "A subscription-based school breakfast delivery service for Saudi Arabia — fresh meals delivered to children's classrooms, powered by a mobile app with Al Rajhi Bank payment integration.",
    descriptionAr:
      "خدمة توصيل فطور مدرسي بالاشتراك للسعودية — وجبات طازجة بتتوصل لفصول الأطفال، بتشتغل من خلال تطبيق موبايل مع تكامل دفع بنك الراجحي.",
    shortDesc: "School breakfast subscription delivery app backend for KSA.",
    shortDescAr: "خلفية تطبيق توصيل فطور مدرسي بالاشتراك للسعودية.",
    liveUrl: "http://yamizad.com",
    role: "Backend Developer",
    roleAr: "مطور خلفية",
    tech: ["ASP.NET Core", "SQL Server", "Al Rajhi Payment API", "Firebase FCM", "Flutter"],
    accentColor: "#4CAF50",
    imageUrl: "/projects/Yamizad.png",
    imageAlt: "Yamizad — School Breakfast Delivery App",
    overview:
      "Yamizad is a Saudi Arabia-based service that prepares and delivers fresh breakfast meals to children's classrooms daily. Parents subscribe through a Flutter mobile app, manage allergies and meal preferences, and receive weekly consumption reports. Payments processed via Al Rajhi Bank (Mada, Apple Pay, credit/debit cards).",
    overviewAr:
      "يميزاد خدمة سعودية بتحضر وتوصل وجبات الفطور الطازجة يوميًا لفصول الأطفال. الوالدين بيشتركوا من خلال تطبيق Flutter، بيديروا الحساسيات وتفضيلات الوجبات، وبياخدوا تقارير استهلاك أسبوعية. المدفوعات بتتعالج من خلال بنك الراجحي.",
    problem:
      "Saudi parents needed a reliable, app-managed solution to ensure their children received fresh, allergy-safe breakfasts at school without carrying lunchboxes or relying on school cafeterias.",
    problemAr:
      "الآباء السعوديون كانوا محتاجين حل موثوق يُدار من خلال تطبيق لضمان حصول أطفالهم على فطور طازج وآمن من الحساسية في المدرسة.",
    solution:
      "Built the backend API system powering the Flutter mobile app — subscription management with multiple plans, allergy/preference management, meal scheduling, Al Rajhi payment integration, and Firebase push notifications.",
    solutionAr:
      "بنيت نظام API الخلفي اللي بيشغل تطبيق Flutter — إدارة الاشتراكات بخطط متعددة، إدارة الحساسيات، جدولة الوجبات، تكامل دفع بنك الراجحي، وإشعارات Firebase.",
    contribution:
      "Designed and implemented the RESTful backend API serving the Flutter mobile application. Built subscription lifecycle management, allergy filtering engine, Al Rajhi Bank payment gateway integration, Firebase Cloud Messaging, and the reporting system.",
    contributionAr:
      "صممت وطبقت REST API الخلفية اللي بتخدم تطبيق Flutter. بنيت إدارة دورة حياة الاشتراك، محرك تصفية الحساسية، تكامل بوابة دفع بنك الراجحي، Firebase Cloud Messaging، ونظام التقارير.",
  },
  {
    slug: "capital-link",
    title: "Capital Link",
    titleAr: "كابيتال لينك",
    category: "Corporate Website",
    categoryAr: "موقع مؤسسي",
    year: "2026",
    description:
      "Corporate website for a Saudi educational investment company operating across five service areas: education & training, school management, support services, investment, and educational marketing.",
    descriptionAr:
      "موقع مؤسسي لشركة سعودية للاستثمار التعليمي بتشتغل في خمس مجالات: التعليم والتدريب، إدارة المدارس، الخدمات الداعمة، الاستثمار، والتسويق التعليمي.",
    shortDesc: "Saudi educational investment company corporate website.",
    shortDescAr: "موقع مؤسسي لشركة سعودية للاستثمار التعليمي.",
    liveUrl: "https://capital-link-ksa.com",
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    tech: ["ASP.NET Core", "React", "SQL Server", "Azure", "REST API"],
    accentColor: "#1E4A7A",
    imageUrl: "/projects/Capital-Link.png",
    imageAlt: "Capital Link — Saudi Educational Investment Company",
    overview:
      "Capital Link is a Saudi Arabian company specializing in educational investment and professional school operations. It operates multiple platforms including TRADO (business matchmaking), Yamizad (school breakfast delivery), Expert Cadres (teacher qualification), and Mqasef (school cafeteria management).",
    overviewAr:
      "كابيتال لينك شركة سعودية متخصصة في الاستثمار التعليمي وتشغيل المدارس. بتدير منصات متعددة منها تريدو ويميزاد والكوادر الخبراء ومقاصف.",
    problem:
      "Capital Link needed a professional, bilingual corporate website to showcase their diverse educational services portfolio, attract investors, and establish their brand as a leading educational investment entity in Saudi Arabia.",
    problemAr:
      "كابيتال لينك كانت محتاجة موقع مؤسسي احترافي بالعربي والإنجليزي لعرض محفظة خدماتها التعليمية المتنوعة وجذب المستثمرين وتثبيت علامتها التجارية.",
    solution:
      "Built a comprehensive corporate web presence with service pages for each of the five business areas, bilingual content management (AR/EN), contact forms, and integration with their product platforms.",
    solutionAr:
      "بنيت حضور مؤسسي شامل على الويب مع صفحات لكل مجال من المجالات الخمسة، إدارة محتوى ثنائي اللغة، نماذج تواصل، وتكامل مع منصاتهم.",
    contribution:
      "Designed and developed the full corporate website including multi-service architecture, bilingual CMS, service detail pages, contact and inquiry system, and responsive frontend aligned with the brand identity.",
    contributionAr:
      "صممت وطورت الموقع المؤسسي الكامل بما في ذلك بنية الخدمات المتعددة، CMS ثنائي اللغة، صفحات تفاصيل الخدمة، ونظام الاستفسار.",
  },
  {
    slug: "bawabauni",
    title: "BawabaUNI",
    titleAr: "بوابة يوني",
    category: "EdTech Platform",
    categoryAr: "منصة تقنية تعليمية",
    year: "2025",
    description:
      "A comprehensive Egyptian university discovery platform — helping students find the right university, explore colleges, and use an AI-powered coordination calculator to predict college eligibility.",
    descriptionAr:
      "منصة مصرية شاملة لاكتشاف الجامعات — بتساعد الطلاب يلاقوا الجامعة المناسبة ويستكشفوا الكليات ويستخدموا حاسبة تنسيق بالذكاء الاصطناعي للتنبؤ بأهليتهم.",
    shortDesc: "University discovery platform with AI coordination calculator.",
    shortDescAr: "منصة اكتشاف جامعي بحاسبة تنسيق ذكية.",
    liveUrl: "https://bawabauni.com",
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    tech: ["ASP.NET Core", "React", "SQL Server", "REST API", "AI Integration"],
    accentColor: "#2563EB",
    imageUrl: "/projects/Bawaba.png",
    imageAlt: "BawabaUNI — University Discovery Platform for Egypt",
    overview:
      "BawabaUNI is an Egyptian educational portal aggregating information on universities, colleges, courses, and academic books. Key features include a Smart Assistant, Coordination Calculator (predicting eligible colleges based on exam scores), university directory with detailed profiles, discount gateway, and inquiry system.",
    overviewAr:
      "بوابة يوني بوابة تعليمية مصرية بتجمع معلومات عن الجامعات والكليات والدورات والكتب. أبرز الميزات: مساعد ذكي، حاسبة التنسيق، دليل الجامعات، بوابة الخصومات، ونظام الاستفسار.",
    problem:
      "Egyptian students lacked a centralized platform to research universities, compare colleges, understand enrollment requirements based on coordination scores, and access academic resources — all in one place.",
    problemAr:
      "الطلاب المصريين ماكانش عندهم منصة مركزية يبحثوا فيها عن الجامعات، يقارنوا الكليات، يفهموا متطلبات القبول بناءً على درجات التنسيق، ويوصلوا للموارد الأكاديمية — كل ده في مكان واحد.",
    solution:
      "Developed a comprehensive edtech platform with university database, college catalogue per institution, coordination calculator engine, courses and books directory, smart assistant, discount aggregator, and inquiry management system.",
    solutionAr:
      "طورت منصة تقنية تعليمية شاملة مع قاعدة بيانات الجامعات، كتالوج الكليات، محرك حاسبة التنسيق، دليل الدورات والكتب، المساعد الذكي، مجمع الخصومات، ونظام إدارة الاستفسارات.",
    contribution:
      "Built the backend API and frontend from scratch — university and college database, coordination calculator algorithm, smart assistant integration, user inquiry system, and the complete React frontend with Arabic-first design.",
    contributionAr:
      "بنيت API الخلفية والواجهة من الصفر — قاعدة بيانات الجامعات والكليات، خوارزمية حاسبة التنسيق، تكامل المساعد الذكي، نظام الاستفسار، وواجهة React الكاملة بتصميم عربي أولًا.",
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
