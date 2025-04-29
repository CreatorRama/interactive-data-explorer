
export interface PokemonListResponse {
    results: {
      name: string;
      url: string;
    }[];
  }
  
  
  export interface PokemonType {
    type: {
      name: string;
    };
  }
  
 
  export interface PokemonSprites {
    front_default: string | null;
  }
  
  
  export interface Pokemon {
    id: number;
    name: string;
    sprites: PokemonSprites;
    types: PokemonType[];
  }
  
  export type PokemonTypeColor = {
    [key: string]: string;
  };