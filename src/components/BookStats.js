import React from 'react';

const BookStats = props => {
  const totalBooks = parseInt(props.stats.length);

  const totalPages = props.stats.reduce(function(sum, book) {
    return sum + parseInt(book.total_pages);
  }, 0);

  const averageRating = props.stats.reduce(function(sum, book) {
    return sum + parseInt(book.rating);
  }, 0);


  return (
    <div>
      <h4 className="ui dividing header">Book Statistics</h4>
      <h5>
        Number of Books: {totalBooks}
      </h5>
      <h5>
        Total Pages for All Books: {totalPages}
      </h5>
      <h5>
        Average Rating for All Books: { totalBooks > 0 ? (averageRating / totalBooks).toFixed(2) : '0'}
      </h5>
    </div>
  )
}

export default BookStats