
import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../scss/StartPage.module.scss'




export const StartPage = () => {
  
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.block}>
          <header className={style.header}>
            <Link to="/setting" className={style.icon__setting} ></Link>
          </header>
          <main className={style.main}>
          <div className={style.logo__box}>
              <h1>Art Quiz</h1>
              <div className={`${style.ellipse} ${style.ellipse__right}`}></div>
              <div className={`${style.ellipse} ${style.ellipse__left}`}></div>
            </div>
            <div className={style.box__btn}>
              <Link to="/chose/art" >
                <div className={style.btn}>
                  <div className={style.text}>Artist quiz</div>
                </div>
              </Link>
              <Link to="/chose/pic">
                <div className={style.btn}>
                  <div className={style.text}>Pictures quiz</div>
                </div>
              </Link>
            </div>
          </main>
          <footer className={style.footer}>
            <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
            <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span> 
          </footer>
        </div>
      </div> 
    </>
  )
}
