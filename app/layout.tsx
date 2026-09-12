import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prayag Singh - Full-Stack Developer | Cloud & AI",
  description:
    "Portfolio of Prayag Singh, a final-year B.Tech Data Science student building web, mobile, cloud, and intelligent applications.",
  openGraph: {
    title: "Prayag Singh - Full-Stack Developer | Cloud & AI",
    description:
      "Final-year B.Tech Data Science student building web, mobile, cloud, and intelligent applications.",
    url: "https://github.com/PrayagSingh9A7",
    siteName: "Prayag Singh Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayag Singh - Full-Stack Developer | Cloud & AI",
    description:
      "Final-year B.Tech Data Science student building web, mobile, cloud, and intelligent applications."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0d0d10",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
