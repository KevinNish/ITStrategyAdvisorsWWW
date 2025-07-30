import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Cog, Network } from "lucide-react";

export default function Industries() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-vcio-neutral to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-vcio-secondary mb-6">
              SMB Market Industries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in serving small and medium businesses across key industries, understanding the unique technology challenges and opportunities in each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="border-l-4 border-vcio-primary pl-6">
                  <h3 className="text-2xl font-bold text-vcio-secondary mb-4">Professional Services</h3>
                  <p className="text-gray-600 mb-4">Law firms, accounting practices, consulting agencies, and other professional service organizations.</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Client data security and compliance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Document management systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Workflow automation
                    </li>
                  </ul>
                  <Link href="/industries/professional-services">
                    <Button className="bg-vcio-primary hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="border-l-4 border-vcio-primary pl-6">
                  <h3 className="text-2xl font-bold text-vcio-secondary mb-4">Healthcare & Medical</h3>
                  <p className="text-gray-600 mb-4">Medical practices, dental offices, therapy centers, and healthcare service providers.</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      PHIPA compliance and security
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      EHR system optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Telemedicine platforms
                    </li>
                  </ul>
                  <Link href="/industries/healthcare">
                    <Button className="bg-vcio-primary hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="border-l-4 border-vcio-primary pl-6">
                  <h3 className="text-2xl font-bold text-vcio-secondary mb-4">Financial Services</h3>
                  <p className="text-gray-600 mb-4">Credit unions, regional banks, investment firms, and financial advisory practices.</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Regulatory compliance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Digital banking platforms
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Risk management systems
                    </li>
                  </ul>
                  <Link href="/industries/financial-services">
                    <Button className="bg-vcio-primary hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="border-l-4 border-vcio-accent pl-6">
                  <h3 className="text-2xl font-bold text-vcio-secondary mb-4">Manufacturing & Distribution</h3>
                  <p className="text-gray-600 mb-4">Small manufacturers, distributors, and supply chain companies.</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      ERP system implementation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Supply chain visibility
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Industrial IoT solutions
                    </li>
                  </ul>
                  <Link href="/industries/manufacturing">
                    <Button className="bg-vcio-primary hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="border-l-4 border-vcio-accent pl-6">
                  <h3 className="text-2xl font-bold text-vcio-secondary mb-4">Non-Profit Organizations</h3>
                  <p className="text-gray-600 mb-4">Charitable organizations, foundations, and community service groups.</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Donor management systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Cost-effective solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-vcio-accent rounded-full mr-3"></span>
                      Grant compliance tracking
                    </li>
                  </ul>
                  <Link href="/industries/non-profit">
                    <Button className="bg-vcio-primary hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry Insights */}
          <Card className="bg-vcio-neutral">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-vcio-secondary mb-6 text-center">Industry-Specific Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-vcio-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClipboardList className="text-white h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-vcio-secondary mb-2">Compliance Understanding</h4>
                  <p className="text-gray-600 text-sm">Deep knowledge of industry-specific regulations and compliance requirements.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-vcio-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="text-white h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-vcio-secondary mb-2">Workflow Optimization</h4>
                  <p className="text-gray-600 text-sm">Proven experience optimizing technology workflows for industry-specific processes.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="text-white h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-vcio-secondary mb-2">Vendor Networks</h4>
                  <p className="text-gray-600 text-sm">Established relationships with industry-specific technology vendors and solutions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
