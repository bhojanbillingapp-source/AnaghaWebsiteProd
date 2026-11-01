import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ZohoCRM from "./pages/ZohoCRM";
import Salesforce from "./pages/Salesforce";
import MicrosoftCRM from "./pages/MicrosoftCRM";
import AIMLInstitutions from "./pages/AIMLInstitutions";
import AIMLStudents from "./pages/AIMLStudents";
import AIMLIndustry from "./pages/AIMLIndustry";
import AILedModernization from "./pages/AILedModernization";
import VibeCoding from "./pages/VibeCoding";
import ITStaffing from "./pages/ITStaffing";
import SAP from "./pages/SAP";
import Oracle from "./pages/Oracle";
import MicrosoftDynamics from "./pages/MicrosoftDynamics";
import ProductEngineering from "./pages/ProductEngineering";
import DigitalTransformation from "./pages/DigitalTransformation";
import DataAnalytics from "./pages/DataAnalytics";
import AutomationTesting from "./pages/AutomationTesting";
import DevOps from "./pages/DevOps";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import IndustryDetail from "./pages/IndustryDetail";
import Industries from "./pages/Industries";
import AdminLogin from "./pages/AdminLogin";
import AdminJobs from "./pages/AdminJobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navigation />}
      <main className="flex-1">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {/* Engineering & Development Services */}
              <Route path="/services/product-engineering" element={<ProductEngineering />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/automation-testing" element={<AutomationTesting />} />
              <Route path="/services/devops" element={<DevOps />} />
              {/* Cloud Services */}
              <Route path="/services/zoho-crm" element={<ZohoCRM />} />
              <Route path="/services/salesforce" element={<Salesforce />} />
              <Route path="/services/microsoft-crm" element={<MicrosoftCRM />} />
              {/* AI & ML Services */}
              <Route path="/services/ai-ml/ai-led-modernization" element={<AILedModernization />} />
              <Route path="/services/ai-ml/vibe-coding" element={<VibeCoding />} />
              <Route path="/services/ai-ml/institutions" element={<AIMLInstitutions />} />
              <Route path="/services/ai-ml/students-professionals" element={<AIMLStudents />} />
              <Route path="/services/ai-ml/industry-upskilling" element={<AIMLIndustry />} />
              {/* Staffing Services */}
              <Route path="/services/staffing/it-staffing" element={<ITStaffing />} />
              {/* ERP Services */}
              <Route path="/services/erp/sap" element={<SAP />} />
              <Route path="/services/erp/oracle" element={<Oracle />} />
              <Route path="/services/erp/microsoft-dynamics" element={<MicrosoftDynamics />} />
              {/* Other Pages */}
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* Industries */}
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:industryId" element={<IndustryDetail />} />
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/jobs" element={<AdminJobs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
