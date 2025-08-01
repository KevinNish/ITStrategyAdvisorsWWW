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
              Get answers to common questions about our services and how we help Canadian businesses transform their technology strategy.
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
                What exactly is a fractional CIO, and how is it different from IT support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A fractional CIO is a part-time technology executive who focuses on aligning your IT strategy with your business goals. Unlike day-to-day IT support, we’re not fixing printers—we’re helping you make decisions that reduce risk, cut waste, and enable growth.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="existing-it-provider">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                I already have an IT person or outsourced provider—why would I need a vCIO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most IT teams are focused on keeping the lights on. A vCIO adds strategic leadership—identifying gaps, ensuring IT supports your long-term goals, and holding vendors accountable. We don’t replace your existing provider; we make sure they’re doing what’s best for your business.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="second-opinion">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Why would I pay someone to double-check my current IT setup?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Because your IT provider may not be incentivized to highlight inefficiencies or modern alternatives. We provide an unbiased second opinion—no sales agenda, just your best interests. Many clients are shocked at what we uncover.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="vendor-neutrality">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How do I know you're not just recommending products that benefit you?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We don’t resell products or take commissions from vendors—period. Our only priority is helping you make the right long-term technology decisions. Every recommendation is based on your business needs, not our margins.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="company-size">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                My business isn’t huge—do I really need strategic IT guidance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. Smaller businesses are often more vulnerable to technology risks and wasted spend. A vCIO gives you enterprise-grade strategic oversight scaled to your needs—without the full-time executive price tag.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="time-value">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How much time do you spend with clients—and will I actually get value?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most engagements range from 5 to 20 hours a month depending on your complexity. We’re highly focused during this time—solving problems, reviewing roadmaps, guiding decisions, and making sure your IT stays aligned with your business.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="team-collaboration">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Are you replacing our internal IT team or MSP?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Not at all. We work alongside your existing IT resources, providing the strategy and oversight they may not be equipped to handle. Think of us as your CTO-as-a-service—focused on the big picture.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="cost-comparison">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Isn’t this expensive? How does a vCIO compare to hiring full-time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                A full-time CIO can cost $150K–$300K+ annually. We offer the same level of strategic leadership for a fraction of the price—and you only pay for what you need. It’s flexible, scalable, and cost-effective.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="industry-expertise">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Do you have experience in my industry—or are your recommendations generic?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We work with clients across industries including finance, healthcare, manufacturing, and professional services. Our approach is always tailored—and grounded in real-world Canadian compliance and operational needs.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="project-scope">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What types of projects do you actually help with? Is this just advice?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We’re hands-on when needed. Projects include strategic planning, IT budgeting, cybersecurity, vendor evaluations, compliance, digital transformation, and more. We lead initiatives or support your internal team—whatever gets results.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="compliance">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                We deal with sensitive data—how do you handle Canadian privacy and compliance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We understand the requirements of PIPEDA, PHIPA, and provincial legislation. We help ensure your systems are compliant, your vendors are accountable, and your data stays in Canada when required.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="emergencies">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                If something critical happens, are you there to help or just email us later?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We’re available to guide decision-making during IT crises, help you communicate with vendors and stakeholders, and make sure the right steps are taken. While we don’t replace your support provider, we lead when it matters most.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="getting-started">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                How do we get started, and what’s the commitment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                It starts with a free 60-minute consult. We’ll evaluate your current IT environment and give you a clear path forward. There are no long-term contracts—we earn your trust month by month.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="business-translation">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Do you speak “business” or just “tech”? I need someone who can bridge the gap.
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                That’s our specialty. We translate technical decisions into real business outcomes—cost savings, reduced risk, better vendor accountability, and strategic growth. We speak your language and your IT team’s.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="consultant-vs-vcio">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What’s the difference between a technology consultant and a vCIO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Consultants are often short-term, one-off engagements. A vCIO is a long-term strategic partner—deeply embedded in your business goals, helping you execute over time. We’re not just solving a problem—we’re steering the ship with you.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="msp-disagreements">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                What happens if our MSP disagrees with your recommendations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                That’s common—and healthy. We advocate for your business first. If your MSP pushes back, we facilitate the conversation, ask tough questions, and ensure the solutions serve your interests, not theirs.
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="switching-msp">
              <AccordionTrigger className="text-left text-lg font-semibold text-vcio-secondary">
                Can you help if we’re thinking about switching IT providers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. We’ve helped many clients identify poor-performing providers, vet replacements, and oversee smooth transitions. We handle the technical and political complexity—so you don’t have to.
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
                Don't see your question answered here? We'd love to discuss your specific technology challenges and how our services can help your business.
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
