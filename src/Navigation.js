import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import KisahNabi from './pages/KisahNabi';
export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kisah-nabi" component={KisahNabi} />

          <Route path="/tentang">
            <Dashboard />
          </Route>
        </Switch>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/kisah-nabi">Al-Qur'an</Link>
          </li>
          <li>
            <Link to="/kisah-nabi">Kisah Nabi</Link>
          </li>
          <li>
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

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
