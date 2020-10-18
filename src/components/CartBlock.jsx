import React from 'react';
import { useDispatch } from 'react-redux';
import { setCountPlus, setCountMinus, deletePizza } from '../redux/cartReducer';

const CartBlock = React.memo(
  ({ id, imageUrl, name, price, count, size, typePizza }) => {
    const dispach = useDispatch();

    const onCountPlus = () => {
      dispach(setCountPlus(id));
    };

    const onCountMinus = () => {
      if (count > 1) {
        dispach(setCountMinus(id));
      }
    };

    const onDeletePizza = () => {
      dispach(deletePizza(id));
    };

    return (
      <div className="cart-item-block">
        <img src={imageUrl} alt="" className="picture" />
        <div className="info">
          <span className="material-icons delete" onClick={onDeletePizza}>
            delete_forever
          </span>
          <h3 className="title-card">{name}</h3>
          <span className="props">
            <span className="type">
              тесто - <span>{typePizza}</span>
            </span>
            <span className="size">
              размер - <span>{size}</span>
            </span>
          </span>
          <span className="counter">
            <span className="material-icons minus" onClick={onCountMinus}>
              remove_circle_outline
            </span>
            <input
              type="text"
              className="count-pizzas"
              value={count}
              disabled
            />
            <span className="material-icons plus" onClick={onCountPlus}>
              control_point
            </span>
          </span>
          <span className="price-one-card">{price * count} Грн</span>
        </div>
      </div>
    );
  }
);

export default CartBlock;
