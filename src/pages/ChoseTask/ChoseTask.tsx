
import React from 'react'
import {Link} from 'react-router-dom'
import style from '../../scss/ChoseTask.module.scss'
import { CategoryGallery } from '../../components/CategoryGallery'
import dataQuiz from '../../assets/date.json'

// const dataStart = dataQuiz.filter(
//   obj => +(obj.id) % 20 === 0 && +(obj.id) < dataQuiz.length - 20 ? obj :''
//   )


export const ChoseTask = (
  {linkCategory, 
    setCategoryId, 
    setCategoryName, 
    setNameStorage,
    countResult,
    setCountResult, 
    nameStorage
  }: any) => {

  const dataStart = dataQuiz.filter(
  obj => +(obj.id) % 20 === 0 && +(obj.id) < dataQuiz.length - 20 ? obj :''
  )
    setCategoryName(linkCategory)
   
  return (
    <div>
      <header className={style.header}>
      <div className={style.logo__box}>
        <h1><span>Art</span> Quiz</h1>
        <div className={`${style.ellipse} ${style.ellipse__right}`}></div>
        <div className={`${style.ellipse} ${style.ellipse__left}`}></div>
      </div>
      <ul className={style.menu}>
        <Link to="/">
        <li className={style.menu_items}><span className={style.item}>Home </span></li>
        </Link>
        
        <li className={style.menu_items}><span  className={`${style.active} ${style.item}`}>
          {linkCategory === 'art' ? `Artist Quiz`: `Picture Quiz` }
          </span>
        </li>
      </ul>
      <Link to="/setting"  className={style.icon__cross}> </Link>
    </header>
    <main className={style.main}>
    {dataStart.map((obj) => (
      <CategoryGallery 
      key={obj.id} 
      idDate={obj.id} 
      linkCategory={linkCategory} 
      setCategoryId={setCategoryId}
      setNameStorage={setNameStorage}
      nameStorage={nameStorage}
      countResult={countResult}
      setCountResult={setCountResult}/>
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
