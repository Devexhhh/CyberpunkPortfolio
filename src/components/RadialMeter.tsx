import React from 'react';

const RadialMeter = ({ dasharray, dashoffset }) => (
    <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36">
        <circle className="stroke-[#1a1a1a] stroke-[3px] fill-transparent" cx="18" cy="18" r="15" />
        <circle
            className="stroke-[var(--green)] stroke-[3px] fill-transparent stroke-round transition-all duration-1000 ease-out"
            strokeLinecap="round"
            cx="18" cy="18" r="15"
            strokeDasharray={dasharray}
            strokeDashoffset={dashoffset}
            transform="rotate(-90 18 18)"
        />
    </svg>
);

export default RadialMeter;