"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Track mount state for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const mobileMenu = mobileMenuOpen && mounted ? createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm transition-opacity md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Slide-out menu */}
      <div
        className="fixed right-0 top-0 z-[10000] h-full w-64 overflow-y-auto bg-white shadow-2xl md:hidden"
        style={{
          animation: "slideInRight 0.3s ease-out",
        }}
      >
        <div className="flex h-full flex-col">
          {/* Menu header */}
          <div className="flex items-center justify-between border-b border-neutral-200 p-4">
            <span className="text-sm font-bold text-[var(--accent-dark)]">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex flex-col gap-1 p-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-base font-medium transition hover:bg-neutral-100 ${
                pathname === "/"
                  ? "bg-red-50 text-[var(--accent-red)]"
                  : "text-neutral-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-base font-medium transition hover:bg-neutral-100 ${
                pathname === "/contact"
                  ? "bg-red-50 text-[var(--accent-red)]"
                  : "text-neutral-800"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact info in menu */}
          <div className="mt-auto border-t border-neutral-200 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Get in touch
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:0000000000"
                className="flex items-center gap-2 text-[var(--accent-red)] hover:underline"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (000) 000-0000
              </a>
              <a
                href="mailto:info@secondchancecollision.com"
                className="flex items-center gap-2 text-[var(--accent-red)] hover:underline"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>,
    document.body
  ) : null;

  return (
    <header className="relative z-50 border-b border-b-[var(--accent-red)]/20 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 overflow-hidden">
            <Image
              src="/SCC.png"
              alt="Second Chance Collision logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-base font-bold tracking-wide text-[var(--accent-red)]">
              SECOND CHANCE COLLISION
            </span>
            <span className="text-sm text-neutral-600">
              Auto Body & Collision Repair • Circle Pines, MN
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-800 md:flex">
          <Link
            href="/"
            className={`hover:text-[var(--accent-red)] transition ${
              pathname === "/" ? "text-[var(--accent-red)]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[var(--accent-red)] transition ${
              pathname === "/contact" ? "text-[var(--accent-red)]" : ""
            }`}
          >
            Contact
          </Link>
          <a
            href="mailto:info@secondchancecollision.com?subject=Appointment Request"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-red)] bg-white px-6 py-2.5 text-sm font-bold text-[var(--accent-red)] shadow-md transition hover:bg-[var(--accent-red)] hover:text-white hover:scale-105 hover:shadow-lg"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center justify-center rounded-lg p-2 text-neutral-800 transition hover:bg-neutral-100 md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {mobileMenu}
    </header>
  );
}
