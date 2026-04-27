import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collision Repair FAQ",
  description:
    "Frequently asked questions about collision repair, insurance claims, timelines, estimates, and warranty at Second Chance Collision in Circle Pines, MN.",
  keywords: [
    "collision repair FAQ",
    "auto body questions",
    "insurance collision repair questions",
  ],
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
