import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import { FadeInSection } from "@/components/animations/fade-in";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Morya Corp Facility",
  description:
    "Morya Corp Services - Providing top-notch services for your business needs.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "application-ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Morya Corp Facility",
      url: "https://www.moryacorp.in",
      logo: "https://www.moryacorp.in/logo.png",
    }),
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
