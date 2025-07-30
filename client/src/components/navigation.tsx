import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/faq", label: "FAQ" },
  ];

  // Filter out Home tab when on home page
  const visibleNavItems = navItems.filter(item => 
    !(item.path === "/" && location === "/")
  );

  const industryItems = [
    { path: "/industries/professional-services", label: "Professional Services" },
    { path: "/industries/healthcare", label: "Healthcare & Medical" },
    { path: "/industries/financial-services", label: "Financial Services" },
    { path: "/industries/manufacturing", label: "Manufacturing & Distribution" },
    { path: "/industries/non-profit", label: "Non-Profit Organizations" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const isIndustriesActive = () => {
    return location.startsWith("/industries");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/src/assets/logo.svg" alt="IT Strategy Advisors Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {visibleNavItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-vcio-primary font-medium border-b-2 border-vcio-primary"
                      : "text-gray-600 hover:text-vcio-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Industries Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={`px-3 py-2 transition-colors flex items-center gap-1 ${
                    isIndustriesActive()
                      ? "text-vcio-primary font-medium border-b-2 border-vcio-primary"
                      : "text-gray-600 hover:text-vcio-primary"
                  }`}>
                    Industries
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {industryItems.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link href={item.path} className="w-full cursor-pointer">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/contact">
                <Button className="bg-vcio-primary hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {visibleNavItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-lg ${
                        isActive(item.path)
                          ? "text-vcio-primary font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Industries Section in Mobile */}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Industries
                    </div>
                    {industryItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 text-base ${
                          isActive(item.path)
                            ? "text-vcio-primary font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-vcio-primary hover:bg-blue-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
