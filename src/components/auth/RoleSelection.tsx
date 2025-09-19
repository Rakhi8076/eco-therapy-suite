
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

export const RoleSelection = () => {
  const { user, selectRole, logout } = useAuth();

  const handleRoleSelect = (role: UserRole) => {
    selectRole(role);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
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
            Switch Account
          </Button>
        </div>

        {/* Role Selection Grid */}
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
            </Card>
          ))}
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-gray-500">
          <p>Need help choosing? Contact our support team for assistance.</p>
        </div>
      </div>
    </div>
  );
};
