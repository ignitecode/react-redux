import { ADD_FAVORITE } from '../constants';
const favoriteReducer = (state = { allFavorites: [] }, action) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allFavorites: [...state.allFavorites, { ...action.payload, favorite: true }]
      }
    default:
      return {
        ...state
      }
  }
};

export default favoriteReducer;
