<<<<<<< HEAD

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { User, Stethoscope, Building2, Shield } from 'lucide-react';

interface RoleOption {
  role: UserRole;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const roleOptions: RoleOption[] = [
  {
    role: 'patient',
    title: 'Patient',
    description: 'Access your therapy sessions and wellness journey',
    icon: <User className="h-8 w-8 text-green-600" />,
    features: [
      'Schedule therapy sessions',
      'Track wellness progress',
      'Access diet recommendations',
      'Join community discussions'
    ]
  },
  {
    role: 'practitioner',
    title: 'Practitioner',
    description: 'Manage patients and therapy sessions',
    icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
    features: [
      'Patient management',
      'Therapy planning',
      'Health monitoring',
      'Progress analytics'
    ]
  },
  {
    role: 'institutional-admin',
    title: 'Institutional Admin',
    description: 'Oversee clinic operations and resources',
    icon: <Building2 className="h-8 w-8 text-purple-600" />,
    features: [
      'Resource allocation',
      'Staff management',
      'Clinic analytics',
      'System integration'
    ]
  },
  {
    role: 'super-admin',
    title: 'Super Admin',
    description: 'Platform-wide management and oversight',
    icon: <Shield className="h-8 w-8 text-red-600" />,
    features: [
      'Platform configuration',
      'Security management',
      'Global analytics',
      'System monitoring'
    ]
  }
];
=======
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
>>>>>>> 4646b799292632e2a225766d0d31246917a1519e

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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
<<<<<<< HEAD
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">P</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
            <p className="text-gray-600 mt-2">Select your role to access your personalized dashboard</p>
          </div>
          <Button 
            variant="ghost" 
            onClick={logout}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
=======
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
>>>>>>> 4646b799292632e2a225766d0d31246917a1519e
            Switch Account
          </Button>
        </div>

        {/* Role Selection Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {roleOptions.map((option) => (
            <Card 
              key={option.role}
              className="relative group cursor-pointer hover:shadow-xl transition-all duration-300 border bg-white hover:scale-[1.02]"
              onClick={() => handleRoleSelect(option.role)}
            >
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    {option.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  size="sm" 
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                >
                  Select Role
                </Button>
              </CardContent>
=======
        {!selectedRole && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card onClick={() => handleRoleSelect("patient")} className="cursor-pointer hover:shadow-lg">
              <CardHeader className="text-center">
                <User className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Patient</CardTitle>
                <CardDescription>Access therapy sessions</CardDescription>
              </CardHeader>
>>>>>>> 4646b799292632e2a225766d0d31246917a1519e
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

<<<<<<< HEAD
        {/* Help Text */}
        <div className="text-center text-sm text-gray-500">
          <p>Need help choosing? Contact our support team for assistance.</p>
        </div>
=======
>>>>>>> 4646b799292632e2a225766d0d31246917a1519e
      </div>
    </div>
  );
};
