
import React from 'react'
import style from '../../scss/ChoseTask.module.scss'

export const ChoseTask = () => {
    const containerStyle = {
    backgroundImage: `url("https://raw.githubusercontent.com/irinainina/image-data/master/full/0full.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  return (
    <div>
      <header className={style.header}>
      <div className={style.logo__box}>
        <h1><span>Art</span> Quiz</h1>
        <div className={`${style.ellipse} ${style.ellipse__right}`}></div>
        <div className={`${style.ellipse} ${style.ellipse__left}`}></div>
      </div>
      <ul className={style.menu}>
        <li className={style.menu_items}><span className={style.item}>Home </span></li>
        <li className={style.menu_items}><span  className={`${style.active} ${style.item}`}>Quiz Artist</span></li>
      </ul>
      <a href="."  className={style.icon__cross}> </a>
    </header>
    <main className={style.main}>
     <div className={style.box}>
      <span className={style.name_category}>Portrait</span>
      <div className={`${style.counter} ${style.none}`}>7/10</div>
        <div className={`${style.pic_category} ${style.dark}`} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Still life</span>
      <div className={style.counter }>3/10</div>
        <div className={style.pic_category } style={containerStyle}>
          <div className={style.again }><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Kitsh</span>
      <div className={`${style.counter} ${style.none}`}>5/10</div>
        <div className={`${style.pic_category} ${style.dark}`} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Nude</span>
      <div className={style.counter}>8/10</div>
        <div className={style.pic_category} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Portrait</span>
      <div className={`${style.counter} ${style.none}`}>7/10</div>
        <div className={`${style.pic_category} ${style.dark}`} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Still life</span>
      <div className={style.counter }>3/10</div>
        <div className={style.pic_category } style={containerStyle}>
          <div className={style.again }><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div> 
     <div className={style.box}>
      <span className={style.name_category}>Kitsh</span>
      <div className={`${style.counter} ${style.none}`}>5/10</div>
        <div className={`${style.pic_category} ${style.dark}`} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Nude</span>
      <div className={style.counter}>8/10</div>
        <div className={style.pic_category} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Nude</span>
      <div className={style.counter}>8/10</div>
        <div className={style.pic_category} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
     <div className={style.box}>
      <span className={style.name_category}>Nude</span>
      <div className={style.counter}>8/10</div>
        <div className={style.pic_category} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
     </div>
      <div className={style.box}>
        <span className={style.name_category}>Kitsh</span>
        <div className={`${style.again} ${style.none}`}>5/10</div>
        <div className={`${style.pic_category} ${style.dark}`} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
      </div>
      <div className={style.box}>
        <span className={style.name_category}>Nude</span>
        <div className={style.counter}>8/10</div>
        <div className={style.pic_category} style={containerStyle}>
          <div className={`${style.again} ${style.none}`}><span className={style.icon_again}></span><span>Play again</span></div>
        </div>
      </div>
    </main>
    <footer className={style.footer}>
      <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
      <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
      <div className={style.footer_menu}>
        <div className={style.icon_home}></div>
        <div className={style.icon_categories}></div>
        <div className={style.icon_score}></div>
      </div>
    </footer>
    </div>
  )
}
