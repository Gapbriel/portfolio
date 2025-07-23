export type Project = {
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "sessionboard",
    title: "Sessionboard Platform",
    role: "Frontend Developer",
    company: "Whiteprompt",
    period: "Apr 2021 – Present",
    description:
      "Led UI development from scratch for Sessionboard. Designed scalable architecture, improved app performance by 35%, and built fully responsive portals and dashboards.",
    tech: [
      "React",
      "Redux-Saga",
      "React Hooks",
      "Node.js",
      "Material UI",
      "Webpack",
      "LaunchDarkly",
      "Figma",
    ],
    link: "https://www.sessionboard.com/",
  },
  {
    slug: "covidworld",
    title: "Covid World Dashboard",
    role: "Web UI Developer",
    company: "Freelance",
    period: "Feb 2020 – Dec 2020",
    description:
      "Designed UI architecture and managed a small frontend team. Delivered responsive data dashboards using Vue and D3.",
    tech: ["Vue.js 2", "Bootstrap 4", "LESS", "D3.js"],
    link: "https://dev.covidworld.co/",
  },
  {
    slug: "pwc-internal",
    title: "PwC Internal Platform",
    role: "Frontend Developer",
    company: "Globant",
    period: "Feb 2020 – Mar 2021",
    description:
      "Implemented features, fixed performance bottlenecks, and conducted code reviews. Participated in agile sprints with a focus on UI scalability.",
    tech: [
      "React",
      "Hooks",
      "Bootstrap 3",
      "Ag-grid",
      "Material-UI",
      "Sass",
      "Git",
    ],
  },
  {
    slug: "wells-fargo",
    title: "Wells Fargo – IHS Markit",
    role: "Frontend Developer",
    company: "Globant",
    period: "Feb 2020 – Mar 2021",
    description:
      "Developed new features and improvements for a financial platform using .NET and jQuery. Collaborated with backend and QA teams.",
    tech: [".NET", "jQuery", "LESS", "SASS", "Gulp"],
  },
  {
    slug: "huakai-travel",
    title: "Huakai Travel Booking Platform",
    role: "UI Architect / Web UI Lead",
    company: "Freelance",
    period: "Dec 2018 – Feb 2020",
    description:
      "Defined UI architecture, led task estimations, and built a responsive travel booking experience from scratch. Also handled mentoring and team coordination.",
    tech: ["Vue.js 2", "Bootstrap 4", "LESS"],
    link: "https://dev.huakai.travel/",
  },
  {
    slug: "qbk-cms",
    title: "E-commerce CMS Integrations",
    role: "Senior Frontend Developer",
    company: "QBK Consulting",
    period: "Oct 2017 – Jan 2020",
    description:
      "Worked with SAP Hybris and Workarea CMS. Delivered pixel-perfect UIs, participated in agile sprints and handled code reviews.",
    tech: ["Vue.js", "jQuery", "GruntJS", "LESS", "SASS"],
  },
  {
    slug: "deloitte-pwc",
    title: "Deloitte & PwC Projects",
    role: "Web UI Developer",
    company: "Globant",
    period: "2013 – 2017",
    description:
      "Implemented UI components and responsive designs for internal platforms. Supported multiple teams with cross-browser issues and sprint planning.",
    tech: [
      ".NET",
      "AngularJS",
      "KnockoutJS",
      "Backbone",
      "LESS",
      "CSS3",
      "HTML5",
    ],
  },
];
