import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Settings,
  Package,
  BarChart3,
  Hammer,
  HardHat,
  ClipboardList,
  ArrowLeft
} from "lucide-react";

export default function Construction() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pb-8 bg-vcio-secondary text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Construction & General Contracting
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Strategic IT services tailored for general contractors, commercial builders, and large-scale construction firms who need better oversight across people, projects, and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Construction Technology That Keeps Projects Moving</h2>
              <p className="text-lg text-gray-600 mb-6">
                Construction firms rely on accurate data, seamless communication, and efficient coordination to meet deadlines and stay profitable. We bring clarity and structure to the complex world of construction IT.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Job Site Connectivity</h4>
                    <p className="text-gray-600">Ensure stable connections across remote and urban job sites using cellular, mesh, or point-to-point networks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Project & Document Management</h4>
                    <p className="text-gray-600">Standardize workflows across your PM software stack—from Procore to Buildertrend to Bluebeam—for seamless field-office collaboration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">IT Oversight for Construction Operations</h4>
                    <p className="text-gray-600">We help you evaluate and optimize your construction ERP, estimating tools, scheduling, and subcontractor coordination platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Construction management technology on-site with digital tools" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Key Technology Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Hammer className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Site Networking</h3>
                <p className="text-gray-600 text-sm">Temporary job site networks that support reliable file access, VoIP, and cameras.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Project Controls</h3>
                <p className="text-gray-600 text-sm">Integrate schedules, budgets, and submittals into a single source of truth.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HardHat className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Site Safety & Compliance</h3>
                <p className="text-gray-600 text-sm">Digital safety meetings, inspections, and policy acknowledgements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Back-Office Systems</h3>
                <p className="text-gray-600 text-sm">Support for tools like Sage 300 CRE, Viewpoint, CMiC, and integrated accounting or HR systems.</p>
              </CardContent>
            </Card>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-16 bg-vcio-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Build a Smarter IT Foundation</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a consult to discover how our IT leadership helps you reduce project risk, improve reporting, and streamline collaboration across your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-vcio-primary hover:bg-blue-700 text-white text-lg">
              Talk to a Construction IT Advisor
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
