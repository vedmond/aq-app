
import React from 'react'
import style from '../../scss/SettingPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import {startScoreStorage, startSettingStorage} from '../../components/ConstStartStorage'
import { Footer } from '../../components/Footer'

export const SettingPage = ({helpPopupOn, setHelpPopupOn}: any) => {
  const storage: any = localStorage.getItem('setting')
  const objSetting = JSON.parse(storage)
  const [stateTimer, setStateTimer] = React.useState(objSetting.timer)
  const [numberTime, setNumberTime] = React.useState(objSetting.time)
  const linkCallBack = useNavigate();
  const callBack = () => linkCallBack(-1)
  const clickHelp = () => {
    setHelpPopupOn(!helpPopupOn)
    const storage: any = localStorage.getItem('setting')
    const objSetting = JSON.parse(storage)
    objSetting.help = !helpPopupOn
    localStorage.setItem('setting', JSON.stringify(objSetting))
  };
  const clickTimeAnswer = () => {
    const storage: any = localStorage.getItem('setting')
    const objSetting = JSON.parse(storage)
    objSetting.timer = !objSetting.timer
    setStateTimer(objSetting.timer)
    localStorage.setItem('setting', JSON.stringify(objSetting))
  }
  const btnReset = () => {
    localStorage.removeItem('score')
    localStorage.setItem('score', JSON.stringify(startScoreStorage))
  }
  const btnDefault = () => {
    localStorage.removeItem('setting')
    localStorage.setItem('setting', JSON.stringify(startSettingStorage))
    const storage: any = localStorage.getItem('setting')
    const objSetting = JSON.parse(storage)
    setHelpPopupOn(objSetting.help)
    setStateTimer(objSetting.timer)
    setNumberTime(objSetting.time)
  }
  const numberTimePlus = () => {
    numberTime < 60 ? setNumberTime(+numberTime + 5) : setNumberTime(60)
  }
  const numberTimeMinus = () => {
    numberTime > 5 ? setNumberTime(+numberTime - 5) : setNumberTime(5)
  }
  React.useEffect(() => {
    const storage: any = localStorage.getItem('setting')
    const objSetting = JSON.parse(storage)
    objSetting.time = numberTime
    localStorage.setItem('setting', JSON.stringify(objSetting))
  }, [numberTime])
  
  return (
    <>
      <header className={style.header}>
      <div onClick={callBack}  className={style.icon__arrow}> <div className={style.icon__arrow__block}></div> Setting</div>
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
            <span>Time to answer</span>
            <div className={style.switch}>
              <span>{stateTimer ? 'On' : 'Off'}</span>
              <button onClick={clickTimeAnswer} className={style.toggle}><span className={stateTimer ? style.on : style.off}></span></button>
            </div>
            <div className={style.timer}>
              <button onClick={numberTimeMinus} className={`${style.btn_timer} ${style.minus} ${numberTime === 5 ? style.button_off : ''}`}>-</button>
              <p className={style.number}>{numberTime}</p>
              <button onClick={numberTimePlus} className={`${style.btn_timer} ${style.plus} ${numberTime === 60 ? style.button_off : ''}`}>+</button>
            </div>
          </div>
          <div className={style.box__time}>
            <span>Help PopUp</span>
            <div className={style.switch}>
              <span>{helpPopupOn ? 'On' : 'Off'}</span>
              <button onClick={clickHelp} className={style.toggle}><span className={helpPopupOn ? style.on : style.off}></span></button>
            </div>
          </div>
        </div>
      <div className={style.btn_group}>
        <button onClick={btnDefault} className={style.button}>Default</button>
        <button onClick={btnReset} className={`${style.button} ${style.btn_act}`}>Reset Score</button>
      </div>
    </main>
    <footer className={style.footer}>
      <Footer/>
    </footer> 
    </>    

  )
}
