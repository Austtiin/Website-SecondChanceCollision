"use client";

import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Subtle floating circle 1 - slow parallax */}
      <div
        className="absolute w-96 h-96 rounded-full bg-[var(--accent-red)]/3 blur-3xl"
        style={{
          top: `${15 - scrollY * 0.05}%`,
          right: `${10 + scrollY * 0.02}%`,
          transition: "all 0.2s ease-out",
        }}
      />
      
      {/* Subtle floating circle 2 - slower movement */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[var(--accent-dark)]/2 blur-3xl"
        style={{
          top: `${60 + scrollY * 0.03}%`,
          left: `${5 - scrollY * 0.015}%`,
          transition: "all 0.2s ease-out",
        }}
      />
    </div>
  );
}
