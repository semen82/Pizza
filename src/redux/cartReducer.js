const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
const SET_COUNT_PLUS = 'SET_COUNT_PLUS';
const SET_COUNT_MINUS = 'SET_COUNT_MINUS';
const DELETE_PIZZA = 'DELETE_PIZZA';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.pizza]
      };

    case SET_COUNT_PLUS:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((el) =>
            el.id === action.id ? { ...el, count: el.count + 1 } : el
          )
        ]
      };

    case SET_COUNT_MINUS:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((el) =>
            el.id === action.id ? { ...el, count: el.count - 1 } : el
          )
        ]
      };

    case DELETE_PIZZA:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((el) => (el.id !== action.id ? el : null))
        ]
      };

    default:
      return state;
  }
};

export const addPizzaToCart = (pizza) => {
  return { type: ADD_PIZZA_TO_CART, pizza };
};

export const setCountPlus = (id) => {
  return { type: SET_COUNT_PLUS, id };
};

export const setCountMinus = (id) => {
  return { type: SET_COUNT_MINUS, id };
};

export const deletePizza = (id) => {
  return { type: DELETE_PIZZA, id };
};

export default cartReducer;
