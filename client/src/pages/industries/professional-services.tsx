import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Shield, Cloud, ArrowLeft } from "lucide-react";

export default function ProfessionalServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-vcio-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-vcio-primary hover:text-blue-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-vcio-secondary mb-6">
              Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized fractional CIO services for law firms, accounting practices, consulting agencies, and other professional service organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Understanding Professional Services Technology</h2>
              <p className="text-lg text-gray-600 mb-6">
                Canadian professional services firms face unique technology challenges. Client confidentiality, PIPEDA compliance, and billable hour optimization are critical to success. We understand these specialized needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Client Data Protection</h4>
                    <p className="text-gray-600">Implement robust security measures to protect sensitive client information and maintain attorney-client privilege.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Regulatory Compliance</h4>
                    <p className="text-gray-600">Navigate PIPEDA and complex regulatory requirements specific to Canadian legal, accounting, and consulting practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Billing & Time Tracking</h4>
                    <p className="text-gray-600">Optimize technology for accurate time tracking, billing efficiency, and client reporting.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Professional lawyer reviewing documents in modern law office" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Key Technology Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Document Management</h3>
                <p className="text-gray-600 text-sm">Secure document storage, version control, and client portal systems.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Security & Compliance</h3>
                <p className="text-gray-600 text-sm">Data encryption, access controls, and regulatory compliance frameworks.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Cloud Migration</h3>
                <p className="text-gray-600 text-sm">Secure cloud solutions for remote work and collaboration.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Practice Management</h3>
                <p className="text-gray-600 text-sm">Integrated systems for billing, scheduling, and client relationship management.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Common Technology Challenges We Solve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Law Firms</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Case management system integration</li>
                    <li>• Court filing and e-discovery platforms</li>
                    <li>• Client communication portals</li>
                    <li>• Legal research tool optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Accounting Practices</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tax software integration and security</li>
                    <li>• Client data protection protocols</li>
                    <li>• Workflow automation for tax season</li>
                    <li>• Financial reporting system upgrades</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-vcio-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Professional Services Technology?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our specialized knowledge of professional services can optimize your technology strategy.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-vcio-primary hover:bg-blue-700 text-white text-lg">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}