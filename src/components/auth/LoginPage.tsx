import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom'; // ✅ Import

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState('');

  const [isHovering, setIsHovering] = useState(false);
const [isHoveringApple, setIsHoveringApple] = useState(false);
const [isHoveringGoogle, setIsHoveringGoogle] = useState(false);

  const { login, loginWithGoogle, loginWithApple } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate(); // ✅ Navigate hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // ✅ Pass a default name for the user
      await login(email, password, 'User');
      toast({
        title: "Login successful",
        description: "Welcome to PanchArogya!"
      });

      // ✅ Redirect to RoleSelection
      navigate('/role-selection');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'apple') => {
    setIsLoading(true);
    try {
      if (provider === 'google') {
        await loginWithGoogle('Google User'); // ✅ optional name
      } else {
        await loginWithApple('Apple User'); // ✅ optional name
      }
      toast({
        title: "Login successful",
        description: `Welcome to PanchArogya!`
      });

      // ✅ Redirect after social login
      navigate('/role-selection');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Social login failed. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
  className="min-h-screen flex items-center justify-center p-4"
  style={{ backgroundColor: '#FFF9F3' }}
>

      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full shadow-lg overflow-hidden">
            <img src="/logo.png" alt="App Logo" className="w-full h-full object-cover" />
          </div>
          <div>
  <h1 className="text-3xl font-bold" style={{ color: '#CA8A04' }}>
    PanchArogya
  </h1>
  <p className="text-muted-foreground mt-2">Holistic Ayurvedic Healthcare Platform</p>
</div>

        </div>

        {/* Login Form */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl" style={{ color: '#CA8A04' }}>Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue your wellness journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email"style={{ color: '#CA8A04' }}>Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" style={{ color: '#CA8A04' }}>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: isHovering ? '#CA8A04' : '#6B7280' }}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

                  
                </div>
              </div>

             <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
                style={{
                  backgroundColor: '#CA8A04', // gold background
                  color: '#FFFFFF',           // white text
                  border: 'none'              // optional: remove border
                }}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

            </form>

            {/* Social Login */}
            <div className="space-y-3 mt-4">
              <Button variant="social" size="lg" className="w-full" onClick={() => handleSocialLogin('google')} disabled={isLoading}
                onMouseEnter={() => setIsHoveringGoogle(true)}
                onMouseLeave={() => setIsHoveringGoogle(false)}
                style={{
                  backgroundColor: isHoveringGoogle ? 'rgba(202, 138, 4, 0.5)' : 'transparent', // gold on hover with 50% opacity
                  color: '#CA8A04',             // text color remains gold
                  transition: 'background-color 0.3s ease' // smooth hover transition
                }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#0F9D58" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/> {/* gold */}
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>

              <Button
  variant="social"
  size="lg"
  className="w-full"
  onClick={() => handleSocialLogin('apple')}
  disabled={isLoading}
  onMouseEnter={() => setIsHoveringApple(true)}
  onMouseLeave={() => setIsHoveringApple(false)}
  style={{
    backgroundColor: isHoveringApple ? 'rgba(202, 138, 4, 0.5)' : 'transparent', // gold on hover with 50% opacity
    color: '#CA8A04',             // text color remains gold
    transition: 'background-color 0.3s ease' // smooth hover transition
  }}
>
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    style={{ color: '#CA8A04' }} // ✅ golden color
    fill="currentColor"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
  Continue with Apple
</Button>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
