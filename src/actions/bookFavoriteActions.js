export function addToFavoriteBooks(book) {
  return {
    type: 'ADD_FAVORITE_BOOKS',
    book
  };
}

export function removeFromFavoriteBooks(id) {
  return {
    type: 'REMOVE_FAVORITE_BOOKS',
    id
  }
}