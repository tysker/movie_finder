import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import logo from './logo.svg';
import './style/App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
