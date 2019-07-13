export default function(state = [], action) { 
  switch (action.type) {
    case 'FETCH_FAVORITE_BOOKS':
      return state;
    case 'ADD_FAVORITE_BOOKS':
      let existingFavorites = state.filter(
        book => book.id === parseInt(action.book.id)
      );
      if(existingFavorites.length > 0) {
        return state;
      } else {
        return [...state, action.book];
      }
    case 'REMOVE_FAVORITE_BOOKS':
      return state.filter(book => book.id !== parseInt(action.id));
    default:
      return state;
    }
}