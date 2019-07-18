import React, { Component } from 'react';
import Book from './Book';
import { connect } from 'react-redux';
import { removeFromFavoriteBooks } from '../actions/bookFavoriteActions';

class FavoriteBooksList extends Component {
  showFavorites(favorites) {
    return favorites.length > 0 ? favorites : <h3>No Books Yet</h3>;
  }

  render() {
    const favBooks = this.props.favoriteBooksList.map(book => { 
      return (
        <div key={book.id} style={{marginBottom: 20}}>
          <div className="ui card">
            <Book book={book} />
            <div className="extra content">
              <button className="ui primary button" value={book.id} onClick={() => this.props.removeFromFavoriteBooks(book.id)}>remove book from favorites</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h4 className="ui dividing header">Reading List</h4>
        <div>
          {this.showFavorites(favBooks)}
        </div>
      </div>
    )
  }
}

export default connect(null, { removeFromFavoriteBooks })(FavoriteBooksList);