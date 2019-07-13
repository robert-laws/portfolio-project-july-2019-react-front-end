import React from 'react';

const BookStats = props => {
  return (
    <div>
      <h4 className="ui dividing header">Book Statistics</h4>
      <h5>
        Number of Books: {props.stats.length}
      </h5>
    </div>
  )
}

export default BookStats