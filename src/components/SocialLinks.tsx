import React from 'react';

const SocialLinks = () => {
    const links = [
        { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
        { name: 'Github', icon: '⬡', url: 'https://github.com' },
        { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' },
        { name: 'Discord', icon: '◈', url: '#' },
        { name: 'Email', icon: '✉', url: 'mailto:sujal@example.com' },
    ];

    return (
        <>
            <div className="font-mono-custom text-[10px] text-[var(--text-dim)] tracking-[0.1em] uppercase mt-7 mb-2.5">
        // Connect
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6">
                {links.map((social, idx) => (
                    <a key={idx} href={social.url} className="social-btn relative inline-flex items-center gap-2 bg-[var(--panel)] border border-[var(--border-bright)] py-[7px] px-4 font-mono-custom text-[11px] text-[var(--text-secondary)] no-underline tracking-[0.06em] uppercase transition-all duration-200 cursor-pointer hover:border-[var(--green-dim)] hover:text-[var(--text-primary)] hover:bg-[rgba(61,255,122,0.04)]">
                        <span className="c-tr"></span><span className="c-bl"></span>
                        <span className="text-[11px]">{social.icon}</span>{social.name}
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialLinks;