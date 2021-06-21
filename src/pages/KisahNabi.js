import { useState, useEffect } from 'react';
import { getKisahNabi } from '../data/endpoint';
import Select from 'react-select';
import DATA from '../data/DATA.json';

export default function KisahNabi() {
  const [query, setQuery] = useState('idris');
  const [kisah, setKisah] = useState([]);

  const option = DATA.daftar.map((n) => ({ value: n.value, label: n.name }));
  console.log(DATA.daftar);
  const handleNabiChange = (e) => {
    setQuery(e.value.toLowerCase());
  };
  useEffect(() => {
    try {
      getKisahNabi(query)
        .then((data) => {
          console.log(data.nabi);
          setKisah(data.nabi);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error.response);
    }
  }, [query]);

  return (
    <div className="App">
      <Select options={option} onChange={handleNabiChange} />
      {kisah && (
        <div>
          <img src={kisah.image} alt={kisah.nama} className="w-full" />
          <h1 className="text-center">{kisah.nama}</h1>
          <h2>{kisah.lahir}</h2>
          <h3>{kisah.umur}</h3>
          <h2>{kisah.tempat}</h2>
          <p>{kisah.kisah}</p>
        </div>
      )}
    </div>
  );
}
