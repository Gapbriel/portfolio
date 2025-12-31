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
    title: "GoFundMe | Classy - Full-Stack Development",
    role: "Senior Software Engineer",
    company: "whiteprompt / GoFundMe (Contractor)",
    period: "Sep 2025 - Jan 2026",
    description:
      "Development and maintenance of full-stack applications using Node.js, React, and PostgreSQL. Led complete repository migration from Bitbucket to GitHub, ensuring continuity in development processes. Configuration and optimization of GitHub Actions (YML workflows) for CI/CD automation. Implementation of RESTful APIs and SQL query optimization to improve application performance. Management of monorepo repositories with multiple packages, configuring automated build and publish processes. Administration and maintenance of private npm packages with automated versioning and library publishing.",
    tech: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Express",
      "Sequelize ORM",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Jest",
      "Microservices",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEAgTLCPVBoyg/company-logo_100_100/B4EZgOWOnTGwAQ-/0/1752587365169/gofundme_logo?e=1769040000&v=beta&t=fKx_HQ8CB2nkLrlk72zGV07GnKS_W_r54ilF-M8Uhrc",
    link: "https://pro.gofundme.com/",
  },
  {
    title: "Sessionboard Platform - UI & Performance",
    role: "Senior Frontend Developer",
    company: "Whiteprompt / Sessionboard (Contractor)",
    period: "Sep 2021 - Aug 2025",
    description:
      "Developed scalable UI architecture and spearheaded complete redesign of portals and organization-level dashboard with mobile-first approach, achieving ~40% improvement in responsiveness. Reduced page load times by 35% through Google Lighthouse optimization. Integrated Figma's Visual Copilot with Builder.io and Cursor AI for rapid feature delivery. Implemented LaunchDarkly for feature flags and Redux-Saga for state management.",
    tech: [
      "React",
      "Redux-Saga",
      "Node.js",
      "Material UI",
      "Webpack",
      "LaunchDarkly",
      "Builder.io",
      "Cursor AI",
      "Figma",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHvnS8F3Y1ADA/company-logo_100_100/company-logo_100_100/0/1673535094879/sessionboard_logo?e=1756339200&v=beta&t=lLaCm1d2GzutjG90mxn21qWSHaWywNgrqty3AJ3-R20",
    link: "https://www.sessionboard.com/",
  },
  {
    title: "Learning & Technology Platform",
    role: "Senior Frontend Developer",
    company: "Distillery",
    period: "Apr 2021 – Sep 2021",
    description:
      "Built reusable UI components with React Hooks and Redux for consistency across platform. Developed scalable modules with strong emphasis on accessibility and performance. Introduced Next.js for server-side rendering and GraphQL for efficient data queries. Implemented comprehensive testing with React Testing Library and Cypress.",
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Next.js",
      "Cypress",
      "React Testing Library",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEGnCEjBM_zsQ/company-logo_100_100/company-logo_100_100/0/1719628140011/distillery_tech_logo?e=1756339200&v=beta&t=m_IVX4IvXchDnOV2Q9LZbmI8p-3xw8bk0uNBI5YHOo4",
  },
  {
    title: "PwC Dashboard Optimization",
    role: "Web UI Developer",
    company: "Globant",
    period: "Feb 2020 - Mar 2021",
    description:
      "Optimized React dashboard rendering performance by ~50% through targeted refactoring, component virtualization, and code-splitting. Implemented features using React.js, Bootstrap, SASS, Ag-Grid, and Material-UI. Contributed to modular design system supporting mobile-first implementations.",
    tech: [
      "React",
      "Bootstrap",
      "SASS",
      "Ag-Grid",
      "Material UI",
      "Mobile-First Design",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_100_100/company-logo_100_100/0/1719839010650/globant_logo?e=1756339200&v=beta&t=uXLlvFX8UI8bfkhihllQu4QRc5O5xQybD3MK-zqrfTI",
  },
  {
    title: "Wells Fargo Legacy System Modernization",
    role: "Web UI Developer",
    company: "Globant / IHS Markit",
    period: "Feb 2020 - Mar 2021",
    description:
      "Maintained and extended legacy .NET and jQuery systems while progressively integrating modern UI practices. Built new features and improved maintainability through refactors. Migrated parts of stack to reusable Vue.js components for better performance and maintainability.",
    tech: [".NET", "jQuery", "Vue.js", "JavaScript", "Bootstrap", "CSS3"],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_100_100/company-logo_100_100/0/1719839010650/globant_logo?e=1756339200&v=beta&t=uXLlvFX8UI8bfkhihllQu4QRc5O5xQybD3MK-zqrfTI",
  },
  {
    title: "Covid World Project",
    role: "Senior Frontend Developer (Freelance)",
    company: "Covid World Project",
    period: "Feb 2020 - Dec 2020",
    description:
      "Built MVP visualizing Covid-19 spread using Vue.js 2, Bootstrap 4, and D3.js. Developed interactive world map showing real-time infection statistics from public API. Set up front-end environment and managed workflow using Notion. Delivered responsive data visualization for critical pandemic information.",
    tech: [
      "Vue.js 2",
      "D3.js",
      "Bootstrap 4",
      "LESS",
      "API Integration",
      "Notion",
    ],
  },
  {
    title: "SAP Hybris eCommerce Platform",
    role: "Senior Frontend Developer",
    company: "QBK Consulting",
    period: "Oct 2017 - Jan 2020",
    description:
      "Customized UI and storefronts for multiple clients on SAP Hybris platform including Lumingo, El Comercio, and Musimundo. Improved Core Web Vitals metrics (LCP, INP, CLS) based on SAP audits. Built and maintained bespoke e-commerce storefront for OnceUponAFarmorganics.com using Workarea CMS.",
    tech: [
      "SAP Hybris",
      "Workarea CMS",
      "JavaScript",
      "CSS3",
      "Core Web Vitals",
      "Responsive Design",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEzwK95IQOBZg/company-logo_100_100/company-logo_100_100/0/1714144444384/qubikdigital_logo?e=1758758400&v=beta&t=UZrKEuPGcjuhjNsd4e8ijOWXx1sJFGo-h2kM07u_1fE",
    link: "https://www.qubikdigital.com/",
  },
  {
    title: "Travel Platform MVP - Huakai",
    role: "Senior Frontend Developer (Freelance)",
    company: "Huakai",
    period: "Dec 2018 - Feb 2020",
    description:
      "Led front-end development as Web UI lead for travel MVP targeting indecisive travelers. Built with Vue.js 2, Bootstrap 4, and LESS - users could get randomly selected destinations with curated information. Managed team workflow and task assignment using Notion. Analyzed UX/UI patterns for mobile and desktop.",
    tech: [
      "Vue.js 2",
      "Bootstrap 4",
      "LESS",
      "Notion",
      "UX/UI Design",
      "Mobile Development",
    ],
  },
  {
    title: "Deloitte Enterprise Solutions",
    role: "Web UI Developer",
    company: "Globant",
    period: "Mar 2013 - Sep 2017",
    description:
      "Worked on varying scale projects from large multi-disciplinary teams to focused units on Microsoft back-end stack. Built features and improved existing code using Knockout, Backbone, and MarionetteJS. Provided responsive design support for tablet form factors. Led UI team for PwC's Tableau development projects.",
    tech: [
      "Knockout",
      "Backbone",
      "MarionetteJS",
      "AngularJS",
      ".NET",
      "Bootstrap 3",
      "LESS",
      "jQuery",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_100_100/company-logo_100_100/0/1719839010650/globant_logo?e=1756339200&v=beta&t=uXLlvFX8UI8bfkhihllQu4QRc5O5xQybD3MK-zqrfTI",
  },
  {
    title: "Energy Utility Mapping Application",
    role: "Junior Software Developer",
    company: "Tsavo Group",
    period: "Aug 2012 - Mar 2013",
    description:
      "Developed energy utility mapping application displaying transformer locations and electrical grid sections in Buenos Aires. Built Java microservices for XML to JSON parsing. Created frontend interfaces using SmartGWT and CSS for real-time infrastructure monitoring.",
    tech: ["Java", "SmartGWT", "XML", "JSON", "CSS", "Microservices"],
  },
];
