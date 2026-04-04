"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";

export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;

    let initialized = false;

    const initClarity = () => {
      if (initialized) return;
      initialized = true;
      Clarity.init(CLARITY_PROJECT_ID);
    };

    // Initialize immediately if the user has already accepted cookies
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      initClarity();
    }

    // Listen for consent changes dispatched by CookieConsent component
    const handleConsentAccepted = () => {
      initClarity();
    };

    const handleConsentDeclined = () => {
      Clarity.consent(false);
    };

    window.addEventListener("analytics:consent-accepted", handleConsentAccepted);
    window.addEventListener("analytics:consent-declined", handleConsentDeclined);

    return () => {
      window.removeEventListener(
        "analytics:consent-accepted",
        handleConsentAccepted
      );
      window.removeEventListener(
        "analytics:consent-declined",
        handleConsentDeclined
      );
    };
  }, []);

  return null;
}
