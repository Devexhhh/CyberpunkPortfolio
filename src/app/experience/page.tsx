"use client";

import React from "react";
import StatusBar from "@/components/StatusBar";
import VerticalGrid from "@/components/VerticalGrid";
import { experiences } from "@/utils/data";
import TechIcon from "@/utils/TechIcons";

// Helper function retained but styled with darker, lower-opacity backgrounds to match the theme
const getTechStyle = (tech: string) => {
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

export default function ExperienceSection() {
    return (
        <div className="relative min-h-screen font-display bg-[var(--bg)] text-[var(--text-primary)]">
            <VerticalGrid />

            <main className="max-w-[860px] mx-auto pt-[80px] px-6 md:px-12 pb-[100px] relative z-[5]">

                {/* Header Motifs */}
                <p className="font-mono-custom text-[11px] text-[var(--text-dim)] tracking-[0.1em] mb-2">
                    // ACCESSING SYSTEM LOGS — CHRONOLOGICAL
                </p>
                <h2 className="font-display text-[clamp(32px,5vw,48px)] font-bold tracking-[0.05em] uppercase text-[var(--text-primary)] leading-none mb-2.5">
                    Experience
                </h2>
                <p className="font-mono-custom text-[10px] text-[var(--text-dim)] tracking-[0.14em] uppercase mb-10">
                    Career trace and development timeline over 2+ years
                </p>

                {/* Section Divider */}
                <div className="flex items-center gap-4 mt-8 mb-10">
                    <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
                    <h3 className="font-display text-[13px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] whitespace-nowrap">
                        Activity_Trace
                    </h3>
                    <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
                    <span className="font-mono-custom text-[9px] text-[var(--text-dim)]">04</span>
                </div>

                {/* Timeline */}
                <div className="relative mt-8">
                    {/* Vertical Trace Line */}
                    <div className="absolute left-[15px] md:left-[23px] top-2 bottom-0 w-[1px] bg-[var(--border-bright)]" />

                    {/* Entries */}
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative pl-10 md:pl-14 pb-14 group">

                            {/* Timeline Node (Replaces exp-dot) */}
                            <div className="absolute left-[8px] md:left-[16px] top-1.5 w-[15px] h-[15px] bg-[var(--panel)] border border-[var(--border-bright)] flex items-center justify-center transition-all duration-300 group-hover:border-[var(--green)] group-hover:bg-[var(--green-glow)] z-10">
                                <div className="w-[5px] h-[5px] bg-[var(--text-dim)] transition-colors duration-300 group-hover:bg-[var(--green)]" />
                            </div>

                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 mb-5">
                                <div className="flex items-start gap-4">
                                    {/* Logo Container */}
                                    <div className="w-11 h-11 bg-[var(--panel)] border border-[var(--border-bright)] flex items-center justify-center text-[18px] shrink-0 text-[var(--text-secondary)] group-hover:border-[var(--green-dim)] transition-colors">
                                        {exp.logo}
                                    </div>

                                    {/* Company & Role */}
                                    <div>
                                        <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                                            <span className="font-display text-[16px] font-bold text-[var(--text-primary)] tracking-[0.08em] uppercase">
                                                {exp.company}
                                            </span>
                                            <span className="font-mono-custom text-[9px] text-[var(--text-secondary)] tracking-[0.08em] uppercase border border-[var(--border-bright)] px-2 py-[2px] bg-[var(--panel)]">
                                                {exp.type}
                                            </span>
                                        </div>
                                        <div className="font-mono-custom text-[11px] text-[var(--green)] tracking-[0.05em] uppercase">
                                            {exp.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Location & Period */}
                                <div className="text-left md:text-right mt-1 md:mt-0 pl-14 md:pl-0">
                                    <div className="font-mono-custom text-[10px] text-[var(--text-secondary)] tracking-[0.05em] mb-1">
                                        {exp.period}
                                    </div>
                                    <div className="font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.08em] uppercase">
                                        {exp.location}
                                    </div>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="mb-6">
                                <p className="font-mono-custom text-[9px] tracking-[0.15em] text-[var(--text-dim)] mb-3 uppercase flex items-center gap-2">
                                    <span className="w-4 h-[1px] bg-[var(--text-dim)] block"></span>
                                    Key Parameters
                                </p>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    {exp.responsibilities.map((r, ri) => (
                                        <li key={ri} className="font-display text-[13px] leading-[1.8] text-[#888] font-light pl-4 relative group-hover:text-[#a0a0a0] transition-colors">
                                            <span className="absolute left-0 text-[var(--green-dim)] top-[1px] font-mono-custom">›</span>
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack Elements */}
                            <div>
                                <p className="font-mono-custom text-[9px] tracking-[0.15em] text-[var(--text-dim)] mb-3 uppercase flex items-center gap-2">
                                    <span className="w-4 h-[1px] bg-[var(--text-dim)] block"></span>
                                    Tech Config
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className={`font-mono-custom text-[9px] uppercase tracking-[0.06em] px-2 py-1 border transition-all duration-200 flex items-center gap-1.5 rounded-none ${getTechStyle(t)} hover:brightness-125`}
                                        >
                                            {/* Injected SVG Icon here */}
                                            <TechIcon name={t} />
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