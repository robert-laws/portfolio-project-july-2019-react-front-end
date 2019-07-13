import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui container grid" style={{marginTop: 10}}>
      <div className="ui row">
        <NavLink to="/" exact>Home</NavLink> | 
        <NavLink to="/about">About</NavLink> | 
        <NavLink to="/books">Books</NavLink> |
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </div>
  )
}

export default Header;