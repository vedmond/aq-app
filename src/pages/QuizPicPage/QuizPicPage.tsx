
import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../scss/QuizPicPage.module.scss'
// import { HelpPopup } from '../HelpPopup'
// import { WinPopup } from '../WinPopup'

export const QuizPicPage = () => {
   const barLineWidth = {
    width: '80%',
  }
  const containerStyle = {
    backgroundImage: `url(https://raw.githubusercontent.com/irinainina/image-data/master/full/0full.jpg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  return (
    <>
      {/* <div className={style.wrapper}>
        <div className={style.block}> */}
          <header className={style.header}>
            <Link to="/" className={style.icon__cross}> </Link>
            <div className={style.progress_bar}>
              <div style={barLineWidth} className={style.progress_bar_line}></div>
            </div>
            <div className={style.timer}>01:22</div>
          </header>
            <main className={style.main}>
            <p className={style.title}>Which is Edvard Munch picture?</p>
            <div className={style.btn_box}>
              <button className={`${style.btn} ${style.b0}`} style={containerStyle}></button>
              <button className={`${style.btn} ${style.b1}`} style={containerStyle}></button>
              <button className={`${style.btn} ${style.b2}`} style={containerStyle}></button>
              <button className={`${style.btn} ${style.b3}`} style={containerStyle}></button>
            </div>
          </main>
          <footer className={style.footer}>
            <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
            <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
            <span>2022</span>
          </footer> 
          {/* <WinPopup/> */}
          {/* <HelpPopup/> */}
        {/* </div>
      </div>      */}
    </>
  )
}
