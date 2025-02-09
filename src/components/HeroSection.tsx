"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroIllustration from "../../public/hero-illustration.png";
import Link from "next/link";
import { FadeInSection } from "./animations/fade-in";
const HeroSection = () => {
  return (
    <FadeInSection>
      <section className="bg-primary-foreground pt-10">
        <div className="container mx-auto px-4 py-10 lg:pl-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
                Your All-in-One Business Service Solution
              </h1>
              <p className="text-xl text-secondary">
                Simplify your payroll process with our intuitive solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary-foreground text-white hover:text-secondary"
                >
                  <Link href="#about">Know More</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Image and Testimonial */}
            <div className="space-y-3">
              <div className="bg-white p-1 rounded-lg shadow-lg lg:w-5/6 lg:h-5/6">
                <Image
                  src={heroIllustration}
                  priority
                  height={200}
                  width={400}
                  alt="Payroll Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md lg:w-5/6">
                <p className="text-gray-600 italic mb-4">
                  {`"Switching to 'Morya Corp' has completely transformed how we
                handle payroll"`}
                </p>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-800">Nandini Rao</p>
                  <p className="text-sm text-gray-500">
                    Head of Human Resources (HR)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default HeroSection;
