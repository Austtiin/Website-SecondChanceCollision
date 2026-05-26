import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collision Repair FAQ for Circle Pines, Blaine, and Lino Lakes",
  description:
    "Frequently asked questions about collision repair, accident repair, insurance claims, estimates, and timelines for Circle Pines, Blaine, and Lino Lakes drivers.",
  keywords: [
    "collision repair FAQ",
    "accident repair questions",
    "collision services FAQ",
    "collision repair blaine mn",
    "collision repair near me",
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
