# Pokémon Explorer

A TypeScript React application built with Vite that fetches data from the PokeAPI and allows users to search and filter through the first 150 Pokémon.

## Live Demo

[View the live demo here](#) [<!-- Replace with your deployed app URL -->](https://interactive-data-explorer-imhbwrpo9-creatorramas-projects.vercel.app/)

## Features

- Fetches and displays the first 150 Pokémon from the PokeAPI
- Displays each Pokémon in a responsive card layout showing:
  - Name
  - Image (sprite)
  - Type(s)
  - ID number
- Search functionality to filter Pokémon by name in real-time
- Filter dropdown to filter Pokémon by type
- Responsive design that works on both desktop and mobile devices
- Loading and empty states with appropriate UI feedback

## Technologies Used

- React 18 with TypeScript
- Vite for fast builds and development
- Tailwind CSS for styling
- Lucide React for icons
- React Hooks for state management
- Custom hooks for data fetching and filtering
- PokeAPI for Pokémon data

## Project Structure

```
pokémon-explorer/
├── public/               # Static assets
│   └── pokeball.svg      # Favicon
├── src/
│   ├── components/       # React components
│   │   ├── Footer.tsx    # Application footer
│   │   ├── Header.tsx    # App header with search controls
│   │   ├── LoadingError.tsx # Loading, error and empty states
│   │   └── PokemonCard.tsx # Card for displaying Pokémon
│   ├── hooks/            # Custom React hooks
│   │   └── usePokemon.ts # Hook for Pokémon data and filtering
│   ├── types/            # TypeScript interfaces and types
│   │   └── pokemon.ts    # Pokémon-related type definitions
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles with Tailwind imports
│   └── main.tsx          # Application entry point
├── index.html            # HTML entry point