"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { User, Folder, Briefcase, Cpu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/", icon: User },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Hacks", path: "/hacks", icon: Cpu },
  ];

  return (
    <>
      {/* ========================= */}
      {/* 📱 MOBILE NAVBAR */}
      {/* ========================= */}
      <nav
        className="
          sm:hidden
          fixed
          bottom-[calc(12px+env(safe-area-inset-bottom))]
          left-1/2 -translate-x-1/2
          z-50

          flex items-center justify-between
          w-[94vw]

          p-1
          bg-[#080808]/85 backdrop-blur-xl
          border border-[var(--border-bright)]
          shadow-[0_12px_40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)]
        "
      >
        {/* Corner Brackets */}
        <div className="absolute top-[-1px] left-[-1px] w-[6px] h-[6px] border-t border-l border-[var(--text-dim)]" />
        <div className="absolute top-[-1px] right-[-1px] w-[6px] h-[6px] border-t border-r border-[var(--text-dim)]" />
        <div className="absolute bottom-[-1px] left-[-1px] w-[6px] h-[6px] border-b border-l border-[var(--text-dim)]" />
        <div className="absolute bottom-[-1px] right-[-1px] w-[6px] h-[6px] border-b border-r border-[var(--text-dim)]" />

        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <React.Fragment key={item.name}>
              {index !== 0 && (
                <div className="w-[1px] h-[22px] bg-[var(--border-bright)] opacity-60" />
              )}

              <Link
                href={item.path}
                className={`
                  relative flex-1 flex items-center justify-center py-3 overflow-hidden
                  transition-all duration-300
                  ${isActive
                    ? "text-[var(--green)] bg-gradient-to-t from-[var(--green)]/10 to-transparent"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[#121212]"
                  }
                `}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--green)] shadow-[0_0_12px_var(--green)]" />
                )}

                <Icon size={20} />
              </Link>
            </React.Fragment>
          );
        })}
      </nav>

      {/* ========================= */}
      {/* 💻 DESKTOP NAVBAR (YOUR ORIGINAL) */}
      {/* ========================= */}
      <nav
        className="
          hidden sm:flex
          fixed bottom-[40px] left-1/2 -translate-x-1/2 z-50
          items-center p-2
          bg-[#080808]/85 backdrop-blur-xl
          border border-[var(--border-bright)]
          shadow-[0_12px_40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)]
        "
      >
        {/* Corner Brackets */}
        <div className="absolute top-[-1px] left-[-1px] w-[6px] h-[6px] border-t border-l border-[var(--text-dim)]" />
        <div className="absolute top-[-1px] right-[-1px] w-[6px] h-[6px] border-t border-r border-[var(--text-dim)]" />
        <div className="absolute bottom-[-1px] left-[-1px] w-[6px] h-[6px] border-b border-l border-[var(--text-dim)]" />
        <div className="absolute bottom-[-1px] right-[-1px] w-[6px] h-[6px] border-b border-r border-[var(--text-dim)]" />

        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <React.Fragment key={item.name}>
              {index !== 0 && (
                <div className="w-[1px] h-[20px] bg-[var(--border-bright)] mx-1" />
              )}

              <Link
                href={item.path}
                className={`
                  relative flex items-center justify-center
                  px-7 py-3
                  font-mono-custom text-[12px] uppercase tracking-[0.15em]
                  transition-all duration-300 group overflow-hidden

                  ${isActive
                    ? "text-[var(--green)] bg-gradient-to-t from-[var(--green)]/10 to-transparent"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[#121212]"
                  }
                `}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--green)] shadow-[0_0_12px_var(--green)]" />
                )}

                <span
                  className={`
                    mr-2 transition-all duration-300
                    ${isActive
                      ? "opacity-100 text-[var(--green-dim)]"
                      : "opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--text-dim)]"
                    }
                  `}
                >
                  [
                </span>

                {item.name}

                <span
                  className={`
                    ml-2 transition-all duration-300
                    ${isActive
                      ? "opacity-100 text-[var(--green-dim)]"
                      : "opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--text-dim)]"
                    }
                  `}
                >
                  ]
                </span>
              </Link>
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}