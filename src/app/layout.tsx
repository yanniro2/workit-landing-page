import './globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workit landing page",
  description: "Frontend Mentor - Workit landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-White w-full h-full relative flex flex-col">{children}</body>
    </html>
  );
}
