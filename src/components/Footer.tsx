import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>
        Pokémon Explorer | Data from{' '}
        <a 
          href="https://pokeapi.co/" 
          className="underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          PokéAPI
        </a>
      </p>
    </footer>
  );
};

export default Footer;