import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pb-8 bg-vcio-secondary text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Get answers to common questions about fractional CIO services and how we help Canadian businesses transform their technology strategy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="what-is-fractional-cio">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What exactly is a fractional CIO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A fractional CIO is a part-time Chief Information Officer who provides strategic technology leadership to your business without the cost of a full-time executive. We work with you on a regular basis to align your technology initiatives with business objectives, manage vendor relationships, and ensure your IT investments drive real value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vendor-agnostic-meaning">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What does "vendor-agnostic" really mean?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Vendor-agnostic means we have no financial ties to any technology vendors or products. We don't sell software, hardware, or services - we only provide strategic advice. This ensures our recommendations are based solely on what's best for your business, not what generates the highest commission or margin for us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="company-size">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What size companies do you typically work with?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We specialize in Canadian small and medium businesses (SMBs) with 10-500 employees. These companies typically need C-level technology leadership but don't have the budget or need for a full-time CIO. We also work with larger companies that need specialized expertise for specific projects or interim leadership.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="time-commitment">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How much time do you spend with each client?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Time commitment varies based on your needs, typically ranging from 5-20 hours per month. This might include monthly strategy sessions, quarterly reviews, project oversight, vendor meetings, and being available for urgent technology decisions. We tailor our engagement to match your business requirements and budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="existing-it-team">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Do you work with our existing IT team or replace them?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We complement and enhance your existing IT capabilities - we don't replace them. Whether you have an internal IT person, work with an MSP, or manage technology yourself, we provide the strategic oversight and leadership that ensures all technology decisions align with your business goals. We often help optimize these existing relationships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost-vs-full-time">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How does the cost compare to hiring a full-time CIO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A full-time CIO typically costs $150,000-$300,000+ annually including benefits. Our fractional services typically range from $3,000-$12,000 per month depending on scope and time commitment. You get the same strategic expertise at a fraction of the cost, plus the flexibility to scale up or down as needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industry-expertise">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Do you have experience in my industry?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We have extensive experience across multiple industries including professional services, healthcare, financial services, manufacturing, and non-profits. Each industry has unique Canadian compliance requirements, workflows, and technology challenges. Our vendor-agnostic approach allows us to select the best solutions regardless of industry-specific vendor relationships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="getting-started">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How do we get started?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We begin with a complimentary 60-minute consultation where we assess your current technology landscape, understand your business objectives, and identify key opportunities. From there, we'll propose a customized engagement that fits your needs and budget. There are no long-term contracts - we earn your business every month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="typical-projects">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What types of projects do you typically handle?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Common projects include technology roadmap development, vendor selection and management, cybersecurity strategy, digital transformation planning, budget planning and optimization, compliance planning, disaster recovery planning, and technology team leadership and mentoring. We focus on strategic initiatives that drive business value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="canadian-compliance">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How do you handle Canadian privacy and compliance requirements?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We specialize in Canadian regulatory compliance including PIPEDA (Personal Information Protection and Electronic Documents Act) for general business privacy, PHIPA (Personal Health Information Protection Act) for healthcare organizations, and OSFI guidelines for financial institutions. Our recommendations always consider Canadian data sovereignty requirements and provincial regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="emergency-support">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Are you available for technology emergencies?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, we provide guidance during technology crises and help you make critical decisions quickly. While we don't provide hands-on technical support (that's what your IT team or MSP handles), we help you navigate strategic decisions, communicate with stakeholders, and ensure business continuity during major incidents.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-vcio-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-vcio-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-white h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-vcio-secondary mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don't see your question answered here? We'd love to discuss your specific technology challenges and how our fractional CIO services can help your business.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-vcio-primary hover:bg-blue-700 text-white">
                  Schedule a Free Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
