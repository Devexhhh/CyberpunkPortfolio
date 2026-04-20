"use client";

import React from "react";
import StatusBar from "@/components/StatusBar";
import VerticalGrid from "@/components/VerticalGrid";

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
    if (t.includes("rust") || t.includes("html") || t.includes("phaser"))
        return "text-[#e34f26] border-[#e34f26]/30 bg-[#e34f26]/5";
    if (t.includes("javascript") || t.includes("typescript"))
        return "text-[#f7df1e] border-[#f7df1e]/30 bg-[#f7df1e]/5";
    if (t.includes("tailwind") || t.includes("css") || t.includes("websocket"))
        return "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/5";
    return "text-[var(--text-secondary)] border-[var(--border-bright)] bg-transparent";
};

const hacks = [
    {
        placement: "1ST PLACE",
        color: "#d4a017", // Swapped #facc15 for a "Terminal Amber" to fit the dark theme better
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

export default function HacksSection() {
    return (
        <div className="relative min-h-screen font-display bg-[var(--bg)] text-[var(--text-primary)]">
            <VerticalGrid />

            <main className="page-enter max-w-[1024px] mx-auto pt-[80px] px-6 md:px-12 pb-[100px] relative z-[5]">

                {/* Header Motifs */}
                <p className="font-mono-custom text-[11px] text-[var(--text-dim)] tracking-[0.1em] mb-2">
          // ACCESSING ARCHIVES — COMPETITIVE BUILDS
                </p>
                <h2 className="font-display text-[clamp(32px,5vw,48px)] font-bold tracking-[0.05em] uppercase text-[var(--text-primary)] leading-none mb-2.5">
                    Hackathons
                </h2>
                <p className="font-mono-custom text-[10px] text-[var(--text-dim)] tracking-[0.14em] uppercase mb-10">
                    Competitions, bounties, and builds under pressure.
                </p>

                {/* Section Divider */}
                <div className="flex items-center gap-4 mt-8 mb-10">
                    <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
                    <h3 className="font-display text-[13px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] whitespace-nowrap">
                        Competition_Logs
                    </h3>
                    <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
                    <span className="font-mono-custom text-[9px] text-[var(--text-dim)]">06</span>
                </div>

                {/* Hacks List */}
                <div className="flex flex-col gap-6">
                    {hacks.map((h, i) => (
                        <div
                            key={i}
                            className="group relative bg-[var(--panel)] border border-[var(--border-bright)] p-6 md:p-8 transition-all duration-300 hover:bg-[#0c0c0c]"
                            style={{ "--accent": h.color }}
                        >
                            {/* Hover Dashed Bounding Box (Uses Accent Color) */}
                            <div
                                className="absolute inset-[-1px] border border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                                style={{ borderColor: 'var(--accent)' }}
                            />

                            {/* Hover Solid L-brackets (Corners) */}
                            {[
                                "top-[-2px] left-[-2px] border-t-2 border-l-2",
                                "top-[-2px] right-[-2px] border-t-2 border-r-2",
                                "bottom-[-2px] left-[-2px] border-b-2 border-l-2",
                                "bottom-[-2px] right-[-2px] border-b-2 border-r-2"
                            ].map((classes, ci) => (
                                <div
                                    key={ci}
                                    className={`absolute w-[12px] h-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-none ${classes}`}
                                    style={{ borderColor: 'var(--accent)' }}
                                />
                            ))}

                            {/* Top Row: Event & Placement */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-none animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
                                    <p className="font-mono-custom text-[10px] text-[var(--text-secondary)] tracking-[0.2em] uppercase">
                                        {h.event}
                                    </p>
                                </div>

                                <div
                                    className="inline-flex px-3 py-1 border font-mono-custom text-[10px] tracking-[0.15em] uppercase self-start sm:self-auto"
                                    style={{
                                        color: 'var(--accent)',
                                        borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
                                        backgroundColor: 'color-mix(in srgb, var(--accent) 5%, transparent)'
                                    }}
                                >
                                    {h.placement}
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-display text-[22px] font-bold text-[var(--text-primary)] mb-3 tracking-[0.05em] uppercase transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                <span className="text-[var(--text-dim)] mr-3 font-mono-custom group-hover:text-[var(--accent)] transition-colors">›</span>
                                {h.title}
                            </h3>

                            <p className="font-display text-[14px] leading-[1.8] text-[#888] font-light mb-8 max-w-[800px] group-hover:text-[#a0a0a0] transition-colors pl-6 border-l border-transparent group-hover:border-[var(--border-bright)]">
                                {h.description}
                            </p>

                            {/* Bottom Row: Tech Tags & Link */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-auto">
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {h.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className={`font-mono-custom text-[9px] uppercase tracking-[0.06em] px-2 py-1 border transition-all duration-200 flex items-center gap-1.5 rounded-none ${getTechStyle(t)} hover:brightness-125`}
                                        >
                                            <span className="w-1 h-1 rounded-none bg-current opacity-70" />
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub Link */}
                                {h.github && (
                                    <a
                                        href={h.github}
                                        className="relative inline-flex items-center gap-2 bg-[var(--bg)] border border-[var(--border-bright)] py-[6px] px-4 font-mono-custom text-[10px] text-[var(--text-secondary)] no-underline tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer shrink-0 hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                                    >
                                        {/* Tiny corner dots for the button */}
                                        <span className="absolute top-[-1px] left-[-1px] w-[3px] h-[3px] bg-[var(--text-dim)] group-hover:bg-[var(--accent)] transition-colors"></span>
                                        <span className="absolute bottom-[-1px] right-[-1px] w-[3px] h-[3px] bg-[var(--text-dim)] group-hover:bg-[var(--accent)] transition-colors"></span>

                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </main>
            <StatusBar />
        </div>
    );
}