
import React from 'react'
import style from '../../scss/SettingPage.module.scss'
import { Link } from 'react-router-dom'

export const SettingPage = () => {
  return (
    <>
      {/* <div className={style.wrapper}>
        <div className={style.block}> */}
            <header className={style.header}>
      <div  className={style.icon__arrow}> <Link to="/setting"> </Link> Setting</div>
      <Link to="/"  className={style.icon__cross}> </Link>
      </header>
      <main className={style.main}>
        <div className={style.setting}>
          <div className={style.box__volume}>
            <span>Volume</span>
            <div className={style.switch}>
              <span>On</span>
              <button className={style.toggle}><span className={style.on}></span></button>
            </div>
          </div>
          <div className={style.box__time}>
            <span>Time game</span>
            <div className={style.switch}>
              <span>On</span>
              <button className={style.toggle}><span className={style.on}></span></button>
            </div>
            <div className={style.timer}>
              <button className={`${style.btn_timer} ${style.minus}`}>-</button>
              <p>20</p>
              <button className={`${style.btn_timer} ${style.plus}`}>+</button>
            </div>
          </div>
          <div className={style.box__time}>
            <span>Time to answer</span>
            <div className={style.switch}>
              <span>On</span>
              <button className={style.toggle}><span className={style.on}></span></button>
            </div>
            <div className={style.timer}>
              <button className={`${style.btn_timer} ${style.minus}`}>-</button>
              <p>20</p>
              <button className={`${style.btn_timer} ${style.plus}`}>+</button>
            </div>
          </div>
        </div>
      <div className={style.btn_group}>
        <button className={style.button}>Default</button>
        <button className={`${style.button} ${style.btn_act}`}>Save</button>
      </div>
    </main>
    <footer className={style.footer}>
      <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
      <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
    </footer>    
        {/* </div>
      </div>  */}
    </>    

  )
}
