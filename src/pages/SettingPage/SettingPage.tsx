
import React from 'react'
import '../../scss/SettingPage.scss'

export const SettingPage = () => {
  return (
    <div>
      <header className="header">
      <div  className="icon__arrow"> <a href="/"> </a> Setting</div>
      <a href="/"  className="icon__cross"> </a>
      </header>
      <main className="main">
        <div className="setting">
          <div className="box__volume">
            <span>Volume</span>
            <div className="switch">
              <span>On</span>
              <button className="toggle"><span className="on"></span></button>
            </div>
          </div>
          <div className="box__time">
            <span>Time game</span>
            <div className="switch">
              <span>On</span>
              <button className="toggle"><span className="on"></span></button>
            </div>
            <div className="timer">
              <button className="btn-timer minus">-</button>
              <p>20</p>
              <button className="btn-timer plus">+</button>
            </div>
          </div>
          <div className="box__time">
            <span>Time to answer</span>
            <div className="switch">
              <span>On</span>
              <button className="toggle"><span className="on"></span></button>
            </div>
            <div className="timer">
              <button className="btn-timer minus">-</button>
              <p>20</p>
              <button className="btn-timer plus">+</button>
            </div>
          </div>
        </div>
      <div className="btn-group">
        <button className="button">Default</button>
        <button className="button btn-act">Save</button>
      </div>
    </main>
    <footer className="footer">
      <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
      <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
    </footer>
    </div>
  )
}
