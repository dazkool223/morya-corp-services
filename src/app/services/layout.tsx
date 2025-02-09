import "@/app/ui/globals.css";
import { FadeInSection } from "@/components/animations/fade-in";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Expert payroll, compliance, and workforce management solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to streamline your business operations?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and see how our services
            can benefit your company.
          </p>
          <Button className="bg-primary-foreground text-secondary">
            <Link href="/contact">Get Started!</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
