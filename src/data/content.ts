/**
 * All site copy lives in this file. Edit the text here and every page
 * (home, projects, resume widgets, SEO metadata) picks it up.
 */

export const site = {
  name: "Jonathan Beaubien",
  role: "Senior Software Engineer",
  title: "Jonathan Beaubien — Senior Software Engineer",
  description:
    "Jonathan Beaubien is a senior full-stack engineer in Brooklyn, NY building consumer products with TypeScript, Next.js, and React Native at Posh.",
  url: "https://jonbeaubien.dev",
  location: "Brooklyn, NY",
  resumePdf: "/JonathanBeaubien_Resume.pdf",
  socials: {
    github: "https://github.com/j0pp",
    linkedin: "https://www.linkedin.com/in/jon-beaubien/",
    email: "beaubien.jon@gmail.com",
  },
};

export const bio = {
  greeting: "Hey! 👋",
  paragraphs: [
    "My name is Jonathan Beaubien and I'm a senior full-stack engineer based in Brooklyn, NY. I build consumer products end-to-end — web, mobile, and the infrastructure behind them.",
    "I grew up in Seattle, WA and graduated from the University of Washington in 2022 with a B.S. in Applied & Computational Mathematical Sciences.",
  ],
};

export type Role = {
  title: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  url?: string;
  blurb?: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Posh",
    url: "https://posh.vip",
    blurb:
      "Posh is a consumer event ticketing marketplace based in NYC. I joined as the 3rd engineering hire; the team has since scaled 7× to 22 engineers.",
    roles: [
      {
        title: "Senior Software Engineer, Full Stack",
        start: "January 2025",
        end: "Present",
        highlights: [
          "Led the Next.js rebuild of Posh's public event page and Create Event flow — the company's core revenue surface — cutting P95 page load by ~80% and rebuilding SEO from the ground up with SSR, JSON-LD structured data, and Open Graph.",
          "Delivered three initiatives (Event Page revamp, Home Tab, Onboarding Redesign) credited with lifting marketplace session conversion from ~11% to ~18%, during a stretch where the app hit #1 on the iOS App Store for Entertainment.",
          "Architected server-side conversion tracking (Meta CAPI) on AWS — Terraform, Lambda, DynamoDB, SQS/SNS — shipping a month ahead of target with a 9.3/10 match-quality score.",
          "Owned the new organizer dashboard end-to-end: NestJS BFF architecture, an authorization-policies pattern since adopted across the codebase, and Stripe Connect embedded onboarding with Tap to Pay.",
          "Led the Next.js guild and mentored new engineers through their first RFCs.",
        ],
      },
      {
        title: "Software Engineer, Full Stack",
        start: "February 2023",
        end: "January 2025",
        highlights: [
          "Founding engineer of the React Native consumer app: built authentication, navigation architecture, and account management from zero through App Store release.",
          "Built the Explore discovery feed end-to-end (React Native, tRPC): personalized event suggestions, curated playlists, location filters, and list-virtualization performance work.",
          "Designed the image upload and processing platform: presigned S3 uploads, an SQS processing queue, blurhash placeholders, and Cloudflare image transformations across web and mobile.",
          "Created a config-driven CRUD table/form framework adopted across production surfaces and internal tools, cutting tracking-link queries from 1–2s to 100–200ms.",
        ],
      },
    ],
  },
  {
    company: "University of Washington I.T.",
    url: "https://it.uw.edu",
    roles: [
      {
        title: "Student Software Engineer",
        start: "July 2020",
        end: "September 2022",
        highlights: [
          "Modernized the student portal with Vue/Vuex and expanded Jest/Cypress test coverage.",
          "Built an asynchronous background job queue for email delivery and optimized REST API caching.",
        ],
      },
    ],
  },
];

export const education = {
  school: "University of Washington",
  degree: "B.S., Applied & Computational Mathematical Sciences",
  graduated: "August 2022",
  detail:
    "Concentration in Scientific Computing & Numerical Algorithms. Applied math portfolio at github.com/j0pp/AMATH-Papers.",
  portfolioUrl: "https://github.com/j0pp/AMATH-Papers",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & frameworks",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "React Native (Expo)",
      "Node.js",
      "NestJS",
      "tRPC",
    ],
  },
  {
    group: "Data & infrastructure",
    items: [
      "MongoDB",
      "PostgreSQL",
      "AWS (Lambda, S3, SQS, DynamoDB)",
      "Terraform",
      "Cloudflare",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    group: "Testing & observability",
    items: [
      "Jest",
      "Cypress",
      "Sentry",
      "Datadog",
      "Statsig",
      "Storybook",
    ],
  },
];

export type Project = {
  name: string;
  url?: string;
  description: string;
  icon: "trio" | "djd";
  video?: string;
};

export const projects: Project[] = [
  {
    name: "Word Trio",
    url: "https://636876cdc2c0040008d80bcf--word-trio.netlify.app/game",
    description:
      "A Wordle-style word game built with React and Tailwind CSS that garnered over 2,000 visitors.",
    icon: "trio",
  },
  {
    name: "DJ Democracy",
    description:
      "Collaborative queueing for parties — built with Vue 3, the Spotify Web API, Express, and Socket.IO on Postgres. See the video demo on the projects page.",
    icon: "djd",
    video: "/videos/dj-democracy.mp4",
  },
];

/** Copy for the fake-brand widget cards on the /resume page. */
export const resumeCards = {
  disclaimer:
    "I am in no way associated with these companies. If you want the traditional version, my resume PDF is here:",
  nyt: {
    masthead: "NYT Top Stories",
    kicker: "LIVE",
    headline:
      "Jonathan Beaubien is a senior full-stack engineer with 3+ years of experience shipping consumer products.",
    body: "He holds a B.S. in Applied and Computational Mathematical Sciences from the University of Washington and was the 3rd engineering hire at Posh, an NYC startup, where he leads projects across web, native, and cloud infrastructure.",
  },
  slack: {
    channel: "Latest",
    unread: 5,
    messages: [
      { text: "I have experience using Next.js and React,", author: "Jonathan Beaubien", avatar: "/images/headshot.png" },
      { text: "developing backends in tRPC and NestJS,", author: "Jonathan Beaubien", avatar: "/images/headshot.png" },
      { text: "and using AWS, Terraform, and MongoDB.", author: "Jonathan Beaubien", avatar: "/images/headshot.png" },
      { text: "OMG DID YOU SEE BRIAN'S HAT?", author: "Brie", avatar: "/images/brie.png" },
      { text: "It's illegal for you to ask me that.", author: "Brian", avatar: "/images/brian.png" },
    ],
  },
  twitter: {
    heading: "Latest Tweets",
    author: "Jonathan Beaubien",
    handle: "@jon",
    avatar: "/images/headshot.png",
    tweet:
      "If you find yourself setting z-index: 999,999, it's time to rethink your life choices.",
    retweets: "102",
    likes: "5k",
  },
};
