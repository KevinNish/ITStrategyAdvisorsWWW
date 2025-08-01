import { Card, CardContent } from "@/components/ui/card";
import { Award, Handshake, Shield, Star } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pb-8 bg-vcio-secondary text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About IT Strategy Advisors
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
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
                To empower Canadian small and medium businesses with clear, unbiased IT guidance, providing strategic roadmaps without the conflicts of interest that plague traditional IT consulting.
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
                  <h3 className="text-xl font-semibold text-vcio-secondary mb-2">Kevin Nishimura</h3>
                  <p className="text-vcio-primary font-medium mb-3">Founder & IT Strategy Advisor</p>
                  <p className="text-gray-600 text-sm">Kevin is a seasoned IT leader with a passion for technology that began in childhood and evolved into a career dedicated to transforming how businesses use IT. As a former CTO and CIO, Kevin has guided hundreds of organizations through modernization, strategic planning, and digital transformation. He has played a pivotal role in the MSP industry; developing widely adopted tools and frameworks that continue to support service providers around the globe. A strong advocate for vendor-neutral solutions and open-source software, Kevin is known for his practical, business-aligned approach to IT strategy and his lasting contributions to the broader tech community.</p>
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
                      "IT Strategy Advisors helped us identify serious gaps in our existing IT setup—including overbilling, outdated practices, and weak security controls. Kevin guided us through the process of replacing our provider, ensured a seamless transition, and built a roadmap that aligned with our business needs. He now continues to oversee our overall technology posture, holding vendors accountable and making sure our environment stays secure, efficient, and aligned with industry best practices. It’s made a huge difference having someone in our corner who’s truly on our side."
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
                      "It’s been a game changer having someone who actually gets our business and isn’t just talking tech for the sake of it. Kevin’s become a key part of our planning process, helping us make smarter decisions and keeping everything aligned. It’s a huge relief knowing someone’s looking out for our best interests."
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
