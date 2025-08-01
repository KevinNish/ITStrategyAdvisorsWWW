import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Shield, Users, ArrowLeft } from "lucide-react";

export default function Healthcare() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pb-8 bg-vcio-secondary text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare & Medical
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Specialized fractional CIO services for medical practices, therapy centers, and healthcare service providers.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Healthcare Technology Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Healthcare organizations require specialized technology expertise to protect patient data, ensure PHIPA compliance, and deliver quality care. We understand the unique challenges of Canadian healthcare IT.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">PHIPA Compliance</h4>
                    <p className="text-gray-600">Comprehensive patient data protection and Canadian regulatory compliance frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">EHR Optimization</h4>
                    <p className="text-gray-600">Electronic health record system selection, implementation, and optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Telemedicine Integration</h4>
                    <p className="text-gray-600">Secure telehealth platforms and remote patient monitoring solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professional using tablet in modern medical facility" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Key Technology Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Patient Care Systems</h3>
                <p className="text-gray-600 text-sm">EHR, practice management, and patient portal integration.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">PHIPA Security</h3>
                <p className="text-gray-600 text-sm">Comprehensive data protection and Canadian compliance monitoring.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Telemedicine</h3>
                <p className="text-gray-600 text-sm">Secure remote consultation and monitoring platforms.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white h-6 w-6" />
                </div>
                <h3 className="font-semibold text-vcio-secondary mb-2">Revenue Cycle</h3>
                <p className="text-gray-600 text-sm">Billing, coding, and insurance claim processing optimization.</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Challenges */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-vcio-secondary mb-6">Healthcare Technology Challenges We Address</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Medical Practices</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• EHR system selection and migration</li>
                    <li>• Patient portal implementation</li>
                    <li>• Medical device integration</li>
                    <li>• Appointment scheduling optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-vcio-secondary mb-3">Specialty Practices</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dental practice management systems</li>
                    <li>• Physical therapy documentation</li>
                    <li>• Mental health telehealth platforms</li>
                    <li>• Specialty-specific compliance requirements</li>
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
          <h2 className="text-3xl font-bold mb-6">Enhance Your Healthcare Technology Strategy</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our healthcare expertise can improve patient care and operational efficiency.
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
