import { create } from 'zustand';

export interface Offer {
  id: string;
  title?: string;
  location?: string;
  price: string;
  status?: 'Envoyées' | 'En attente' | 'Acceptées' | 'Acceptée' | 'Refusée';
  client?: string;
  schedule?: string;
  requestId?: string;
  name?: string;
  rating?: string;
  delay?: string;
  description?: string;
}

interface OfferState {
  offers: Offer[];
  sampleOffers: Offer[];
  addOffer: (offer: Omit<Offer, 'id'>) => void;
}

export const useOfferStore = create<OfferState>((set) => ({
  offers: [
    {
      id: '1',
      title: 'Réparation fuite cuisine',
      location: 'Analakely',
      price: '55 000 Ar',
      status: 'Envoyées',
      client: 'Mme Rina',
      schedule: 'Aujourd’hui',
    },
    {
      id: '2',
      title: 'Peinture salon',
      location: 'Ankorondrano',
      price: '180 000 Ar',
      status: 'En attente',
      client: 'M. Solo',
      schedule: 'Demain',
    },
    {
      id: '3',
      title: 'Installation prise',
      location: 'Ivandry',
      price: '45 000 Ar',
      status: 'Acceptées',
      client: 'Mme Tiana',
      schedule: 'Sous 2 jours',
    },
    {
      id: '4',
      title: 'Nettoyage appartement',
      location: 'Isoraka',
      price: '70 000 Ar',
      status: 'Envoyées',
      client: 'M. Hery',
      schedule: 'Ce week-end',
    },
  ],
  sampleOffers: [
    { 
      id: '1', 
      name: 'Toky Services', 
      price: '55 000 Ar', 
      delay: 'Aujourd’hui', 
      rating: '4.8',
      description: "Je suis expert en plomberie avec 10 ans d'expérience. Je peux intervenir rapidement avec mon propre matériel."
    },
    { 
      id: '2', 
      name: 'Rija Pro', 
      price: '65 000 Ar', 
      delay: 'Demain', 
      rating: '4.6',
      description: "Travail soigné et garanti. Spécialisé dans les installations sanitaires."
    },
    { 
      id: '3', 
      name: 'Mamy Express', 
      price: '70 000 Ar', 
      delay: 'Sous 2 jours', 
      rating: '4.7',
      description: "Service de qualité, disponible le week-end également."
    },
  ],
  addOffer: (offer) => set((state) => ({
    offers: [
      {
        ...offer,
        id: Math.random().toString(36).substring(7),
      },
      ...state.offers,
    ],
  })),
}));
