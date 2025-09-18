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
    icon: <User className="h-8 w-8" />,
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
    icon: <Stethoscope className="h-8 w-8" />,
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
    icon: <Building2 className="h-8 w-8" />,
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
    icon: <Shield className="h-8 w-8" />,
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-primary-foreground">P</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome, {user?.name}!</h1>
            <p className="text-muted-foreground mt-2">Select your role to access your personalized dashboard</p>
          </div>
          <Button 
            variant="ghost" 
            onClick={logout}
            className="text-sm"
          >
            Switch Account
          </Button>
        </div>

        {/* Role Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {roleOptions.map((option) => (
            <Card 
              key={option.role}
              className="relative group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm hover:scale-[1.02]"
              onClick={() => handleRoleSelect(option.role)}
            >
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-light/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {option.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="medical" 
                  size="sm" 
                  className="w-full mt-4"
                >
                  Select Role
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Need help choosing? Contact our support team for assistance.</p>
        </div>
      </div>
    </div>
  );
};