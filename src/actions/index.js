import { ADD_ITEM, REMOVE_ITEM } from '../constants';

// Payload: { value: 'Hi', favorite: false, id: 'abc123' }
export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
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
