import React, { Component } from 'react'
import Book from './Book';
import { deleteBook } from '../actions/bookSelectionActions';
import { connect } from 'react-redux';

class BooksList extends Component {
  handleClick = (event) => {
    this.props.deleteBook(event.target.value);
  }

  render() {
    const allBooks = this.props.allBooks.map(book => <div key={book.id}><Book id={book.id} title={book.title} pub_year={book.publication_year} /><button value={book.id} onClick={this.handleClick}>delete this book</button></div>)

    return (
      <div>
        {allBooks}
      </div>
    )
  }
}

export default connect(null, { deleteBook })(BooksList);