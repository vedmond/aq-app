
import React from 'react'
import style from '../../scss/WinPopup.module.scss'



export const WinPopup = () => {
  return (
    <>
      {/* <div className={style.wrapper}>
        <div className={style.block}>     */}
          <div className={`${style.win} ${style.active}`}>
            <div className={style.win_popup}>
              <div className={style.pic}></div>
              <p className={style.title}>Congratulations!</p>
              <p className={style.text}>8 / 10</p>
              <div className={style.btn_container}>
                <button className={`${style.btn_popup} ${style.btn1}`}>Home</button>
                <button className={`${style.btn_popup} ${style.btn2}`}>Next Quiz</button>
              </div>
            </div>
          </div>
        {/* </div>
      </div>           */}
    </>
  )
}
