"use client";

// Vercel-style full-page guide lines with + crosshairs at intersections.
// Vertical lines split the content column, horizontal lines are evenly spaced.
// Completely non-interactive — sits behind all content via z-index.

export default function GridLines() {
    // 3 vertical lines (at 0%, 50%, 100% of the max-w-[860px] container)
    // We replicate the container's max-width & padding so lines align with content edges
    const verticals = ["left-0", "left-1/2", "right-0"];

    // Horizontal lines — fixed positions from top of page
    const horizontals = [148, 280, 480, 680, 880, 1080];

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            {/* ── Container-width guide wrapper ─────────────────────────────── */}
            <div className="relative mx-auto h-full max-w-4xl px-6">

                {/* Vertical lines */}
                {verticals.map((pos, i) => (
                    <div
                        key={i}
                        className={`absolute top-0 bottom-0 ${pos} w-px bg-[#ffffff08]`}
                    />
                ))}

                {/* Crosshairs at every vertical × horizontal intersection */}
                {verticals.map((hPos, vi) => (
                    horizontals.map((top, hi) => {
                        // resolve pixel offset for the horizontal position
                        const leftClass =
                            vi === 0 ? "left-0 -translate-x-1/2" :
                                vi === 1 ? "left-1/2 -translate-x-1/2" :
                                    "right-0 translate-x-1/2";
                        return (
                            <div
                                key={`${vi}-${hi}`}
                                className={`absolute ${leftClass}`}
                                style={{ top }}
                            >
                                {/* horizontal arm */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-px h-px w-[14px] bg-[#ffffff20]" />
                                {/* vertical arm */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-px -translate-y-1/2 w-px h-[14px] bg-[#ffffff20]" />
                            </div>
                        );
                    })
                ))}
            </div>

            {/* Full-width horizontal lines — span the entire viewport width */}
            {horizontals.map((top, i) => (
                <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-[#ffffff06]"
                    style={{ top }}
                />
            ))}
        </div>
    );
}