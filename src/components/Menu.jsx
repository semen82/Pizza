import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory, setActiveSortItem } from '../redux/menuReducer';

const Menu = () => {
  const { categories, sortItems, activeCategory, activeSortItem } = useSelector(
    (state) => state.menu
  );

  const [sortPopupVisible, setSortPopupVisible] = React.useState(false);
  const dispatch = useDispatch();

  const onClickCategory = (name) => dispatch(setActiveCategory(name));

  const onSortPopup = () => {
    setSortPopupVisible(!sortPopupVisible);
  };

  const onActiveSortItem = (item) => {
    dispatch(setActiveSortItem(item));
    setSortPopupVisible(false);
  };

  return (
    <div className="menu-wrap">
      <ul className="categories">
        {categories.map((name, index) => {
          return (
            <li
              key={`${name}_${index}`}
              className={name === activeCategory ? 'active' : ''}
              onClick={() => onClickCategory(name)}>
              {name}
            </li>
          );
        })}
      </ul>
      <div className="sort-wrap">
        <span className={sortPopupVisible ? 'label visible' : 'label'}>
          Сортировать
        </span>
        <span className="sort" onClick={onSortPopup}>
          {activeSortItem}
        </span>
        {sortPopupVisible && (
          <ul className="sort-list">
            {sortItems.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={activeSortItem === item ? 'active' : null}
                onClick={() => onActiveSortItem(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
