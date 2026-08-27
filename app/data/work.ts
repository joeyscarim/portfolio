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
    role: "Technical Cofounder",
    dates: "January 2021 - Present",
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
          "/screenshots/lookify/web-home.png",
          "/screenshots/lookify/web-search.png",
          "/screenshots/lookify/web-usage.png",
          "/screenshots/lookify/web-api.png",
          "/screenshots/lookify/web-privacy.png",
          "/screenshots/lookify/search.png",
          "/screenshots/lookify/report.png",
          "/screenshots/lookify/results.png",
          "/screenshots/lookify/resources.png",
          "/screenshots/lookify/iap.png",
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
        role: "Engineering Manager, Technical Project Manager, Web App, Ad-attribution System",
        stack: "Next.js, Posthog, React, Tailwind",
        status: "Active",
        url: "https://getflowos.com",
        screenshots: [
          "/screenshots/flowos/integrations.png",
          "/screenshots/flowos/analytics.png",
          "/screenshots/flowos/automations.png",
          "/screenshots/flowos/flows.png",
          "/screenshots/flowos/editor.png",
        ],
        wideScreenshots: true,
      },
      {
        name: "VuLive",
        initial: "V",
        accent: "bg-cyan-500",
        icon: "/icons/vulive.png",
        description:
          "Virtual event software with admin panel for managing hub pages, video broadcasts, live chat, gamification, ticketing, and evergreen events. Held events ranging from 20 to 30,000 attendees.",
        role: "Web App, Admin Panel, Video Streaming, Integrations, Custom Ticket Scanner PWA",
        stack: "Next.js, Livekit, Mux, Resend, React",
        status: "Retired",
        screenshots: [
          "/screenshots/vulive/live.png",
          "/screenshots/vulive/broadcast.png",
          "/screenshots/vulive/replays.png",
          "/screenshots/vulive/gamification.png",
          "/screenshots/vulive/training.png",
          "/screenshots/vulive/ticket.png",
          "/screenshots/vulive/analytics.png",
        ],
        wideScreenshots: true,
      },
      {
        name: "Daily Hope",
        initial: "D",
        accent: "bg-sky-500",
        icon: "/icons/dailyhope.png",
        description:
          "Long-term client project with custom CMS, Shopify donation flow, and bespoke content and media player. Delivers daily content to 1 million readers.",
        role: "Web App, Custom CMS, API, Custom Shopify Checkout, Media Player",
        stack: "Next.js, React, Tailwind, Firebase, AWS S3, Shopify API",
        status: "Active",
        url: "https://pastorrick.com",
        screenshots: [
          "/screenshots/dailyhope/home.png",
          "/screenshots/dailyhope/teaching.png",
          "/screenshots/dailyhope/listen.png",
          "/screenshots/dailyhope/donate.png",
          "/screenshots/dailyhope/cms-posts.png",
          "/screenshots/dailyhope/cms-schedule.png",
        ],
        wideScreenshots: true,
      },
    ],
  },
  {
    name: "LeadLine",
    role: "Web & Mobile App Developer",
    dates: "April 2015 - October 2024",
    projects: [
      {
        name: "LeadOwl",
        initial: "O",
        accent: "bg-amber-500",
        icon: "/icons/leadowl.jpg",
        description:
          "Mobile-first CRM for capturing and following up on leads, with native Facebook Lead Ads integration, quick replies, push notification reminders, and response-time analytics.",
        role: "iOS & Android App, Technical Project Management",
        stack: "React Native, AWS",
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
        role: "iOS & Android App, Technical Project Management",
        stack: "React Native, AWS",
        status: "Exited",
        screenshots: [
          "/screenshots/businessglu/training.webp",
          "/screenshots/businessglu/module.webp",
          "/screenshots/businessglu/lesson.webp",
          "/screenshots/businessglu/notifications.webp",
          "/screenshots/businessglu/account.webp",
        ],
      },
      {
        name: "Online Sales Pro",
        initial: "S",
        accent: "bg-orange-500",
        icon: "/icons/onlinesalespro.jpg",
        description:
          "Lead generation and CRM app for building landing pages, capturing leads, and following up from a phone.",
        role: "iOS & Android App, Web App Frontend, REST API",
        stack: "React Native, Bootstrap, jQuery, PHP, MySQL",
        status: "Exited",
        screenshots: [
          "/screenshots/osp/leads.webp",
          "/screenshots/osp/pages.webp",
          "/screenshots/osp/detail.webp",
        ],
      },
      {
        name: "Knowledge.ly",
        initial: "K",
        accent: "bg-indigo-500",
        icon: "/icons/knowledgely.webp",
        description:
          "Course marketplace app with in-app credits, free previews, and lessons you unlock as you learn.",
        role: "iOS & Android App, In-App Purchases",
        stack: "React Native, RevenueCat",
        status: "Retired",
        screenshots: [
          "/screenshots/knowledgely/home.webp",
          "/screenshots/knowledgely/course.webp",
          "/screenshots/knowledgely/lesson.webp",
          "/screenshots/knowledgely/store.webp",
          "/screenshots/knowledgely/earn.webp",
        ],
      },
      {
        name: "HeyBrain",
        initial: "H",
        accent: "bg-rose-500",
        icon: "/icons/heybrain.webp",
        description:
          "Mobile learning app for browsing, buying, and completing online courses.",
        role: "iOS & Android App, Technical Project Management",
        stack: "React Native, AWS",
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
        role: "iOS & Android App",
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
