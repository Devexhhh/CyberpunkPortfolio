"use client";

import { useState } from "react";

import LeftPanel from "@/components/LeftPanel";
import PositionReadout from "@/components/PositionReadout";
import SectionDivider from "@/components/SectionDivider";
import SocialLinks from "@/components/SocialLinks";
import ContributionGrid from "@/components/ContributionGrid";
import AchievementsList from "@/components/AchievementsList";
import StatusBar from "@/components/StatusBar";

const Home = () => {
  // ❗ CLOSED BY DEFAULT
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-display overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)] mb-18 mt-5">

      {/* Backgrounds */}
      <div className="bg-grid fixed inset-0 z-0 pointer-events-none opacity-50"></div>
      <div className="scanline fixed left-0 right-0 h-[3px] z-[1] pointer-events-none"></div>

      {/* Left Panel */}
      <LeftPanel isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-[60] bg-black border border-[var(--border-bright)] px-3 py-1 text-sm font-mono-custom"
        >
          ☰
        </button>
      )}

      <PositionReadout />

      {/* MAIN CONTENT — ALWAYS CENTERED */}
      <main className="mt-[32px] pt-[50px] md:pt-[40px] px-5 md:px-12 pb-[80px] max-w-4xl mx-auto relative z-[5] bg-[var(--bg-card)]/30 rounded-xl">

        {/* Hero */}
        <p className="font-mono-custom text-[11px] text-[var(--text-dim)] tracking-[0.1em] mb-2">
          // INITIATING PROFILE ANALYSIS — SUBJECT #A-20148
        </p>

        <h2 className="font-display text-[clamp(36px,6vw,62px)] font-bold tracking-[0.05em] uppercase leading-none mb-2.5">
          Kumar Sujal
        </h2>

        <p className="font-mono-custom text-[10px] text-[var(--text-dim)] tracking-[0.14em] uppercase mb-10">
          I build web apps, explore blockchain, and crunch data for research
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-[60px]">
          <div className="terminal-pill inline-flex items-center gap-2.5 bg-[var(--bg-card)] border border-[var(--border-bright)] py-2 px-[18px] font-mono-custom text-[13px] text-[var(--text-primary)] relative">
            <div className="w-[7px] h-[7px] rounded-full bg-[var(--green)]"></div>
            <span>npx kumarsujal</span>
            <span className="animate-blink text-[#555]">_</span>
          </div>
          <span className="font-mono-custom text-[10px] text-[#333] ml-3.5">
            ← try this in your terminal
          </span>
        </div>

        {/* About */}
        <SectionDivider title="About_Me" number="01" />
        <p className="font-display text-[14px] leading-[1.9] text-[#888] font-light mb-3.5">
          Hi! I'm Kumar Sujal — a student developer with interests spanning competitive programming, Web3/blockchain, and environmental data analysis.
        </p>

        <p className="font-display text-[14px] leading-[1.9] text-[#888] font-light mb-3.5">
          I've worked on groundwater datasets, Solana DApps, Codeforces problems, and quantitative finance exploration.
        </p>

        <SocialLinks />

        {/* Activity */}
        {/* Activity */}
        <SectionDivider title="Activity_Grid" number="02" className="mt-[52px]" />
        <ContributionGrid total={3847} />
        {/* Achievements */}
        <SectionDivider title="Notable_Achievements" number="03" className="mt-[52px]" />
        <AchievementsList />

      </main>

      <StatusBar />
    </div>
  );
};

export default Home;