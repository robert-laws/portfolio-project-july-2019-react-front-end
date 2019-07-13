import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui container grid" style={{marginTop: 10}}>
      <div className="ui row">
        <div className="column sixteen wide">
          <div className="ui inverted menu">
            <NavLink className="item" to="/" exact>Home</NavLink> | 
            <NavLink className="item" to="/about">About</NavLink> | 
            <NavLink className="item" to="/books">Books</NavLink> |
            <NavLink className="item" to="/favorites">Favorites</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;