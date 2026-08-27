export type Project = {
  name: string;
  initial: string;
  accent: string;
  icon?: string;
  screenshots?: string[];
  wideScreenshots?: boolean;
  hidden?: boolean;
  description?: string;
  role?: string;
  stack?: string;
  status?: string;
  url?: string;
};

export type Company = {
  name: string;
  role: string;
  dates: string;
  projects: Project[];
};

export const companies: Company[] = [
  {
    name: "Lookify",
    role: "Technical Co-founder",
    dates: "December 2019 - Present",
    projects: [
      {
        name: "Lookify.io",
        initial: "L",
        accent: "bg-sky-400",
        icon: "/icons/lookify.png",
        description:
          "Reverse phone lookup platform with carrier data, threat scoring, and person search across web, iOS, and Android, plus integrations and MCP.",
        role: "API, Web App, iOS & Android App, Admin Panel, Payment Processing, Integrations",
        stack: "Next.js, React, React Native, Tailwind, Firebase, Big Query, Stripe, RevenueCat",
        status: "Active",
        url: "https://lookify.io",
        screenshots: [
          "/screenshots/lookify/search.jpg",
          "/screenshots/lookify/report.jpg",
          "/screenshots/lookify/results.jpg",
          "/screenshots/lookify/resources.jpg",
        ],
      },
      {
        name: "Best Free Phone Lookup",
        initial: "P",
        accent: "bg-blue-500",
        icon: "/icons/bestfreephonelookup.png",
        hidden: true,
      },
    ],
  },
  {
    name: "Moonshot",
    role: "Lead Developer",
    dates: "February 2021 - Present",
    projects: [
      {
        name: "FlowOS",
        initial: "F",
        accent: "bg-violet-500",
        icon: "/icons/flowos.png",
        description:
          "Marketing ecosystem with AI-powered funnel builder, ad-attribution portal, and integrations.",
        role: "Engineering Manager, Technical Project Management, Web App, Ad-attribution System",
        stack: "Next.js, Posthog, React, Tailwind",
        status: "Active",
        url: "https://getflowos.com",
        screenshots: [
          "/screenshots/flowos/funnel.jpg",
          "/screenshots/flowos/analytics.jpg",
          "/screenshots/flowos/integrations.jpg",
        ],
        wideScreenshots: true,
      },
      {
        name: "VuLive",
        initial: "V",
        accent: "bg-cyan-500",
        icon: "/icons/vulive.png",
        description:
          "Virtual event software with custom admin panel for setting up hub pages, broadcasts, live chat, gamification, and evergreen events.",
        role: "Web App, Admin Panel, Video Streaming, Integrations",
        stack: "Next.js, Livekit, Mux, Resend, React",
        status: "Retired",
        screenshots: [
          "/screenshots/vulive/live.jpg",
          "/screenshots/vulive/broadcast.jpg",
          "/screenshots/vulive/analytics.jpg",
          "/screenshots/vulive/gamification.jpg",
        ],
        wideScreenshots: true,
      },
      {
        name: "Daily Hope",
        initial: "D",
        accent: "bg-sky-500",
        icon: "/icons/dailyhope.png",
        description:
          "Long term client project with custom CMS, custom donation flow, and tailored content site, to deliver daily content to 1 million readers.",
        role: "Web App, Custom CMS, API, Custom Shopify Checkout",
        stack: "Next.js, React, Tailwind, Shopify API",
        status: "Active",
        url: "https://pastorrick.com",
        screenshots: ["/screenshots/dailyhope/home.jpg"],
        wideScreenshots: true,
      },
    ],
  },
  {
    name: "LeadLine",
    role: "Web & Mobile App Developer",
    dates: "April 2015 - October 2025",
    projects: [
      {
        name: "LeadOwl",
        initial: "O",
        accent: "bg-amber-500",
        icon: "/icons/leadowl.jpg",
        description:
          "Mobile-first CRM for capturing and following up on leads, with native Facebook Lead Ads integration, quick replies, push notification reminders, and response-time analytics.",
        role: "Technical Project Management, iOS, Android",
        stack: "AWS, React Native",
        status: "Exited",
        screenshots: [
          "/screenshots/leadowl/home.jpg",
          "/screenshots/leadowl/detail.jpg",
          "/screenshots/leadowl/leads.jpg",
          "/screenshots/leadowl/replies.jpg",
          "/screenshots/leadowl/analytics.jpg",
        ],
      },
      {
        name: "BusinessGlu",
        initial: "B",
        accent: "bg-emerald-500",
        icon: "/icons/businessglu.webp",
        description:
          "White-label employee training app with gamified lessons, push notifications, and company-branded content.",
        role: "Tech Project Management, iOS, Android",
        stack: "AWS, React Native",
        status: "Exited",
        screenshots: [
          "/screenshots/businessglu/training.jpg",
          "/screenshots/businessglu/lesson.jpg",
          "/screenshots/businessglu/notifications.jpg",
          "/screenshots/businessglu/account.jpg",
        ],
      },
      {
        name: "Online Sales Pro",
        initial: "S",
        accent: "bg-orange-500",
        icon: "/icons/onlinesalespro.jpg",
        description:
          "Lead generation and CRM app for building landing pages, capturing leads, and following up from a phone.",
        role: "Tech Project Management, iOS, Android",
        stack: "AWS, React Native",
        status: "Exited",
        screenshots: [
          "/screenshots/osp/leads.jpg",
          "/screenshots/osp/pages.jpg",
          "/screenshots/osp/detail.jpg",
          "/screenshots/osp/follow-up.jpg",
        ],
      },
      {
        name: "Knowledge.ly",
        initial: "K",
        accent: "bg-indigo-500",
        icon: "/icons/knowledgely.webp",
        description:
          "Course marketplace app with in-app credits, free previews, and lessons you unlock as you learn.",
        role: "iOS & Android App, IAP",
        stack: "React Native, RevenueCat",
        status: "Retired",
        screenshots: [
          "/screenshots/knowledgely/home.jpg",
          "/screenshots/knowledgely/course.jpg",
          "/screenshots/knowledgely/lesson.jpg",
          "/screenshots/knowledgely/store.jpg",
          "/screenshots/knowledgely/earn.jpg",
        ],
      },
      {
        name: "HeyBrain",
        initial: "H",
        accent: "bg-rose-500",
        icon: "/icons/heybrain.webp",
        description:
          "Mobile learning app for browsing, buying, and completing online courses.",
        role: "iOS App, Android App",
        stack: "React Native",
        status: "Retired",
        screenshots: [
          "/screenshots/heybrain/discover.webp",
          "/screenshots/heybrain/course.webp",
          "/screenshots/heybrain/lessons.webp",
          "/screenshots/heybrain/account.webp",
        ],
      },
      {
        name: "Kanyan",
        initial: "K",
        accent: "bg-violet-500",
        icon: "/icons/kanyan.png",
        description:
          "Lead distribution app for sales teams with live routing, dashboards, appointments, and reminders.",
        role: "iOS App, Android App",
        stack: "React Native",
        status: "Retired",
        screenshots: [
          "/screenshots/kanyan/dashboard.jpg",
          "/screenshots/kanyan/appointments.jpg",
          "/screenshots/kanyan/leads.jpg",
          "/screenshots/kanyan/reminders.jpg",
        ],
      },
    ],
  },
];
