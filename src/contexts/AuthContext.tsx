import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole, AuthState } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  selectRole: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const login = async (email: string, password: string): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    // Mock authentication - in real app this would be JWT/Firebase
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'patient', // Default role, will be selected later
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const loginWithGoogle = async (): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    // Mock Google auth
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '2',
      email: 'user@gmail.com',
      name: 'Google User',
      role: 'patient',
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const loginWithApple = async (): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    // Mock Apple auth
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '3',
      email: 'user@icloud.com',
      name: 'Apple User',
      role: 'patient',
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const selectRole = (role: UserRole) => {
    if (authState.user) {
      setAuthState(prev => ({
        ...prev,
        user: { ...prev.user!, role }
      }));
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        loginWithGoogle,
        loginWithApple,
        selectRole,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};