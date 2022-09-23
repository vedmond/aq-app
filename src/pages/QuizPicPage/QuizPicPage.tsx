
import React from 'react'

import style from '../../scss/QuizPicPage.module.scss'
import { Curtain } from '../Curtain'
import { QuitPopup } from '../QuitPopup'
// import { GameOverPopup } from '../GameOverPopup'
// import { GrandPopup } from '../GrandPopup'
// import { HelpPopup } from '../HelpPopup'
// import { WinPopup } from '../WinPopup'

export const QuizPicPage = () => {
   const [stateQuit, setStateQuit] = React.useState(false)
   let stateCurtain = stateQuit;

   const barLineWidth = {
    width: '80%',
  }
  const containerStyle = {
    backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/2560px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  return (
    <>
      {/* <div className={style.wrapper}>
        <div className={style.block}> */}
          <header className={style.header}>
            <button onClick={() => setStateQuit(!stateQuit)} className={style.icon__cross}> </button>
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
          <Curtain stateCurtain={stateCurtain}/>
          <QuitPopup stateQuit={stateQuit} setStateQuit={setStateQuit}/>
          {/* <GameOverPopup/> */}
          {/* <GrandPopup/> */}
          {/* <WinPopup/> */}
          {/* <HelpPopup/> */}
        {/* </div>
      </div>      */}
    </>
  )
}

