import React, { useMemo, useState, useEffect } from 'react';
import Continent from './components/Continent/Continent';
import SearchBar from './components/SearchBar/SearchBar';
import SearchContext from '../../contexts/SearchContext';

const HomePage = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await fetch('https://covid-193.p.rapidapi.com/statistics', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': '703f1d299amsh57340e340d0bb7fp14836fjsn0413752f70b0',
        },
      });
      const data = await response.json();
      setStatistics(data.response);
    };
    fetchStatistics();
  }, []);

  const continents = useMemo(() => {
    if (!statistics || statistics.length === 0) return {};

    const map = {

    };

    let stats;
    for (let i = 0; i < statistics.length; i += 1) {
      stats = statistics[i];

      if (Object.prototype.hasOwnProperty.call(map, stats.continent)) {
        map[stats.continent].push(stats);
      } else {
        map[stats.continent] = [stats];
      }
    }
    return map;
  }, [statistics]);

  return (
    <div>
      <SearchBar />
      <div>
        {
          continents && Object.keys(continents)
            .map((continent) => (
              <Continent
                key={continent}
                continent={continent}
                countries={continents[continent]}
              />
            ))
        }
      </div>
    </div>
  );
};

export default HomePage;
