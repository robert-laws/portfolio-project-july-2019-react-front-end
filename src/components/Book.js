import React from 'react';
import { Link } from 'react-router-dom';

const Book = props => {
  return (
    <div>
      <p>
        <Link to={`/books/${props.id}`}>{props.title}</Link>
      </p> 
    </div>
  )
}

export default Book