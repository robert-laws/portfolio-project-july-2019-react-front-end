import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBook } from '../actions/bookSelectionActions';

class BookDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.setBook(params.id);
  }

  render() {
    const book = this.props.selectedBook;

    return (
      <div>
        Book Details...
        <h5>{book.title}</h5>
        <p>{book.publication_year}</p>        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook
  }
}

export default connect(mapStateToProps, { setBook })(BookDetails);