# React Clean Architecture Portfolio

This project demonstrates a scalable and professional front-end architecture using **React**, **TypeScript**, and **Vite**. It is focused on **Clean Code** principles, separation of concerns, and high performance.

## Tech Stack

- **React 18** & **TypeScript**
- **Vite** (Next-generation frontend tooling)
- **Styled-components** (Design System with Light/Dark theme support)
- **TanStack Query (v5)** (Async state management and smart caching)
- **Lucide React** (Consistent and lightweight icon set)
- **i18next** (Internationalization: Support for PT, EN, and ES)
- **Axios** (HTTP client with isolated instances for internal and external APIs)

## Architecture & Principles

The project is structured following **Clean Architecture** and **Feature-Based Architecture** principles:

- **Separation of Concerns:** Clear boundaries between UI (Components), Business Logic (Hooks), and Data Communication (Services).
- **Feature-based Organization:** Modules are grouped by functionality, making the codebase easier to scale and maintain.
- **Design System:** Centralized management of colors, typography, and spacing via Styled-components.
- **API Isolation:** Uses specific instances for third-party APIs (like OpenWeather) to ensure internal authentication tokens do not leak to external services.

## Getting Started

Follow the steps below to run the application in your local environment:

### 1. Clone the repository

git clone [https://github.com/Baldacine/react-clean-frontend.git][def]
cd your-repository

### 2. Install dependencies

npm install

### 3. Environment Variables

The project uses the OpenWeather API for the dynamic weather widget. Create a .env file in the root directory:

VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_API_URL=[https://api.openweathermap.org/data/2.5](https://api.openweathermap.org/data/2.5)
VITE_BASE_URL=<http://localhost:3000>

### 4. Environment Variables

npm run dev

[def]: https://github.com/Baldacine/react-clean-frontend.git