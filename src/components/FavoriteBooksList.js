import React, { Component } from 'react';
import Book from './Book';
import { connect } from 'react-redux';
import { removeFromFavoriteBooks } from '../actions/bookFavoriteActions';

class FavoriteBooksList extends Component {
  showFavorites(favs) {
    if(favs.length > 0) {
      return favs;
    } else {
      return <h3>No favorites Yet</h3>;
    }
  }

  render() {
    const favBooks = this.props.favoriteBooksList.map(book => { 
      return (
        <div style={{margin: 20}} key={book.id}>
          <Book id={book.id} title={book.title} />
          <button value={book.id} onClick={() => this.props.removeFromFavoriteBooks(book.id)}>remove book from favorites</button>
        </div>
      )
    })

    return (
      <div>
        {this.showFavorites(favBooks)}
      </div>
    )
  }
}

export default connect(null, { removeFromFavoriteBooks })(FavoriteBooksList);