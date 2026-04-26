"use client";

import React, { useState, useEffect } from "react";
import RadialMeter from "./RadialMeter";

interface LeftPanelProps {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isOpen, setIsOpen }) => {
    const [time, setTime] = useState("--:--:-- UTC");

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            setTime(now.toUTCString().split(" ")[4] + " UTC");
        };
        tick();
        const timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <>
            {/* 🔥 Overlay (mobile UX boost) */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[40]"
                />
            )}

            <aside
                className={`
          fixed top-[32px] left-0 bottom-0
          w-[85%] sm:w-[300px] md:w-[280px]
          max-w-[320px]
          z-[50]
          bg-[var(--panel)]
          border-r border-[var(--border-bright)]
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          shadow-[4px_0_30px_rgba(0,0,0,0.6)]
        `}
            >
                {/* Close Button (bigger touch target) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="
            absolute top-3 right-3
            text-lg sm:text-xl
            p-2
            rounded-md
            hover:bg-white/5
            active:scale-95
          "
                >
                    ✕
                </button>

                {/* Header */}
                <div className="p-4 pb-3 border-b border-[var(--border)] bg-[#0a0a0a]">
                    <div className="font-mono-custom text-[9px] sm:text-[10px] text-[var(--text-dim)] tracking-[0.1em] mb-1.5">
                        PROFILE — #A-20148
                    </div>

                    <h1 className="font-display text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase">
                        Kumar Sujal
                    </h1>

                    <div className="flex items-center gap-2 mt-2.5 flex-wrap">
                        <span className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-dim)] uppercase">
                            Neural Mapping
                        </span>

                        <span className="font-mono-custom text-[8px] sm:text-[9px] text-black bg-[var(--green)] px-2 py-0.5">
                            ACTIVE
                        </span>

                        <span className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-secondary)] ml-auto">
                            {time}
                        </span>
                    </div>
                </div>

                <div className="py-2 flex-1 overflow-y-auto">

                    {/* Metrics */}
                    {[
                        { label: "CF Rating", value: "1400", unit: "", dasharray: "72 94", dashoffset: "24" },
                        { label: "Wallets Shipped", value: "2", unit: "", dasharray: "87 94", dashoffset: "24" },
                        { label: "Aquifer Datasets", value: "12", unit: "YR", dasharray: "93.9 94", dashoffset: "24" },
                    ].map((metric, idx) => (
                        <div
                            key={idx}
                            className="flex items-center px-4 sm:px-5 py-3 border-b border-[var(--border)] gap-3 hover:bg-[var(--green-glow)]"
                        >
                            <div className="flex-1">
                                <div className="font-display text-lg sm:text-xl font-bold leading-none">
                                    {metric.value}
                                    <span className="text-[10px] sm:text-[11px] text-[var(--text-dim)] ml-1">
                                        {metric.unit}
                                    </span>
                                </div>

                                <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-dim)] uppercase mt-[3px]">
                                    {metric.label}
                                </div>
                            </div>

                            <RadialMeter dasharray={metric.dasharray} dashoffset={metric.dashoffset} />
                        </div>
                    ))}

                    {/* Hackathons */}
                    <div className="flex items-center px-4 sm:px-5 py-3 border-b border-[var(--border)] gap-3">
                        <div className="flex-1">
                            <div className="font-display text-lg sm:text-xl font-bold">1</div>
                            <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-dim)] uppercase">
                                SIH Appearances
                            </div>
                        </div>

                        <div className="flex gap-[2px] items-end h-[22px]">
                            {[6, 10, 14, 18, 22, 14].map((h, i) => (
                                <span key={i} style={{ height: h }} className="w-[3px] bg-[var(--green)] block" />
                            ))}
                            {[8, 12].map((h, i) => (
                                <span key={i} style={{ height: h }} className="w-[3px] bg-[var(--green-dim)] block" />
                            ))}
                        </div>
                    </div>

                    {/* Contributions */}
                    <div className="flex items-center px-4 sm:px-5 py-3 border-b border-[var(--border)] gap-3">
                        <div className="flex-1">
                            <div className="font-display text-lg sm:text-xl font-bold">3847</div>
                            <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-dim)] uppercase">
                                Contributions
                            </div>
                        </div>

                        <RadialMeter dasharray="88 94" dashoffset="24" />
                    </div>

                    {/* Stack */}
                    <div className="px-4 sm:px-5 py-3 border-b border-[var(--border)]">
                        <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-dim)] uppercase mb-2">
                            Stack
                        </div>

                        <div className="flex flex-wrap gap-1">
                            {["Solana", "Next.js", "TypeScript", "Tailwind", "C++"].map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="font-mono-custom text-[8px] sm:text-[9px] px-[6px] py-[2px] border border-[var(--border-bright)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Position */}
                    <div className="px-4 sm:px-5 py-3">
                        <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-dim)] uppercase mb-1.5">
                            Position
                        </div>

                        <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-secondary)]">
                            X: IN / Jharkhand
                        </div>

                        <div className="font-mono-custom text-[8px] sm:text-[9px] text-[var(--text-secondary)]">
                            Y: Student Developer
                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
};

export default LeftPanel;