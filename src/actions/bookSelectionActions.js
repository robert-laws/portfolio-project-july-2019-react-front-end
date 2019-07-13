export const setBook = id => {
  let request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`http://localhost:3001/api/books/${id}`, request)
    .then(response => {
      return response.json()
    }).then(book => {
      return dispatch({
        type: 'BOOK_SELECTED',
        payload: book
      })
    })
  }
}

export const deleteBook = id => {
  let request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`http://localhost:3001/api/books/${id}`, request)
      .then(() => dispatch({ type: 'DELETE_BOOK', id }))
      .then(() => dispatch({ type: 'REMOVE_FAVORITE_BOOKS', id}));
    }
};