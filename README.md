Welcome to the Home assignment selector! This project demonstrates a dynamic form integrated with reusable dropdown components, 
supporting both Single-Select Mode and Multi-Select Mode. It is built with React, TypeScript, and Vite, offering flexibility, scalability, and clean architecture.

The project includes:

Dynamic Form:

A simple, state-managed form using useState.
Fields include Name, Email, and a Dynamic Dropdown Component.
AdPopover Component:

A reusable dropdown supporting Single-Select Mode and Multi-Select Mode.
Mode switching is now managed via a feature flag.

How to Get Started
-First, clone the repository to your local machine: git clone https://github.com/LaptiiDina/home-assignment-selector.git
-Navigate to the project directory: client
-Install Dependencies: npm install

Start the Development Server
-npm run dev
Open in Browser
Once the server is running, open the application in your browser:
👉 http://localhost:5173/


Project Structure
src/
├── components/        # Reusable UI components
│   ├── AdPopover.tsx
│   ├── MultiModePopover.tsx
│   ├── SingleModePopover.tsx
│
├── config/            # Feature flags and configuration
│   ├── MultiModeFlag.ts
│
├── hooks/             # Custom hooks for state management
│   ├── useFormState.ts
│   ├── useSelectedValues.ts
│
├── tests/             # Unit and integration tests
│   ├── AdPopover.test.tsx
│   ├── MultiModePopover.test.tsx
│   ├── SingleModePopover.test.tsx
│   ├── setup.ts
│
├── App.tsx            # Root application file with the main form
├── index.tsx          # Entry point for React
├── types.ts           # TypeScript types and interfaces
├── vite-env.d.ts      # Vite environment variables
│
├── index.html         # Main HTML template
└── package.json       # Project dependencies and scripts

Form Overview
The form is built using useState, and it includes the following fields:

Name: Required text input.
Email: Required email input with validation.
AdPopover Dropdown: Integrated dropdown for selecting options.
Form submission will log the collected data in the console.
Form Validation Rules:
Name: Required
Email: Required and must match a valid email format

Switch Between MultiMode and SingleMode in Dropdown
Mode Switching via Feature Flag
Open src/config/MultiModeFlag.ts.
Locate the isMulti flag.
isMulti: true → Enables MultiMode
isMulti: false → Enables SingleMode

Testing
The project uses Vitest for unit and integration tests.

To run tests: npm run test

