
import React from 'react'
import '../../scss/QuizArtPage.scss'


export const QuizArtPage = () => {
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
      <p className="title">Who is the author of this picture?</p>
      <div className="container" style={containerStyle}>
        <div className="point-box">
          <div className="point p0 active"></div>
          <div className="point p1 active"></div>
          <div className="point p2 active"></div>
          <div className="point p3 active"></div>
          <div className="point p4 active"></div>
          <div className="point p5"></div>
          <div className="point p6"></div>
          <div className="point p7"></div>
          <div className="point p8"></div>
          <div className="point p9"></div>
        </div>
      </div>
      <div className="btn-box">
        <button className="btn b0">Leonardo da Vinci</button>
        <button className="btn b1">Peter Paul Rubens</button>
        <button className="btn b2">Rembrandt </button>
        <button className="btn b3">Hieronymus Bosch</button>
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
