const SET_DATA_CREATOR = 'SET_DATA_CREATOR';
const SET_CATEGORY_CREATOR = 'SET_CATEGORY_CREATOR';
const ADD_IMAGE_CREATOR = 'ADD_IMAGE_CREATOR';
const CLEAR_FORM_CREATOR = 'CLEAR_FORM_CREATOR';

const initialState = {
  // Стейт для вкладки "Создать товар"
  creator: {
    fieldData: {
      name: '',
      categories: [],
      description: '',
      price: 0
    },
    image: null
  },

  // Стейт для вкладки "Смотреть товары"
  viewer: {
    pizzas: []
  }
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_CREATOR:
      return {
        ...state,
        creator: {
          ...state.creator,
          fieldData: { ...state.creator.fieldData, [action.name]: action.value }
        }
      };

    case SET_CATEGORY_CREATOR:
      return {
        ...state,
        creator: {
          ...state.creator,
          fieldData: {
            ...state.creator.fieldData,
            categories: action.categories
          }
        }
      };

    case ADD_IMAGE_CREATOR:
      return {
        ...state,
        creator: {
          ...state.creator,
          image: action.image
        }
      };

    case CLEAR_FORM_CREATOR:
      return {
        ...state,
        creator: {
          fieldData: {
            name: '',
            categories: [],
            description: '',
            price: 0
          },
          image: null
        }
      };

    default:
      return state;
  }
};

export const setDataCreator = (name, value) => {
  return { type: SET_DATA_CREATOR, name, value };
};

export const setCategoryCreator = (categories) => {
  return { type: SET_CATEGORY_CREATOR, categories };
};

export const addImageCreator = (image) => {
  return { type: ADD_IMAGE_CREATOR, image };
};

export const clearFormCreator = () => {
  return { type: CLEAR_FORM_CREATOR };
};

export default adminReducer;
