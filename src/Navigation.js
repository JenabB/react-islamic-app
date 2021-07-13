import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import KisahNabi from './pages/KisahNabi';
import Hadis from './pages/Hadis';

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kisah-nabi" component={KisahNabi} />
          <Route path="/hadis" component={Hadis} />
        </Switch>

        <ul className="text-white fixed bottom-0 bg-blue-800 flex w-full justify-evenly">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/kisah-nabi">Al-Qur'an</Link>
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
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
