import React, { Component } from 'react';
import BookList from '../components/BooksList';
import BookForm from '../components/BookForm';
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
          <div className="column eight wide">
            <BookForm />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { fetchBooks })(BooksContainer);