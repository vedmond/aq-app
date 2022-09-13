
import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../scss/NotFound.module.scss'

export const NotFound = () => {
  return (
    <div>
      <div className={style.title}>
        <div>Page not found !</div>
        <Link to='/'>
         <div className={style.btn}><p>Home</p></div>
        </Link>
      </div>
    </div>
  )
}
