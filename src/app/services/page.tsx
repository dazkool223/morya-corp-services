import React from "react";
import {
  ClipboardList,
  Scale,
  FileSpreadsheet,
  Users,
  Leaf,
  Receipt,
  Factory,
} from "lucide-react";
import { FadeInSection } from "@/components/animations/fade-in";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Payroll Management",
    icon: ClipboardList,
    details: [
      "Accurate and timely salary processing",
      "Tax calculations and deductions",
      "Generation of pay slips and salary reports",
      "Management of bonuses, reimbursements, and other allowances",
      "Integration with time and attendance systems",
    ],
  },
  {
    title: "Staffing Solutions",
    description:
      "End-to-end solutions for hiring, managing, and optimizing your workforce across all employment models.",
    icon: Users,
    details: [
      "Recruitment and talent acquisition services",
      "Temporary and permanent staffing solutions",
      "Contractor management and payrolling services",
      "Workforce planning and optimization",
      "Performance management and employee development programs",
    ],
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensuring adherence to Provident Fund (PF) and Employee State Insurance (ESI) regulations for employee welfare.",
    icon: Scale,
    details: [
      "Up-to-date compliance with changing labor laws",
      "Timely filing of PF and ESI returns",
      "Management of employee and employer contributions",
      "Assistance with regulatory audits and inspections",
    ],
  },
  {
    title: "Statutory Audit Support",
    icon: FileSpreadsheet,
    details: [
      "Compilation and organization of financial documents",
      "Preparation of audit-ready financial statements",
      "Liaison with auditors and regulatory bodies",
      "Addressing audit queries and providing clarifications",
      "Implementation of audit recommendations",
    ],
  },
  {
    title: "MPCB Consent",
    description:
      "Facilitation of environmental compliance by obtaining Maharashtra Pollution Control Board approvals and consents.",
    icon: Leaf,
    details: [
      "Assessment of environmental impact and compliance requirements",
      "Preparation and submission of consent applications",
      "Liaison with MPCB officials",
      "Regular monitoring and reporting of environmental parameters",
      "Assistance in implementing pollution control measures",
    ],
  },
  {
    title: "CST Registration & Return",
    description:
      "Assistance in Central Sales Tax (CST) registration, filing, and compliance with applicable regulations.",
    icon: Receipt,
    details: [
      "Guidance on CST registration process",
      "Preparation and filing of CST returns",
      "Management of C-forms and other statutory forms",
      "Assistance with CST assessments and audits",
      "Regular updates on changes in CST regulations",
    ],
  },
  {
    title: "Factory Plan & License",
    description:
      "Expert services for designing factory layouts and acquiring necessary licenses to operate as per statutory requirements.",
    icon: Factory,
    details: [
      "Development of efficient and compliant factory layouts",
      "Preparation of factory license applications",
      "Coordination with local authorities for approvals",
      "Ensuring compliance with safety and health regulations",
      "Periodic review and renewal of factory licenses",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary-foreground">
      <main>
        <section className="py-12 px-4 text-center bg-primary text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">
            Our Comprehensive Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering businesses with end-to-end payroll, compliance, and
            workforce management solutions.
          </p>
        </section>

        {services.map((service, index) => (
          <FadeInSection>
            <React.Fragment key={index}>
              <section
                className={`py-16 px-4 fade-in-section ${
                  index % 2 === 0 ? "bg-white" : "bg-primary-100"
                }`}
              >
                <div className="container mx-auto max-w-5xl">
                  <div
                    className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } text-left`}
                  >
                    <div className="md:w-1/4 flex justify-center">
                      <div className="p-6 bg-primary-foreground rounded-full">
                        <service.icon className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
                        {service.title}
                      </h2>
                      <p className="text-xl mb-6 text-center md:text-left">
                        {service?.description}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-lg">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              {index < services.length - 1 && <Separator className="my-12" />}
            </React.Fragment>
          </FadeInSection>
        ))}
      </main>
    </div>
  );
}
