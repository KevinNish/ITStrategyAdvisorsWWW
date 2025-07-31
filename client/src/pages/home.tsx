import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Handshake, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-vcio-neutral via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-vcio-secondary leading-tight mb-6">
                <span className="block">Your Technology.</span>
                <span className="block">Your Strategy.</span>
                <span className="block text-vcio-primary">No Sales Agenda.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help growing Canadian businesses make confident IT decisions based on what’s best for their business—not someone else’s product margins. Think of us as your strategic IT advisor, not a salesperson with a quota.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-vcio-primary hover:bg-blue-700 text-white text-lg">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-vcio-primary text-vcio-primary hover:bg-vcio-primary hover:text-white text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse team collaborating on technology strategy with laptops and charts" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-vcio-secondary mb-8">
              Strategic IT Leadership, Built for Canadian Businesses
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-600 mb-6">
                We bring clarity and accountability to your IT strategy so you can focus on growing your business:
              </p>
              <ul className="space-y-3 text-lg text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vcio-primary rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  Aligning technology with your business goals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vcio-primary rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  Managing IT budgets for long-term value
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vcio-primary rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  Guiding cybersecurity and compliance initiatives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vcio-primary rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  Identifying and mitigating business risks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vcio-primary rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  Managing vendors and outsourced IT providers to ensure you're getting the value you deserve
                </li>
              </ul>
              <div className="bg-vcio-neutral p-6 rounded-lg mb-8 border-l-4" style={{ borderColor: "var(--vcio-accent)" }}>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Already have an IT provider?</strong> We speak the geek—so you don’t have to. We act as your advocate, cutting through the noise, holding vendors accountable, and ensuring your business isn’t being taken advantage of.
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-vcio-secondary">
                  Get executive-level IT leadership—without the full-time cost.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-vcio-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Built on Trust, Not Commission</h3>
              <p className="text-gray-600">
                We don’t sell hardware or software. Our advice is based solely on what’s right for your business—not what boosts someone’s bottom line.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-vcio-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Extension of Your Team</h3>
              <p className="text-gray-600">
                We integrate seamlessly with your team, bridging the gap between business and technology—so nothing gets lost in translation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-vcio-secondary mb-4">Business-First Technology Strategy</h3>
              <p className="text-gray-600">
                We bring clarity to IT decisions—helping you scale, stay secure, and invest wisely without the noise of upsells or biased vendor advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-vcio-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vcio-secondary mb-4">Trusted by SMB Leaders</h2>
            <p className="text-gray-600">Join hundreds of businesses who've transformed their technology strategy</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-vcio-primary mb-2">150+</div>
                <div className="text-gray-600">SMB Clients Served</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-vcio-primary mb-2">$2M+</div>
                <div className="text-gray-600">Annual Cost Savings</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-vcio-primary mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-vcio-primary mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have questions about strategic IT advisory services?</p>
            <Link href="/faq">
              <Button variant="outline" className="border-vcio-primary text-vcio-primary hover:bg-vcio-primary hover:text-white">
                View Frequently Asked Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

