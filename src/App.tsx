<<<<<<< HEAD
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LoginPage } from "@/components/auth/LoginPage";
import { RoleSelection } from "@/components/auth/RoleSelection";
import { PatientDashboard } from "@/components/dashboards/PatientDashboard";
import { PractitionerDashboard } from "@/components/dashboards/PractitionerDashboard";
import { InstitutionalAdminDashboard } from "@/components/dashboards/InstitutionalAdminDashboard";
import { SuperAdminDashboard } from "@/components/dashboards/SuperAdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // If authenticated but no role selected, show role selection
  if (!user?.role) {
    return <RoleSelection />;
  }

  // Route to appropriate dashboard based on role
  switch (user.role) {
    case 'patient':
      return <PatientDashboard />;
    case 'practitioner':
      return <PractitionerDashboard />;
    case 'institutional-admin':
      return <InstitutionalAdminDashboard />;
    case 'super-admin':
      return <SuperAdminDashboard />;
    default:
      return <RoleSelection />;
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppRoutes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);
=======
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TreatmentSection from './components/TreatmentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TreatmentSection />
      <Footer />
    </div>
  );
}
>>>>>>> frontpage/main

export default App;