import React from 'react';
import imgPizza from '../assets/images/pizza-papperoni.png';

function CartPage() {
  return (
    <div className="content">
      <div className="cart-wrap">
        <h2>Корзина</h2>
        <div className="cart-card">
          <img src={imgPizza} alt="" className="picture" />
          <div className="info">
            <span className="material-icons delete">delete_forever</span>
            <h3 className="title-card">Пицца Папперони с паприкой</h3>
            <span className="props">
              <span className="type">Тонкое тесто</span>
              <span className="size">Средняя</span>
            </span>
            <span className="counter">
              <span className="material-icons minus">
                remove_circle_outline
              </span>
              <input type="text" className="count-pizzas" value="1" disabled />
              <span className="material-icons plus">control_point</span>
            </span>
            <span className="price-one-card">48 Грн</span>
          </div>
        </div>
        <div className="cart-card">
          <img src={imgPizza} alt="" className="picture" />
          <div className="info">
            <span className="material-icons delete">delete_forever</span>
            <h3 className="title-card">Пицца Папперони с паприкой</h3>
            <span className="props">
              <span className="type">Тонкое тесто</span>
              <span className="size">Средняя</span>
            </span>
            <span className="counter">
              <span className="material-icons minus">
                remove_circle_outline
              </span>
              <input type="text" className="count-pizzas" value="1" disabled />
              <span className="material-icons plus">control_point</span>
            </span>
            <span className="price-one-card">48 Грн</span>
          </div>
        </div>
        <div className="cart-card">
          <img src={imgPizza} alt="" className="picture" />
          <div className="info">
            <span className="material-icons delete">delete_forever</span>
            <h3 className="title-card">Пицца Папперони с паприкой</h3>
            <span className="props">
              <span className="type">Тонкое тесто</span>
              <span className="size">Средняя</span>
            </span>
            <span className="counter">
              <span className="material-icons minus">
                remove_circle_outline
              </span>
              <input type="text" className="count-pizzas" value="1" disabled />
              <span className="material-icons plus">control_point</span>
            </span>
            <span className="price-one-card">48 Грн</span>
          </div>
        </div>
        <div className="cart-card">
          <img src={imgPizza} alt="" className="picture" />
          <div className="info">
            <span className="material-icons delete">delete_forever</span>
            <h3 className="title-card">Пицца Папперони с паприкой</h3>
            <span className="props">
              <span className="type">Тонкое тесто</span>
              <span className="size">Средняя</span>
            </span>
            <span className="counter">
              <span className="material-icons minus">
                remove_circle_outline
              </span>
              <input type="text" className="count-pizzas" value="1" disabled />
              <span className="material-icons plus">control_point</span>
            </span>
            <span className="price-one-card">48 Грн</span>
          </div>
        </div>
        <div className="cart-card">
          <img src={imgPizza} alt="" className="picture" />
          <div className="info">
            <span className="material-icons delete">delete_forever</span>
            <h3 className="title-card">Пицца Папперони с паприкой</h3>
            <span className="props">
              <span className="type">Тонкое тесто</span>
              <span className="size">Средняя</span>
            </span>
            <span className="counter">
              <span className="material-icons minus">
                remove_circle_outline
              </span>
              <input type="text" className="count-pizzas" value="1" disabled />
              <span className="material-icons plus">control_point</span>
            </span>
            <span className="price-one-card">48 Грн</span>
          </div>
        </div>
        <div className="price-all-wrap">
          <span className="price-all">
            Оплатить <span>246</span> Грн
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
