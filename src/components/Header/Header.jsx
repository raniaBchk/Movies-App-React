import React, {useState} from 'react'
import style from './header.module.css'
import { Link ,NavLink} from 'react-router-dom';

const Header = () => {

 


  return (
  <div className={style.header}>
    
    <div className={style.container}>
    <div className={style.innerContent}>
      <div className={style.brand}>
        <Link to={'/'}>Movies</Link>
      </div>
      <ul className={style.navLinks}>
          <li>
          <NavLink to={'/watchlist'}>Watch List</NavLink>
            
          </li>
          <li>
          <NavLink to={'/watched'}>Watched</NavLink>
            <a href='#'></a>
          </li>
          <li>
          <NavLink className={style.btn} to={'/'}>Add</NavLink>
            <a href='#' ></a>
          </li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Header