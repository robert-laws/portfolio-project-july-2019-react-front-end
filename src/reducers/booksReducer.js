export default function(state = [], action) { 
  switch (action.type) {
    case 'LOADING_BOOKS':
      return state;
    case 'FETCH_BOOKS':
      return action.books
    case 'CREATE_BOOKS':
      return state.concat(action.book);
    default:
      return state;
    }
}