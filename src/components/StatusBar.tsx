"use client";
import React, { useState, useEffect } from 'react';

const StatusBar = () => {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setDateStr(now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase());
    };
    tick();
    const timerId = setInterval(tick, 60000); // Only needs to update once a minute
    return () => clearInterval(timerId);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[26px] z-20 bg-[var(--panel)] border-t border-[var(--border-bright)] flex items-center px-5 gap-5">
      <div className="font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.08em] uppercase flex items-center gap-1.5">
        <div className="w-[5px] h-[5px] rounded-full bg-[#57c457]"></div>System Online
      </div>
      <div className="w-[1px] h-[12px] bg-[var(--border-bright)]"></div>
      <div className="font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.08em] uppercase flex items-center gap-1.5">
        <div className="w-[5px] h-[5px] rounded-full bg-[#d4a017]"></div>IQC Research Active
      </div>
      <div className="w-[1px] h-[12px] bg-[var(--border-bright)]"></div>
      <div className="font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.08em] uppercase flex items-center gap-1.5">
        Ranchi / Jharkhand / IN
      </div>
      <div className="font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.08em] uppercase flex items-center gap-1.5 ml-auto">
        {dateStr}
      </div>
    </footer>
  );
};

export default StatusBar;