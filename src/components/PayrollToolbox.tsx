import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Briefcase, Users, Cog, Check } from "lucide-react";
import { FadeInSection } from "./animations/fade-in";
import Link from "next/link";

export default function PayrollToolbox() {
  const services = [
    {
      title: "Service Provision & Management",
      description:
        "An all-in-one service offering that covers areas like HR, legal, and accounting.",
      icon: <Cog className="w-10 h-10 text-primary-foreground" />,
      list: [
        "Streamlined service delivery with efficiency",
        "End-to-end management by industry experts",
        "Complete support to make in a versatile solution",
      ],
    },
    {
      title: "Full-Time Employee Provision",
      description:
        "Offering staffing solutions, where we provide employees for permanent roles in your organization.",
      icon: <Briefcase className="w-10 h-10 text-primary-foreground" />,
      list: [
        "Client-controlled payroll systems",
        "Employee benefits management",
        "Complete insurance coverage for employees",
      ],
    },
    {
      title: "Contract Employee Compass",
      description:
        "Providing temporary or contract employees based on the company’s project needs.",
      icon: <Users className="w-10 h-10 text-primary-foreground" />,
      list: [
        "Company-managed payroll solutions",
        "HR compliance & regulatory services (PF, ESIC)",
        "Flexible staffing plans to scale up or down as needed",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-primary-foreground to-background py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Our Payroll Toolbox
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Equipping your business with the right tools for success
        </p>
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-white/80 backdrop-blur-sm border-2 border-primary hover:border-secondary transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-m font-light text-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-secondary-foreground">
                    {service.list?.map((item, idx) => (
                      <li className="flex items-center gap-2" key={idx}>
                        <Check className="aspect-square h-6 w-6 text-green-500" />
                        <div className="font-normal">{item}</div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>
        <div className="mt-16 text-center">
          <p className="text-xl text-secondary mb-6">
            No matter the size of your project, we have the right tool for the
            job.
          </p>
          <Link href={"/contact"}>
            <Button className="hover:bg-primary-foreground hover:text-secondary">
              {`Let's Build Together`}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
