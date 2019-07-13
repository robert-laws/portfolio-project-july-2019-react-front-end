import React from 'react';

const BookStats = props => {
  return (
    <div>
      Book Stats...

      Number of Books: {props.stats.length}
    </div>
  )
}

export default BookStats