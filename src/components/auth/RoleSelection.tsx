import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types/auth";
import { User, Stethoscope, Building2, Shield } from "lucide-react";

// Import role-specific forms
import PatientForm from "@/components/forms/PatientForm";
import PractitionerForm from "@/components/forms/PractitionerForm";
import InstitutionalAdminForm from "@/components/forms/InstitutionalAdminForm";
import SuperAdminForm from "@/components/forms/SuperAdminForm";

export const RoleSelection = () => {
  const { user, logout, updateUserName } = useAuth(); // ✅ added updateUserName
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  // Function to handle patient form submit
  const handlePatientFormSubmit = (name: string) => {
    if (updateUserName) {
      updateUserName(name); // update name in AuthContext
    }
    setSelectedRole("patient"); // keep selected role active
  };

  // Map roles to form components
  const formComponents: Record<UserRole, JSX.Element> = {
    "patient": <PatientForm onSubmitName={handlePatientFormSubmit} />,
    "practitioner": <PractitionerForm />,
    "institutional-admin": <InstitutionalAdminForm />,
    "super-admin": <SuperAdminForm />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full shadow-lg overflow-hidden">
            <img 
              src="/logo.png" 
              alt="web Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome, {user?.name || "Guest"}!
            </h1>
            {!selectedRole && (
              <p className="text-muted-foreground mt-2">
                Select your role to continue
              </p>
            )}
          </div>

          <Button variant="ghost" onClick={logout} className="text-sm">
            Switch Account
          </Button>
        </div>

        {/* Role Selection Grid */}
        {!selectedRole && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card onClick={() => handleRoleSelect("patient")} className="cursor-pointer hover:shadow-lg">
              <CardHeader className="text-center">
                <User className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Patient</CardTitle>
                <CardDescription>Access therapy sessions</CardDescription>
              </CardHeader>
            </Card>
            <Card onClick={() => handleRoleSelect("practitioner")} className="cursor-pointer hover:shadow-lg">
              <CardHeader className="text-center">
                <Stethoscope className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Practitioner</CardTitle>
                <CardDescription>Manage patients</CardDescription>
              </CardHeader>
            </Card>
            <Card onClick={() => handleRoleSelect("institutional-admin")} className="cursor-pointer hover:shadow-lg">
              <CardHeader className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Institutional Admin</CardTitle>
                <CardDescription>Oversee clinic operations</CardDescription>
              </CardHeader>
            </Card>
            <Card onClick={() => handleRoleSelect("super-admin")} className="cursor-pointer hover:shadow-lg">
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Super Admin</CardTitle>
                <CardDescription>Platform-wide management</CardDescription>
              </CardHeader>
            </Card>
          </div>
        )}

        {/* Render the selected role form */}
        {selectedRole && formComponents[selectedRole]}

      </div>
    </div>
  );
};