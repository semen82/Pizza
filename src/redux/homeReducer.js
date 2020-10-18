const DOWNLOAD_PIZZAS = 'DOWNLOAD_PIZZAS';

const initialState = {
  pizzas: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PIZZAS:
      return {
        ...state,
        pizzas: action.pizzas
      };

    default:
      return state;
  }
};

export const downloadPizzas = (pizzas) => {
  return { type: DOWNLOAD_PIZZAS, pizzas };
};

export default homeReducer;
