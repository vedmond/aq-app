
import React from 'react'
import style from '../../scss/GameOverPopup.module.scss'
import {soundData} from '../../assets/helper/SoundData' 



export const GameOverPopup = ({
  stateGameOver, 
  btnNo, 
  btnYes,
  stateVolume,
  }: any) => {
  const soundRef: any = React.useRef(null)
  React.useEffect(() => {
    if(stateVolume && stateGameOver) {
      soundRef.current.play()
      }
    }, [stateVolume, stateGameOver])

  return (
    <div>
      <div className={`${style.game_over} ${stateGameOver ? style.active : ''}`}>
        <div className={style.game_over_popup}>
          <audio ref={soundRef} src={soundData[4].music}/>
          <div className={style.pic}></div>
          <p className={style.title}>Game over</p>
          <p className={style.text}>Play again?</p>
          <div className={style.btn_container}>
            <button 
              onClick={() => btnNo()} 
              className={`${style.btn_popup} ${style.btn1}`}>No</button>
            <button 
              onClick={() => btnYes()} 
              className={`${style.btn_popup} ${style.btn2}`}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
