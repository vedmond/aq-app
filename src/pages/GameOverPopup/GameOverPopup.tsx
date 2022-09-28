
import React from 'react'
import style from '../../scss/GameOverPopup.module.scss'



export const GameOverPopup = ({stateGameOver, btnNo, btnYes}: any) => {

  return (
    <div>
      <div className={`${style.game_over} ${stateGameOver ? style.active : ''}`}>
        <div className={style.game_over_popup}>
          <div className={style.pic}></div>
          <p className={style.title}>Game over</p>
          <p className={style.text}>Play again?</p>
          <div className={style.btn_container}>
            <button onClick={() => btnNo()} className={`${style.btn_popup} ${style.btn1}`}>No</button>
            <button onClick={() => btnYes()} className={`${style.btn_popup} ${style.btn2}`}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
