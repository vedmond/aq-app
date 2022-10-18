
import React from 'react'
import style from '../scss/Timer.module.scss'
import {soundData} from '../../src/assets/helper/SoundData' 


export const Timer = ({
    timeLeft, 
    timer, 
    stateVolume,
  }: any) => {
  const soundRef: any = React.useRef(null)
  let timeCurrent
  timeCurrent = timeLeft > 9 ? timeLeft.toString() : timeLeft.toString().padStart(2, '0')
  React.useEffect(() => {
    if(timeLeft > 0 && timeLeft <= 3 && soundRef.current !== null && stateVolume) {
      soundRef.current.play()
    }
  }, [timeLeft, stateVolume])
  return (
    <div className={timeLeft <= 3 ? style.style__time : ''}>
     <audio ref={soundRef} src={soundData[0].music}/> 
    {timer ? timeCurrent : ''}
    </div>
  )
}
