import { Card, CardContent } from "@/components/ui/card";
import { Award, Handshake, Shield, Star } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-vcio-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-vcio-secondary mb-6">
              About IT Strategy Advisors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded on the principle that SMBs deserve unbiased technology leadership, we've built our reputation on trust, expertise, and unwavering vendor neutrality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to C-level technology expertise for Canadian small and medium businesses, providing strategic guidance without the conflicts of interest that plague traditional IT consulting.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe every business deserves a technology advocate who puts their interests first, not someone trying to sell them the next product or service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vcio-secondary mb-2">Certified Expertise</h4>
                    <p className="text-gray-600">Our team holds industry certifications from leading technology organizations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vcio-secondary mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">15+ years of experience helping Canadian SMBs transform their technology strategies while ensuring regulatory compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vcio-secondary mb-2">Complete Transparency</h4>
                    <p className="text-gray-600">No hidden agendas, no product sales - just honest, strategic technology guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Confident business professionals shaking hands in bright modern office" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-vcio-secondary mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-vcio-neutral">
                <CardContent className="p-8 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                    alt="Michael Chen, CEO" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                  />
                  <h3 className="text-xl font-semibold text-vcio-secondary mb-2">Michael Chen</h3>
                  <p className="text-vcio-primary font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">Former CTO with 20+ years experience in enterprise technology strategy and SMB transformation.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-vcio-neutral">
                <CardContent className="p-8 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                    alt="Sarah Rodriguez, CTO" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                  />
                  <h3 className="text-xl font-semibold text-vcio-secondary mb-2">Sarah Rodriguez</h3>
                  <p className="text-vcio-primary font-medium mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600 text-sm">Cybersecurity expert specializing in SMB risk management and compliance frameworks.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-vcio-neutral">
                <CardContent className="p-8 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                    alt="David Thompson, VP Strategy" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                  />
                  <h3 className="text-xl font-semibold text-vcio-secondary mb-2">David Thompson</h3>
                  <p className="text-vcio-primary font-medium mb-3">VP of Strategy</p>
                  <p className="text-gray-600 text-sm">Digital transformation specialist with deep experience in process optimization and change management.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Client Testimonials */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-vcio-secondary mb-8 text-center">What Our Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "VentusCIO helped us save 40% on our technology budget while improving our security posture. Their vendor-agnostic approach gave us confidence we were getting the best solutions."
                    </p>
                    <div className="font-semibold text-vcio-secondary">Jennifer Walsh, CEO</div>
                    <div className="text-sm text-gray-500">Walsh & Associates Law Firm</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "Finally, a technology advisor who actually understands our business. They've become an integral part of our strategic planning process."
                    </p>
                    <div className="font-semibold text-vcio-secondary">Robert Kim, President</div>
                    <div className="text-sm text-gray-500">Pacific Manufacturing Inc.</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
