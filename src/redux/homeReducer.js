const DOWNLOAD_PIZZAS = 'DOWNLOAD_PIZZAS';
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
        pizzas: [...state.pizzas, action.pizzas]
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

export const downloadPizzas = (pizzas) => {
  return { type: DOWNLOAD_PIZZAS, pizzas };
};

export const setPreloader = (boole) => {
  return { type: SET_PRELOADER, boole };
};

export default homeReducer;
