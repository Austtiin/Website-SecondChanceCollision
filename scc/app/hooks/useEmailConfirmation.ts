"use client";

import { useState, useEffect } from "react";

export function useEmailConfirmation() {
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    setShowConfirmation(true);
    // Open the mail client
    const href = e.currentTarget.href;
    window.location.href = href;
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return {
    showConfirmation,
    handleEmailClick,
    closeConfirmation,
  };
}
