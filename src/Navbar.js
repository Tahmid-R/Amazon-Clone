import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from './DataLayer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { auth } from './firebase';


function Navbar() {

  const[{basket, user}] = useDataLayerValue();

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
  
  
  const login = () => {
    if(user){
      auth.signOut();
    }
  }
  
  return (
    <nav className="navbar">
        
        {/*Logo on left*/}
        <Link to="/">
        <img className="navbar__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
        </Link>
        
        {/*Search bar in middle*/}
        <div className="navbar__search">
          <input type="text" className="navbar__searchInput"/>
          <SearchIcon className="navbar__searchIcon"/>
        </div>
       
        
        {/*3 links - Sign In, Orders, Prime*/}
        <div className="navbar__nav">
        {/*if user is not logged in, then direct to log in page*/}

        <Link to={!user && "/login"} className="navbar__links">
          <div onClick={login} className="navbar__options">
            <span className="navbar__optionsLineOne">Hello {truncate(user?.email,15)}</span>
            <span className="navbar__optionsLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/" className="navbar__links">
          <div className="navbar__options">
            <span className="navbar__optionsLineOne">Returns </span>
            <span className="navbar__optionsLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="navbar__links">
          <div className="navbar__options">
            <span className="navbar__optionsLineOne">Your </span>
            <span className="navbar__optionsLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="navbar__links">
          <div className="navbar__optionsBasket">
            <ShoppingBasketIcon className="navbar__basketIcon"/>
            <span className="navbar__optionsLineTwo  navbar__basketNumber">{basket?.length}</span>
          </div>
        </Link>

        </div>
       
        {/*Basket Icon with number*/}
        
        
        
    </nav>
  )
}

export default Navbar