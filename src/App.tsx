import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Language } from "@/lib/i18n";
import Index from "./pages/Index.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogDetailPage from "./pages/BlogDetailPage.tsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.tsx";
import ProductCatalogPage from "./pages/ProductCatalogPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminBlog from "./pages/admin/AdminBlog.tsx";
import AdminProducts from "./pages/admin/AdminProducts.tsx";
import AdminLeads from "./pages/admin/AdminLeads.tsx";
import AdminSettings from "./pages/admin/AdminSettings.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [lang, setLang] = useState<Language>("vi");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index lang={lang} setLang={setLang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} setLang={setLang} />} />
            <Route path="/about" element={<AboutPage lang={lang} setLang={setLang} />} />
            <Route path="/projects" element={<ProjectsPage lang={lang} setLang={setLang} />} />
            <Route path="/projects/:id" element={<ProjectDetailPage lang={lang} setLang={setLang} />} />
            <Route path="/blog" element={<BlogPage lang={lang} setLang={setLang} />} />
            <Route path="/blog/:id" element={<BlogDetailPage lang={lang} setLang={setLang} />} />
            <Route path="/services/:id" element={<ServiceDetailPage lang={lang} setLang={setLang} />} />
            <Route path="/reuse-catalog" element={<ProductCatalogPage lang={lang} setLang={setLang} />} />
            <Route path="/reuse-catalog/:id" element={<ProductDetailPage lang={lang} setLang={setLang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} setLang={setLang} />} />
            <Route path="/login" element={<LoginPage lang={lang} />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout lang={lang} />}>
              <Route index element={<AdminDashboard />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="leads" element={<AdminLeads />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
