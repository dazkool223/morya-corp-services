import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Scale,
  BarChart,
  Building,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FadeInSection } from "./animations/fade-in";

const cardItems = [
  {
    title: "Payroll Management",
    icon: FileText,
    description:
      "Streamlined handling of employee compensation, including salary calculation, tax deductions, and timely disbursement.",
    span: "col-span-2",
  },
  {
    title: "Regulatory Compliance",
    icon: Scale,
    description:
      "Ensuring adherence to Provident Fund (PF) and Employee State Insurance (ESI) regulations for employee welfare.",
    span: "col-span-2",
  },
  {
    title: "Statutory Audit Support",
    icon: BarChart,
    description:
      "Assistance in preparing and organizing financial records to ensure compliance with statutory audit requirements.",
    span: "col-span-2 md:col-span-1",
  },
  {
    title: "Staffing Solutions",
    icon: Building,
    description:
      "End-to-end solutions for hiring, managing, and optimizing your workforce across all employment models—full-time, part-time, contract, and remote. Streamline administration, boost productivity, and ensure compliance with our comprehensive workforce management services.",
    span: "col-span-2",
  },
  {
    title: "MPCB Consent",
    icon: Clock,
    description:
      "Facilitation of environmental compliance by obtaining Maharashtra Pollution Control Board approvals and consents.",
    span: "col-span-2 md:col-span-1",
  },
  {
    title: "GST Registration & Return",
    icon: Users,
    description:
      "Assistance in Goods and Service Tax (GST) registration, filing, and compliance with applicable regulations.",
    span: "col-span-2",
  },
  {
    title: "Factory Plan & License",
    icon: Zap,
    description:
      "Expert services for designing factory layouts and acquiring necessary licenses to operate as per statutory requirements.",
    span: "col-span-2",
  },
];

const CardItem: React.FC<{
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  span?: string;
}> = ({ title, icon: Icon, description, span }) => (
  <Card className={`bg-white border-primary ${span}`}>
    <CardHeader>
      <CardTitle className="flex items-center text-base font-bold text-secondary">
        <Icon className="mr-2 text-primary" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-secondary">{description}</p>
    </CardContent>
  </Card>
);

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {cardItems.map((item) => (
              <CardItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                description={item.description}
                span={item.span}
              />
            ))}
          </div>
        </FadeInSection>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="hover:bg-primary-foreground hover:text-secondary">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
