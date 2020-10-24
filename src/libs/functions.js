import {
  setPreloader,
  downloadPizzasHome,
  clearPizzasHome
} from '../redux/homeReducer';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

export const startLoadingPizzas = (dispatch) => {
  // включаем значек предзагрузки
  dispatch(setPreloader(true));

  dispatch(clearPizzasHome());

  const db = firebase.firestore();

  // извлекаем объекты пицц с базы данных
  db.collection('pizzas')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const newData = { ...doc.data() };

        // создаём ссылку на картинку в хранилище и добавляем в объект под именем imagePathUrl
        const storageRef = firebase.storage().ref();
        var starsRef = storageRef.child(newData.imageUrl);
        starsRef.getDownloadURL().then((url) => {
          newData.imagePathUrl = url;
          // сохраняем в стейт обьект пиццы
          dispatch(downloadPizzasHome(newData));
        });

        // отключаем значек предзагрузки
        dispatch(setPreloader(false));
      });
    });
};

export const sortPizzas = (pizzas, point) => {
  if (point === 'Популярность') {
    return pizzas.sort((a, b) => (a.popular < b.popular ? 1 : -1));
  } else if (point === 'Цена') {
    return pizzas.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (point === 'Название') {
    return pizzas.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else {
    return pizzas;
  }
};

export const filterPizzas = (pizzas, point) => {
  if (point === 'Все') return pizzas;

  return pizzas.filter((item) => {
    return item.categories.includes(point);
  });
};

export const calculation = (cartItems) => {
  let summ = 0;
  for (let key in cartItems) {
    summ += cartItems[key].price * cartItems[key].count;
  }
  return summ;
};

export const createKey = (prefix, amount = 8) => {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const len = chars.length;
  let codeArr = [];

  for (let i = 0; i < amount; i++) {
    let index = Math.round(Math.random() * (len - 1));
    codeArr.push(chars[index]);
  }

  let result = prefix ? `${prefix}-${codeArr.join('')}` : codeArr.join('');

  return result;
};
