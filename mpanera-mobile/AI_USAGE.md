# Utilisation de l'IA — Projet Mpanera

## Gemini

Ce document résume les interventions de l'IA pour dynamiser la plateforme Mpanera.

## 1. État Global et Persistance
- Installation et configuration de **Zustand** pour la gestion d'état.
- Création de stores dédiés : `useUserStore` (Auth), `useRequestStore` (Demandes), `useOfferStore` (Offres), et `useNotificationStore`.

## 2. Onboarding et Authentification
- Transformation des écrans statiques en formulaires fonctionnels (Client & Prestataire).
- Mise en place d'une redirection automatique intelligente dans le `RootLayout` selon l'état de connexion.
- Intégration de `expo-image-picker` pour la capture réelle des documents d'identité.

## 3. Dynamisation des Flux Métier
- **Côté Client** : Création du formulaire de publication de demande, gestion de la liste des demandes et détail des offres reçues.
- **Côté Prestataire** : Liste des offres envoyées simplifiée et page de détail des propositions.
- **Filtrage** : Implémentation de filtres fonctionnels par statut, catégorie et recherche textuelle.

## 4. Système de Notifications
- Intégration de `expo-notifications`.
- Simulation d'envoi en "temps réel" : la publication d'une demande déclenche une notification push et alimente le centre de notifications du prestataire.

## 5. UX & Navigation
- Restructuration des routes pour un flux logique (ex: Détail Demande -> Détail Offre -> Paiement).
- Ajout de badges dynamiques pour les notifications non lues.
- Gestion des états vides (empty states) sur les dashboards.
