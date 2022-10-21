
import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../scss/NotFound.module.scss'
import { BsEmojiFrown } from "react-icons/bs";

export const NotFound = () => {
  return (
    <div>
      <div className={style.title}>
        <h2>We are sorry</h2>
        <h2> Not found <span><BsEmojiFrown fontSize={20}/></span> !</h2>
        
        <Link to='/'>
         <div className={style.btn}><p>Home</p></div>
        </Link>
      </div>
    </div>
  )
}
