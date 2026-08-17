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
      },
      {
        title: "Software Engineer, Full Stack",
        start: "February 2023",
        end: "January 2025",
      },
    ],
  },
  {
    company: "University of Washington I.T.",
    url: "https://it.uw.edu",
    blurb:
      "As a student engineer I modernized the UW student portal with Vue/Vuex, expanded test coverage, and built asynchronous background job infrastructure.",
    roles: [
      {
        title: "Student Software Engineer",
        start: "July 2020",
        end: "September 2022",
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
  icon: "riff" | "trio" | "djd";
  video?: string;
};

export const projects: Project[] = [
  {
    name: "Riff",
    url: "https://playriff.tv",
    description:
      "A Jackbox-style party game for the browser — a laptop or TV becomes the shared stream screen and everyone joins from their phones by scanning a QR code. Real-time multiplayer built with React and TypeScript on Cloudflare Durable Objects, with typed WebSocket commands and a single server-authoritative game state.",
    icon: "riff",
  },
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
    "My resume, remixed. (I am in no way associated with these companies.)",
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
