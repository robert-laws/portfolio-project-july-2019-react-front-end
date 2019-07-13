export function fetchBooks() {
  return dispatch => {
    dispatch({ type: 'LOADING_BOOKS' });
    return fetch('http://localhost:3001/api/books')
      .then(response => response.json())
      .then(books => dispatch({ type: 'FETCH_BOOKS', books }))
  }
}

export function createBook(bookForm) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ book: bookForm })
  }

  return dispatch => {
    return fetch('http://localhost:3001/api/books', request)
      .then(response => response.json())
      .then(book => {
        dispatch({
          type: 'CREATE_BOOKS', book
        })
      })
  }
}