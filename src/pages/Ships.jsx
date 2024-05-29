import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ship = ({ ship }) => {
  return (
    <div className="ship-info">
      <h2>{ship.name}</h2>
      <p><strong>Model:</strong> {ship.model}</p>
      <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
      <p><strong>Cost:</strong> {ship.cost_in_credits} credits</p>
      <p><strong>Length:</strong> {ship.length} meters</p>
      <p><strong>Max Speed:</strong> {ship.max_atmosphering_speed}</p>
      <p><strong>Crew:</strong> {ship.crew}</p>
      <p><strong>Passengers:</strong> {ship.passengers}</p>
    </div>
  );
};

const Ships = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        let allShips = [];
        let url = 'https://swapi.dev/api/starships';

        while (url) {
          const response = await axios.get(url);
          allShips = [...allShips, ...response.data.results];
          url = response.data.next;
        }

        setShips(allShips);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchShips();
  }, []);

  return (
    <div className="element-container">
      <h1>All Star Wars StarShips</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="results-container">
        {ships.map((ship) => (
          <div className="element-block" key={ship.name}>
            <Ship ship={ship} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ships;
