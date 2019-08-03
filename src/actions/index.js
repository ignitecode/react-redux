import { ADD_ITEM, REMOVE_ITEM, ADD_FAVORITE, UPDATE_FAVORITE_ICON } from '../constants';

// Payload: { value: 'Hi', favorite: false, id: 'abc123' }
export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  }
}

export const updateFavoriteIcon = (payload) => {
  return {
    type: UPDATE_FAVORITE_ICON,
    payload,
  }
}

// 'abc123' the items id
export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload,
  }
}

export const addFavorite = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload,
  }
}
