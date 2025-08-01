import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import AccountingFirms from "@/pages/industries/accountingfirms";
import Healthcare from "@/pages/industries/healthcare";
import FinancialServices from "@/pages/industries/financial-services";
import Manufacturing from "@/pages/industries/manufacturing";
import Construction from "@/pages/industries/construction";
import NonProfit from "@/pages/industries/non-profit";
import About from "@/pages/about";
import FAQ from "@/pages/faq";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/industries/accountingfirms" component={AccountingFirms} />
          <Route path="/industries/healthcare" component={Healthcare} />
          <Route path="/industries/financial-services" component={FinancialServices} />
          <Route path="/industries/manufacturing" component={Manufacturing} />
          <Route path="/industries/construction" component={Construction} />
          <Route path="/industries/non-profit" component={NonProfit} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
