import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import logo from '../assets/images/pizza-icon.png';
import { calculation } from '../libs/functions';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="header">
      <Route exact path="/">
        <NavLink to="/admin" className="go-to-admin">
          admin
        </NavLink>
      </Route>
      <NavLink to="/" className="name-site">
        <img src={logo} alt="Логотип сайта" className="logo" />
        <div>
          <h2>tasty pizza</h2>
          <span className="description">Самая вкусная пицца на свете</span>
        </div>
      </NavLink>
      <Route exact path="/">
        <NavLink to="cart" className="right">
          <span className="summ">{calculation(cartItems)} Грн</span>
          <div className="cart-icon">
            <span className="material-icons icon"> shopping_cart </span>
            <span className="count-pizzas">{cartItems.length}</span>
          </div>
        </NavLink>
      </Route>
    </div>
  );
};

export default Header;
