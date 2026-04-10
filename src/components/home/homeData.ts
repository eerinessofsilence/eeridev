export interface Technology {
  name: string;
  src: string;
}

export interface FeaturedProject {
  imageSrc: string;
  name: string;
  githubLink?: string;
  projectLink: string;
  description: string;
  techStack: readonly Technology[];
}

export interface ExperienceJob {
  logo: string;
  position: string;
  name: string;
  date: string;
  description: string;
  bullets: readonly string[];
}

export interface ProjectBrief {
  project: string;
  goals: readonly string[];
  timeline: string;
  stack: readonly string[];
}

const typeScript = {
  name: 'TypeScript',
  src: '/technologies/typescript.svg',
} as const;

const javascript = {
  name: 'JavaScript',
  src: '/technologies/javascript.svg',
} as const;

const react = {
  name: 'React',
  src: '/technologies/react.svg',
} as const;

const tailwind = {
  name: 'Tailwind CSS',
  src: '/technologies/tailwindcss.svg',
} as const;

const vite = {
  name: 'Vite',
  src: '/technologies/vite.svg',
} as const;

const nextJs = {
  name: 'Next.js',
  src: '/technologies/nextjs.svg',
} as const;

const html = {
  name: 'HTML',
  src: '/technologies/html.svg',
} as const;

const css = {
  name: 'CSS',
  src: '/technologies/css.svg',
} as const;

const python = {
  name: 'Python',
  src: '/technologies/python.svg',
} as const;

const django = {
  name: 'Django',
  src: '/technologies/django.svg',
} as const;

const postgresql = {
  name: 'PostgreSQL',
  src: '/technologies/postgresql.svg',
} as const;

const docker = {
  name: 'Docker',
  src: '/technologies/docker.svg',
} as const;

const git = {
  name: 'Git',
  src: '/technologies/git.svg',
} as const;

const github = {
  name: 'GitHub',
  src: '/technologies/github.svg',
} as const;

const rust = {
  name: 'Rust',
  src: '/technologies/rust.svg',
} as const;

const java = {
  name: 'Java',
  src: '/technologies/java.svg',
} as const;

export const technologies: readonly Technology[] = [
  typeScript,
  javascript,
  react,
  tailwind,
  vite,
  nextJs,
  html,
  css,
  python,
  django,
  postgresql,
  docker,
  git,
  github,
  rust,
  java,
];

export const featuredProjects: readonly FeaturedProject[] = [
  {
    imageSrc: '/ai-def-screen.jpg',
    name: 'AI-DEF',
    projectLink: 'https://www.ai-def.com',
    description:
      'A corporate site that presents defense products, tactical systems, and AI-driven security capabilities in a clearer product narrative.',
    techStack: [
      typeScript,
      react,
      tailwind,
      vite,
      html,
      css,
      python,
      django,
      postgresql,
    ],
  },
  {
    imageSrc: '/tactica-screen.jpg',
    name: 'Tactica',
    githubLink: 'https://github.com/eerinessofsilence/tactica',
    projectLink: 'https://tactica-six.vercel.app',
    description:
      'A revenue operations concept that pairs a React-based public experience with a lightweight Django backend for authenticated flows.',
    techStack: [
      typeScript,
      react,
      tailwind,
      vite,
      html,
      css,
      python,
      django,
      postgresql,
    ],
  },
  {
    imageSrc: '/4seasons-screen.jpg',
    name: '4Seasons',
    githubLink: 'https://github.com/eerinessofsilence/4seasons',
    projectLink: 'https://4seasons-one.vercel.app',
    description:
      'A provider website built to showcase broadband services, connection plans, and reliable network support for homes and businesses.',
    techStack: [typeScript, react, tailwind, vite, html, css],
  },
];

export const experienceJobs: readonly ExperienceJob[] = [
  {
    logo: '/ive-studio-logo.png',
    position: 'Full Stack Developer',
    name: 'IVE Studio',
    date: 'Jan 2025 - Present',
    description:
      'Building end-to-end web products with attention to maintainable architecture, interface quality, and measurable performance.',
    bullets: [
      'Delivered responsive applications with Next.js, Vite, TypeScript, and backend integrations shaped around product needs',
      'Refined architecture and frontend patterns to improve load time, code clarity, and long-term maintainability',
    ],
  },
  {
    logo: '/ai-def-logo.png',
    position: 'Full Stack Developer',
    name: 'AI-DEF',
    date: 'Apr 2023 - Dec 2024',
    description:
      'Worked on company and product websites focused on defense technology and supporting internal information platforms.',
    bullets: [
      'Implemented frontend and backend features for product pages, content structure, and supporting information systems',
      'Standardized UI patterns and performance improvements across several internal and public-facing interfaces',
    ],
  },
];

export const projectBriefs: readonly ProjectBrief[] = [
  {
    project: 'new product site, redesign, or internal dashboard',
    goals: ['cleaner UX', 'stronger frontend', 'faster shipping'],
    timeline: 'urgent launch support or planned iteration',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'backend support'],
  },
  {
    project: 'landing page refresh or conversion-focused marketing site',
    goals: ['clearer messaging', 'better performance', 'higher conversion'],
    timeline: 'launch in 2-4 weeks',
    stack: ['Next.js', 'CMS integration', 'analytics', 'SEO', 'motion polish'],
  },
  {
    project: 'internal dashboard, admin panel, or ops workspace',
    goals: ['simpler flows', 'reliable data views', 'less manual work'],
    timeline: 'phased rollout with quick wins',
    stack: ['React', 'TypeScript', 'API integration', 'auth', 'tables/charts'],
  },
];
