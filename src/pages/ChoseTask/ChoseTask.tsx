
import React from 'react'
import style from '../../scss/ChoseTask.module.scss'
import { CategoryGallery } from '../../components/CategoryGallery'
import dateQuiz from '../../assets/date.json'

const dateStart = dateQuiz.filter(
  obj => +(obj.id) % 20 === 0 && +(obj.id) < dateQuiz.length - 20 ? obj :''
  )

export const ChoseTask = ({linkCategory}: any) => {

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
        <li className={style.menu_items}><span  className={`${style.active} ${style.item}`}>
          {linkCategory === 'art' ? `Quiz Artist`: `Quiz Picture` }
          </span>
        </li>
      </ul>
      <a href="."  className={style.icon__cross}> </a>
    </header>
    <main className={style.main}>
    {dateStart.map((obj) => (
      <CategoryGallery idDate={obj.id} linkCategory={linkCategory}/>
    ))}
    
      
  
  
    
     
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
