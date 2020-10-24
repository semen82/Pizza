import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPizzaToCart } from '../redux/cartReducer';

const PizzaBlock = React.memo(
  ({ name, imageUrl, description, price, popular, id, imagePathUrl }) => {
    const sizes = ['Маленькая', 'Средняя', 'Большая'];
    const types = ['Традиционное', 'Тонкое'];

    const [activeSize, setActiveSize] = React.useState(sizes[0]);
    const [activeType, setActiveType] = React.useState(types[0]);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    let pricePizza = price;

    if (activeSize === sizes[1]) {
      pricePizza *= 1.5;
    }
    if (activeSize === sizes[2]) {
      pricePizza *= 2;
    }
    if (activeType === types[1]) {
      pricePizza = (pricePizza / 100) * 85;
    }
    pricePizza = Math.round(pricePizza);

    const onActiveSize = (item) => {
      setActiveSize(item);
      if (item === sizes[0]) {
        setActiveType(types[0]);
      }
    };

    const sendToCart = () => {
      const pizza = {
        id,
        imageUrl,
        name,
        count: 1,
        typePizza: activeType,
        size: activeSize,
        price: pricePizza
      };
      dispatch(addPizzaToCart(pizza));
    };

    const isAdded = () => {
      let res = false;
      cartItems.forEach((item) => {
        if (item.id === id) res = true;
      });
      return res;
    };

    return (
      <div className="pizza-card">
        <img src={imagePathUrl} alt="Картинка пиццы" className="picture" />
        <div className="content-card">
          <h3 className="title-card">{name}</h3>
          <span className="description-card">{description}</span>
          <ul className={isAdded() ? 'sizes-list disabled' : 'sizes-list'}>
            {sizes.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={item === activeSize ? 'active' : null}
                onClick={() => onActiveSize(item)}>
                {item}
              </li>
            ))}
          </ul>
          <ul className={isAdded() ? 'types-list disabled' : 'types-list'}>
            {types.map((item, index) =>
              activeSize === sizes[0] && item === types[1] ? (
                <li key={`${item}_${index}`} className="disabled">
                  {item}
                </li>
              ) : (
                <li
                  key={`${item}_${index}`}
                  onClick={() => setActiveType(item)}
                  className={item === activeType ? 'active' : null}>
                  {item}
                </li>
              )
            )}
          </ul>
          <footer>
            <div className="top">
              <span className="popular">
                <span className="material-icons icon">stars</span>
                {popular}
              </span>
              <span className="price">
                {pricePizza} <span>Грн</span>
              </span>
            </div>
            <span
              className={isAdded() ? 'add-to-cart disabled' : 'add-to-cart'}
              onClick={sendToCart}>
              Добавить
              <span className="material-icons icon">shopping_cart</span>
              {isAdded() ? (
                <span className="material-icons check">check</span>
              ) : null}
            </span>
          </footer>
        </div>
      </div>
    );
  }
);

export default PizzaBlock;
