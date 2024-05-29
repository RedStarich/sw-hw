import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async () => {
    setLoading(true);
    setError(null);

    try {
      const endpoints = ['people', 'planets', 'starships', 'vehicles', 'species', 'films'];
      const promises = endpoints.map(endpoint => axios.get(`https://swapi.dev/api/${endpoint}/?search=${query}`));
      
      const responses = await Promise.all(promises);
      const searchResults = responses.flatMap(response => response.data.results);

      setResults(searchResults);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className='element-container'>
      <h1>Search</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter search query" 
      />
      <button onClick={search}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
      <div className='results-container'>
        {results.map((result, index) => (
          <div className='element-block' key={index}>
            {Object.entries(result).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;