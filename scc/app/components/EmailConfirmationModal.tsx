"use client";

import { useEmailConfirmation } from "../hooks/useEmailConfirmation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface EmailLinkProps {
  href?: string;
  subject?: string;
  className?: string;
  children: React.ReactNode;
}

export function EmailLink({ href = "mailto:info@secondchancecollision.com", subject, className, children }: EmailLinkProps) {
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
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) {
      setCountdown(5); // Reset countdown when modal closes
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && emailHref) {
      // Redirect when countdown reaches 0
      window.location.href = emailHref;
    }
  }, [isOpen, countdown, emailHref]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative max-w-md w-full rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-black/10 animate-in zoom-in-95 duration-200">
        <div className="space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[var(--accent-dark)]">Thank You!</h3>
            <p className="text-base text-neutral-600 leading-relaxed">
              You will be redirected to your mail application shortly
            </p>
            <div className="flex items-center justify-center gap-2 text-[var(--accent-red)] font-bold text-lg">
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{countdown} second{countdown !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <p className="text-sm font-semibold text-neutral-700 mb-3">
              Did not get redirected?
            </p>
            <p className="text-sm text-neutral-600 mb-4">
              Please contact us at:
            </p>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:info@secondchancecollision.com" 
                className="flex items-center justify-center gap-2 font-semibold text-[var(--accent-red)] hover:underline"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@secondchancecollision.com
              </a>
              <a 
                href="tel:0000000000" 
                className="flex items-center justify-center gap-2 font-semibold text-[var(--accent-red)] hover:underline"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (000) 000-0000
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-4 w-full rounded-full bg-[var(--accent-red)] px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-red-700 hover:scale-105 cursor-pointer"
            aria-label="Close confirmation modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
