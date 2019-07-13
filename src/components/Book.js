import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/book-cover.png';

const Book = ({id, title, author, description, pub_year, total_pages, rating}) => {
  return (
    <>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
      <Link className="header" to={`/books/${id}`}>{title}</Link>
        <div className="meta">
          <span className="date">{author}</span>
        </div>
        <div className="description">
          {description}
        </div>
        <div style={{marginTop: 15}}>
          <hr style={{opacity: '0.15'}} />
        </div>
        <div style={{marginTop: 15}}>
          Publication year: {pub_year}
        </div>
        <div style={{marginTop: 15}}>
          Total pages: {total_pages}
        </div>
        <div style={{marginTop: 15}}>
          Rating: {rating} <i className="star yellow icon"></i>
        </div>
      </div>
    </>
  )
}

export default Book