"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Consult",
    image: "/consult.png",
    description:
      "We start with a thorough consultation to understand your unique payroll needs.",
  },
  {
    title: "Tailor Plan",
    image: "/tailored-solution.png",
    description:
      "We create a customized plan that fits your specific requirements.",
  },
  {
    title: "Implementation",
    image: "/implementation.png",
    description: "Our expert team sets up and configures your chosen services.",
  },
  {
    title: "Relax",
    image: "/relax.png",
    description: "Sit back and relax while we take care of your payroll needs.",
  },
];

export default function VerticalFlowchart() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-background to-primary-foreground">
      <div className="container mx-auto px-4 md:px-32">
        <h2 className="text-3xl text-primary md:text-4xl font-bold text-center mb-12">
          Our Process
        </h2>
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300  transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`flex items-center mb-32 transition-all duration-300 ease-in-out ${
                activeStep === index ? "scale-105" : ""
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                {index % 2 === 0 ? (
                  <StepContent step={step} isActive={activeStep === index} />
                ) : (
                  <div className="bg-white p-1 rounded-lg shadow-lg lg:w-3/4 lg:h-auto">
                    <Image
                      src={step.image}
                      width={500}
                      height={500}
                      alt={step.title}
                    />
                  </div>
                )}
              </div>
              <div className="relative">
                <div
                  className={`w-4 h-4 rounded-full ${
                    activeStep === index ? "bg-primary" : "bg-gray-300"
                  } transition-all duration-300 ease-in-out`}
                ></div>
              </div>
              <div className="w-1/2 pl-8 text-left">
                {index % 2 === 0 ? (
                  <div className="bg-white p-1 rounded-lg shadow-lg lg:w-3/4 lg:h-auto">
                    <Image
                      src={step.image}
                      width={500}
                      height={500}
                      alt={step.title}
                    />
                  </div>
                ) : (
                  <StepContent step={step} isActive={activeStep === index} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepContent({
  step,
  isActive,
}: {
  step: (typeof steps)[0];
  isActive: boolean;
}) {
  return (
    <div>
      <h3
        className={`text-xl font-semibold mb-2 ${
          isActive ? "text-primary" : "text-gray-700"
        } transition-all duration-300 ease-in-out`}
      >
        {step.title}
      </h3>
      <p
        className={`${
          isActive ? "text-grey-800" : "text-gray-600"
        } transition-all duration-300 ease-in-out`}
      >
        {step.description}
      </p>
    </div>
  );
}
