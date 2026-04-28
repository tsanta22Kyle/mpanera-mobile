import { create } from 'zustand';

export interface Request {
  id: string;
  title: string;
  subtitle: string;
  offers: number;
  status: 'En attente' | 'Offres reçues' | 'Contact payé';
  category: string;
  budget: string;
  date: string;
  description: string;
}

interface RequestState {
  requests: Request[];
  addRequest: (request: Omit<Request, 'id' | 'offers' | 'status'>) => void;
  updateRequestStatus: (id: string, status: Request['status']) => void;
}

export const useRequestStore = create<RequestState>((set) => ({
  requests: [],
  addRequest: (request) => set((state) => ({
    requests: [
      {
        ...request,
        id: Math.random().toString(36).substring(7),
        offers: 0,
        status: 'En attente',
      },
      ...state.requests,
    ],
  })),
  updateRequestStatus: (id, status) => set((state) => ({
    requests: state.requests.map((r) => r.id === id ? { ...r, status } : r)
  })),
}));
