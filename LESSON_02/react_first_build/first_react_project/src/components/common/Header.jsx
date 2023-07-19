import React from 'react'
import Header from './Fo' 
const Header = () => {
  return (
    <div>
       <h1 className='content'>Welcome To My App</h1>
       <nav className='navBar'>
          <ul className='navList'>
            <li className='navItems'> Home </li>
            <li className='navItems'> Feature </li>
            <li className='navItems'> About </li>
            <li className='navItems'> Contact </li>
          </ul>
       </nav>
    </div> 
  )
}
export default Header