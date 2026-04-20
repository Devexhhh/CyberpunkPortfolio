"use client";

import React from "react";
import StatusBar from "@/components/StatusBar";
import VerticalGrid from "@/components/VerticalGrid"; // Assuming you have this from the previous section

// Helper function updated to match the darker, low-opacity theme of the terminal aesthetic
const getTechStyle = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes("react") || t.includes("next"))
        return "text-[#61dafb] border-[#61dafb]/30 bg-[#61dafb]/5";
    if (t.includes("node") || t.includes("mongo") || t.includes("excel"))
        return "text-[#4db33d] border-[#4db33d]/30 bg-[#4db33d]/5";
    if (t.includes("python") || t.includes("api") || t.includes("c++"))
        return "text-[#4285F4] border-[#4285F4]/30 bg-[#4285F4]/5";
    if (t.includes("solana"))
        return "text-[var(--green)] border-[var(--green)]/40 bg-[var(--green)]/5";
    if (t.includes("ethereum") || t.includes("ethers") || t.includes("blockchain"))
        return "text-[#627EEA] border-[#627EEA]/30 bg-[#627EEA]/5";
    if (t.includes("rust") || t.includes("html") || t.includes("phaser") || t.includes("canvas"))
        return "text-[#e34f26] border-[#e34f26]/30 bg-[#e34f26]/5";
    if (t.includes("javascript") || t.includes("typescript"))
        return "text-[#f7df1e] border-[#f7df1e]/30 bg-[#f7df1e]/5";
    if (t.includes("tailwind") || t.includes("css") || t.includes("websocket"))
        return "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/5";
    if (t.includes("motion") || t.includes("framer"))
        return "text-[#f43f5e] border-[#f43f5e]/30 bg-[#f43f5e]/5";
    return "text-[var(--text-secondary)] border-[var(--border-bright)] bg-transparent";
};

const projects = [
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

export default function ProjectsSection() {
    return (
        <div className="relative min-h-screen font-display bg-[var(--bg)] text-[var(--text-primary)]">
            <VerticalGrid />

            <main className="page-enter max-w-[1024px] mx-auto pt-[80px] px-6 md:px-12 pb-[100px] relative z-[5]">

                {/* Header Motifs */}
                <p className="font-mono-custom text-[11px] text-[var(--text-dim)] tracking-[0.1em] mb-2">
          // ACCESSING ARCHIVES — DEPLOYED SCHEMATICS
                </p>
                <h2 className="font-display text-[clamp(32px,5vw,48px)] font-bold tracking-[0.05em] uppercase text-[var(--text-primary)] leading-none mb-2.5">
                    Projects
                </h2>
                <p className="font-mono-custom text-[10px] text-[var(--text-dim)] tracking-[0.14em] uppercase mb-10">
                    A collection of active and archived builds
                </p>

                {/* Section Divider */}
                <div className="flex items-center gap-4 mt-8 mb-10">
                    <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
                    <h3 className="font-display text-[13px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] whitespace-nowrap">
                        Schematics_Grid
                    </h3>
                    <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
                    <span className="font-mono-custom text-[9px] text-[var(--text-dim)]">05</span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="group relative cursor-default bg-[var(--panel)] border border-[var(--border-bright)] flex flex-col transition-all duration-300 hover:bg-[#0f0f0f]"
                        >
                            {/* Hover Dashed Bounding Box (Green) */}
                            <div className="absolute inset-[-1px] border border-dashed border-[var(--green-dim)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />

                            {/* Hover Solid L-brackets (Corners) */}
                            {[
                                "top-[-2px] left-[-2px] border-t-2 border-l-2",
                                "top-[-2px] right-[-2px] border-t-2 border-r-2",
                                "bottom-[-2px] left-[-2px] border-b-2 border-l-2",
                                "bottom-[-2px] right-[-2px] border-b-2 border-r-2"
                            ].map((classes, ci) => (
                                <div
                                    key={ci}
                                    className={`absolute w-[12px] h-[12px] border-[var(--green)] opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-none ${classes}`}
                                />
                            ))}

                            {/* Preview Section */}
                            <div
                                className="h-[160px] flex items-center justify-center relative overflow-hidden border-b border-[var(--border-bright)] bg-[#050505]"
                                style={!p.image ? { background: `radial-gradient(ellipse at 50% 50%, ${p.gradientA} 0%, ${p.gradientB} 100%)` } : {}}
                            >
                                {p.image ? (
                                    <>
                                        <div className="absolute inset-0 bg-[var(--green)] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-20 pointer-events-none" />
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                    </>
                                ) : (
                                    <>
                                        {/* Data grid background lines */}
                                        <div className="absolute inset-0 opacity-20 bg-[size:20px_20px] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]" />

                                        <span className="font-display text-[64px] font-bold text-[var(--text-dim)] opacity-20 tracking-[0.05em] select-none relative z-[1] transition-colors duration-300 group-hover:text-[var(--green-dim)]">
                                            {p.glyph}
                                        </span>
                                    </>
                                )}

                                {/* Embedded Status Badge (Top Right of image) */}
                                <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-[var(--panel)]/90 backdrop-blur-sm border border-[var(--border-bright)] px-2 py-1">
                                    <div className={`w-1.5 h-1.5 rounded-none ${p.status === 'Active' ? 'bg-[var(--green)] animate-pulse' : 'bg-[#666]'}`} />
                                    <span className="font-mono-custom text-[8px] tracking-[0.1em] text-[var(--text-secondary)] uppercase">
                                        {p.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-5 flex flex-col flex-1 relative z-10">
                                <div className="font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.1em] uppercase mb-2">
                                    {p.type}
                                </div>

                                <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)] mb-2.5 tracking-[0.08em] uppercase transition-colors group-hover:text-[var(--green)]">
                                    {p.title}
                                </h3>

                                <p className="font-display text-[13px] leading-[1.7] text-[#888] font-light mb-6 flex-1 group-hover:text-[#a0a0a0] transition-colors">
                                    {p.description}
                                </p>

                                {/* Tech Tags Layout */}
                                <div className="flex flex-wrap gap-1.5 mt-auto border-t border-[var(--border-bright)] pt-4">
                                    {p.tags.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className={`font-mono-custom text-[9px] uppercase tracking-[0.06em] px-2 py-1 border transition-all duration-200 flex items-center gap-1.5 rounded-none ${getTechStyle(t)} hover:brightness-125`}
                                        >
                                            <span className="w-1 h-1 rounded-none bg-current opacity-70" />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </main>
            <StatusBar />
        </div>
    );
}