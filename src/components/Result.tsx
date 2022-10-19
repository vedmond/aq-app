
import React from 'react'
import style from '../scss/Result.module.scss'

export const Result = ({countResult}: any) => {
  const styleResult = {
    color: `rgb(19, 187, 19)`,
  }

  return (
    <>
    <span style={styleResult}>{countResult}</span>
    {/* <div className={style.icon}></div> */}
    </>
  )
}
