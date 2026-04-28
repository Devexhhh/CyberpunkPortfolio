"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Route-specific configurations so the ruler reflects the current system state
const ROUTE_CONFIG = {
    '/': { id: '#A-20148', marks: ['0D', '1D', '2D', '3D', '4D', '5D'] },
    '/projects': { id: '#P-77302', marks: ['0A', '1A', '2A', '3A', '4A', '5A'] },
    '/experience': { id: '#E-40192', marks: ['0E', '1E', '2E', '3E', '4E', '5E'] },
    '/hacks': { id: '#H-99210', marks: ['0X', '1X', '2X', '3X', '4X', '5X'] },
};

// Characters used for the scramble effect
const SCRAMBLE_CHARS = "0123456789ABCDEF";

const TopRuler = () => {
    const pathname = usePathname();

    // State for the text being displayed
    const [displayId, setDisplayId] = useState(ROUTE_CONFIG['/'].id);
    const [displayMarks, setDisplayMarks] = useState(ROUTE_CONFIG['/'].marks);

    // State to trigger the visual scan sweep
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        // Fallback to the root config if the route isn't mapped
        const targetConfig = ROUTE_CONFIG[pathname] || ROUTE_CONFIG['/'];

        setIsScanning(true);
        let iterations = 0;
        const maxIterations = 12; // Controls how long the scramble lasts

        const interval = setInterval(() => {
            // Scramble the System ID
            setDisplayId(targetConfig.id.split('').map((char, index) => {
                if (char === '#' || char === '-') return char; // Keep formatting intact
                return iterations >= maxIterations
                    ? targetConfig.id[index]
                    : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }).join(''));

            // Scramble the Ruler Marks
            setDisplayMarks(targetConfig.marks.map((mark, markIndex) => {
                return iterations >= maxIterations
                    ? targetConfig.marks[markIndex]
                    : mark.split('').map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]).join('');
            }));

            iterations++;

            if (iterations > maxIterations) {
                clearInterval(interval);
                // Turn off the sweeping scanline slightly after the text locks in
                setTimeout(() => setIsScanning(false), 200);
            }
        }, 40); // Speed of the text cycling (40ms = fast blur)

        return () => clearInterval(interval);
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 right-0 h-[32px] z-20 bg-[var(--panel)] border-b border-[var(--border-bright)] flex items-center px-5 overflow-hidden">

            {/* Sweeping Scanner Effect */}
            <div
                className={`absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-transparent via-[var(--green)] to-transparent opacity-20 pointer-events-none transition-all duration-[600ms] ease-in-out ${isScanning ? "translate-x-[-150px]" : "translate-x-[100vw]"
                    }`}
                style={{ transitionDuration: isScanning ? '0ms' : '800ms' }}
            />

            <span
                className={`font-display text-[11px] tracking-[0.1em] mr-6 whitespace-nowrap transition-colors duration-150 ${isScanning ? 'text-[var(--green)]' : 'text-[var(--text-secondary)]'
                    }`}
            >
                SYS / {displayId}
            </span>

            {displayMarks.map((mark, idx) => (
                <span
                    key={idx}
                    className={`ruler-mark font-mono-custom text-[9px] flex-1 text-center relative pt-[12px] transition-colors duration-150 ${isScanning ? 'text-[var(--green-dim)]' : 'text-[var(--text-dim)]'
                        }`}
                >
                    {mark}
                </span>
            ))}
        </header>
    );
};

export default TopRuler;