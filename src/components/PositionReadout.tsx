"use client";
import React, { useState, useEffect } from 'react';

const PositionReadout = () => {
    const [mousePos, setMousePos] = useState({ x: 234, y: -738 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: -e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="hidden md:block fixed right-6 top-[120px] z-15 font-mono-custom text-[9px] text-[var(--text-dim)] tracking-[0.06em] leading-[1.8] border-l border-[var(--border)] pl-2.5">
            <div className="text-[var(--text-dim)] text-[8px] uppercase mb-1">Position</div>
            <div>X: <span>{mousePos.x}</span></div>
            <div>Y: <span>{mousePos.y}</span></div>
        </div>
    );
};

export default PositionReadout;