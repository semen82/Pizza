const SET_ACTIVE_CATEGIRY = 'SET_ACTIVE_CATEGIRY';

const initialState = {
  activeCategory: 'Все'
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGIRY:
      return {
        ...state
      };

    default:
      return state;
  }
};

export const setActiveCategory = (name) => {
  return { type: SET_ACTIVE_CATEGIRY, name };
};

export default menuReducer;
