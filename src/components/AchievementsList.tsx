import React from "react";
import { achievements } from "@/utils/data";

const AchievementsList = () => {
    return (
        <div className="flex flex-col gap-0">
            {achievements.map((ach, idx) => (
                <div
                    key={idx}
                    className="grid grid-cols-[48px_1fr] gap-x-4 py-4 border-b border-[var(--border)] relative cursor-default transition-colors duration-150 hover:bg-[rgba(255,255,255,0.01)] group"
                >
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