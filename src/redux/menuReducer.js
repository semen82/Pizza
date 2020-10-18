const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGIRY';
const SET_ACTIVE_SORT_ITEM = 'SET_ACTIVE_SORT_ITEM';

const initialState = {
  categories: ['Все', 'Мясные', 'Сырные', 'Острые', 'Вегитарианские', 'Гриль'],
  sortItems: ['Популярность', 'Цена', 'Название'],
  activeCategory: 'Все',
  activeSortItem: 'Популярность'
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.name
      };

    case SET_ACTIVE_SORT_ITEM:
      return {
        ...state,
        activeSortItem: action.name
      };

    default:
      return state;
  }
};

export const setActiveCategory = (name) => {
  return { type: SET_ACTIVE_CATEGORY, name };
};

export const setActiveSortItem = (name) => {
  return { type: SET_ACTIVE_SORT_ITEM, name };
};

export default menuReducer;
