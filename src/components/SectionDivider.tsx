import React from 'react';

const SectionDivider = ({ title, number, className = "" }) => {
    return (
        <div className={`flex items-center gap-4 my-11 mb-5 ${className}`}>
            <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
            <h3 className="font-display text-[13px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] whitespace-nowrap">
                {title}
            </h3>
            <div className="flex-1 h-[1px] bg-[var(--border-bright)]"></div>
            <span className="font-mono-custom text-[9px] text-[var(--text-dim)]">{number}</span>
        </div>
    );
};

export default SectionDivider;