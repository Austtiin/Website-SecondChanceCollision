"use client";

import { useEmailConfirmation } from "../hooks/useEmailConfirmation";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface EmailLinkProps {
  href?: string;
  subject?: string;
  className?: string;
  children: React.ReactNode;
}

export function EmailLink({ href = "mailto:shop@secondchance-collision.com", subject, className, children }: EmailLinkProps) {
  const { showConfirmation, emailHref, handleEmailClick, closeConfirmation } = useEmailConfirmation();
  
  const emailHrefWithSubject = subject ? `${href}?subject=${encodeURIComponent(subject)}` : href;

  return (
    <>
      <a href={emailHrefWithSubject} onClick={handleEmailClick} className={className}>
        {children}
      </a>
      <EmailConfirmationModal isOpen={showConfirmation} onClose={closeConfirmation} emailHref={emailHref} />
    </>
  );
}

interface EmailConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailHref: string;
}

export default function EmailConfirmationModal({ isOpen, onClose, emailHref }: EmailConfirmationModalProps) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-99999 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative max-w-md w-full rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-black/10 animate-in zoom-in-95 duration-200">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-accent-dark">Contact Us Today</h3>
            <p className="text-base text-neutral-600 leading-relaxed">
              Reach out using whichever option works best for you.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a 
              href={emailHref || "mailto:shop@secondchance-collision.com"}
              className="flex items-center justify-center gap-2 font-semibold text-accent-red hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              shop@secondchance-collision.com
            </a>
            <a 
              href="tel:612-913-6594" 
              className="flex items-center justify-center gap-2 font-semibold text-accent-red hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (612) 913-6594
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full rounded-full bg-accent-red px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-red-700 cursor-pointer"
            aria-label="Close contact modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

