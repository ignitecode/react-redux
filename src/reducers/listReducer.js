import { ADD_ITEM, REMOVE_ITEM } from '../constants';
const listReducer = (state = { allItems: [] }, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
          ...state,
          allItems: [...state.allItems, action.payload]
      }
    case REMOVE_ITEM:
     // action.payload => abc123
      return {
        ...state,
        allItems: state.allItems.filter(item => item.id !== action.payload)
      }
    default:
      return {
        ...state
      }
  }
};

export default listReducer;
