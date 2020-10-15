import React from 'react';

function Menu() {
  return (
    <div className="menu-wrap">
      <ul className="categories">
        <li>Все</li>
        <li className="active">Мясные</li>
        <li>Сырные</li>
        <li>Острые</li>
        <li>Вегитарианские</li>
        <li>Гриль</li>
      </ul>
      <div className="sort-wrap">
        <span className="label">Сортировать</span>
        <span className="sort">Популярность</span>
        <ul className="sort-list">
          <li className="active">Популярность</li>
          <li>Цена</li>
          <li>Название</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
