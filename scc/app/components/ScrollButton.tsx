"use client";

interface ScrollButtonProps {
  targetId: string;
}

export default function ScrollButton({ targetId }: ScrollButtonProps) {
  const handleClick = () => {
    const targetSection = document.querySelector(`#${targetId}`);
    targetSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button 
      onClick={handleClick}
      className="flex flex-col items-center gap-1 animate-bounce cursor-pointer hover:text-white transition-colors"
      aria-label="Scroll to services section"
    >
      <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
        Scroll for more
      </span>
      <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
}
