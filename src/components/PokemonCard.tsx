import React from 'react';
import { Pokemon, PokemonTypeColor } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const typeColors: PokemonTypeColor = {
    normal: 'bg-gray-300',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-300',
    psychic: 'bg-pink-500',
    bug: 'bg-green-600',
    rock: 'bg-yellow-700',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-300',
  };

  const formatPokemonId = (id: number): string => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gray-100 p-4 flex justify-center">
        <img 
          src={pokemon.sprites.front_default || '/api/placeholder/96/96'} 
          alt={pokemon.name}
          className="h-32 w-32 object-contain"
        />
      </div>
      
      <div className="px-4 py-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-gray-800">
            {capitalizeFirstLetter(pokemon.name)}
          </h3>
          <span className="text-gray-500 font-medium">
            {formatPokemonId(pokemon.id)}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map(typeInfo => (
            <span 
              key={typeInfo.type.name}
              className={`${typeColors[typeInfo.type.name] || 'bg-gray-500'} text-white text-xs px-2 py-1 rounded-full`}
            >
              {capitalizeFirstLetter(typeInfo.type.name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;