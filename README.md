# Mpanera Mobile

Mpanera Mobile is a mobile-first service marketplace for Madagascar. The platform connects individual clients with local service providers such as plumbers, electricians, painters, technicians, cleaners, beauty professionals, and other independent workers.

The product is designed to replace informal service discovery through Facebook posts and unreliable word-of-mouth with a clearer, more structured, and more trustworthy experience.

## Overview

The application helps users:

- Post a service request in a specific category and location
- Notify matching providers based on category and service area
- Receive and compare multiple offers
- Unlock provider contact details after paying a contact fee
- Build trust through identity verification, ratings, reviews, and profile credibility

The initial target market is Madagascar, with a strong focus on Antananarivo and a mobile-first user experience.

## Product Vision

The core idea is simple:

- Clients should be able to describe a need quickly and receive relevant offers
- Service providers should receive qualified local opportunities
- The platform should create trust where the market is currently fragmented and informal

Because many users may not be familiar with complex digital products, the interface must stay simple, direct, and accessible.

## User Roles

### Client

A client is an individual looking for a service. The client can:

- Complete onboarding
- Post service requests
- Receive and compare provider offers
- Choose a provider
- Pay a contact fee to unlock provider details
- Leave a rating and review after the service

### Service Provider

A provider is an independent professional or artisan offering one or more services. The provider can:

- Complete onboarding as a provider
- Define service categories
- Define service areas
- Receive matching requests
- Send offers with price, timeline, and availability
- Build trust through verification and profile information

### Hybrid User

One account can support both roles. A provider can also act as a client when needed.

## Core User Flow

### 1. Mandatory Onboarding

On first launch, the user must complete onboarding before accessing the app.

Collected information includes:

- First name and last name
- Phone number as the main identifier
- Optional email
- Role: client, provider, or both
- Location: city, district, neighborhood
- Provider-specific information when applicable:
  - Service categories
  - Service areas
  - Short description
  - Indicative pricing

### 2. Service Request Creation

A client creates a request with:

- Service category
- Short title
- Detailed description
- Indicative budget range in Ariary
- Approximate location
- Desired dates
- Photos or supporting documents when required

Once submitted, the request is broadcast to matching verified providers in the relevant service area.

### 3. Provider Notification

Eligible providers receive an in-app notification containing:

- Request title
- Location
- Budget indication
- Direct action to respond

### 4. Provider Offer Submission

Providers can respond with:

- Proposed price
- Offer description
- Expected intervention delay
- Available time slots

### 5. Offer Comparison

Clients can compare offers side by side using information such as:

- Provider name
- Rating
- District
- Proposed price
- Estimated delay
- Availability
- Offer details

### 6. Contact Fee Payment

When a client chooses a provider, the client pays a contact fee through Tiavina, a local mobile payment solution.

This payment unlocks the provider’s contact details:

- Phone number
- Email address

Without payment, provider contact information remains hidden.

### 7. Direct Contact

After unlocking the contact details, the client and provider communicate directly outside the platform, for example by phone call or WhatsApp.

The platform facilitates the match but does not manage the full service transaction afterward.

### 8. Rating and Review

After the service is completed, the client can leave:

- A star rating from 1 to 5
- A written review

This contributes to the provider’s public credibility.

## Trust and Reliability Features

Trust is a central part of the product.

### Provider Identity Verification

Providers must submit:

- Front side of national ID
- Back side of national ID
- Selfie with visible ID

The verification flow is designed to include:

- Automated validation
- Manual moderation review

Possible provider verification statuses:

- `pending`
- `approved`
- `rejected`

Only approved providers should receive requests and appear as active service providers.

### Ratings and Reviews

Each provider profile can display:

- Average rating
- Review history
- “New” status if no review exists yet

### Social Proof

Providers can strengthen their profile with:

- Certifications
- Portfolio items
- Client references

### Contact Information Refresh

The platform can periodically ask users to confirm or update their contact details to keep unlocked contacts reliable and current.

## Location-Based Matching

The marketplace is organized around local geographic areas in Madagascar, especially districts and neighborhoods.

Matching logic should consider:

- Service category
- Provider service areas
- Client request location

This ensures providers only receive relevant local requests.

## Service Categories

The platform supports hierarchical service categories, including examples such as:

- Building and home repair
  - Plumbing
  - Electrical work
  - Painting
  - Masonry
  - Carpentry
  - Tiling
- Vehicles
  - Auto mechanic
  - Bodywork
  - Auto electrical
- IT and digital services
  - Phone or computer repair
  - Networking
  - Development
- Home services
  - Cleaning
  - Gardening
  - Moving
- Health and beauty
  - Hair services
  - Massage
  - Home care
- Events
  - Catering
  - DJ
  - Decoration
  - Photography

## In-App Notifications

The app includes a notification system for key events:

- New request for a provider
- New provider response for a client
- Payment confirmation
- System alerts such as verification updates or account reminders

Unread notifications should be visible through a badge in the application UI.

## Main Screens and Navigation

### Mobile Experience

The mobile app is the primary product surface.

Expected navigation and UI blocks include:

- Top bar with logo, active location, and notification bell
- Primary call to action to post a request
- Horizontal category browsing
- Offer comparison block when offers are pending
- Request history with statuses
- Recent activity feed
- Bottom navigation:
  - Home
  - Explore
  - Post
  - Requests
  - Profile

### Desktop Experience

Desktop is secondary, but the product structure may also support:

- Sidebar navigation
- Dashboard stats
- Offer comparison area
- Recent requests and recent activity
- Search and notifications in top navigation

## Business Model

The platform monetizes through contact unlocking.

### What is free

- Posting a request is free for clients
- Receiving offers is free for clients
- Receiving requests is free for providers
- Sending offers is free for providers

### What is paid

- The client pays only when they choose to unlock a provider’s contact details
- The payment is made through Tiavina
- The fee can be fixed or category-based

This means the platform monetizes qualified connections rather than the service execution itself.

## Technical Stack

This mobile application is planned with the following technologies:

- React Native
- Expo
- TailwindCSS

## Functional Scope Summary

The application includes the following major functional areas:

- User onboarding and role selection
- Client and provider profile management
- Service request creation
- Category and location-based provider matching
- In-app notifications
- Provider offer submission
- Offer comparison interface
- Contact fee payment flow
- Provider contact unlocking
- Ratings and reviews
- Identity verification and moderation support
- Localized mobile-first marketplace experience

## Target Audience

The product is intended for:

- Individuals in Madagascar looking for trusted local services
- Independent providers and artisans looking for qualified leads

The UX should remain lightweight, clear, and easy to use for users with varying levels of digital familiarity.

## Status

This repository contains the mobile application for the Mpanera marketplace concept and documents the main business and product requirements for the platform.
