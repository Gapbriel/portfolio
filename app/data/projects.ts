export type Project = {
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  logo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Sessionboard Platform",
    role: "Senior Frontend Developer",
    company: "Sessionboard",
    period: "Sep 2021 – Present",
    description:
      "Designed and implemented a scalable UI architecture from scratch. Led the full redesign of portals and dashboard pages, improving mobile UX by 40%. Drove performance initiatives that reduced load time by 35% using Lighthouse and advanced profiling tools. Integrated LaunchDarkly and builder.io for feature flags and no-code updates.",
    tech: [
      "React.js",
      "Redux Saga",
      "Figma",
      "Webpack",
      "LaunchDarkly",
      "Copilot",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHvnS8F3Y1ADA/company-logo_100_100/company-logo_100_100/0/1673535094879/sessionboard_logo?e=1756339200&v=beta&t=lLaCm1d2GzutjG90mxn21qWSHaWywNgrqty3AJ3-R20",
  },
  {
    title: "React Platform Development",
    role: "Senior Frontend Developer",
    company: "Distillery",
    period: "Apr 2021 – Sep 2021",
    description:
      "Built reusable UI components with React Hooks and Redux. Focused on accessibility, modularity and performance. Integrated Next.js and GraphQL for optimized server-side rendering. Wrote robust test coverage using React Testing Library and Cypress.",
    tech: ["React", "Redux", "TypeScript", "GraphQL", "Cypress", "Next.js"],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEGnCEjBM_zsQ/company-logo_100_100/company-logo_100_100/0/1719628140011/distillery_tech_logo?e=1756339200&v=beta&t=m_IVX4IvXchDnOV2Q9LZbmI8p-3xw8bk0uNBI5YHOo4",
  },
  {
    title: "PwC & Wells Fargo Dashboards",
    role: "Web UI Developer",
    company: "Globant",
    period: "Feb 2020 – Apr 2021",
    description:
      "At PwC, improved dashboard render speed by 50% through React-based refactors. At Wells Fargo, modernized UI in legacy .NET systems. Contributed to modular design systems and mobile-first implementations. Led code reviews and sprint planning.",
    tech: ["React", "SASS", ".NET", "Vue.js", "Ag-grid", "Material UI"],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_100_100/company-logo_100_100/0/1719839010650/globant_logo?e=1756339200&v=beta&t=uXLlvFX8UI8bfkhihllQu4QRc5O5xQybD3MK-zqrfTI",
  },
  {
    title: "Travel Booking Platform",
    role: "UI Architect",
    company: "Huakai",
    period: "Dec 2018 – Feb 2020",
    description:
      "Led the frontend team as UI architect. Defined UI structure and reusable components in Vue.js. Managed roadmap, code reviews, and deliverables using Notion. Implemented responsive design across devices using Bootstrap 4 and LESS.",
    tech: ["Vue.js", "Bootstrap 4", "LESS", "Notion", "UX Design"],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGgLFP8y3_eIQ/company-logo_100_100/company-logo_100_100/0/1630501252937?e=1756339200&v=beta&t=GJudUZ-LPuJwZ3xYhRjnTC-W3J82ggQ_bJTHr6j_I4Q",
  },
  {
    title: "Consulting Dashboards (PwC & Deloitte)",
    role: "Web UI Developer",
    company: "Globant",
    period: "Mar 2013 – Sep 2017",
    description:
      "Led UI development for dashboards using KnockoutJS, Backbone and Marionette. Delivered responsive layouts for tablet and mobile. Managed task breakdowns and coordination across teams. Focused on compliance apps for consulting clients.",
    tech: [
      "Knockout",
      "Backbone",
      "Marionette",
      "HTML5",
      "Bootstrap 3",
      "LESS",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_100_100/company-logo_100_100/0/1719839010650/globant_logo?e=1756339200&v=beta&t=uXLlvFX8UI8bfkhihllQu4QRc5O5xQybD3MK-zqrfTI",
  },
  {
    title: "Junior Software Engineer",
    role: "Frontend + Backend Dev",
    company: "Tsavo Group",
    period: "Feb 2012 – Mar 2013",
    description:
      "Built frontend interfaces with SmartGWT and Java. Created XML parsers and participated in QA testing. Attended training in HTML5, JavaScript, RequireJS and responsive UI practices.",
    tech: ["SmartGWT", "Java", "HTML", "CSS", "RequireJS"],
  },
];
