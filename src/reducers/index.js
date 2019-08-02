import { combineReducers } from 'redux';
import listReducer from './listReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
  items: listReducer,
  favorites: favoriteReducer
});
