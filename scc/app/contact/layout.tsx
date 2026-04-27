import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Auto Body Shop in Circle Pines, MN",
  description:
    "Contact Second Chance Collision for collision and auto body repair in Circle Pines, MN, near Blaine, serving Anoka County and Ramsey County. Call for an estimate or visit our shop.",
  keywords: [
    "auto body shop contact",
    "collision repair estimate Circle Pines",
    "auto body repair near Blaine MN",
    "auto body shop Anoka County",
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
