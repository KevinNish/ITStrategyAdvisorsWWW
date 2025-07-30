# IT Strategy Advisors - Vendor-Agnostic Fractional CIO Services

## Overview

IT Strategy Advisors is a modern web application providing vendor-agnostic fractional CIO services for Canadian small and medium businesses. The application is built as a full-stack solution with a React frontend and Express.js backend, featuring a consultation request system and informational marketing website with comprehensive Canadian compliance expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile drawer
- **Pages**: Home, Services, Verticals, About, Contact
- **UI Components**: Complete shadcn/ui component library
- **Form System**: Contact form with validation and submission

### Backend Services
- **API Routes**: RESTful endpoints for consultation requests
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: User and consultation request models
- **Development Server**: Vite integration for hot module replacement

### Database Schema
- **consultation_requests**: Stores client consultation requests with contact information
- **users**: Basic user authentication schema (prepared for future use)

## Data Flow

1. **User Interaction**: Users browse the marketing website and fill out consultation forms
2. **Form Submission**: Contact forms are validated client-side with Zod schemas
3. **API Processing**: Express backend validates and stores consultation requests
4. **Database Storage**: PostgreSQL stores all persistent data via Drizzle ORM
5. **Response Handling**: TanStack Query manages API responses and error states

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI primitives via shadcn/ui
- **Fonts**: Google Fonts (Inter font family)
- **Development Tools**: Replit-specific plugins for development environment

### Development Environment
- **Replit Integration**: Custom vite plugins for Replit development
- **Hot Reload**: Vite development server with Express integration
- **Error Handling**: Runtime error overlay for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Production Configuration
- **Static Serving**: Express serves built React app in production
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Session Storage**: PostgreSQL-backed sessions for scalability

### Development vs Production
- **Development**: Vite dev server with HMR, in-memory storage fallback
- **Production**: Bundled Express server, PostgreSQL database, static file serving

The application is designed for easy deployment on platforms like Replit, with automatic database provisioning and straightforward environment configuration.

## Recent Changes

### January 2025 - Canadian Localization & Navigation Updates
- Updated all content to emphasize Canadian market focus
- Replaced HIPAA references with PHIPA (Personal Health Information Protection Act) for healthcare
- Added PIPEDA (Personal Information Protection and Electronic Documents Act) compliance throughout
- Updated financial services to reference OSFI guidelines and Canadian banking regulations
- Created individual industry subpages (Professional Services, Healthcare, Financial Services, Manufacturing, Non-Profit)
- Removed retail industry vertical
- Added new FAQ section specifically addressing Canadian privacy and compliance requirements
- Enhanced all marketing copy to emphasize Canadian regulatory expertise
- **Navigation Enhancement**: Converted Industries from standalone page to dropdown menu with direct links to industry subpages
- Updated mobile navigation to include industries section with organized industry links
- Removed standalone industries overview page - users now access specific industry pages directly
- **Homepage Refresh**: Updated hero section and value proposition with stronger vendor-neutral messaging emphasizing "No Sales Agenda" positioning
- Enhanced value proposition section with comprehensive list of fractional CIO services and IT provider advocacy messaging
- **Navigation UX**: Home tab now hidden when on home page, but appears on all other pages for easy navigation back to home