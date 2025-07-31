import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search recipes by title..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '100%' }}
      />
    </div>
  );
};

export default SearchBar;
