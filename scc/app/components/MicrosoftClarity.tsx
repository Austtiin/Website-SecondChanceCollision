"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";

export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;

    // Only initialize Clarity if the user has accepted cookies
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      Clarity.init(CLARITY_PROJECT_ID);
    }

    // Listen for consent changes dispatched by CookieConsent component
    const handleConsentAccepted = () => {
      Clarity.init(CLARITY_PROJECT_ID);
    };

    const handleConsentDeclined = () => {
      Clarity.consent(false);
    };

    window.addEventListener("clarity:consent-accepted", handleConsentAccepted);
    window.addEventListener("clarity:consent-declined", handleConsentDeclined);

    return () => {
      window.removeEventListener(
        "clarity:consent-accepted",
        handleConsentAccepted
      );
      window.removeEventListener(
        "clarity:consent-declined",
        handleConsentDeclined
      );
    };
  }, []);

  return null;
}
