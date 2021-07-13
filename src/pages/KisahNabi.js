import { useState, useEffect } from 'react';
import { getKisahNabi } from '../data/endpoint';
import Select from 'react-select';
import NABI from '../data/NABI.json';

export default function KisahNabi() {
  const [query, setQuery] = useState('idris');
  const [kisah, setKisah] = useState([]);

  const option = NABI.nabi.map((n) => ({ value: n.value, label: n.name }));

  const handleNabiChange = (e) => {
    setQuery(e.value.toLowerCase());
  };

  useEffect(() => {
    try {
      getKisahNabi(query)
        .then((data) => {
          setKisah(data.result.nabi);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error.response);
    }
  }, [query]);

  return (
    <div className="pb-20">
      <Select
        options={option}
        placeholder="cari nabi..."
        onChange={handleNabiChange}
      />
      {kisah ? (
        <div>
          <img
            src={kisah.image}
            alt={kisah.nama}
            className="w-full object-cover"
            style={{ height: '350px' }}
          />
          <h1 className="text-center mt-8 text-xl">{kisah.nabi}</h1>
          <div className="p-4">
            <table className="text-center mx-auto">
              <tr>
                <th>Lahir</th>
                <th>Umur</th>
                <th>Tempat</th>
              </tr>
              <tr>
                <td>{kisah.lahir}</td>
                <td>{kisah.umur}</td>
                <td>{kisah.tempat}</td>
              </tr>
            </table>

            <p className="mt-4 text-justify">{kisah.kisah}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
