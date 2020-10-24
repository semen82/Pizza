import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createKey } from '../libs/functions';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import {
  setDataCreator,
  setCategoryCreator,
  addImageCreator,
  clearFormCreator
} from '../redux/adminReducer';

const AdminCreator = React.memo(() => {
  const [imageLoc, setImageLoc] = React.useState(null);
  const { fieldData, image } = useSelector((state) => state.admin.creator);
  const dispatch = useDispatch();
  const outImage = React.useRef();

  if (imageLoc) {
    outImage.current.textContent = '';
    outImage.current.append(imageLoc);
  }

  const inputData = (event) => {
    const categories = fieldData.categories;
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'categories') {
      const checked = event.target.checked;
      if (checked) {
        dispatch(setCategoryCreator([...categories, value]));
      } else {
        const res = categories.filter((item) => item !== value);
        dispatch(setCategoryCreator(res));
      }
      return;
    }

    dispatch(setDataCreator(name, value));
  };

  const addImage = (event) => {
    const file = event.target.files[0];

    dispatch(addImageCreator(file));

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        setImageLoc(img);
      };
    }
  };

  const onSendPizza = (event) => {
    event.preventDefault();
    const { categories, description, price } = fieldData;

    if (!image) {
      alert('Загрузите картинку. Обязательно!');
      return;
    } else if (categories.length < 1) {
      alert('Нужно выбрать хотябы одну категорию');
      return;
    }

    const id = createKey('pizza');
    const name = image.name;
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`pizzas/${id}/${name}`);

    const outputData = {
      id: id,
      name: fieldData.name,
      imageUrl: imageRef.fullPath,
      categories: categories,
      description: description,
      price: price,
      popular: createKey(null, 3)
    };

    imageRef.put(image).then(function (snapshot) {
      const db = firebase.firestore();

      db.collection('pizzas')
        .doc(`${id}`)
        .set(outputData)
        .then(function (docRef) {
          console.log('Document successfully written!');
          dispatch(clearFormCreator());
          setImageLoc(null);
          outImage.current.textContent = '';
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    });
  };

  return (
    <div className="admin-creator">
      <form className="form" id="form-creator" onSubmit={onSendPizza}>
        <section>
          <span className="title-section">Название пиццы</span>
          <input
            type="text"
            name="name"
            value={fieldData.name}
            placeholder="Название"
            onChange={inputData}
            required
          />
        </section>
        <section>
          <span className="title-section">Загрузить картинку</span>
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={addImage}
          />
          <div className="output-image" ref={outImage}></div>
        </section>
        <section>
          <span className="title-section">
            Выберите к каким категориям относится пицца
          </span>
          <div className="checkboxes">
            <div className="block">
              <input
                type="checkbox"
                name="categories"
                value="Мясные"
                checked={fieldData.categories.includes('Мясные')}
                onChange={inputData}
              />
              <label htmlFor="meat">Мясные</label>
            </div>
            <div className="block">
              <input
                type="checkbox"
                name="categories"
                value="Сырные"
                checked={fieldData.categories.includes('Сырные')}
                onChange={inputData}
              />
              <label htmlFor="cheesy">Сырные</label>
            </div>
            <div className="block">
              <input
                type="checkbox"
                name="categories"
                value="Острые"
                checked={fieldData.categories.includes('Острые')}
                onChange={inputData}
              />
              <label htmlFor="hot">Острые</label>
            </div>
            <div className="block">
              <input
                type="checkbox"
                name="categories"
                value="Вегитарианские"
                checked={fieldData.categories.includes('Вегитарианские')}
                onChange={inputData}
              />
              <label htmlFor="vegetarian">Вегитарианские</label>
            </div>
            {/* <div className="block">
              <input
                type="checkbox"
                name="categories"
                value="Гриль"
                checked={fieldData.categories.includes('Гриль')}
                onChange={inputData}
              />
              <label htmlFor="grill">Гриль</label>
            </div> */}
          </div>
        </section>
        <section>
          <span className="title-section">
            Краткое описание:{' ('}
            <span className="normal"> что в ней содержится </span>
            {')'}
          </span>
          <textarea
            name="description"
            placeholder="Описание"
            value={fieldData.description}
            onChange={inputData}
            required
          />
        </section>
        <section>
          <span className="title-section">
            Цена{' ('}
            <span className="normal"> Грн </span>
            {')'}
          </span>
          <input
            type="number"
            name="price"
            value={fieldData.price}
            onChange={inputData}
            required
          />
        </section>
        <button type="submit" className="btn-save">
          Сохранить
        </button>
      </form>
    </div>
  );
});

export default AdminCreator;

// allow read, write: if request.auth != null;
