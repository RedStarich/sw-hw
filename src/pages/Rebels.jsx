import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Rebel = ({ rebel }) => {
  return (
    <div className="element-info">
      <h2>{rebel.name}</h2>
      <p><strong>Birth Year:</strong> {rebel.birth_year}</p>
      <p><strong>Gender:</strong> {rebel.gender}</p>
      <p><strong>Height:</strong> {rebel.height} cm</p>
      <p><strong>Mass:</strong> {rebel.mass} kg</p>
      <p><strong>Hair Color:</strong> {rebel.hair_color}</p>
      <p><strong>Skin Color:</strong> {rebel.skin_color}</p>
    </div>
  );
};

const Rebels = () => {
  const [rebels, setRebels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRebels = async () => {
      try {
        let allRebels = [];
        let url = 'https://swapi.dev/api/people';

        while (url) {
          const response = await axios.get(url);
          allRebels = [...allRebels, ...response.data.results];
          url = response.data.next;
        }

        setRebels(allRebels);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRebels();
  }, []);

  return (
    <div className="element-container">
      <h1>All Star Wars Characters</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="results-container">
        {rebels.map((rebel) => (
          <div className="element-block" key={rebel.name}>
            <Rebel rebel={rebel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rebels