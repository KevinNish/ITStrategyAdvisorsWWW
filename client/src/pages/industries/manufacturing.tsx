import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Settings, Package, BarChart3, ArrowLeft } from "lucide-react";

export default function Manufacturing() {
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
              Manufacturing & Distribution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized fractional CIO services for small manufacturers, distributors, and supply chain companies.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Manufacturing Technology Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Canadian manufacturing and distribution companies need integrated technology solutions to optimize operations, manage supply chains, and maintain competitive advantage while ensuring PIPEDA compliance. We understand the unique challenges of industrial technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">ERP Integration</h4>
                    <p className="text-gray-600">Comprehensive enterprise resource planning system selection and implementation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Supply Chain Visibility</h4>
                    <p className="text-gray-600">Real-time tracking and optimization of inventory and logistics processes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Smart Manufacturing</h4>
                    <p className="text-gray-600">Industrial IoT implementation and automated production monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Modern manufacturing facility with automated systems and digital monitoring" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Key Technology Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">ERP Systems</h3>
                <p className="text-gray-600 text-sm">Integrated business management and resource planning solutions.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Supply Chain Management</h3>
                <p className="text-gray-600 text-sm">Inventory tracking, logistics optimization, and vendor management.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Industrial IoT</h3>
                <p className="text-gray-600 text-sm">Smart sensors, predictive maintenance, and production analytics.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Quality Management</h3>
                <p className="text-gray-600 text-sm">Quality control systems and compliance tracking solutions.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Manufacturing Technology Challenges We Solve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Small Manufacturers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Production planning and scheduling systems</li>
                    <li>• Quality control and compliance tracking</li>
                    <li>• Equipment maintenance management</li>
                    <li>• Cost accounting and job costing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Distribution Companies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Warehouse management systems (WMS)</li>
                    <li>• Order processing automation</li>
                    <li>• Transportation management</li>
                    <li>• Customer portal and B2B integration</li>
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
          <h2 className="text-3xl font-bold mb-6">Optimize Your Manufacturing Technology</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our manufacturing expertise can streamline operations and boost productivity.
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