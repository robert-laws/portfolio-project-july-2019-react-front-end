import React, { Component } from 'react';
import FavoriteBooksList from '../components/FavoriteBooksList';
import BookStats from '../components/BookStats';
import { connect } from 'react-redux';

class FavoritesContainer extends Component {
  render() {
    return (
      <div>
        <FavoriteBooksList favoriteBooksList={this.props.favoriteBooks} />
        <hr />
        <BookStats stats={this.props.favoriteBooks} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favoriteBooks: state.favoriteBooks
  }
}

export default connect(mapStateToProps)(FavoritesContainer);