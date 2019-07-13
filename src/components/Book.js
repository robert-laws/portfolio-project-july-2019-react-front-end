import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/book-cover.png';

const Book = props => {
  return (
    <>
      <div className="image">
        <img src={image} alt={props.title} />
      </div>
      <div className="content">
      <Link className="header" to={`/books/${props.id}`}>{props.title}</Link>
        <div className="meta">
          <span className="date">Author...</span>
        </div>
        <div className="description">
          Description...
        </div>
      </div>
    </>
  )
}

export default Book