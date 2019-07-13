import React, { Component } from 'react'
import Book from './Book';
import { deleteBook } from '../actions/bookSelectionActions';
import { addToFavoriteBooks } from '../actions/bookFavoriteActions';
import { connect } from 'react-redux';

class BooksList extends Component {
  handleDeleteClick = (event) => {
    this.props.deleteBook(event.target.value);
  }

  render() {
    const allBooks = this.props.allBooks.map(book => { 
      return (
        <div style={{margin: 20}} key={book.id}>
          <Book id={book.id} title={book.title} pub_year={book.publication_year} />
          <button value={book.id} onClick={this.handleDeleteClick}>delete this book</button>
          <button value={book.id} onClick={() => this.props.addToFavoriteBooks(book)}>add book to favorites</button>
        </div>
      )
    })

    return (
      <div>
        {allBooks}
      </div>
    )
  }
}

export default connect(null, { deleteBook, addToFavoriteBooks })(BooksList);