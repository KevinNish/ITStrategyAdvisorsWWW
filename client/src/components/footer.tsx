import { Link } from "wouter";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-vcio-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-vcio-primary mb-4">IT Strategy Advisors</div>
            <p className="text-gray-300 mb-4">
              Vendor-agnostic fractional CIO services for small and medium businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Fractional CIO
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Technology Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vendor Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Planning
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(555) 123-4567</li>
              <li>hello@itstrategy-advisors.com</li>
              <li>Serving SMBs Nationwide</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 IT Strategy Advisors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
