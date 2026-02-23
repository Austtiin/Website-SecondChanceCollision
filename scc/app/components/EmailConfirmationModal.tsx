"use client";

import { useEmailConfirmation } from "../hooks/useEmailConfirmation";

interface EmailLinkProps {
  href?: string;
  subject?: string;
  className?: string;
  children: React.ReactNode;
}

export function EmailLink({ href = "mailto:info@secondchancecollision.com", subject, className, children }: EmailLinkProps) {
  const { showConfirmation, handleEmailClick, closeConfirmation } = useEmailConfirmation();
  
  const emailHref = subject ? `${href}?subject=${encodeURIComponent(subject)}` : href;

  return (
    <>
      <a href={emailHref} onClick={handleEmailClick} className={className}>
        {children}
      </a>
      <EmailConfirmationModal isOpen={showConfirmation} onClose={closeConfirmation} />
    </>
  );
}

interface EmailConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailConfirmationModal({ isOpen, onClose }: EmailConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative max-w-md w-full rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-black/10 animate-in zoom-in-95 duration-200">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--accent-dark)]">Thank You!</h3>
          <p className="text-base text-neutral-600 leading-relaxed">
            You will be redirected to your mail application. If you aren&apos;t redirected,{" "}
            <a 
              href="mailto:info@secondchancecollision.com" 
              className="font-semibold text-[var(--accent-red)] hover:underline"
            >
              click here
            </a>.
          </p>
          <button
            onClick={onClose}
            className="mt-4 w-full rounded-full bg-[var(--accent-red)] px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-red-700 hover:scale-105 cursor-pointer"
            aria-label="Close confirmation modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
