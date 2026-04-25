"use client";
import { useState, useRef, useEffect } from "react";

// Updated to the Cranial Analysis terminal green palette
const BG_PALETTE = [
  "bg-[#111111]",      // base dark
  "bg-[#331111]",      // very dark red
  "bg-[#5c1a1a]",      // deep red
  "bg-[#a02626]",      // mid red
  "bg-[var(--green)]"  // your main accent (now red)
];

function getLevel(n: number) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (n <= 5) return 2;
  if (n <= 9) return 3;
  return 4;
}

const MONTH_NAMES = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// Define types for our data
type ContributionDay = { date: string; count: number };
type MonthLabel = { label: string; col: number };

export default function ContributionGrid({ total }: { total: number }) {
  const [mounted, setMounted] = useState(false);
  const [tooltip, setTooltip] = useState<null | { date: string; count: number; x: number; y: number }>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Added explicit TypeScript types to state
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [monthLabels, setMonthLabels] = useState<MonthLabel[]>([]);
  const [realTotal, setRealTotal] = useState(total);

  useEffect(() => {
    setMounted(true);

    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/contributions');
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        // Map the GraphQL response
        const formattedWeeks = data.weeks.map((week: any) =>
          week.contributionDays.map((day: any) => ({
            date: day.date,
            count: day.contributionCount
          }))
        );

        setWeeks(formattedWeeks);
        setRealTotal(data.totalContributions);

        // --- FIXED: Smart Label Spacing (No Sets!) ---
        const newMonthLabels: MonthLabel[] = [];
        let lastMonth = -1;

        formattedWeeks.forEach((week: ContributionDay[], wIndex: number) => {
          if (week.length > 0) {
            const dateObj = new Date(week[0].date);
            const currentMonth = dateObj.getMonth();

            // 1. Detect month change & ensure it's not too close to the right edge
            if (currentMonth !== lastMonth && wIndex < formattedWeeks.length - 2) {
              lastMonth = currentMonth;
              newMonthLabels.push({ label: MONTH_NAMES[currentMonth], col: wIndex });
            }
          }
        });

        // 2. Prevent overlapping labels at the start of the grid
        // This smartly deletes the 13th "stub" month on the far left, keeping the current month on the right!
        if (newMonthLabels.length > 1 && newMonthLabels[1].col - newMonthLabels[0].col < 3) {
          newMonthLabels.shift();
        }

        setMonthLabels(newMonthLabels);

      } catch (error) {
        console.error("Failed to load contributions", error);
      }
    }

    fetchGitHubData();
  }, []);

  if (!mounted) {
    return <div className="h-[140px] w-full" />;
  }

  return (
    <div
      ref={containerRef}
      // Using the exact classes from your old working project
      className="w-full overflow-x-auto pb-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
    >
      {/* Inner container with min-w-max ensures the parent scrolls properly over it */}
      <div className="min-w-max pr-8">

        {/* Month labels */}
        <div className="flex mb-2 pl-0 relative h-4">
          {monthLabels.map((m, i) => (
            <span
              key={i}
              style={{ left: `${m.col * 14}px` }}
              className="absolute font-mono-custom text-[9px] tracking-[0.1em] text-[var(--text-dim)] uppercase whitespace-nowrap leading-none"
            >
              {m.label}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="flex gap-[3px] w-fit">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((cell, di) => {
                const level = getLevel(cell.count);
                return (
                  <div
                    key={di}
                    className={`w-[11px] h-[11px] rounded-[1px] cursor-default transition-colors duration-200 ${BG_PALETTE[level]} hover:ring-1 hover:ring-[var(--green)] hover:z-10 relative`}
                    onMouseEnter={e => {
                      const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                      setTooltip({ date: cell.date, count: cell.count, x: r.left, y: r.top });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend + total */}
        <div className="flex justify-between items-center mt-3 font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.1em] uppercase">
          <span>Activity_Trace — {realTotal.toLocaleString()} Total</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {BG_PALETTE.map((bgClass, i) => (
                <div
                  key={i}
                  className={`w-[11px] h-[11px] rounded-[1px] ${bgClass}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

      </div>

      {/* Tooltip (Outside the min-w-max inner wrapper so fixed positioning works cleanly) */}
      {tooltip && (
        <div
          style={{ top: tooltip.y - 46, left: tooltip.x - 24 }}
          className="fixed bg-[var(--panel)] border border-[var(--border-bright)] py-1.5 px-3 pointer-events-none z-[300] whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.8)] flex flex-col gap-1 rounded-none"
        >
          <div className="font-mono-custom text-[9px] text-[var(--text-dim)] uppercase tracking-[0.1em]">
            {tooltip.date}
          </div>
          <div className="font-display text-[11px] text-[var(--text-primary)] font-semibold tracking-[0.05em] uppercase">
            <span className="text-[var(--green)] mr-1">{tooltip.count}</span>
            Contribution{tooltip.count !== 1 ? "s" : ""}
          </div>
        </div>
      )}
    </div>
  );
}