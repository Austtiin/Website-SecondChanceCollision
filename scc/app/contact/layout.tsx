import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Collision Repair Shop in Circle Pines, MN",
  description:
    "Contact Second Chance Collision for car collision repair in Circle Pines, Blaine, and Lino Lakes, MN. We serve Anoka and Ramsey County drivers with estimates and insurance support.",
  keywords: [
    "collision repair contact",
    "collision repair estimate Circle Pines",
    "car collision repairs blaine mn",
    "collision repair lino lakes mn",
    "collision center near me",
    "collision companies near me",
    "collision repair Ramsey County",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
