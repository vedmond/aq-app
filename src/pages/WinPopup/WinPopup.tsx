
import React from 'react'
import style from '../../scss/WinPopup.module.scss'



export const WinPopup = ({stateWinPopUp, countResult, btnNo}: any) => {
  const linkHome = true
  return (
    <>
      <div className={`${style.win} ${stateWinPopUp ? style.active : ''}`}>
        <div className={style.win_popup}>
          <div className={style.pic}></div>
          <p className={style.title}>Congratulations!</p>
          <p className={style.text}>{countResult} / 20</p>
          <div className={style.btn_container}>
            <button onClick={() => btnNo(linkHome)} className={`${style.btn_popup} ${style.btn1}`}>Home</button>
            <button onClick={() => btnNo()} className={`${style.btn_popup} ${style.btn2}`}>Next Quiz</button>
          </div>
        </div>
      </div>
    </>
  )
}
