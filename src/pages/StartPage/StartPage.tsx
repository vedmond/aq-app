
import React from 'react'
import style from '../../scss/StartPage.module.scss'
console.log(style);


export const StartPage = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.block}>
          <header className={style.header}>
            <a href="htpps://google.com"  className={style.icon__setting}  > </a>
          </header>
          <main className={style.main}>
          <div className={style.logo__box}>
              <h1>Art Quiz</h1>
              <div className={`${style.ellipse} ${style.ellipse__right}`}></div>
              <div className={`${style.ellipse} ${style.ellipse__left}`}></div>
            </div>
            <div className={style.box__btn}>
              <button className={style.btn}>Artist quiz</button>
              <button className={style.btn}>Pictures quiz</button>
            </div>
          </main>
          <footer className={style.footer}>
            <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
            <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span> 
          </footer>
        </div>
      </div> 
    </div>
  )
}
