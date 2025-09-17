import "../styles/globals.css";
import type { ReactNode } from "react";


export const metadata = {
  title: "Henry Kao — Portfolio",
  description: "Full‑Stack (Node.js, React/Next.js, AWS)",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}