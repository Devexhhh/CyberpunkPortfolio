"use client";

export default function HorizontalSeparator() {
    return (
        <div
            aria-hidden="true"
            className="relative w-[100vw] ml-[calc(50%-50vw)] h-px bg-zinc-800 my-16 pointer-events-none shrink-0"
        >
            <div className="relative mx-auto h-full max-w-4xl px-6">

                {/* Left Crosshair (Locked to left-0 vertical line) */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-1/2 left-1/2 h-px w-[14px] -translate-x-1/2 -translate-y-1/2 bg-zinc-500" />
                    <div className="absolute top-1/2 left-1/2 h-[14px] w-px -translate-x-1/2 -translate-y-1/2 bg-zinc-500" />
                </div>

                {/* Right Crosshair (Locked to right-0 vertical line) */}
                <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-1/2 left-1/2 h-px w-[14px] -translate-x-1/2 -translate-y-1/2 bg-zinc-500" />
                    <div className="absolute top-1/2 left-1/2 h-[14px] w-px -translate-x-1/2 -translate-y-1/2 bg-zinc-500" />
                </div>

            </div>
        </div>
    );
}