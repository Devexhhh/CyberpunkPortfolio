import React, { ReactNode } from "react";

export interface Achievement {
    num: string;
    title: string;
    body: ReactNode;
}

export const achievements: Achievement[] = [
    {
        num: "01",
        title: "Smart India Hackathon",
        body: (
            <>
                Made it to{" "}
                <strong className="text-[#c0c0c0] font-medium">SIH 2024</strong> in my
                very first attempt. Didn't really know what I was doing, but figured
                it out. Still one of the best experiences.
            </>
        ),
    },
    {
        num: "02",
        title: "Hackathons",
        body: (
            <>
                Built multiple projects under pressure —{" "}
                <strong className="text-[#c0c0c0] font-medium">DeVallet</strong>{" "}
                (Solana HD wallet with Dark Luxury design),{" "}
                <strong className="text-[#c0c0c0] font-medium">NexusChat</strong>{" "}
                (cyberpunk real-time chat), and more. Each shipped from scratch in 48
                hours.
            </>
        ),
    },
    {
        num: "03",
        title: "Blockchain & Web3",
        body: (
            <>
                Built <strong className="text-[#c0c0c0] font-medium">Kryptix</strong>,
                a multi-chain HD wallet supporting{" "}
                <strong className="text-[#c0c0c0] font-medium">Solana</strong> and{" "}
                <strong className="text-[#c0c0c0] font-medium">Ethereum</strong>.
                Resolved Solana devnet LST MintTo flows. Interested in DeFi primitives
                and on-chain credit systems.
            </>
        ),
    },
    {
        num: "04",
        title: "Groundwater Research",
        body: (
            <>
                Building a multi-decade water level analysis platform for{" "}
                <strong className="text-[#c0c0c0] font-medium">Ranchi</strong>{" "}
                district,{" "}
                <strong className="text-[#c0c0c0] font-medium">Jharkhand</strong> —
                tracking 30+ years of pre/post-monsoon CGWB data in a Next.js
                scientific-editorial web app.
            </>
        ),
    },
    {
        num: "05",
        title: "Competitive Programming",
        body: (
            <>
                Active on{" "}
                <strong className="text-[#c0c0c0] font-medium">Codeforces</strong>{" "}
                working through sliding window, MSB-grouping, spanning tree
                constructions, DP range queries, and modular arithmetic in C++ with{" "}
                <strong className="text-[#c0c0c0] font-medium">void solve()</strong>{" "}
                structure.
            </>
        ),
    },
];

export interface Hackathon {
    placement: string;
    color: string;
    event: string;
    title: string;
    description: string;
    tech: string[];
    github: string | null;
}

export const hacks: Hackathon[] = [
    {
        placement: "1ST PLACE",
        color: "#d4a017",
        event: "SMART INDIA HACKATHON · 2024",
        title: "Groundwater Analysis Platform",
        description:
            "Built a scientific web platform to visualize multi-decade groundwater trends for Ranchi district, Jharkhand. Consolidated CGWB data spanning 30+ years tracking pre/post-monsoon water table depths and seasonal aquifer depletion patterns. The platform presents findings in a scientific-editorial Next.js interface.",
        tech: ["Next.js", "Python", "Excel", "Data Analysis", "TypeScript"],
        github: "#",
    },
    {
        placement: "1ST PLACE",
        color: "#d4a017",
        event: "BLOCKCHAIN OPEN BUILD · 2025",
        title: "Kryptix — Multi-Chain HD Wallet",
        description:
            "Built Kryptix, an HD wallet supporting Solana and Ethereum with BIP-44 compliant key derivation, responsive Tailwind UI, and localStorage persistence. Included full transaction signing, account management flows, and address derivation for multiple coins from a single seed phrase.",
        tech: ["TypeScript", "React", "Solana Web3.js", "Ethers.js", "Tailwind"],
        github: "#",
    },
    {
        placement: "BUILT",
        color: "var(--text-dim)",
        event: "48-HOUR SOLO GAME JAM · 2025",
        title: "Penance of the Lost",
        description:
            "Soulsborne-style browser game built entirely in a single HTML file using Phaser 3. Procedurally generated assets, stamina-based combat with dodge rolls, AI enemy pathing, and a multi-phase boss fight. Zero external dependencies beyond Phaser. Ships as one file you can just double-click.",
        tech: ["Phaser 3", "JavaScript", "HTML5 Canvas", "Procedural Gen"],
        github: "#",
    },
    {
        placement: "ONGOING",
        color: "var(--green)",
        event: "WORLDQUANT BRAIN IQC · 2026",
        title: "Alpha Research Strategies",
        description:
            "Preparing quantitative alpha strategies for the IQC 2026 competition. Studying factor models, Sharpe ratio optimization, turnover constraints, and platform-specific simulation. Coming from a finance beginner baseline and working through foundational concepts in market microstructure.",
        tech: ["Python", "Statistics", "Quant Finance", "BRAIN Platform"],
        github: null,
    },
    {
        placement: "BOUNTY",
        color: "var(--text-dim)",
        event: "SOLANA DEVNET BUILD · 2025",
        title: "LST Liquid Staking Token",
        description:
            "Built a Liquid Staking Token project on Solana devnet. Resolved MintTo errors by correctly using Associated Token Accounts. Explored stake pool mechanics, epoch reward distribution, and LST mint/burn flows against devnet validators.",
        tech: ["Rust", "Solana", "Anchor", "SPL Token", "TypeScript"],
        github: "#",
    },
];

export interface Experience {
    company: string;
    logo: string;
    role: string;
    type: string;
    period: string;
    location: string;
    responsibilities: string[];
    tech: string[];
}

export const experiences: Experience[] = [
    {
        company: "WorldQuant BRAIN",
        logo: "𝕎",
        role: "Alpha Researcher (IQC 2026 Prep)",
        type: "Self-Directed",
        period: "2026 – Present",
        location: "Remote",
        responsibilities: [
            "Studying alpha archetypes, key metrics including Sharpe ratio, fitness, and turnover for quantitative strategy development.",
            "Exploring factor investing, order books, and EMH fundamentals from a beginner finance baseline.",
            "Building and back-testing simulated alpha strategies for BRAIN platform submission.",
        ],
        tech: ["Python", "Alpha Research", "Quantitative Finance", "Statistics"],
    },
    {
        company: "Academic Research",
        logo: "📊",
        role: "Data Analyst — Groundwater Study",
        type: "Research",
        period: "Jan 2026 – Present",
        location: "Dhanbad, India",
        responsibilities: [
            "Consolidated multi-decade Excel datasets from CGWB tracking pre/post-monsoon water levels for Ranchi district, Jharkhand.",
            "Building a Next.js web application with a scientific-editorial aesthetic to present findings academically.",
            "Analyzing 30+ years of data to identify seasonal depletion patterns and long-term aquifer trends.",
        ],
        tech: ["Next.js", "Python", "Excel", "Data Visualization", "TypeScript"],
    },
    {
        company: "Open Source / Projects",
        logo: "⬡",
        role: "Full Stack & Blockchain Developer",
        type: "Personal",
        period: "2024 – Present",
        location: "Remote",
        responsibilities: [
            "Built DeVallet — Solana HD wallet with 'Dark Luxury' design system (near-black, warm gold, DM Serif Display + JetBrains Mono).",
            "Built NexusChat — cyberpunk real-time chat with circuit grid background, glitch effects, and WebSocket architecture.",
            "Built Kryptix — multi-chain HD wallet supporting Solana and Ethereum with BIP-44 derivation and localStorage persistence.",
            "Built Penance of the Lost — Soulsborne browser game in a single HTML file using Phaser 3 with procedural asset generation.",
        ],
        tech: ["Next.js", "TypeScript", "Solana", "Phaser 3", "Tailwind", "WebSocket"],
    },
    {
        company: "Competitive Programming",
        logo: "⚡",
        role: "Codeforces Contestant",
        type: "Self-Directed",
        period: "2024 – Present",
        location: "Online",
        responsibilities: [
            "Active on Codeforces across problems involving sliding window, MSB-grouping, spanning tree constructions, and DP range queries.",
            "Developed expertise in modular arithmetic, binary exponentiation, and single-pass solution design.",
            "Uses concise C++ with void solve() structure and minimal branching for competitive submissions.",
        ],
        tech: ["C++", "Algorithms", "Data Structures", "Codeforces"],
    },
];

export interface Project {
    title: string;
    type: string;
    status: string;
    description: string;
    tags: string[];
    image?: string;
    glyph: string;
    gradientA: string;
    gradientB: string;
}

export const projects: Project[] = [
    {
        title: "KeyZen",
        type: "Side Project · Web App",
        status: "Active",
        description: "A typing speed test built around the Keychron keyboard aesthetic with audio feedback on every keystroke. Tracks WPM, accuracy, and stats with a clean, minimal UI.",
        tags: ["Next.js", "TypeScript", "Motion", "Recharts", "shadcn/ui"],
        image: "/keyzen-screenshot.png",
        glyph: "K",
        gradientA: "#0a0a0a", gradientB: "#0a0a0a",
    },
    {
        title: "DeVallet",
        type: "Side Project · Web App",
        status: "Active",
        description: "Solana HD wallet with 'Dark Luxury' design — near-black base, warm gold accents, DM Serif Display + Sora + JetBrains Mono. Full BIP-44 key derivation, account management, and transaction signing.",
        tags: ["Next.js", "Solana", "TypeScript", "Tailwind"],
        glyph: "D",
        gradientA: "#0d1a0d", gradientB: "#0a0a0a",
    },
    {
        title: "NexusChat",
        type: "Side Project · Web App",
        status: "Active",
        description: "Real-time cyberpunk-themed chat app with cyan/violet color language, animated circuit grid background, glitch text effects, and WebSocket-based messaging infrastructure.",
        tags: ["React", "WebSocket", "Node.js", "CSS"],
        glyph: "N",
        gradientA: "#0a0d1a", gradientB: "#0a0a0a",
    },
    {
        title: "Penance of the Lost",
        type: "Game · Single HTML File",
        status: "Complete",
        description: "Soulsborne-style browser game built entirely in one HTML file using Phaser 3. Procedurally generated assets, stamina-based combat with dodge rolls, and a multi-phase boss fight.",
        tags: ["Phaser 3", "JavaScript", "HTML", "Canvas"],
        glyph: "P",
        gradientA: "#1a0a0a", gradientB: "#0a0a0a",
    },
    {
        title: "Groundwater Analysis",
        type: "Research Project",
        status: "Active",
        description: "Multi-decade water level analysis for Ranchi district, Jharkhand — 30+ years of CGWB data. Pre/post-monsoon trend visualization in a scientific-editorial Next.js web application.",
        tags: ["Next.js", "Python", "Excel", "Data Viz"],
        glyph: "G",
        gradientA: "#0a1218", gradientB: "#0a0a0a",
    },
    {
        title: "Kryptix",
        type: "Open Source · Web3",
        status: "Active",
        description: "Multi-chain HD wallet supporting Solana and Ethereum. BIP-44 compliant key derivation, responsive Tailwind UI, localStorage persistence, and full transaction signing.",
        tags: ["TypeScript", "React", "Solana", "Ethereum"],
        glyph: "K",
        gradientA: "#150d1a", gradientB: "#0a0a0a",
    },
    {
        title: "Ankar AI Clone",
        type: "UI · Marketing",
        status: "Complete",
        description: "Next.js recreation of an AI marketing site with animated canvas-based prism light effect, precise corner bracket decorations in the hero, and smooth scroll-triggered reveals.",
        tags: ["Next.js", "Canvas API", "TypeScript", "Framer Motion"],
        glyph: "A",
        gradientA: "#111118", gradientB: "#0a0a0a",
    },
];