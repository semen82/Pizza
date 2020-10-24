const DOWNLOAD_PIZZAS = 'DOWNLOAD_PIZZAS';
const CLEAR_PIZZAS = 'CLEAR_PIZZAS';
const SET_PRELOADER = 'SET_PRELOADER';

const initialState = {
  pizzas: [],
  isPreloader: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PIZZAS:
      return {
        ...state,
        pizzas: [...state.pizzas, action.pizza]
      };

    case CLEAR_PIZZAS:
      return {
        ...state,
        pizzas: []
      };

    case SET_PRELOADER:
      return {
        ...state,
        isPreloader: action.boole
      };

    default:
      return state;
  }
};

export const downloadPizzasHome = (pizza) => {
  return { type: DOWNLOAD_PIZZAS, pizza };
};

export const clearPizzasHome = () => {
  return { type: CLEAR_PIZZAS };
};

export const setPreloader = (boole) => {
  return { type: SET_PRELOADER, boole };
};

export default homeReducer;
