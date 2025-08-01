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

export default function Manufacturing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-vcio-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-vcio-secondary mb-6">
              Manufacturing & Distribution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fractional CIO services for Canadian manufacturers and distributors needing better visibility, stronger systems, and strategic IT leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Modern IT for Industrial Operations</h2>
              <p className="text-lg text-gray-600 mb-6">
                Manufacturers and distributors face unique pressures—from tight margins to supply chain disruptions to regulatory audits. We help align your ERP, production systems, and IT infrastructure so your team can focus on building, not battling technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">ERP Strategy & Implementation</h4>
                    <p className="text-gray-600">Support for platforms like NetSuite, Microsoft Dynamics, SAP Business One, and Infor—selection, scoping, and deployment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Plant-Wide Connectivity</h4>
                    <p className="text-gray-600">Robust Wi-Fi and network infrastructure to support tablets, handheld scanners, and mobile workstations across the production floor and warehouse.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Factory & Floor Integration</h4>
                    <p className="text-gray-600">Real-time production dashboards, industrial IoT, SCADA connectivity, and quality control insights.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1717386255773-a456c611dc4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&&auto=format&fit=crop&w=800&h=600" 
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
                <p className="text-gray-600 text-sm">Business-wide planning, scheduling, MRP, and integrated operations tools.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Supply Chain Management</h3>
                <p className="text-gray-600 text-sm">Warehouse systems, logistics integration, vendor automation, and forecasting tools.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Industrial IoT</h3>
                <p className="text-gray-600 text-sm">Sensor networks, machine uptime tracking, predictive maintenance, and OEE dashboards.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Quality & Compliance</h3>
                <p className="text-gray-600 text-sm">Traceability, ISO readiness, digital forms, and reporting for PIPEDA, ISO, and CSA compliance.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Technology Challenges We Solve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Manufacturing Operations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• MES/SCADA integration with ERP</li>
                    <li>• Job costing and production scheduling</li>
                    <li>• Compliance and digital traceability</li>
                    <li>• Floor-to-office system communication</li>
                    <li>• Reliable plant-wide wireless access for tablets and handhelds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Distribution & Supply Chain</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multi-location warehouse systems</li>
                    <li>• Order and inventory automation</li>
                    <li>• Supplier portals and EDI systems</li>
                    <li>• Freight visibility and logistics tracking</li>
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
          <h2 className="text-3xl font-bold mb-6">Transform Your Industrial IT Strategy</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Speak with a manufacturing-focused vCIO and get clarity on your tech stack, data flow, and long-term roadmap.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-vcio-primary hover:bg-blue-700 text-white text-lg">
              Schedule a Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
