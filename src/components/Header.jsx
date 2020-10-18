import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/pizza-icon.png';
import { calculation } from '../libs/functions';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="header">
      <NavLink to="/" className="name-site">
        <img src={logo} alt="Логотип сайта" className="logo" />
        <div>
          <h2>tasty pizza</h2>
          <span className="description">Самая вкусная пицца на свете</span>
        </div>
      </NavLink>
      <NavLink to="cart" className="right">
        <span className="summ">{calculation(cartItems)} Грн</span>
        <div className="cart-icon">
          <span className="material-icons icon"> shopping_cart </span>
          <span className="count-pizzas">{cartItems.length}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
