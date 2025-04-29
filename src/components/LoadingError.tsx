import React from 'react';

interface LoadingProps {
  isLoading: boolean;
  error: string | null;
  noResults: boolean;
  onClearFilters: () => void;
}

const LoadingError: React.FC<LoadingProps> = ({ 
  isLoading, 
  error, 
  noResults, 
  onClearFilters 
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md my-4">
        <p>Error: {error}</p>
        <p>Please try refreshing the page or try again later.</p>
      </div>
    );
  }

  if (noResults) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600 text-lg">No Pokémon found matching your search criteria.</p>
        <button 
          onClick={onClearFilters}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return null;
};

export default LoadingError;