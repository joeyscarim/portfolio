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
        role: "Web App, API, iOS, Android Developer",
        stack: "Next.js, React, React Native, Tailwind, Firebase, Big Query",
        status: "Active",
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
    dates: "October 2025 - Present",
    projects: [
      {
        name: "FlowOS",
        initial: "F",
        accent: "bg-violet-500",
        icon: "/icons/flowos.png",
      },
      {
        name: "VuLive",
        initial: "V",
        accent: "bg-cyan-500",
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
        role: "Technical Project Management, iOS, Android",
        stack: "AWS, React Native",
        status: "Exited",
      },
      {
        name: "BusinessGlu",
        initial: "B",
        accent: "bg-emerald-500",
        icon: "/icons/businessglu.webp",
        role: "Tech Project Management, iOS, Android",
        stack: "AWS, React Native",
        status: "Exited",
      },
      {
        name: "Online Sales Pro",
        initial: "S",
        accent: "bg-orange-500",
        icon: "/icons/onlinesalespro.png",
        role: "Tech Project Management, iOS, Android",
        stack: "AWS, React Native",
        status: "Exited",
      },
      {
        name: "Knowledge.ly",
        initial: "K",
        accent: "bg-indigo-500",
      },
      {
        name: "HeyBrain",
        initial: "H",
        accent: "bg-rose-500",
        icon: "/icons/heybrain.webp",
      },
      {
        name: "Kanyan",
        initial: "K",
        accent: "bg-violet-500",
        icon: "/icons/kanyan.png",
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
