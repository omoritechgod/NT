
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Team from "./pages/Team";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import NTLabs from "./pages/NTLabs";
import NTLearn from "./pages/NTLearn";
import InsightHub from "./pages/InsightHub";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/nt-labs" element={<NTLabs />} />
          <Route path="/nt-learn" element={<NTLearn />} />
          <Route path="/insight-hub" element={<InsightHub />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
