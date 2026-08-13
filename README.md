# React Clean Architecture Portfolio

## Overview

This repository contains a multilingual professional portfolio built with React 19 and TypeScript. The application is intentionally small, but it applies production-oriented practices where they add value: feature-based organization, explicit data boundaries, strict typing, accessible interactions, server-state caching, client-state persistence, and behavior-focused tests.

The project is a frontend application. It also documents Full Stack experience through portfolio content; it does not include a Node.js backend in this repository.

## Architecture

The codebase combines Feature-Based Architecture with selected Clean Architecture principles. It does not attempt to reproduce every Clean Architecture layer in a small client application.

The dependency direction is:

```text
app composition -> features/shared UI -> hooks -> services -> domain entities
```

- Domain entities describe external data without depending on React, Axios, or browser APIs.
- Services own HTTP integration details and map responses to domain types.
- Hooks coordinate server state with TanStack Query.
- Features own use-case-specific presentation and behavior.
- Shared components provide reusable UI primitives and cross-feature widgets.
- App-level providers compose routing, themes, queries, internationalization, and user state.

## Project Structure

```text
src/
├── app/                 # Providers, routes, and application-wide Zustand stores
├── domain/              # Framework-independent data entities
├── features/portfolio/  # Portfolio page, components, feature hook, types, and validation
├── services/            # Internal HTTP client and GitHub/OpenWeather integrations
├── shared/components/   # Reusable UI components and layout widgets
├── hooks/               # Cross-feature hooks, such as weather and viewport behavior
├── contexts/            # Context-compatible user-state API
├── reducers/            # Pure user-state transitions
├── theme/               # Color, spacing, typography, breakpoint, and theme tokens
├── assets/locales/      # English, Portuguese, and Spanish translation resources
├── config/              # Typed environment access
├── test/                # Vitest setup, test utilities, and behavior tests
└── utils/               # Internationalization bootstrap
```

## Engineering Principles

- Strict TypeScript configuration and no `any`.
- Dependencies point toward framework-independent types.
- Server state and client state have separate responsibilities.
- Runtime validation protects structured translation and persisted data.
- Components favor semantic HTML, keyboard access, visible focus, and accessible names.
- Abstractions are introduced only when they remove duplication or enforce a real boundary.
- External links use safe new-tab behavior.
- Generative AI tools such as Codex and Claude are treated as engineering assistants for code analysis, refactoring, testing, documentation, and productivity. Technical decisions remain subject to review and automated checks.

## Tech Stack

### Application

- React 19 and React DOM 19
- TypeScript 5.9 in strict mode
- Vite 7
- React Router 7
- Styled Components 6
- Lucide React

### State and data

- TanStack Query 5 for remote/server state
- Zustand 5 for theme and user client state
- Axios for HTTP clients
- i18next and react-i18next for internationalization

### Quality

- Vitest 4
- React Testing Library
- Testing Library DOM assertions
- ESLint 9 with TypeScript and React Hooks rules

## Testing Strategy

Tests prioritize externally observable behavior instead of component internals. The current suite covers:

- portfolio navigation and dialog behavior;
- accessible names, focus restoration, and Escape handling;
- safe social links and repository presentation rules;
- GitHub repository rendering, external-link semantics, and the portfolio exclusion rule;
- user-state transitions, persistence, hydration, and malformed storage data;
- runtime validation of structured translations.

The test environment uses JSDOM. Shared render utilities provide the Styled Components theme required by UI tests.

## State Management

Zustand stores application-level client state:

- `themeStore` persists the validated light/dark preference;
- `userStore` owns user data, validates persisted JSON, and delegates transitions to the pure reducer.

`UserProvider` exposes the existing context/dispatch contract while using Zustand internally. This keeps current consumers stable. In a larger product, the team should reassess whether both access styles are still necessary and converge on one public state API when migration constraints no longer apply.

## Data Fetching

TanStack Query owns request lifecycle, caching, retries, loading state, and error state for GitHub and OpenWeather data.

HTTP concerns are isolated under `src/services`:

- `externalApi` is used for third-party services so internal authentication behavior cannot leak into external requests;
- the internal API client uses `VITE_BASE_URL` and contains the current token interceptor contract;
- integration services depend on domain response types, while components depend on query hooks rather than Axios.

## Internationalization

The interface supports English, Portuguese, and Spanish. i18next detects the browser language and persists the selection in local storage, with English as the fallback.

Lists and structured records returned by `returnObjects` are validated at runtime before rendering. This prevents malformed translation resources from being trusted through TypeScript casts.

## Getting Started

### Requirements

- Node.js `^20.19.0` or `>=22.12.0` (required by Vite 7)
- npm

### Installation

```bash
git clone https://github.com/Baldacine/react-clean-frontend.git
cd react-clean-frontend
npm install
cp .env.example .env
npm run dev
```

Vite prints the local development URL after startup.

## Environment Variables

| Variable | Purpose | Used by |
| --- | --- | --- |
| `VITE_GITHUB_API_URL` | Overrides the default `https://api.github.com` URL | Recent repository activity |
| `VITE_WEATHER_API_URL` | Overrides the default OpenWeather API URL | Footer weather widget |
| `VITE_WEATHER_API_KEY` | OpenWeather API key; the widget stays hidden when omitted | Footer weather widget |
| `VITE_BASE_URL` | Internal API base URL; empty by default | Internal HTTP client |

Only the weather key is needed for the optional widget. The portfolio remains usable if it is omitted or if the weather request fails. Do not commit real API keys.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Runs the TypeScript project build and creates the production bundle |
| `npm run preview` | Serves the production bundle locally |
| `npm run lint` | Runs ESLint across the repository |
| `npm test` | Starts Vitest in watch mode |
| `npm test -- --run` | Runs the test suite once |
| `npm run test:ui` | Starts the Vitest UI |

## Quality Checks

Run the same local checks expected before review:

```bash
npm run lint
npm test -- --run
npm run build
```

The build command includes TypeScript validation before bundling.

## Architectural Decisions

1. **Feature ownership over global grouping**: portfolio-only hooks and validation live with the portfolio feature. Cross-feature concerns remain in shared or root-level folders.
2. **Domain kept framework-independent**: GitHub and weather entities are plain TypeScript contracts; concrete Axios integrations live in services.
3. **React Query for remote state**: API data is not copied into Zustand or component effects.
4. **Zustand for client state**: theme and user state need synchronous access and persistence, not server caching.
5. **Runtime checks at trust boundaries**: local storage and structured locale data are treated as unknown until validated.
6. **Accessible primitives**: interactive cards are buttons or links, and the dialog manages initial focus, focus trapping, Escape, and focus restoration.

## Trade-offs

- The portfolio content is stored in locale JSON files. This keeps deployment simple, but a content-heavy product would benefit from a typed CMS or build-time schema validation.
- The application currently loads one primary route. Route-level code splitting would add indirection without a meaningful initial-load benefit at this size.
- `UserProvider` and Zustand coexist to preserve the current context contract. This is deliberate compatibility, not a recommendation to expose two state APIs indefinitely.
- Third-party API models are represented by the fields the UI consumes. A backend-for-frontend would provide stronger rate-limit control and response ownership if the integration scope grew.
- The internal API client retains its existing token contract even though the current portfolio route does not use authenticated backend requests.

## Future Improvements

- Add automated accessibility checks to CI while retaining manual keyboard and screen-reader review.
- Add a CI workflow that runs lint, tests, and build for pull requests.
- Introduce route-level lazy loading if the application gains additional substantial routes.
- Add integration-level tests for service error mapping if API behavior becomes more complex.
- Evaluate removing the context compatibility layer after all consumers can use one state API.
