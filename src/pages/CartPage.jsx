import React from 'react';
import { useSelector } from 'react-redux';
import CartBlock from '../components/CartBlock';
import emptyCart from '../assets/images/empty-cart.png';
import { calculation } from '../libs/functions';

const CartPage = React.memo(() => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="content">
      {cartItems.length > 0 ? (
        <div className="cart-wrap">
          <h2>Корзина</h2>
          {cartItems.map((item) => (
            <CartBlock key={item.id} {...item} />
          ))}
          <div className="price-all-wrap">
            <span className="price-all">
              Оплатить <span>{calculation(cartItems)}</span> Грн
            </span>
          </div>
        </div>
      ) : (
        <div className="cart-wrap-empty">
          <h2>Корзина пуста</h2>
          <div className="cart-content-empty">
            <img src={emptyCart} alt="Корзина пуста" />
          </div>
        </div>
      )}
    </div>
  );
});

export default CartPage;
