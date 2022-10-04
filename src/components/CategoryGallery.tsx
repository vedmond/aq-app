
import React from 'react'
import style from '../scss/ChoseTask.module.scss'
import dateQuiz from '../assets/date.json'
import {useNavigate} from 'react-router-dom'





export const CategoryGallery = (
  {idDate, 
   linkCategory, 
   setCategoryId, 
   nameStorage,
   countResult,
   setCountResult, 
   setNameStorage
  }: any) => {
  
    
    const startPic = +idDate + 5
    const containerStyle  = {
      backgroundImage: `url("${linkCategory === 'pic' ? dateQuiz[startPic].imgUrl : dateQuiz[idDate].imgUrl}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
    };
    
    const numGallery = idDate / 20 + 1;
    const  linkTo = useNavigate()
    const startQuiz = () => {
      setCountResult(countResult = 0)
      setNameStorage(nameStorage = '') 
      if (linkCategory === 'art'){
        setNameStorage(nameStorage = `art${numGallery}`)
        linkTo('/art')
      } else {
        setNameStorage(nameStorage = `pic${numGallery}`)
        linkTo('/pic')
      }
      setCategoryId(idDate)
    };
    let styleAgain = []
    const localNameStorage = localStorage.getItem(`${linkCategory}${numGallery}`)
    
    if (typeof(localNameStorage) === 'string' ) {
       styleAgain = JSON.parse(localNameStorage)
       console.log('styleAgain =', styleAgain[0]);
       
    } 
    
  
  // https://632d643d519d17fb53bd0ecd.mockapi.io/items1

  
  return (
    <>
    <div className={style.box}>
      <span className={style.name_category}>Gallery -{numGallery}</span>
      <div className={`${style.counter} ${!localNameStorage || styleAgain[0] === 0 ? style.none : ''}`}>{styleAgain[0]}<span className={style.item__text}>/{styleAgain[1]}</span></div>
        <div 
          onClick={startQuiz}  
          className={`${style.pic_category} ${!localNameStorage || styleAgain[0] === 0 ? style.dark : ''}`} 
          style={containerStyle}>
          <div className={`${style.again} ${styleAgain > 19 ? '' :style.none}`}>
            <span className={style.icon_again}></span>
            <span>Play again</span>
          </div>
        </div>
     </div>
   
    </>
  )
}
