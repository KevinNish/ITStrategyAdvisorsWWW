import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Database, Workflow, ServerCog } from "lucide-react";

export default function FinancialServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pb-8 bg-vcio-secondary text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Financial Services
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Strategic IT guidance for financial institutions, investment firms, and advisors navigating digital transformation, governance, and risk.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Driving Secure, Compliant, and Scalable Technology</h2>
              <p className="text-lg text-gray-600 mb-6">
                Financial firms must balance regulatory demands with customer trust and modern technology expectations. Our virtual CIO services help build scalable systems, strengthen data protection, and ensure your tech stack supports business growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Data Governance & Protection</h4>
                    <p className="text-gray-600">Ensure PIPEDA, OSFI, and PCI DSS compliance with data residency, encryption, and retention best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">IT Risk & Vendor Oversight</h4>
                    <p className="text-gray-600">Third-party vendor reviews, secure cloud usage, and infrastructure risk mitigation strategies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">CRM & Workflow Optimization</h4>
                    <p className="text-gray-600">Unlock efficiency by aligning CRMs with client onboarding, KYC, and compliance workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=600" 
                alt="Financial advisor reviewing investment data on multiple screens" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Key Technology Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Data & Infrastructure Strategy</h3>
                <p className="text-gray-600 text-sm">Cloud storage, data architecture, backups, and compliance-aligned infrastructure.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Security & Compliance</h3>
                <p className="text-gray-600 text-sm">Multi-layered defense, SIEM, endpoint protection, and continuous compliance monitoring.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Workflow className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">CRM & Workflow Design</h3>
                <p className="text-gray-600 text-sm">Automation of KYC, onboarding, reporting, and client service through integrated platforms.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ServerCog className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">IT Governance</h3>
                <p className="text-gray-600 text-sm">Strategic planning, vendor management, documentation, and IT budgeting for firms of all sizes.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Common Challenges in Financial IT</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">We Help With</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• CRM not integrated with onboarding/compliance processes</li>
                    <li>• Inadequate documentation of IT systems and risks</li>
                    <li>• Data stored across fragmented systems with poor governance</li>
                    <li>• Lack of visibility into outsourced IT/vendor performance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Strategic Solutions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Centralized IT dashboards and reporting</li>
                    <li>• Fully documented IT environments & cloud controls</li>
                    <li>• IT budgeting aligned with firm growth and compliance</li>
                    <li>• Monthly vCIO oversight with accountability for external IT partners</li>
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
          <h2 className="text-3xl font-bold mb-6">Your Trusted IT Strategy Partner in Finance</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a call to explore how we can strengthen your firm's IT governance, improve compliance, and streamline operations.
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
