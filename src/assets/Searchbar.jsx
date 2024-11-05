import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full w-full max-w-lg">
      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Que recherchez-vous ?" 
        className="bg-transparent focus:outline-none w-full px-3 py-2 text-gray-600"
      />
      
      {/* Category Button */}
      

      {/* Location Button */}
      <button className="flex items-center gap-1 bg-white text-gray-500 px-4 py-2 rounded-full shadow-md">
        <span>📍</span>
        <span>Tout le Maroc</span>
      </button>

      {/* Search Button */}
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
