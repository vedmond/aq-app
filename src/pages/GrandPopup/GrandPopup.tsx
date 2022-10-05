
import React from 'react'
import style from '../../scss/GrandPopup.module.scss'

export const GrandPopup = ({stateGrandPopUp, btnNo}: any) => {
  
  return (
    <div>
    <div className={`${style.win} ${stateGrandPopUp ? style.active : ''}`}>
      <div className={style.win_popup}>
        <div className={style.pic} ></div>
        <p className={style.title}>Grand </p>
        <p className={style.title}>result</p>
        <p className={style.text}>Congratulations!</p>
        <div className={style.btn_container}>
          <button onClick={() => btnNo()} className={`${style.btn_popup} ${style.btn1}`}>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}
