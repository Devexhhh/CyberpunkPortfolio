import React from 'react';

const AchievementsList = () => {
    const achievements = [
        { num: '01', title: 'Smart India Hackathon', body: <>Made it to <strong className="text-[#c0c0c0] font-medium">SIH 2024</strong> in my very first attempt. Didn't really know what I was doing, but figured it out. Still one of the best experiences.</> },
        { num: '02', title: 'Hackathons', body: <>Built multiple projects under pressure — <strong className="text-[#c0c0c0] font-medium">DeVallet</strong> (Solana HD wallet with Dark Luxury design), <strong className="text-[#c0c0c0] font-medium">NexusChat</strong> (cyberpunk real-time chat), and more. Each shipped from scratch in 48 hours.</> },
        { num: '03', title: 'Blockchain & Web3', body: <>Built <strong className="text-[#c0c0c0] font-medium">Kryptix</strong>, a multi-chain HD wallet supporting <strong className="text-[#c0c0c0] font-medium">Solana</strong> and <strong className="text-[#c0c0c0] font-medium">Ethereum</strong>. Resolved Solana devnet LST MintTo flows. Interested in DeFi primitives and on-chain credit systems.</> },
        { num: '04', title: 'Groundwater Research', body: <>Building a multi-decade water level analysis platform for <strong className="text-[#c0c0c0] font-medium">Ranchi</strong> district, <strong className="text-[#c0c0c0] font-medium">Jharkhand</strong> — tracking 30+ years of pre/post-monsoon CGWB data in a Next.js scientific-editorial web app.</> },
        { num: '05', title: 'Competitive Programming', body: <>Active on <strong className="text-[#c0c0c0] font-medium">Codeforces</strong> working through sliding window, MSB-grouping, spanning tree constructions, DP range queries, and modular arithmetic in C++ with <strong className="text-[#c0c0c0] font-medium">void solve()</strong> structure.</> },
    ];

    return (
        <div className="flex flex-col gap-0">
            {achievements.map((ach, idx) => (
                <div key={idx} className="grid grid-cols-[48px_1fr] gap-x-4 py-4 border-b border-[var(--border)] relative cursor-default transition-colors duration-150 hover:bg-[rgba(255,255,255,0.01)] group">
                    <span className="font-mono-custom text-[10px] text-[var(--text-dim)] pt-0.5 tracking-[0.05em] text-right transition-colors duration-200 group-hover:text-[var(--green)]">
                        {ach.num}.
                    </span>
                    <div>
                        <div className="font-display text-[12px] font-semibold text-[var(--text-primary)] tracking-[0.12em] uppercase mb-1">
                            {ach.title}
                        </div>
                        <div className="font-display text-[13px] font-light text-[#777] leading-[1.8]">
                            {ach.body}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AchievementsList;