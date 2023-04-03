import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <Link to="/" style={{textDecoration:"none"}}>
          <div className='header__logo'>
          <StoreOutlinedIcon className='header__logoImage' fontSize='large'/>
          <h1 className='header__logoTitle'>Shoping</h1>
          </div>
        </Link>
    <div className='header__search'>
    <input type="text" className="header__searchInput"/>
    <SearchIcon className='header__searchIcon'/>

    </div>
    <div className='header__nav'>
    <div className='nav__item'>
    <span className='nav__itemLineOne'>Hello</span>
    <span className='nav__itemLineTwo'>Hello</span>

    </div>
    <div className='nav__item'>
    <span className='nav__itemLineOne'>Your</span>
    <span className='nav__itemLineTwo'>Sign In</span>

    </div>
    <Link to="/checkout" state={{textDecoration:"none"}}>
      <div className='nav__itemBasket'>
      <ShoppingCartOutlinedIcon/>
      <span className='nav__itemLineTwo nav__basketCount'>0</span>
      </div>
    </Link>

    </div>
    </div>
  )
}

export default Header