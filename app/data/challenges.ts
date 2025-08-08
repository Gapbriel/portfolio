export type Challenge = {
  title: string;
  status: "done" | "in-progress" | "soon";
  slug: string;
};

export const challenges: Challenge[] = [
  {
    title: "Build a Counter component using useState",
    status: "in-progress",
    slug: "counter",
  },
  {
    title: "Create a To-Do List with add/delete/toggle",
    status: "soon",
    slug: "todo-list",
  },
  {
    title: "Build a Dark Mode Toggle",
    status: "soon",
    slug: "dark-mode-toggle",
  },
  {
    title: "Create a Search Filter input for a list",
    status: "soon",
    slug: "search-filter",
  },
  {
    title: "Implement a Login Form with validation",
    status: "soon",
    slug: "login-form",
  },
  {
    title: "Create a simple Timer/Stopwatch",
    status: "soon",
    slug: "timer-stopwatch",
  },
  {
    title: "Fetch user data from API and display",
    status: "soon",
    slug: "fetch-user-data",
  },
  {
    title: "Build a Tabs component",
    status: "soon",
    slug: "tabs-component",
  },
  {
    title: "Build a Dropdown Menu",
    status: "soon",
    slug: "dropdown-menu",
  },
  {
    title: "Create a Star Rating component",
    status: "soon",
    slug: "star-rating",
  },
  {
    title: "Create a Responsive Navbar",
    status: "soon",
    slug: "responsive-navbar",
  },
  {
    title: "Build a Modal Dialog box",
    status: "soon",
    slug: "modal-dialog",
  },
  {
    title: "Implement a Password Strength Meter",
    status: "soon",
    slug: "password-strength-meter",
  },
  {
    title: "Create a Form with Conditional Fields",
    status: "soon",
    slug: "form-conditional-fields",
  },
  {
    title: "Make a Dynamic List with Add/Remove",
    status: "soon",
    slug: "dynamic-list-add-remove",
  },
  {
    title: "Render a List with Unique Keys",
    status: "soon",
    slug: "render-list-keys",
  },
  {
    title: "Create a Toggle Accordion (FAQ)",
    status: "soon",
    slug: "accordion-faq",
  },
  {
    title: "Add a Copy to Clipboard button",
    status: "soon",
    slug: "copy-to-clipboard",
  },
  {
    title: "Build a Scroll-to-Top button",
    status: "soon",
    slug: "scroll-to-top",
  },
  {
    title: "Handle Form Submission with loading UI",
    status: "soon",
    slug: "form-submit-loading",
  },
  {
    title: "Build a multi-step form with previous/next",
    status: "soon",
    slug: "multi-step-form",
  },
  {
    title: "Create a pagination component",
    status: "soon",
    slug: "pagination",
  },
  {
    title: "Implement autocomplete input with API",
    status: "soon",
    slug: "autocomplete-api",
  },
  {
    title: "Build a toast notification system",
    status: "soon",
    slug: "toast-notification",
  },
  {
    title: "Build a shopping cart with add/remove",
    status: "soon",
    slug: "shopping-cart",
  },
  {
    title: "Responsive sidebar menu",
    status: "soon",
    slug: "responsive-sidebar",
  },
  {
    title: "User profile edit page with form validation",
    status: "soon",
    slug: "profile-edit-form",
  },
];
