export type ProjectCategory = "Web" | "Mobile" | "AI" | "Cloud";

export type FeaturedProject = {
  title: string;
  repo: string;
  live?: string;
  categories: ProjectCategory[];
  summary: string;
  proof: string[];
  stack: string[];
  flow: string[];
  image?: string;
}

export type CompactProject = {
  name: string;
  repo: string;
  live?: string;
  categories: ProjectCategory[];
  description: string;
  stack: string[];
  image?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Rentify",
    repo: "https://github.com/PrayagSingh9A7/Rentify",
    live: "https://rentify-web-delta.vercel.app",
    categories: ["Web"],
    summary:
      "A full-stack rental platform for discovering PGs, flats, rooms, and roommates with authenticated user flows, advanced search, saved listings, reviews, chat, and AI-assisted recommendations.",
    proof: [
      "Tenant and owner roles with JWT authentication",
      "Property management, saved listings, filtering, ratings, and reviews",
      "Socket.IO messaging plus AI locality, expense, and recommendation features"
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
    flow: ["Discovery", "Auth", "Listings", "Chat", "Recommendations"],
   image: "/projects/rentify.png"
  },
  {
    title: "QuickBite",
    repo: "https://github.com/PrayagSingh9A7/QuickBite",
    live: "https://quick-bite-inky-two.vercel.app",
    categories: ["Web"],
    summary:
      "A full-stack MERN food delivery application with authentication, browsing, cart flows, order management, an admin dashboard, and responsive UI.",
    proof: [
      "JWT authentication for secure user flows",
      "Cart and order management across the shopping flow",
      "Admin dashboard support for food delivery operations"
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    flow: ["Browse", "Cart", "Orders", "Admin"],
    image: "/projects/quick.png"
  },
  {
    title: "TaskSphere Cloud",
    repo: "https://github.com/PrayagSingh9A7/cloud-task-manager",
    categories: ["Cloud", "Web"],
    summary:
      "A cloud-powered task management application with secure authentication, task workflows, calendar views, analytics, and persistent IBM Cloudant storage.",
    proof: [
      "Task CRUD, duplication, priority, status, category, search, and filters",
      "Month, week, day, agenda, and upcoming task calendar views",
      "Express REST API backed by IBM Cloudant NoSQL Database"
    ],
    stack: ["React", "Node.js", "Express", "TypeScript", "IBM Cloudant", "JWT"],
    flow: ["Client", "API", "Auth", "Cloudant"],
    image: "/projects/tasksphere.webp"
  },
  {
    title: "ZestUp",
    repo: "https://github.com/PrayagSingh9A7/ZestUp",
    categories: ["Mobile"],
    summary:
      "An Expo recipe app for browsing, searching, viewing cooking instructions, and saving favorite recipes locally.",
    proof: [
      "Recipe discovery with search and detail views",
      "Step-by-step cooking instructions for a focused mobile flow",
      "Local favorites with React Native and Expo navigation"
    ],
    stack: ["React Native", "Expo", "AsyncStorage", "Navigation"],
    flow: ["Discover", "Search", "Cook", "Favorites"],
    image: "/projects/zest.png"
  },
  {
    title: "ExpenseFlow",
    repo: "https://github.com/PrayagSingh9A7/ExpenseFlowWeb",
    live: "https://expense-flow-web.vercel.app/",
    categories: ["Web"],
    summary:
      "A responsive expense tracker focused on transaction management, expense analytics, charts, filtering, and local-storage backed personal finance workflows.",
    proof: [
      "Transaction management with organized expense records",
      "Expense analytics, charting, and filtering workflows",
      "React/Vite interface with local storage persistence"
    ],
    stack: ["React", "Vite", "Charts", "Local Storage"],
    flow: ["Transactions", "Filters", "Analytics", "Charts"],
   image: "/projects/expenseflowweb.png"
  }
];

export const compactProjects: CompactProject[] = [
  {
    name: "Rentify",
    repo: "https://github.com/PrayagSingh9A7/Rentify",
    live: "https://rentify-web-delta.vercel.app",
    categories: ["Web"],
    description:
      "Full-stack rental platform for PGs, flats, rooms, and roommate discovery with auth, filters, chat, and AI-assisted recommendations.",
    stack: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: "/projects/rentify.webp"
  },
   {
    name: "QuickBite",
    repo: "https://github.com/PrayagSingh9A7/QuickBite",
    live: "https://quick-bite-inky-two.vercel.app",
    categories: ["Web"],
    description:
      "MERN food delivery app with JWT auth, browsing, cart, orders, admin dashboard, and Cloudinary uploads.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/quickbite.webp"
  },
 
  {
    name: "TaskSphere Cloud",
    repo: "https://github.com/PrayagSingh9A7/cloud-task-manager",
    categories: ["Cloud", "Web"],
    description:
      "Cloud-powered task manager with JWT auth, task CRUD, calendar views, analytics, and IBM Cloudant storage.",
    stack: ["React", "Express", "TypeScript", "IBM Cloudant"],
    image: "/projects/tasksphere.webp"
  },
  {
    name: "NewsWeb",
    repo: "https://github.com/PrayagSingh9A7/NewsWeb",
    live: "https://news-web-beta.vercel.app/",
    categories: ["Web"],
    description:
      "Responsive React news web app with category filtering, real-time news updates, and optimized UI.",
    stack: ["React", "Vite", "NewsAPI"],
    image: "/projects/newsweb.png"
  },
  
  {
    name: "weatherWeb",
    repo: "https://github.com/PrayagSingh9A7/weatherWeb",
     live: "https://prayagsingh9a7.github.io/weatherWeb/",
    categories: ["Web"],
    description:
      "Responsive weather web app with real-time API integration and a modern JavaScript interface.",
    stack: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: "/projects/waetherweb.png"
  },
 
  {
    name: "ExpenseFlowWeb",
    repo: "https://github.com/PrayagSingh9A7/ExpenseFlowWeb",
    live: "https://expense-flow-web.vercel.app/",
    categories: ["Web"],
    description:
      "Responsive expense tracker with transaction management, analytics, charts, filtering, and local storage.",
    stack: ["React", "Vite", "Charts", "Local Storage"],
    image: "/projects/expenseflowweb.png"
  },
  {
    name: "Smart Leads Dashboard",
    repo: "https://github.com/PrayagSingh9A7/smart-leads-dashboard",
    categories: ["Web"],
    description: "Lead-focused dashboard project; repository details were limited in public preview.",
    stack: ["React", "Dashboard UI"],
    image: "/projects/smartlead.png"
  },
   {
    name: "Retail Analytics",
    repo: "https://github.com/PrayagSingh9A7/Retail-Analytics-And-Store-Intelligence-Platform",
    categories: ["AI"],
    description:
      "CCTV-based store intelligence pipeline for people tracking, footfall, dwell time, funnels, zones, and anomalies.",
    stack: ["Python", "FastAPI", "OpenCV", "YOLO"],
    image: "/projects/retail-analytics.webp"
  },
  {
    name: "Movie Explorer",
    repo: "https://github.com/PrayagSingh9A7/movie-explorer-app",
    categories: ["Mobile"],
    description:
      "React Native movie explorer with TypeScript, Redux Toolkit, search, pagination, and persisted favorites.",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "AsyncStorage"],
    image: "/projects/movieexplorer.png"
  },
  
  {
    name: "AI Drive File Discovery Agent",
    repo: "https://github.com/PrayagSingh9A7/ai-drive-file-discovery-agent",
    categories: ["AI"],
    description:
      "Natural-language Google Drive file discovery agent using FastAPI, LangChain, Google Drive API, Groq, and Streamlit.",
    stack: ["FastAPI", "LangChain", "Drive API", "Groq"],
    image: "/projects/aidiscoveryagent.png"
  },
  {
    name: "ZestUp",
    repo: "https://github.com/PrayagSingh9A7/ZestUp",
    categories: ["Mobile"],
    description:
      "Expo recipe app for browsing, searching, viewing cooking instructions, and saving favorites locally.",
    stack: ["React Native", "Expo", "AsyncStorage", "Navigation"],
    image: "/projects/zestup.webp"
  },
  
  {
    name: "NovaNews",
    repo: "https://github.com/PrayagSingh9A7/NovaNews",
    categories: ["Mobile"],
    description:
      "News application focused on trending stories, fresh updates, and real-time headlines.",
    stack: ["TypeScript", "News"],
    image: "/projects/novanews.png"
  },
  {
    name: "SkyNiq",
    repo: "https://github.com/PrayagSingh9A7/SkyNiq",
    categories: ["Mobile"],
    description:
      "React Native weather app with city search, auto-suggest, maps, forecast details, and OpenWeather integration.",
    stack: ["React Native", "Expo", "OpenWeather", "Maps"],
    image: "/projects/skyniq.png"
  },
  {
    name: "HabitPulse",
    repo: "https://github.com/PrayagSingh9A7/HabitPulse",
    categories: ["Mobile"],
    description:
      "React Native habit tracker for daily tasks, completion history, percentages, and growth charts.",
    stack: ["React Native", "Charts", "Local History"],
    image: "/projects/habitpulse.png"
  }
];
