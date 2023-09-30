import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiJavascript,
    SiFirebase,
    SiHtml5,
    SiCss3,
    SiWebflow,
    SiFigma,
    SiShazam
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "This is my iterated Portfolio.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "",
        demo: "",
        image: "/projects/portfolio.svg",
        available: false,
    },
    {
        id: 1,
        name: "vyarth",
        description:
            "This is a design and build for a concept project - vyarth.",
        technologies: [SiHtml5, SiCss3, SiTailwindcss, SiJavascript,SiFirebase],
        techNames: ["Html5", "CSS3" , "Tailwind CSS", "Javascript","Firebase"],
        techLinks: ["https://html.spec.whatwg.org/", "https://drafts.csswg.org/", "https://tailwindcss.com/", "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/","https://firebase.google.com/"],
        github: "",
        demo: "https://vyarth.netlify.app/",
        image: "/projects/vyarth.svg",
        available: true,
    },
    {
        id: 2,
        name: "Melody",
        description:
            "Melody is a Music Streaming Website. This web application uses an API to fetch the music.",
        technologies: [SiReact,SiJavascript,SiCss3,SiShazam],
        techNames: ["React","Javascript","CSS3","ShazamAPI"],
        techLinks: ["https://reactjs.org/","https://www.ecma-international.org/publications-and-standards/standards/ecma-262/","https://drafts.csswg.org/","https://rapidapi.com/apidojo/api/shazam/"],
        github: "",
        demo: "https://melody-tunes.vercel.app/",
        image: "/projects/melody.svg",
        available: true,
    },
    {
        id: 3,
        name: "team.",
        description:
            "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog.",
        technologies: [SiWebflow,SiFigma,SiHtml5,SiCss3,SiJavascript],
        techNames: ["Webflow","Figma","HTML5","CSS3","Javascript"],
        techLinks: ["https://webflow.com/","https://www.figma.com/","https://html.spec.whatwg.org/","https://drafts.csswg.org/","https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"],
        github: "",
        demo: "https://teamapp-vyarth.netlify.app/",
        image: "/projects/team.svg",
        available: true,
    },
    {
        id: 4,
        name: "chatapp",
        description:
            "This is a homepage design and build for a concept project – a chat application.",
        technologies: [SiWebflow,SiFigma,SiHtml5,SiCss3,SiJavascript],
        techNames: ["Webflow","Figma","HTML5","CSS3","Javascript"],
        techLinks: ["https://webflow.com/","https://www.figma.com/","https://html.spec.whatwg.org/","https://drafts.csswg.org/","https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"],
        github: "",
        demo: "https://chatapp-vyarth.netlify.app/",
        image: "/projects/chatapp.svg",
        available: true,
    },
    {
        id: 5,
        name: "Portfolio",
        description:
            "This is my first Portfolio. Let's work together to bring your vision to life!",
        technologies: [SiWebflow,SiFigma,SiHtml5,SiCss3,SiJavascript],
        techNames: ["Webflow","Figma","HTML5","CSS3","Javascript"],
        techLinks: ["https://webflow.com/","https://www.figma.com/","https://html.spec.whatwg.org/","https://drafts.csswg.org/","https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"],
        github: "",
        demo: "https://deepak-kumar-devportfolio.netlify.app/",
        image: "/projects/portfoliowf.svg",
        available: true,
    },
    {
        id: 6,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/construction.webp",
        available: false,
    },
    
];
