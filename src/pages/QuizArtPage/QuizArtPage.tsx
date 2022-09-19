
import React from 'react'
import style from '../../scss/QuizArtPage.module.scss'
import { Link } from 'react-router-dom';

// import { QuitPopup } from '../QuitPopup'
// import { GameOverPopup } from '../GameOverPopup'
// import { GrandPopup } from '../GrandPopup'
// import { HelpPopup } from '../HelpPopup'
// import { WinPopup } from '../WinPopup'





export const QuizArtPage = () => {
  const barLineWidth = {
    width: '80%',
  }
  const containerStyle = {
    backgroundImage: `url("https://raw.githubusercontent.com/irinainina/image-data/master/full/0full.jpg")`,
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
            <p className={style.title}>Who is the author of this picture?</p>
            <div className={style.container} style={containerStyle}>
              <div className={style.point_box}>
                <div className={`${style.point} ${style.p0} ${style.active}`}></div>
                <div className={`${style.point} ${style.p1} ${style.active}`}></div>
                <div className={`${style.point} ${style.p2} ${style.active}`}></div>
                <div className={`${style.point} ${style.p3} ${style.active}`}></div>
                <div className={`${style.point} ${style.p4} ${style.active}`}></div>
                <div className={`${style.point} ${style.p5}`}></div>
                <div className={`${style.point} ${style.p6}`}></div>
                <div className={`${style.point} ${style.p7}`}></div>
                <div className={`${style.point} ${style.p8}`}></div>
                <div className={`${style.point} ${style.p9}`}></div>
              </div>
            </div>
            <div className={style.btn_box}>
              <button className={`${style.btn} ${style.b0}`}>Leonardo da Vinci</button>
              <button className={`${style.btn} ${style.b1}`}>Peter Paul Rubens</button>
              <button className={`${style.btn} ${style.b2}`}>Rembrandt </button>
              <button className={`${style.btn} ${style.b3}`}>Hieronymus Bosch</button>
            </div>
          </main>
          <footer className={style.footer}>
            <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
            <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
            <span>2022</span>
          </footer>
          {/* <QuitPopup/> */}
          {/* <GameOverPopup/> */}
          {/* <GrandPopup/> */}
          {/* <WinPopup/> */}
          {/* <HelpPopup/> */}
          
         {/* </div>
      </div>  */}
    </>
  )
}
