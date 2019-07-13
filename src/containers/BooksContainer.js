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
      <>
        <div className="ui container grid" style={{marginTop: 10}}>
          <div className="ui row">
            <div className="ui column sixteen wide">
              <h1>Books</h1>
            </div>
          </div>
        </div>
        <div className="ui container grid" style={{marginTop: 10}}>
          <div className="ui row">
            <div className="ui column nine wide">
              <BookList allBooks={this.props.books.reverse()} />
            </div>
            <div className="ui column seven wide">
              <BookForm />
            <div style={{margin: '50px 0'}}></div>
              <FavoriteBooksList favoriteBooksList={this.props.favoriteBooks} />
            </div>
          </div>
        </div>
      </>
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