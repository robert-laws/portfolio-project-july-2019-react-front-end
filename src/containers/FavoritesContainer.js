import React, { Component } from 'react';
import FavoriteBooksList from '../components/FavoriteBooksList';
import { connect } from 'react-redux';

class FavoritesContainer extends Component {
  render() {
    return (
      <div>
        <FavoriteBooksList favoriteBooksList={this.props.favoriteBooks} />
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