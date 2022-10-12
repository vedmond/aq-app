
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer'
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
            <Footer/>
          </footer>
        </div>
      </div> 
    </>
  )
}
