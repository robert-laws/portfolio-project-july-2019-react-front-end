import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBook } from '../actions/bookSelectionActions';
import image from '../Images/book-cover.png';

class BookDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.setBook(params.id);
  }

  render() {
    const book = this.props.selectedBook;

    return (
      <>
        <div className="ui container grid" style={{marginTop: 10}}>
          <div className="ui row">
            <div className="column sixteen wide">
              <h1>Book Details</h1>
            </div>
          </div>
        </div>
        <div className="ui container grid" style={{marginTop: 10}}>
          <div className="ui row">
            <div className="column six wide">
              <div className="ui segment">
                <h3>{book.title}</h3>
                <div className="ui divider"></div>
                <p><strong>Author</strong>: {book.author}</p>  
                <p><strong>Description</strong>: {book.description}</p>  
                <p><strong>Publication Year</strong>: {book.publication_year}</p>  
                <p><strong>Total Pages</strong>: {book.total_pages}</p>  
                <p><strong>Rating</strong>: {book.rating} <i className="star yellow icon"></i></p>  
              </div>
            </div>
            <div className="column ten wide">
              <div className="image">
                <img className="ui medium rounded image" src={image} alt={book.title} />
              </div>     
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook
  }
}

export default connect(mapStateToProps, { setBook })(BookDetails);