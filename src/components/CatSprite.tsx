"use client";
import { useEffect, useRef } from "react";

export default function VRunner() {
  const runnerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLSpanElement>(null);
  const pos = useRef(-80), dir = useRef(1);
  const fc = useRef(0), frame = useRef(0);
  const scanY = useRef(6);
  const visorX = useRef(18), visorDir = useRef(1);

  useEffect(() => {
    const runner = runnerRef.current;
    const svg = svgRef.current;
    if (!runner || !svg) return;

    const g = (id: string) => svg.getElementById(id);

    const walkFrames = [
      { lY: 0, rY: -4, lbY: 61, rbY: 57 },
      { lY: -2, rY: -2, lbY: 59, rbY: 59 },
      { lY: -4, rY: 0, lbY: 57, rbY: 61 },
      { lY: -2, rY: -2, lbY: 59, rbY: 59 },
    ];
    const armBob = [0, -2, -3, -2];

    let raf: number;
    const tick = () => {
      pos.current += 1.5 * dir.current;
      fc.current++;

      if (fc.current % 8 === 0) {
        frame.current = (frame.current + 1) % 4;
        const f = walkFrames[frame.current];
        const ab = armBob[frame.current];
        g("legL")?.setAttribute("y", String(52 + f.lY));
        g("legL")?.setAttribute("height", String(10 - f.lY));
        g("legR")?.setAttribute("y", String(52 + f.rY));
        g("legR")?.setAttribute("height", String(10 - f.rY));
        g("legLS")?.setAttribute("y1", String(52 + f.lY));
        g("legLS")?.setAttribute("y2", String(62 + f.lY));
        g("legRS")?.setAttribute("y1", String(52 + f.rY));
        g("legRS")?.setAttribute("y2", String(62 + f.rY));
        g("bootL")?.setAttribute("y", String(f.lbY));
        g("bootR")?.setAttribute("y", String(f.rbY));
        g("bootLS")?.setAttribute("y", String(f.lbY + 3));
        g("bootRS")?.setAttribute("y", String(f.rbY + 3));
        g("armL")?.setAttribute("y", String(19 + ab));
        g("armR")?.setAttribute("y", String(19 - ab));
        g("handL")?.setAttribute("y", String(31 + ab));
        g("handR")?.setAttribute("y", String(31 - ab));
      }

      if (fc.current % 4 === 0) {
        visorX.current += visorDir.current * 1.2;
        if (visorX.current > 30) visorDir.current = -1;
        if (visorX.current < 18) visorDir.current = 1;
        g("visor-scan")?.setAttribute("x", String(visorX.current));
      }

      if (fc.current % 3 === 0) {
        g("exhaust1")?.setAttribute("opacity", (0.12 + Math.random() * 0.25).toFixed(2));
        g("exhaust2")?.setAttribute("opacity", (0.08 + Math.random() * 0.15).toFixed(2));
      }

      scanY.current += 0.3;
      if (scanY.current > 90) scanY.current = -3;
      if (scanRef.current) scanRef.current.style.top = scanY.current + "px";
      if (hudRef.current) hudRef.current.textContent = String(Math.round(pos.current)).padStart(4, "0");

      const vw = window.innerWidth;
      if (pos.current > vw + 80) dir.current = -1;
      if (pos.current < -80) dir.current = 1;

      runner.style.left = pos.current + "px";
      svg.style.transform = dir.current === -1 ? "scaleX(-1)" : "scaleX(1)";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-50"
      style={{ height: 90, background: "var(--bg)" }}
    >
      <div
        ref={scanRef}
        className="absolute left-0 right-0"
        style={{ height: 3, background: "rgba(212,68,68,0.07)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />
      <div
        className="absolute top-1.5 right-2.5 uppercase opacity-70"
        style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: 9, color: "var(--green)", letterSpacing: "0.12em" }}
      >
        SYS_RDY &nbsp;/&nbsp; <span ref={hudRef}>0000</span>
      </div>
      <div ref={runnerRef} className="absolute" style={{ bottom: 16, left: -80 }}>
        <svg ref={svgRef} width="52" height="68" viewBox="0 0 52 68" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="26" cy="67" rx="13" ry="2" fill="#000" opacity="0.5" />
          <rect id="trenchL" x="4" y="26" width="9" height="22" rx="1" fill="#1a1a1a" />
          <rect id="trenchR" x="39" y="26" width="9" height="22" rx="1" fill="#1a1a1a" />
          <rect x="12" y="18" width="28" height="26" rx="2" fill="#141414" />
          <rect x="13" y="19" width="26" height="24" rx="1" fill="#1c1c1c" />
          <rect x="14" y="20" width="24" height="4" fill="#0f0f0f" />
          <rect x="14" y="20" width="24" height="1" fill="#57c457" opacity="0.7" />
          <rect x="15" y="25" width="10" height="6" rx="1" fill="#111" />
          <rect x="27" y="25" width="10" height="6" rx="1" fill="#111" />
          <rect x="15" y="25" width="10" height="1" fill="#57c457" opacity="0.5" />
          <rect x="27" y="25" width="10" height="1" fill="#57c457" opacity="0.5" />
          <rect x="22" y="33" width="8" height="2" rx="1" fill="#1a3a1a" />
          <rect x="22" y="33" width="3" height="2" rx="0.5" fill="#57c457" opacity="0.9" />
          <rect x="15" y="37" width="4" height="5" fill="#111" stroke="#242424" strokeWidth="0.5" />
          <rect x="33" y="37" width="4" height="5" fill="#111" stroke="#242424" strokeWidth="0.5" />
          <line x1="14" y1="20" x2="14" y2="44" stroke="#333" strokeWidth="0.5" />
          <line x1="38" y1="20" x2="38" y2="44" stroke="#333" strokeWidth="0.5" />
          <polygon points="12,20 14,18 14,20" fill="#57c457" opacity="0.5" />
          <polygon points="38,20 38,18 40,20" fill="#57c457" opacity="0.5" />
          <rect x="16" y="4" width="20" height="16" rx="1" fill="#161616" />
          <rect x="17" y="5" width="18" height="14" rx="1" fill="#1e1e1e" />
          <rect x="18" y="6" width="16" height="5" fill="#0f1a0f" />
          <rect x="18" y="6" width="16" height="5" fill="#57c457" opacity="0.12" />
          <line x1="18" y1="6" x2="34" y2="6" stroke="#57c457" strokeWidth="0.8" opacity="0.8" />
          <rect id="visor-scan" x="18" y="6" width="4" height="5" fill="#57c457" opacity="0.2" />
          <rect x="18" y="12" width="5" height="1" rx="0.5" fill="#888" opacity="0.4" />
          <rect x="25" y="12" width="9" height="1" rx="0.5" fill="#888" opacity="0.3" />
          <rect x="18" y="14" width="7" height="1" rx="0.5" fill="#888" opacity="0.25" />
          <rect x="15" y="4" width="2" height="5" fill="#333" />
          <rect x="35" y="4" width="2" height="5" fill="#333" />
          <line x1="15" y1="4" x2="13" y2="1" stroke="#57c457" strokeWidth="0.8" opacity="0.6" />
          <circle cx="13" cy="1" r="1.2" fill="#57c457" opacity="0.8" />
          <line x1="37" y1="4" x2="39" y2="2" stroke="#d44" strokeWidth="0.8" opacity="0.5" />
          <circle cx="39" cy="2" r="1" fill="#d44" opacity="0.7" />
          <rect id="armL" x="6" y="19" width="7" height="14" rx="1" fill="#141414" stroke="#242424" strokeWidth="0.5" />
          <rect id="armR" x="39" y="19" width="7" height="14" rx="1" fill="#141414" stroke="#242424" strokeWidth="0.5" />
          <rect x="7" y="20" width="2" height="8" rx="0.5" fill="#57c457" opacity="0.3" />
          <rect id="handL" x="5" y="31" width="8" height="5" rx="1" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
          <rect id="handR" x="39" y="31" width="8" height="5" rx="1" fill="#d44" opacity="0.7" stroke="#d44" strokeWidth="0.5" />
          <rect x="16" y="44" width="20" height="8" rx="1" fill="#111" stroke="#242424" strokeWidth="0.5" />
          <rect x="16" y="44" width="20" height="2" fill="#57c457" opacity="0.15" />
          <rect id="legL" x="17" y="52" width="8" height="10" rx="1" fill="#141414" stroke="#242424" strokeWidth="0.5" />
          <rect id="legR" x="27" y="52" width="8" height="10" rx="1" fill="#141414" stroke="#242424" strokeWidth="0.5" />
          <line id="legLS" x1="18" y1="52" x2="18" y2="62" stroke="#57c457" strokeWidth="0.5" opacity="0.4" />
          <line id="legRS" x1="28" y1="52" x2="28" y2="62" stroke="#57c457" strokeWidth="0.5" opacity="0.4" />
          <rect id="bootL" x="14" y="61" width="13" height="5" rx="1" fill="#0f0f0f" stroke="#242424" strokeWidth="0.5" />
          <rect id="bootR" x="25" y="61" width="13" height="5" rx="1" fill="#0f0f0f" stroke="#242424" strokeWidth="0.5" />
          <rect id="bootLS" x="14" y="64" width="13" height="1" fill="#57c457" opacity="0.7" />
          <rect id="bootRS" x="25" y="64" width="13" height="1" fill="#57c457" opacity="0.4" />
          <rect id="exhaust1" x="2" y="28" width="4" height="2" rx="1" fill="#57c457" opacity="0" />
          <rect id="exhaust2" x="0" y="26" width="3" height="1.5" rx="0.5" fill="#57c457" opacity="0" />
        </svg>
      </div>
    </div>
  );
}