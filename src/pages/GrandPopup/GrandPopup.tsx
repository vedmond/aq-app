
import React from 'react'
import '../../scss/GrandPopup.scss'

export const GrandPopup = () => {
  return (
    <div>
    <div className="win active">
      <div className="win-popup">
        <div className="pic" ></div>
        <p className="title">Grand </p>
        <p className="title">result</p>
        <p className="text">Congratulations!</p>
        <div className="btn-container">
          <button className="btn-popup btn1">Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}
