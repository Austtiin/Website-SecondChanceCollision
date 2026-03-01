"use client";

import { useState, useEffect } from "react";

export function useEmailConfirmation() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emailHref, setEmailHref] = useState<string>("");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showConfirmation]);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    setEmailHref(href);
    setShowConfirmation(true);
    // Don't redirect immediately - let the countdown finish first
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setEmailHref("");
  };

  return {
    showConfirmation,
    emailHref,
    handleEmailClick,
    closeConfirmation,
  };
}
