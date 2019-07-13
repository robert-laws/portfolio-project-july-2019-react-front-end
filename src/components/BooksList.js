import React, { Component } from 'react'
import { fetchBooks } from '../actions/bookActions';
import { connect } from 'react-redux';

class BooksList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const allBooks = this.props.books.map(book => <p key={book.id}>{book.title} - {book.publication_year}</p>)

    return (
      <div>
        {allBooks}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { fetchBooks })(BooksList);