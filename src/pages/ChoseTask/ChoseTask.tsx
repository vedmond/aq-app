
import React from 'react'
import '../../scss/ChoseTask.scss'

export const ChoseTask = () => {
    const containerStyle = {
    backgroundImage: `url("https://raw.githubusercontent.com/irinainina/image-data/master/full/0full.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  return (
    <div>
      <header className="header">
      <div className="logo__box">
        <h1><span>Art</span> Quiz</h1>
        <div className="ellipse ellipse__right"></div>
        <div className="ellipse ellipse__left"></div>
      </div>
      <ul className="menu">
        <li className="menu-items"><a href=".">Home </a></li>
        <li className="menu-items"><a href="." className="active">Categories</a></li>
      </ul>
      <a href="/"  className="icon__cross"> </a>
    </header>
    <main className="main">

     <div className="box">
      <span className="name-category">Portrait</span>
      <div className="counter none">7/10</div>
      
        <div className="pic-category dark" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Still life</span>
      <div className="counter ">3/10</div>
      
        <div className="pic-category " style={containerStyle}>
          <div className="again "><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Kitsh</span>
      <div className="counter none">5/10</div>
      
        <div className="pic-category dark" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Nude</span>
      <div className="counter">8/10</div>
      
        <div className="pic-category" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Portrait</span>
      <div className="counter none">7/10</div>
      
        <div className="pic-category dark" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Still life</span>
      <div className="counter ">3/10</div>
      
        <div className="pic-category " style={containerStyle}>
          <div className="again "><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Kitsh</span>
      <div className="counter none">5/10</div>
      
        <div className="pic-category dark" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Nude</span>
      <div className="counter">8/10</div>
      
        <div className="pic-category" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Nude</span>
      <div className="counter">8/10</div>
      
        <div className="pic-category" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
     <div className="box">
      <span className="name-category">Nude</span>
      <div className="counter">8/10</div>
      
        <div className="pic-category" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
  
     </div>
      <div className="box">
        <span className="name-category">Kitsh</span>
        <div className="counter none">5/10</div>
      
        <div className="pic-category dark" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
      
      </div>
      <div className="box">
        <span className="name-category">Nude</span>
        <div className="counter">8/10</div>
      
        <div className="pic-category" style={containerStyle}>
          <div className="again none"><span className="icon-again"></span><span>Play again</span></div>
        </div>
      
      </div>
    </main>
    <footer className="footer">
      <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
      <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
      <div className="footer-menu">
        <div className="icon-home"></div>
        <div className="icon-categories"></div>
        <div className="icon-score"></div>
      </div>
    </footer>
    </div>
  )
}
