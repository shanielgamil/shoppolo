import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'



export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-log">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-manu">
          <li>Shop</li>
          <li>Women</li>
          <li>Men</li>
          <li>Other</li>
        </ul>
        <div className="nav-logo-cart">
          <button>Login</button>
          <img src={cart_icon} alt='' />
          </div> 
    
        
        
        </div>
  )
}
export default Navbar