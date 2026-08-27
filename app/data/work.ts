export type Project = {
  name: string;
  initial: string;
  accent: string;
  icon?: string;
  screenshots: number;
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
        screenshots: 5,
      },
      {
        name: "Best Free Phone Lookup",
        initial: "P",
        accent: "bg-blue-500",
        icon: "/icons/bestfreephonelookup.png",
        screenshots: 5,
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
        screenshots: 5,
      },
      {
        name: "VuLive",
        initial: "V",
        accent: "bg-cyan-500",
        screenshots: 5,
      },
      {
        name: "Daily Hope",
        initial: "D",
        accent: "bg-sky-500",
        screenshots: 5,
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
        screenshots: 5,
      },
      {
        name: "BusinessGlu",
        initial: "B",
        accent: "bg-emerald-500",
        icon: "/icons/businessglu.webp",
        screenshots: 5,
      },
      {
        name: "Online Sales Pro",
        initial: "S",
        accent: "bg-orange-500",
        icon: "/icons/onlinesalespro.png",
        screenshots: 5,
      },
      {
        name: "Knowledge.ly",
        initial: "K",
        accent: "bg-indigo-500",
        screenshots: 5,
      },
      {
        name: "HeyBrain",
        initial: "H",
        accent: "bg-rose-500",
        icon: "/icons/heybrain.webp",
        screenshots: 5,
      },
      {
        name: "Kanyan",
        initial: "K",
        accent: "bg-violet-500",
        icon: "/icons/kanyan.png",
        screenshots: 5,
      },
    ],
  },
];
