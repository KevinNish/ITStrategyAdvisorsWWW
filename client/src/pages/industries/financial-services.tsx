import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, DollarSign, Shield, TrendingUp, ArrowLeft } from "lucide-react";

export default function FinancialServices() {
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
              Financial Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized fractional CIO services for credit unions, regional banks, investment firms, and financial advisory practices.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Financial Services Technology Leadership</h2>
              <p className="text-lg text-gray-600 mb-6">
                Canadian financial institutions face complex regulatory requirements, cybersecurity threats, and digital transformation pressures. Our expertise helps navigate these challenges while maintaining customer trust.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Regulatory Compliance</h4>
                    <p className="text-gray-600">Navigate PIPEDA, OSFI guidelines, PCI DSS, and other Canadian financial regulatory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Cybersecurity Excellence</h4>
                    <p className="text-gray-600">Advanced security frameworks to protect against financial cyber threats.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Digital Banking Strategy</h4>
                    <p className="text-gray-600">Modern digital banking platforms and customer experience optimization.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
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
                  <DollarSign className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Core Banking Systems</h3>
                <p className="text-gray-600 text-sm">Modern banking platforms and payment processing solutions.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Risk Management</h3>
                <p className="text-gray-600 text-sm">Advanced fraud detection and regulatory compliance systems.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Digital Transformation</h3>
                <p className="text-gray-600 text-sm">Mobile banking, online services, and customer portal development.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Data Analytics</h3>
                <p className="text-gray-600 text-sm">Business intelligence and predictive analytics for decision making.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Financial Services Technology Challenges</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Banks & Credit Unions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Core banking system modernization</li>
                    <li>• Digital banking platform implementation</li>
                    <li>• Regulatory compliance automation</li>
                    <li>• Cybersecurity framework enhancement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Investment & Advisory Firms</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Portfolio management system integration</li>
                    <li>• Client relationship management (CRM)</li>
                    <li>• Compliance reporting automation</li>
                    <li>• Data security and client privacy</li>
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
          <h2 className="text-3xl font-bold mb-6">Strengthen Your Financial Technology Strategy</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our financial services expertise can enhance security and compliance while driving growth.
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