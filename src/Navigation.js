import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import KisahNabi from './pages/KisahNabi';
import Hadis from './pages/Hadis';
import DoaHarian from './pages/DoaHarian';
import AlQuran from './pages/AlQuran';

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={DoaHarian} />
          <Route path="/al-quran" component={AlQuran} />
          <Route path="/kisah-nabi" component={KisahNabi} />
          <Route path="/hadis" component={Hadis} />
        </Switch>

        <ul className="text-white fixed bottom-0 bg-blue-800 flex w-full justify-evenly">
          <li className="p-3">
            <Link to="/">Doa</Link>
          </li>
          <li className="p-3">
            <Link to="/al-quran">Al-Qur'an</Link>
          </li>
          <li className="p-3">
            <Link to="/kisah-nabi">Kisah Nabi</Link>
          </li>
          <li className="p-3">
            <Link to="/hadis">Hadis</Link>
          </li>
          <li className="p-3">
            <Link to="/tentang">Tentang</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}
