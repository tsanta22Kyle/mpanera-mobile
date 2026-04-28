import { create } from 'zustand';

export type UserRole = 'client' | 'provider' | 'both' | null;

interface UserProfile {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  avatar?: string;
}

interface UserState {
  user: UserProfile | null;
  role: UserRole;
  isAuthenticated: boolean;
  onboardingComplete: boolean;
  setUser: (user: UserProfile) => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  setRole: (role: UserRole) => void;
  setAuthenticated: (status: boolean) => void;
  setOnboardingComplete: (status: boolean) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  role: null,
  isAuthenticated: false,
  onboardingComplete: false,
  setUser: (user) => set({ user }),
  updateUser: (updates) => set((state) => ({ 
    user: state.user ? { ...state.user, ...updates } : updates 
  })),
  setRole: (role) => set({ role }),
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  setOnboardingComplete: (status) => set({ onboardingComplete: status }),
  logout: () => set({ user: null, role: null, isAuthenticated: false, onboardingComplete: false }),
}));
