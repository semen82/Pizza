import React from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NoPage from './pages/NoPage';
import { downloadPizzas } from './redux/homeReducer';
import { setPreloader } from './redux/homeReducer';

import firebase from 'firebase/app';
import 'firebase/firestore';

const App = () => {
  const dispatch = useDispatch();

  const switchPreloader = (boole) => {
    dispatch(setPreloader(boole));
  };

  React.useEffect(() => {
    switchPreloader(true);

    const db = firebase.firestore();

    db.collection('pizzas')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          dispatch(downloadPizzas(doc.data()));
          switchPreloader(false);
        });
      });
  });

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
