import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://deepakkumar-portfolio.vercel.app/"),
    title: "Deepak Kumar - Web Developer and Designer",
    description:
    "Designer and Developer. Focused on immersive experiences.",
    generator: "Next.js",
    applicationName: "Deepak Kumar",
    keywords: [
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "astro",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Deepak Kumar - Web Developer and Designer",
        description:
       "Designer and Developer. Focused on immersive experiences.",
        url: "",
        siteName: "https://deepakkumar-portfolio.vercel.app/",
        images: [
            {
                url: "./public/metadatanew.png",
                width: 1200,
                height: 630,
                alt: "Deepak Kumar - Web Developer and Designer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Deepak Kumar - Web Developer and Designer",
        description:
      "Designer and Developer. Focused on immersive experiences.",
        creator: "vyarth",
        creatorId: "0000000000",
        images: ["./public/metadatanew.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/faviconweb.ico" type="image/x-icon" />
            </head>
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
