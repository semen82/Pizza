import React from 'react';

import imageDefault from '../assets/images/pizza-slice-default.png';
import { startLoadingPizzas } from '../libs/functions';
import { useDispatch } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const AdminViewerBlock = (props) => {
  const {
    name,
    categories,
    description,
    price,
    imageUrl,
    imagePathUrl,
    id
  } = props;

  const dispatch = useDispatch();

  const imageRef = firebase.storage().ref().child(imageUrl);
  const db = firebase.firestore();

  const deletedPizza = () => {
    // Удалить картинку
    imageRef
      .delete()
      .then(() => {
        console.log('Картинка успешно удалена');
      })
      .catch((error) => {
        console.error('Произошла ошибка при удалении картинки');
      });
    // Удалить данные пиццы с базы данных
    db.collection('pizzas')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Документ успешно удален!');
      })
      .catch((error) => {
        console.error('Ошибка при удалении документа: ', error);
      });

    startLoadingPizzas(dispatch);
  };

  return (
    <div className="block-viewer">
      <img src={imagePathUrl || imageDefault} alt="" className="picture" />
      <div className="info">
        <div className="btn-delete" onClick={deletedPizza}>
          Удалить товар
        </div>
        <h3 className="title-pizza">{name}</h3>
        <div className="categories">
          <span className="name">Категории: </span>
          {categories.map((item, index) => (
            <span key={index} className="value">
              {item}
            </span>
          ))}
        </div>
        <div className="description">
          <span className="name">Описание: </span>
          <span className="value">{description}</span>
        </div>
        <div className="price">
          <span className="name">Цена: </span>
          <span className="value">{price} Грн</span>
        </div>
      </div>
    </div>
  );
};

export default AdminViewerBlock;
