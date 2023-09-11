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
            "This is my portfolio.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "",
        demo: "",
        image: "/projects/portfolionew.webp",
        available: true,
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
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
