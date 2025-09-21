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
import { LandingPage } from "@/components/LandingPage";

const queryClient = new QueryClient();

// This component is now not in use as we are adding a dedicated route for the LoginPage
// const AppRoutes = () => {
//   const { isAuthenticated, user } = useAuth();

//   if (!isAuthenticated) {
//     return <LoginPage />;
//   }

//   if (!user?.role) {
//     return <RoleSelection />;
//   }

//   switch (user.role) {
//     case 'patient':
//       return <PatientDashboard />;
//     case 'practitioner':
//       return <PractitionerDashboard />;
//     case 'institutional-admin':
//       return <InstitutionalAdminDashboard />;
//     case 'super-admin':
//       return <SuperAdminDashboard />;
//     default:
//       return <RoleSelection />;
//   }
// };

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Landing Page route */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Added a dedicated route for the login page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Added a dedicated route for role selection */}
            <Route path="/role-selection" element={<RoleSelection />} />

            {/* Added routes for all the dashboards */}
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/practitioner-dashboard" element={<PractitionerDashboard />} />
            <Route path="/institutional-admin-dashboard" element={<InstitutionalAdminDashboard />} />
            <Route path="/super-admin-dashboard" element={<SuperAdminDashboard />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;