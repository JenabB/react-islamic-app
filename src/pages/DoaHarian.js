import { useState, useEffect } from 'react';
import { getDoaHarian } from '../data/endpoint';

const DoaHarian = () => {
  const [doa, setDoa] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getDoaHarian().then((data) => {
      setDoa(data.result.data);
    });
  }, []);

  const items = doa
    // eslint-disable-next-line array-callback-return
    .filter((data) => {
      if (query == null) return data;
      else if (data.title.toLowerCase().includes(query)) {
        return data;
      }
    })
    .map((data) => {
      return (
        <div className="shadow my-8 p-4">
          <h1>{data.title}</h1>
          <h2>{data.arabic}</h2>
          <h3>{data.latin}</h3>
          <p>{data.translation}</p>
        </div>
      );
    });

  return (
    <div>
      <div className="bg-blue-700 font-bold text-center p-3 text-white mb-6">
        <h1>Doa Harian</h1>
      </div>
      <div className="p-4">
        <div className="text-center">
          <input
            className="text-center bg-gray-200 rounded-lg"
            type="text"
            placeholder="cari doa"
            value={query}
            onChange={handleChange}
          />
        </div>
        {items}
      </div>
    </div>
  );
};

export default DoaHarian;
