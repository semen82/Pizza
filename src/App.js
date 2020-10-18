import React from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NoPage from './pages/NoPage';
import { downloadPizzas } from './redux/homeReducer';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((resp) => {
      const pizzas = resp.data.pizzas;
      dispatch(downloadPizzas(pizzas));
    });
  }, []);

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
};

export default App;
