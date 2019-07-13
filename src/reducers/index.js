import booksReducer from './booksReducer';
import selectedBookReducer from './selectedBookReducer';
import favoriteBooksReducer from './favoriteBooksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
  books: booksReducer,
  selectedBook: selectedBookReducer,
  favoriteBooks: favoriteBooksReducer
})

export default rootReducer;