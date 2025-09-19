import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole, AuthState } from '@/types/auth';

// Context type including all auth functions
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  selectRole: (role: UserRole) => void;
  logout: () => void;
  updateUserName: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

// Provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  // Generic mock login function
  const mockLogin = async (user: User) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    await new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  // -------------------------
  // LOGIN FUNCTIONS
  // -------------------------
 const login = (email: string, password: string, name: string) => {
    const user: User = { id: '1', email, name, role: undefined as any };
    return mockLogin(user);
};


const loginWithGoogle = (name?: string) => {
  const user: User = { 
    id: '2', 
    email: 'user@gmail.com', 
    name: name?.trim() || 'Google User', // ✅ optional custom name
    role: undefined as any 
  };
  return mockLogin(user);
};

const loginWithApple = (name?: string) => {
  const user: User = { 
    id: '3', 
    email: 'user@icloud.com', 
    name: name?.trim() || 'Apple User', // ✅ optional custom name
    role: undefined as any 
  };
  return mockLogin(user);
};


  // -------------------------
  // OTHER FUNCTIONS
  // -------------------------
  const selectRole = (role: UserRole) => {
    if (!authState.user) return;
    setAuthState(prev => ({ ...prev, user: { ...prev.user!, role } }));
  };

  const logout = () => setAuthState({ user: null, isAuthenticated: false, isLoading: false });

  const updateUserName = (name: string) => {
    if (!authState.user) return;
    setAuthState(prev => ({ ...prev, user: { ...prev.user!, name } }));
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
        updateUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
