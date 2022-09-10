
import React from 'react'
import '../../scss/WinPopup.scss'

export const WinPopup = () => {
  return (
    <div>
    <div className="win active">
      <div className="win-popup">
        <div className="pic"></div>
        <p className="title">Congratulations!</p>
        <p className="text">8 / 10</p>
        <div className="btn-container">
          <button className="btn-popup btn1">Home</button>
          <button className="btn-popup btn2">Next Quiz</button>
        </div>

      </div>
    </div>      
    </div>
  )
}
