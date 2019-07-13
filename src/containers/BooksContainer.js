import React, { Component } from 'react';
import BookList from '../components/BooksList';
import BookForm from '../components/BookForm';
import FavoriteBooksList from '../components/FavoriteBooksList';
import { fetchBooks } from '../actions/bookActions';
import { connect } from 'react-redux';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div className="ui container grid" style={{marginTop: 10}}>
        <div className="ui row">
          <div className="column eight wide">
            <BookList allBooks={this.props.books} />
          </div>
          <div className="column four wide">
            <BookForm />
          </div>
          <div className="column four wide">
            <FavoriteBooksList favoriteBooksList={this.props.favoriteBooks} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    favoriteBooks: state.favoriteBooks
  }
}

export default connect(mapStateToProps, { fetchBooks })(BooksContainer);