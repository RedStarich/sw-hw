import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planet = ({ planet }) => {
  return (
    <div className="element-info">
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Diameter:</strong> {planet.diameter} km</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
      <p><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
    </div>
  );
};

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        let allPlanets = [];
        let url = 'https://swapi.dev/api/planets/';
        
        while (url) {
          const response = await axios.get(url);
          allPlanets = [...allPlanets, ...response.data.results];
          url = response.data.next;
        }
        
        setPlanets(allPlanets);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div className="element-container">
      <h1>All Star Wars Planets</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="results-container">
        {planets.map((planet) => (
          <div className="element-block" key={planet.name}>
            <Planet planet={planet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
