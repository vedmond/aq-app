
import React from 'react'
import style from '../../scss/Curtain.module.scss'

export const Curtain = () => {
  return (
    <div className={`${style.root} ${style.active}`}></div>
  )
}
