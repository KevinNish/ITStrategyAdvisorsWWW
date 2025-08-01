import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Shield, Cloud, ArrowLeft } from "lucide-react";

export default function AccountingFirms() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pb-8 bg-vcio-secondary text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Accounting Firms
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Purpose-built IT strategy for CPAs, bookkeepers, and tax professionals navigating compliance, client data security, and busy seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Technology Tailored for Accounting Professionals</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're running a bookkeeping practice or a full-service CPA firm, we help you streamline workflows, safeguard sensitive client data, and keep pace with evolving compliance requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Client Data Protection</h4>
                    <p className="text-gray-600">Protect SINs, Tax files, payroll records, and financial documents with layered cybersecurity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Regulatory Compliance</h4>
                    <p className="text-gray-600">Ensure compliance with PIPEDA, CRA guidelines, and audit-readiness through secure IT policies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Tax Season Efficiency</h4>
                    <p className="text-gray-600">Optimize software workflows, reduce tech issues, and enable secure remote work during peak times.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&w=800&h=600" 
                alt="Accountant working with cloud tax software" 
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
                <p className="text-gray-600 text-sm">Version control, audit trails, and secure portals for client file sharing.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Security & Compliance</h3>
                <p className="text-gray-600 text-sm">Data encryption, MFA, endpoint protection, and role-based access controls.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Cloud Migration</h3>
                <p className="text-gray-600 text-sm">Migrate local servers to secure cloud platforms like QBO, Xero, CaseWare Cloud, or SharePoint.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Practice Management</h3>
                <p className="text-gray-600 text-sm">System integration for scheduling, invoicing, time tracking, and task delegation.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Technology Challenges We Solve for Accountants</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Technology Pains</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Outdated or unsupported tax software infrastructure</li>
                    <li>• Inefficient workflow for document collection & approvals</li>
                    <li>• Weak access control over sensitive financial data</li>
                    <li>• Lack of audit-ready IT documentation and backups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Strategic Fixes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cloud migrations to CRA-compliant environments</li>
                    <li>• Secure client portals with automated file requests</li>
                    <li>• Centralized authentication & device security policies</li>
                    <li>• Practice technology audits and vCIO oversight</li>
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
          <h2 className="text-3xl font-bold mb-6">Partner with a Strategic IT Advisor for Your Firm</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's explore how our vCIO services can bring clarity, control, and confidence to your accounting practice's technology.
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
