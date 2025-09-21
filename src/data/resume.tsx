import { Icons } from "@/components/icons";
import { BoxIcon, HomeIcon, MessageCircleMore } from "lucide-react";

export const DATA = {
  name: "Kartik Pawar",
  initials: "KP",
  url: "https://kartikpawar.dev/",
  github: "https://github.com/kartikkpawar",
  location: "Pune, IN",
  locationLink: "z",
  description:
    "Software Engineer who codes by day and spends the night either gaming or tweeting.",
  summary:
    "Graduated in 2022 and started my journey as a Software Engineer after completing 3 internships. In 2023, I transitioned into full-time work, focusing on crafting scalable web applications while building fun side projects along the way",
  // avatarUrl: "/me.png",
  npmCommand: "npx kartikpawar",
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Redux",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "GSAP",
    "Three.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "AWS",
    "Git & GitHub",
    "Appwrite",
    "Socket.Io",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kartikkpawarr@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kartikkpawar/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kartikk-pawar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kartikk_pawar",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Azympto",
      href: "https://www.azympto.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/azympto_logo.jpeg",
      start: "Jan 2023",
      end: "Present",
      description:
        "Designed and built web components for a dynamic website builder, improving efficiency and helping users create digital presence quickly. Developed dynamic forms, interactive gaming components, and custom tags, increasing lead generation by 40%. Created and maintained CLI tools for data processing and analysis, streamlining workflows. Implemented solutions that reduced costs by 37% through process improvements and collaboration with cross-functional teams.",
    },
    {
      company: "Tailnode Technology",
      badges: ["Intern"],
      href: "https://shopify.com",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/tailnode_logo.jpeg",
      start: "Jul 2022",
      end: "Aug 2022",
      description:
        "Developed web applications using React.js to create efficient and interactive user interfaces .Built dashboards to streamline and improve organization management.",
    },
    {
      company: "Kalpas Innovations Pvt. Ltd.",
      href: "https://kalpas.in/",
      badges: ["Intern"],
      location: "Hubballi Karnataka, IN",
      title: "React Developer",
      logoUrl: "/kalpas_innovations_logo.jpeg",
      start: "May 2021",
      end: "Jul 2021",
      description:
        "Developed user-facing features using React.js and created reusable components. Improved performance and usability by editing and optimizing existing code. Worked closely with designers and the backend team to ensure smooth project development.",
    },
    {
      company: "Team 4 Progress Technologies",
      href: "https://www.team4progress.com/",
      badges: ["Intern"],
      location: " New Delhi, IN",
      title: "Web Developer",
      logoUrl: "/team-4-progress.jpeg",
      start: "Oct 2020",
      end: "Dec 2020",
      description:
        "Worked in the Internal Product Development team, creating browser extensions to make internal tasks easier. Integrated APIs into the extensions to add more features and improve functionality",
    },
  ],
  certification: [
    {
      title: "AWS Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/56c055a4-8704-4802-ba4f-909a23252ff6/public_url",
      logoUrl: "/aws-ccp-certification.png",
      start: "Aug 2024",
      end: "Aug 2027",
    },
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  // ],
  projects: [
    {
      title: "Nimbus",
      href: "https://nimbus.kartikpawar.dev/",
      dates: "",
      active: true,
      description:
        "Interactive keycap textures + custom layouts + smooth GSAP animations = satisfying bounces that feel alive",
      technologies: ["Next.js", "TailwindCSS", "GSAP", "ThreeJs"],
      links: [
        {
          type: "Website",
          href: "https://nimbus.kartikpawar.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/kartikkpawar/nimbus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nimbus.png",
      video: "",
    },
    {
      title: "FlowScrape",
      href: "https://flowscrape.kartikpawar.dev/",
      dates: "",
      active: true,
      description:
        "Create, automate, and scale your web scraping projects with ease. No code required.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "React Flow",
      ],
      links: [
        {
          type: "Website",
          href: "https://flowscrape.kartikpawar.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/kartikkpawar/flow-scrape",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/67814b1f0019affb975c/view?project=659a8e6fdef13624c6fb",
      video: "",
    },
    {
      title: "Fizzi",
      href: "https://fizzi.kartikpawar.dev/",
      dates: "",
      active: true,
      description:
        "A visually engaging static e-commerce landing page for soda cans, showcasing interactive 3D elements and smooth animations",
      technologies: ["Next.js", "TailwindCSS", "GSAP", "ThreeJs", "Zustand"],
      links: [
        {
          type: "Website",
          href: "https://fizzi.kartikpawar.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/kartikkpawar/fizzi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/67814b97000e1f690e5b/view?project=659a8e6fdef13624c6fb",
      video: "",
    },
    {
      title: "Form Craft",
      href: "https://formcraft.kartikpawar.dev/",
      dates: "",
      active: true,
      description:
        "A form builder that allows users to build forms faster with drag and drop, preview them easily, and share them, it also shows various form stats such as submission rate, total submissions, bounce rate, and total visits per-form and combined",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "React DND",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://formcraft.kartikpawar.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/kartikkpawar/form-craft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/659d7da3732853d845fb/view?project=659a8e6fdef13624c6fb&project=659a8e6fdef13624c6fb&mode=admin",
      video: "",
    },
    {
      title: "Swift Poll",
      href: "https://swift-poll-app.vercel.app/",
      dates: "",
      active: true,
      description:
        "An instant and anonymous poll creation portal, that lets you create polls instantly with real-time stats update",
      technologies: [
        "React.js",
        "MongoDB",
        "TailwindCSS",
        "Node.js",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://swift-poll-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kartikkpawar/swift-poll-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/659eba77e07d43644025/view?project=659a8e6fdef13624c6fb",
      video: "",
    },
    {
      title: "Cypress (Notion Clone)",
      href: "https://github.com/kartikkpawar/cypress-notion",
      dates: "",
      active: false,
      description:
        "Real-time collaboration platform. Supporting real-time editor, multiple cursors, real-time presence, payments powered by STRIPE PAYMENTS Database and real-time presence managed by Supabase",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Socket.Io",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kartikkpawar/cypress-notion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/65ba32ea94ec0bccaa2a/view?project=659a8e6fdef13624c6fb",
      video: "",
    },
    {
      title: "Binge Guide",
      href: "https://bingegui.web.app/",
      active: true,
      description:
        "A content discovery platform just like IMDB where user can see TV shows, and movies based on their search or by trend/upcoming/related and add it to their watchlist or favourites",
      technologies: ["React.js", "Firebase", "TailwindCSS", "Redux Toolkit"],
      links: [
        {
          type: "Website",
          href: "https://bingegui.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kartikkpawar/Binge-Guide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/659a8f55aafdacbfba4b/files/659d6d0ca4e7abfe2130/view?project=659a8e6fdef13624c6fb",
      dates: "",
      video: "",
    },
  ],
  upcomingProjects: [
    {
      icon: BoxIcon,
      title: "Framer Components",
      description:
        "Professional, modern and beautiful framer motion components built with Next.js and TailwindCSS",
      tags: ["Next.js", "Framer Motion", "Tawilwind"],
    },
    {
      icon: BoxIcon,
      title: "OS Resume",
      description:
        "A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations.",
      tags: ["Next.js", "Tawilwind"],
    },
    {
      icon: MessageCircleMore,
      title: "More Projects coming soon...",
      description:
        "I get ideas all day 🙄, All of them are updated here as soon as I start working on them.",
      tags: [],
    },
  ],
} as const;
