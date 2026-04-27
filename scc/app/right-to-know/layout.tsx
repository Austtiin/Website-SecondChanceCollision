import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minnesota Insurance Repair Rights",
  description:
    "Know your Minnesota insurance rights after an accident, including your right to choose your auto body repair shop.",
  keywords: [
    "Minnesota collision repair rights",
    "choose your repair shop MN",
    "insurance claim rights auto body",
  ],
  alternates: {
    canonical: "/right-to-know",
  },
};

export default function RightToKnowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
