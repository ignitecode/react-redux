import { ADD_ITEM, REMOVE_ITEM, UPDATE_FAVORITE_ICON } from '../constants';
const listReducer = (state = { allItems: [] }, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
          ...state,
          allItems: [...state.allItems, action.payload]
      }
    case UPDATE_FAVORITE_ICON:
        const myNewList = state.allItems.map(item => {
          if(item.id === action.payload.id) {
            return {
              ...action.payload, // Favorite: true
            }
          }
          return item;
        })

        return {
          ...state,
          allItems: [...myNewList]
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
