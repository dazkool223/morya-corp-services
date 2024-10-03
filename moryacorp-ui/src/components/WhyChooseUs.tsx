import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Scale,
  BarChart,
  Building,
  Shield,
  Clock,
  Users,
  Zap,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Comprehensive Solutions */}
          <Card className="col-span-2 row-span-2 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-blue-700">
                <FileText className="w-6 h-6 mr-2" />
                Comprehensive Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600">
                All your payroll needs in one place—simplify with ease!
              </p>
            </CardContent>
          </Card>

          {/* Customized Approach */}
          <Card className="col-span-2 bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold text-green-700">
                <Scale className="w-5 h-5 mr-2" />
                Customized Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-600">
                Tailored solutions, built for your business.
              </p>
            </CardContent>
          </Card>

          {/* Cost-Effective */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center text-base font-semibold text-yellow-700">
                <BarChart className="w-4 h-4 mr-2" />
                Cost-Effective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-600">
                Cut costs, not quality—boost your bottom line.
              </p>
            </CardContent>
          </Card>

          {/* Ideal for Startups and MSMEs */}
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center text-base font-semibold text-purple-700">
                <Building className="w-4 h-4 mr-2" />
                For Startups & MSMEs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-600">
                Scalable payroll solutions, no matter your size.
              </p>
            </CardContent>
          </Card>

          {/* Time-Saving */}
          <Card className="bg-indigo-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center text-base font-semibold text-indigo-700">
                <Clock className="w-4 h-4 mr-2" />
                Time-Saving
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600">
                Streamline your processes, save valuable time.
              </p>
            </CardContent>
          </Card>

          {/* Expert Support */}
          <Card className="bg-pink-50 border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center text-base font-semibold text-pink-700">
                <Users className="w-4 h-4 mr-2" />
                Expert Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-pink-600">
                A dedicated team, always by your side.
              </p>
            </CardContent>
          </Card>

          {/* Innovative Technology */}
          <Card className="col-span-2 bg-teal-50 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-semibold text-teal-700">
                <Zap className="w-5 h-5 mr-2" />
                Innovative Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-600">
                Stay ahead with cutting-edge payroll and HR tech.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
