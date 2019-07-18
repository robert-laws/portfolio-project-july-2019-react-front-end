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
        <div key={book.id}>
          <div className="ui card" style={{maxWidth: 180, minHeight: 700, float: 'left', margin: '0 10px 25px'}}>
            <Book book={book} />
            <div className="extra content">
              <button className="ui primary button" value={book.id} onClick={() => this.props.addToFavoriteBooks(book)} style={{marginBottom: 10}}>add to your reading list</button>
              <button className="tiny ui red button" value={book.id} onClick={this.handleDeleteClick}>delete this book</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h4 className="ui dividing header">Books Available</h4>
        {allBooks}
      </div>
    )
  }
}

export default connect(null, { deleteBook, addToFavoriteBooks })(BooksList);