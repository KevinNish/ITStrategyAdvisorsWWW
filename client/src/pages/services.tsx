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
  CheckCircle
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Professional consultant presenting technology roadmap to engaged business team"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-vcio-secondary mb-6">How We Engage</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our process is designed to make sure we're the right fit before anything else. We start with a brief 15-minute discovery call to determine whether your business would benefit from strategic IT guidance. From there, we move into a comprehensive assessment engagement.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              This assessment includes a thorough review of over 200 facets of your IT environment—covering infrastructure, cybersecurity, cloud usage, vendor relationships, processes, licensing, compliance posture, and more. Each finding is presented in terms of business risk: low, medium, high, or critical. Risk may mean risk of breach or risk of lost productivity, wasted money, or compliance exposure.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Once the assessment is presented, we outline a strategy and determine what level of ongoing engagement is appropriate. Our fractional CIO agreements are customized based on your organization's size, complexity, regulatory requirements, and the maturity of your current technology environment. Whether you need a few hours per month or a fully embedded advisor, we scale to your needs.
            </p>
            <p className="text-lg text-gray-600">
              <strong>Note:</strong> Any large infrastructure projects or untangling of past technical debt identified during the assessment will be scoped separately as standalone projects. This ensures our ongoing vCIO services remain focused on strategy, leadership, and alignment—not buried in one-off technical remediation.
            </p>
          </div>

          {/* Visual Roadmap */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-vcio-secondary mb-6 text-center">Our Engagement Roadmap</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-vcio-neutral rounded-lg shadow-sm">
                <p className="text-vcio-accent text-sm font-medium mb-2">Step 1</p>
                <h4 className="text-lg font-semibold text-vcio-secondary mb-1">Right Fit Call</h4>
                <p className="text-sm text-gray-600">15-minute conversation to understand your needs and whether we can help.</p>
              </div>
              <div className="p-6 bg-vcio-neutral rounded-lg shadow-sm">
                <p className="text-vcio-accent text-sm font-medium mb-2">Step 2</p>
                <h4 className="text-lg font-semibold text-vcio-secondary mb-1">Comprehensive Assessment</h4>
                <p className="text-sm text-gray-600">Deep dive into over 200 areas of your IT, scored by business risk.</p>
              </div>
              <div className="p-6 bg-vcio-neutral rounded-lg shadow-sm">
                <p className="text-vcio-accent text-sm font-medium mb-2">Step 3</p>
                <h4 className="text-lg font-semibold text-vcio-secondary mb-1">Roadmap & Recommendations</h4>
                <p className="text-sm text-gray-600">Clear summary of issues and actionable steps, prioritized by impact.</p>
              </div>
              <div className="p-6 bg-vcio-neutral rounded-lg shadow-sm">
                <p className="text-vcio-accent text-sm font-medium mb-2">Step 4</p>
                <h4 className="text-lg font-semibold text-vcio-secondary mb-1">Ongoing vCIO Support</h4>
                <p className="text-sm text-gray-600">Flexible strategic IT engagement tailored to your business stage.</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-vcio-neutral">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-vcio-primary rounded-lg flex items-center justify-center mb-6">
                  <Route className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Technology Roadmapping</h3>
                <p className="text-gray-600">Develop comprehensive technology plans that support your business growth and transformation goals.</p>
              </CardContent>
            </Card>

            <Card className="bg-vcio-neutral">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-vcio-accent rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Budget Planning</h3>
                <p className="text-gray-600">Create realistic technology budgets and ensure maximum ROI on all technology investments.</p>
              </CardContent>
            </Card>

            <Card className="bg-vcio-neutral">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Team Leadership</h3>
                <p className="text-gray-600">Provide guidance and mentorship to your internal IT team and technology staff.</p>
              </CardContent>
            </Card>

            <Card className="bg-vcio-neutral">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Security Strategy</h3>
                <p className="text-gray-600">Develop and implement comprehensive cybersecurity frameworks to protect your business.</p>
              </CardContent>
            </Card>

            <Card className="bg-vcio-neutral">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Digital Transformation</h3>
                <p className="text-gray-600">Guide your organization through digital transformation initiatives and process improvements.</p>
              </CardContent>
            </Card>

            <Card className="bg-vcio-neutral">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Crisis Management</h3>
                <p className="text-gray-600">Provide leadership during technology emergencies and develop business continuity plans.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

          {/* CTA Section */}
          <section className="py-16 bg-vcio-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let’s talk about how strategic IT leadership can drive meaningful change in your business. No obligations. No product pushing. Just clarity.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-vcio-primary hover:bg-blue-700 text-white text-lg">
                  Schedule Your Consultation
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
