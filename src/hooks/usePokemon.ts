import { useState, useEffect, useCallback } from 'react';
import { Pokemon, PokemonListResponse } from '../types';

export const usePokemon = (limit: number = 150) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([]);

  
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon');
        }
        
        const data: PokemonListResponse = await response.json();
        
        
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            if (!detailResponse.ok) {
              throw new Error(`Failed to fetch details for ${pokemon.name}`);
            }
            return await detailResponse.json() as Pokemon;
          })
        );
        
       
        const allTypes = new Set<string>();
        pokemonDetails.forEach(pokemon => {
          pokemon.types.forEach(typeInfo => {
            allTypes.add(typeInfo.type.name);
          });
        });
        
        setTypes(Array.from(allTypes).sort());
        setPokemon(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [limit]);

  
  useEffect(() => {
    const filtered = pokemon.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === '' || p.types.some(t => t.type.name === typeFilter);
      return matchesSearch && matchesType;
    });
    
    setFilteredPokemon(filtered);
  }, [searchTerm, typeFilter, pokemon]);

  
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  
  const handleTypeFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value);
  }, []);

 
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setTypeFilter('');
  }, []);

  return {
    pokemon,
    filteredPokemon,
    searchTerm,
    typeFilter,
    loading,
    error,
    types,
    handleSearchChange,
    handleTypeFilterChange,
    clearFilters
  };
};