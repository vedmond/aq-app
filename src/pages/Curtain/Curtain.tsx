
import React from 'react'
import style from '../../scss/Curtain.module.scss'

export const Curtain = ({stateCurtain}: any) => {
  return (
    <div  className={`${style.root} ${stateCurtain ? style.active : ''}`}></div>
  )
}
