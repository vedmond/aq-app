
import React from 'react'
import '../../scss/QuizPicPage.scss'

export const QuizPicPage = () => {
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
    <div>
      <header className="header">
      <a href="/" className="icon__cross"> </a>
      <div className="progress-bar">
        <div style={barLineWidth} className="progress-bar-line"></div>
      </div>
      <div className="timer">01:22</div>
    </header>
      <main className="main">
      <p className="title">Which is Edvard Munch picture?</p>
      <div className="btn-box">
        <button className="btn b0" style={containerStyle}></button>
        <button className="btn b1" style={containerStyle}></button>
        <button className="btn b2" style={containerStyle}></button>
        <button className="btn b3" style={containerStyle}></button>
      </div>
    </main>
    <footer className="footer">
      <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
      <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
      <span>2022</span>
    </footer> 
    </div>
  )
}

