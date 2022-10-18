
import React from 'react'
import style from '../../scss/HelpPopup.module.scss'
import dataQuiz from '../../assets/date.json'
import {soundData} from '../../assets/helper/SoundData'

export const HelpPopup = ({
      stateHelp, 
      setStateHelp, 
      categoryId, 
      flagHelp, 
      finishedId,
      stateVolume,
    }: any) => {
    const soundRef: any = React.useRef(null)  
    const callBack = () => {
      setStateHelp(false)
    }
    const forStartId = () => +categoryId -1 < 0 ? 0 : +categoryId - 1

    React.useEffect(() => {
    if(stateHelp && soundRef.current !== null &&  stateVolume) {
      soundRef.current.play()
    }
    }, [stateHelp,  stateVolume])
    
    const containerStyle = {
    backgroundImage:`url("${dataQuiz[forStartId()].imgUrl}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  
  return (
    <div>
      <div className={`${style.card} ${stateHelp ? style.active : ''}`}>
      <div className={style.card_popup}>
        <button onClick={callBack} className={style.cross}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.113 8.99872L17.5567 2.56902C17.8389 2.2868 17.9974 1.90402 17.9974 1.5049C17.9974 1.10577 17.8389 0.722997 17.5567 0.440774C17.2745 0.158551 16.8918 0 16.4928 0C16.0937 0 15.711 0.158551 15.4288 0.440774L9 6.88546L2.57121 0.440774C2.28903 0.158551 1.90631 -2.9737e-09 1.50724 0C1.10817 2.9737e-09 0.725452 0.158551 0.443269 0.440774C0.161086 0.722997 0.00255743 1.10577 0.00255743 1.5049C0.00255743 1.90402 0.161086 2.2868 0.443269 2.56902L6.88704 8.99872L0.443269 15.4284C0.302812 15.5678 0.191329 15.7335 0.115249 15.9162C0.0391699 16.0988 0 16.2947 0 16.4925C0 16.6904 0.0391699 16.8863 0.115249 17.0689C0.191329 17.2516 0.302812 17.4173 0.443269 17.5567C0.582579 17.6971 0.74832 17.8086 0.930933 17.8847C1.11355 17.9608 1.30941 18 1.50724 18C1.70507 18 1.90094 17.9608 2.08355 17.8847C2.26616 17.8086 2.4319 17.6971 2.57121 17.5567L9 11.112L15.4288 17.5567C15.5681 17.6971 15.7338 17.8086 15.9165 17.8847C16.0991 17.9608 16.2949 18 16.4928 18C16.6906 18 16.8865 17.9608 17.0691 17.8847C17.2517 17.8086 17.4174 17.6971 17.5567 17.5567C17.6972 17.4173 17.8087 17.2516 17.8848 17.0689C17.9608 16.8863 18 16.6904 18 16.4925C18 16.2947 17.9608 16.0988 17.8848 15.9162C17.8087 15.7335 17.6972 15.5678 17.5567 15.4284L11.113 8.99872Z"
              fill="black" />
          </svg>
        </button>
        <div className={style.pic} style={containerStyle}>
          <div className={`${style.circl} ${flagHelp ? style.right: style.wrong}`}></div>
          <audio ref={soundRef} src={flagHelp ? soundData[1].music : soundData[2].music}/>
        </div>
        <p className={style.title}>{dataQuiz[forStartId()].name}</p>
        <p className={style.text}>{`${dataQuiz[forStartId()].author}, ${dataQuiz[forStartId()].year}`}</p>
        <div className={style.btn_container}>
          <button onClick={callBack} className={`${style.btn_popup} ${style.btn1}`}>{finishedId === forStartId() ? 'Result' : 'Next'}</button>
        </div>

      </div>
    </div>
    </div>
  )
}
