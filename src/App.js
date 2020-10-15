import React from 'react';
import { Route, Switch } from 'react-router';

import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NoPage from './pages/NoPage';

// transfer of layout to react application

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/cart" component={CartPage} />

        <Route path="/" component={NoPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
