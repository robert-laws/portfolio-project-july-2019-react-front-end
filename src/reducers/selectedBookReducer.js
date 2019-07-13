export default function(selectedBook = [], action) { 
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return selectedBook;
    }
}