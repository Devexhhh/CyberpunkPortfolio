import React from 'react';
import TopRuler from '@/components/TopRuler';
import LeftPanel from '@/components/LeftPanel';
import PositionReadout from '@/components/PositionReadout';
import SectionDivider from '@/components/SectionDivider';
import SocialLinks from '@/components/SocialLinks';
import ContributionGrid from '@/components/ContributionGrid';
import AchievementsList from '@/components/AchievementsList';
import StatusBar from '@/components/StatusBar';

const Home = () => {
  return (
    <div className="relative min-h-screen font-display overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)]">

      {/* Backgrounds */}
      <div className="bg-grid fixed inset-0 z-0 pointer-events-none opacity-50"></div>
      <div className="scanline fixed left-0 right-0 h-[3px] z-[1] pointer-events-none"></div>

      <TopRuler />
      <LeftPanel />
      <PositionReadout />

      {/* Main Content */}
      <main className="ml-0 md:ml-[280px] mt-[32px] pt-[50px] md:pt-[40px] px-5 md:px-12 pb-[80px] max-w-[860px] relative z-[5] animate-fadeUp">

        {/* Hero */}
        <p className="font-mono-custom text-[11px] text-[var(--text-dim)] tracking-[0.1em] mb-2">
          // INITIATING PROFILE ANALYSIS — SUBJECT #A-20148
        </p>
        <h2 className="font-display text-[clamp(36px,6vw,62px)] font-bold tracking-[0.05em] uppercase text-[var(--text-primary)] leading-none mb-2.5">
          Kumar<br />Sujal
        </h2>
        <p className="font-mono-custom text-[10px] text-[var(--text-dim)] tracking-[0.14em] uppercase mb-10">
          I build web apps, explore blockchain, and crunch data for research
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-[60px]">
          <div className="terminal-pill inline-flex items-center gap-2.5 bg-[#0d0d0d] border border-[var(--border-bright)] py-2 px-[18px] font-mono-custom text-[13px] text-[#d4d4d4] relative">
            <div className="w-[7px] h-[7px] rounded-full bg-[var(--green)]"></div>
            <span>npx kumarsujal</span>
            <span className="animate-blink text-[#555]">_</span>
          </div>
          <span className="font-mono-custom text-[10px] text-[#333] ml-3.5">← try this in your terminal</span>
        </div>

        {/* About Section */}
        <SectionDivider title="About_Me" number="01" />
        <p className="font-display text-[14px] leading-[1.9] text-[#888] font-light mb-3.5">
          Hi! I'm Kumar Sujal — a student developer with interests spanning competitive programming, Web3/blockchain, and environmental data analysis. I love building things that look great and work even better, from dark luxury wallet UIs to scientific research platforms.
        </p>
        <p className="font-display text-[14px] leading-[1.9] text-[#888] font-light mb-3.5">
          I've spent time working on complex groundwater datasets for Ranchi district, building Solana DApps on devnet, grinding Codeforces C++ problems, and starting to explore quantitative finance via WorldQuant BRAIN's IQC. I enjoy the messy infrastructure work just as much as shipping the final product.
        </p>

        <SocialLinks />

        {/* Contribution Section */}
        <SectionDivider title="Activity_Grid" number="02" className="mt-[52px]" />
        <ContributionGrid total={3847} />

        {/* Achievements Section */}
        <SectionDivider title="Notable_Achievements" number="03" className="mt-[52px]" />
        <AchievementsList />

      </main>

      <StatusBar />
    </div>
  );
};

export default Home;