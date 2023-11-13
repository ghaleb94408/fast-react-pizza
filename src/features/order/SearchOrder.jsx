import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`./order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm duration-300
         placeholder:text-stone-400 sm:w-64 sm:focus:w-72 
          sm:focus:outline-0 sm:focus:ring sm:focus:ring-yellow-500  sm:focus:ring-opacity-50"
      />
    </form>
  );
}
