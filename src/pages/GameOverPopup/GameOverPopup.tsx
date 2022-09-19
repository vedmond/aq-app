
import React from 'react'
import style from '../../scss/GameOverPopup.module.scss'


export const GameOverPopup = () => {
  return (
    <div>
      <div className={`${style.game_over} ${style.active}`}>
        <div className={style.game_over_popup}>
          <div className={style.pic}></div>
          <p className={style.title}>Game over</p>
          <p className={style.text}>Play again?</p>
          <div className={style.btn_container}>
            <button className={`${style.btn_popup} ${style.btn1}`}>No</button>
            <button className={`${style.btn_popup} ${style.btn2}`}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
