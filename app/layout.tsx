import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reaction Multiplayer Game",
  description: "A live reaction race for 2–8 players. Wait for green. First to three wins.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
