import booksReducer from './booksReducer';
import selectedBookReducer from './selectedBookReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
  books: booksReducer ,
  selectedBook: selectedBookReducer
})

export default rootReducer;