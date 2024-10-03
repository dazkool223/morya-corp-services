import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Briefcase, Users, Cog } from "lucide-react";
import Tickmark from "./icons/tickmark";

export default function OurServices() {
  const services = [
    {
      title: "Full-Time Employee Toolkit",
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      list: [
        "Customer-managed payroll system",
        "Employee benefits administration",
        "Comprehensive insurance management",
      ],
    },
    {
      title: "Contract Employee Compass",
      icon: <Users className="w-10 h-10 text-primary" />,
      list: [
        "Company-managed payroll solutions",
        "HR services (PF, ESIC) navigation",
        "Flexible staffing solution blueprints",
      ],
    },
    {
      title: "Service Provision Multitool",
      icon: <Cog className="w-10 h-10 text-primary" />,
      list: [
        "Streamlined service delivery",
        "End-to-end management by our experts",
        "HR, Legal, and Accounting Swiss Army knife",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-primary-foreground to-background py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Payroll Toolbox
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Equipping your business with the right tools for success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="bg-white/80 backdrop-blur-sm border-2 border-primary hover:border-secondary transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto bg-primary-foreground rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-secondary-foreground">
                  {service.list?.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Tickmark />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-secondary mb-6">
            No matter the size of your project, we have the right tool for the
            job.
          </p>
          <Button className="hover:bg-primary-foreground hover:text-secondary">
            Let's Build Together
          </Button>
        </div>
      </div>
    </section>
  );
}
