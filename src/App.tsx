import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

// ProtectedRoute component to handle authentication and role checks
const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole?: string }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in -> redirect to login
    return <Navigate to="/login" replace />;
  }

  if (!user.role) {
    // Logged in but role not selected -> redirect to role selection
    return <Navigate to="/role-selection" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    // If user has a role but not the required one, redirect to a different page or show an error
    return <Navigate to="/unauthorized" replace />;
  }

  // User logged in and role selected -> show requested page
  return children;
};

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

            {/* Login Page route */}
            <Route path="/login" element={<LoginPage />} />

            {/* Role Selection route */}
            <Route path="/role-selection" element={<RoleSelection />} />

            {/* Protected dashboard routes */}
            <Route
              path="/patient-dashboard"
              element={
                <ProtectedRoute requiredRole="patient">
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/practitioner-dashboard"
              element={
                <ProtectedRoute requiredRole="practitioner">
                  <PractitionerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/institutional-admin-dashboard"
              element={
                <ProtectedRoute requiredRole="institutional-admin">
                  <InstitutionalAdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/super-admin-dashboard"
              element={
                <ProtectedRoute requiredRole="super-admin">
                  <SuperAdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;