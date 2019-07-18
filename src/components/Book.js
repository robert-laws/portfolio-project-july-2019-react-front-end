import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/book-cover.png';

const Book = ({book}) => {
  return (
    <>
      <div className="image">
        <img src={image} alt={book.title} />
      </div>
      <div className="content">
      <Link className="header" to={`/books/${book.id}`}>{book.title}</Link>
        <div className="meta">
          <span className="date">{book.author}</span>
        </div>
        <div className="description">
          {book.description}
        </div>
        <div style={{marginTop: 15}}>
          <hr style={{opacity: '0.15'}} />
        </div>
        <div style={{marginTop: 15}}>
          Publication year: {book.pub_year}
        </div>
        <div style={{marginTop: 15}}>
          Total pages: {book.total_pages}
        </div>
        <div style={{marginTop: 15}}>
          Rating: {book.rating} <i className="star yellow icon"></i>
        </div>
      </div>
    </>
  )
}

export default Book