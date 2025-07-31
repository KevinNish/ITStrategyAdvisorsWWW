import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Route,
  DollarSign,
  Users,
  Lock,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  FileText,
  ShieldCheck,
  Settings
} from "lucide-react";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-vcio-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-vcio-secondary mb-6">
              Fractional CIO Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get C-level technology leadership without the full-time commitment. Our fractional CIO model provides strategic guidance tailored to Canadian businesses, ensuring compliance with local regulations.
            </p>
          </div>
        </div>
      </section>

      {/* What is Fractional CIO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6">What is a Fractional CIO?</h2>
              <p className="text-lg text-gray-600 mb-6">
                A fractional CIO provides part-time, strategic technology leadership to Canadian organizations that need C-level expertise but don't require or can't afford a full-time executive. We step in as your business-first technology advocate, helping you make confident, long-term decisions without the influence of product margins or sales quotas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Strategic Technology Planning</h4>
                    <p className="text-gray-600">Align technology initiatives with business objectives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Vendor Management</h4>
                    <p className="text-gray-600">Negotiate contracts and manage relationships with complete neutrality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-vcio-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-vcio-secondary">Risk Management</h4>
                    <p className="text-gray-600">Identify and mitigate technology and security risks</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional consultant presenting technology roadmap to engaged business team"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Engagement Roadmap */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-vcio-secondary mb-6 text-center">Our Engagement Process</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                {
                  step: "Step 1",
                  title: "Right Fit Call",
                  desc: "15-minute conversation to understand your needs and whether we can help."
                },
                {
                  step: "Step 2",
                  title: "Comprehensive Assessment",
                  desc: "Deep dive into over 200 areas of your IT, scored by business risk."
                },
                {
                  step: "Step 3",
                  title: "Roadmap and Recommendations",
                  desc: "Clear summary of issues and actionable steps, prioritized by impact."
                },
                {
                  step: "Step 4",
                  title: "Ongoing vCIO Engagement",
                  desc: "Flexible strategic IT engagement tailored to your business stage."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-vcio-neutral rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <p className="text-vcio-accent text-sm font-medium mb-2">{item.step}</p>
                  <h4 className="text-lg font-semibold text-vcio-secondary mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <!-- Services Grid -->
<div className="mb-12 text-center">
  <h2 className="text-3xl font-bold text-vcio-secondary">Our Core Services</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {[ 
    { icon: <Route className='text-white h-6 w-6' />, color: 'bg-vcio-primary', title: 'Technology Roadmapping', description: 'Develop comprehensive technology plans that support your business growth and transformation goals.' },
    { icon: <DollarSign className='text-white h-6 w-6' />, color: 'bg-vcio-accent', title: 'Budget Planning', description: 'Create realistic technology budgets and ensure maximum ROI on all technology investments.' },
    { icon: <Users className='text-white h-6 w-6' />, color: 'bg-blue-600', title: 'Team Leadership', description: 'Provide guidance and mentorship to your internal IT team and technology staff.' },
    { icon: <Lock className='text-white h-6 w-6' />, color: 'bg-purple-600', title: 'Security Strategy', description: 'Develop and implement comprehensive cybersecurity frameworks to protect your business.' },
    { icon: <RefreshCw className='text-white h-6 w-6' />, color: 'bg-green-600', title: 'Digital Transformation', description: 'Guide your organization through digital transformation initiatives and process improvements.' },
    { icon: <AlertTriangle className='text-white h-6 w-6' />, color: 'bg-red-600', title: 'Crisis Management', description: 'Provide leadership during technology emergencies and develop business continuity plans.' },
    { icon: <FileText className='text-white h-6 w-6' />, color: 'bg-yellow-600', title: 'IT Policies & Procedures', description: 'Define clear, enforceable guidelines for technology use, access, and security.' },
    { icon: <ShieldCheck className='text-white h-6 w-6' />, color: 'bg-pink-600', title: 'Compliance & Risk Management', description: 'Navigate evolving regulations like HIPAA and PIPEDA while reducing organizational risk.' },
    { icon: <Settings className='text-white h-6 w-6' />, color: 'bg-indigo-600', title: 'Process Optimization', description: 'Improve efficiency and consistency by aligning technology with better workflows.' },
  ].map((service, index) => (
    <Card key={index} className="bg-vcio-neutral">
      <CardContent className="p-8">
        <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-vcio-secondary mb-4">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
        </div>
      </section>
    </div>
  );
}
