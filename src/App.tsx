import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PokemonCard from './components/PokemonCard';
import LoadingError from './components/LoadingError';
import { usePokemon } from './hooks/usePokemon';

const App: React.FC = () => {
  const {
    filteredPokemon,
    searchTerm,
    typeFilter,
    loading,
    error,
    types,
    handleSearchChange,
    handleTypeFilterChange,
    clearFilters
  } = usePokemon(150);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        searchTerm={searchTerm}
        typeFilter={typeFilter}
        types={types}
        onSearchChange={handleSearchChange}
        onTypeFilterChange={handleTypeFilterChange}
      />

      <main className="container mx-auto p-4 flex-grow">
        <LoadingError 
          isLoading={loading}
          error={error}
          noResults={!loading && !error && filteredPokemon.length === 0}
          onClearFilters={clearFilters}
        />
        
        {!loading && !error && filteredPokemon.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPokemon.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;