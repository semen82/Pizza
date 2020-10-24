import React from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NoPage from './pages/NoPage';
import Admin from './pages/Admin';

import { startLoadingPizzas } from './libs/functions';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    startLoadingPizzas(dispatch);
  });

  return (
    <div className="wrapper">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/cart" component={CartPage} />

        <Route exact path="/admin" component={Admin} />

        <Route path="/" component={NoPage} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
