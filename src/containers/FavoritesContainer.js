import React, { Component } from 'react';
import FavoriteBooksList from '../components/FavoriteBooksList';
import BookStats from '../components/BookStats';
import { connect } from 'react-redux';

class FavoritesContainer extends Component {
  render() {
    return (
      <div className="ui container grid" style={{marginTop: 10}}>
        <div className="ui row">
          <div className="ui column sixteen wide">
            <h1>Your Reading List</h1>
          </div>
        </div>
        <div className="ui row">
          <div className="ui column eight wide">
            <FavoriteBooksList favoriteBooksList={this.props.favoriteBooks} />
          </div>
          <div className="ui column eight wide">
            <BookStats stats={this.props.favoriteBooks} />
          </div>
        </div>
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