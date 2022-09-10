
import React from 'react'
import '../../scss/GameOverPopup.scss'


export const GameOverPopup = () => {
  return (
    <div>
      <div className="game-over active">
        <div className="game-over-popup">
          <div className="pic"></div>
          <p className="title">Game over</p>
          <p className="text">Play again?</p>
          <div className="btn-container">
            <button className="btn-popup btn1">No</button>
            <button className="btn-popup btn2">Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
