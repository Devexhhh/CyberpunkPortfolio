"use client";

import React from "react";

export default function VerticalGrid() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
        >
            <div className="relative h-full w-full">

                {/* ========================= */}
                {/* LEFT GRID (outside) */}
                {/* ========================= */}
                <div
                    className="absolute inset-y-0 left-0 opacity-60"
                    style={{
                        width: "calc(50% - 512px)",
                        backgroundImage: `radial-gradient(circle, #222 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                    }}
                />

                <div
                    className="absolute inset-y-0 left-0 opacity-30"
                    style={{
                        width: "calc(50% - 512px)",
                        backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
                        backgroundSize: "140px 140px",
                    }}
                />

                {/* ========================= */}
                {/* RIGHT GRID (outside) */}
                {/* ========================= */}
                <div
                    className="absolute inset-y-0 right-0 opacity-60"
                    style={{
                        width: "calc(50% - 512px)",
                        backgroundImage: `radial-gradient(circle, #222 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                    }}
                />

                <div
                    className="absolute inset-y-0 right-0 opacity-30"
                    style={{
                        width: "calc(50% - 512px)",
                        backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
                        backgroundSize: "140px 140px",
                    }}
                />

                {/* ========================= */}
                {/* CENTER CONTENT AREA (PLAIN) */}
                {/* ========================= */}
                <div className="relative mx-auto h-full max-w-[1024px] border-x border-[var(--border-bright)] bg-[var(--bg)]" />

                {/* ========================= */}
                {/* TICK MARKS (outside lines) */}
                {/* ========================= */}

                {/* LEFT SIDE */}
                <div className="absolute top-[120px] left-[calc(50%-512px-9px)] w-[17px] h-[1px] bg-[var(--text-dim)]" />
                <div className="absolute top-[50%] left-[calc(50%-512px-9px)] w-[17px] h-[1px] bg-[var(--text-dim)]" />
                <div className="absolute bottom-[120px] left-[calc(50%-512px-9px)] w-[17px] h-[1px] bg-[var(--text-dim)]" />

                {/* RIGHT SIDE */}
                <div className="absolute top-[120px] right-[calc(50%-512px-9px)] w-[17px] h-[1px] bg-[var(--text-dim)]" />
                <div className="absolute top-[50%] right-[calc(50%-512px-9px)] w-[17px] h-[1px] bg-[var(--text-dim)]" />
                <div className="absolute bottom-[120px] right-[calc(50%-512px-9px)] w-[17px] h-[1px] bg-[var(--text-dim)]" />

            </div>
        </div>
    );
}