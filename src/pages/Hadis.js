import { useState, useEffect } from 'react';
import { getHadis } from '../data/endpoint';
import Select from 'react-select';
import HADIS from '../data/HADIS.json';

export default function KisahNabi() {
  const [query, setQuery] = useState('muslim');
  const [hadis, setHadis] = useState([]);
  const [noHadis, setNoHadis] = useState(0);

  const option = HADIS.hadis.map((n) => ({ value: n.value, label: n.name }));

  const handleHadisChange = (e) => {
    setQuery(e.value.toLowerCase());
  };

  const handleNoHadisChange = (e) => {
    setNoHadis(e.target.value);
  };

  useEffect(() => {
    try {
      getHadis(query).then((data) => {
        console.log(data);
        setHadis(data);
      });
    } catch (error) {
      console.log(error.response);
    }
  }, [query]);

  return (
    <div className="pb-20">
      <Select
        options={option}
        placeholder="cari hadis..."
        onChange={handleHadisChange}
      />
      {hadis ? (
        <div>
          <div className="flex fixed bottom-20  left-8 p-2">
            <h1 className="mx-2 text-white bg-blue-600"> Berdasarkan nomer</h1>
            <input
              className="bg-blue-100"
              type="number"
              value={noHadis}
              onChange={handleNoHadisChange}
              placeholder="no hadis"
            />
          </div>
          {noHadis !== 0 ? (
            <h1>ya</h1>
          ) : (
            hadis.map((h, i) => (
              <div className="shadow-sm p-4 my-2 flex items-center">
                <div>
                  <h1 className="bg-blue-800 text-white px-2 rounded-3xl mx-2">
                    {h.number}
                  </h1>
                </div>
                <div>
                  <h1>{h.arab}</h1>
                  <p>{h.id}</p>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
