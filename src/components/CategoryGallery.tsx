
import React from 'react'
import style from '../scss/ChoseTask.module.scss'
import dateQuiz from '../assets/date.json'
import {useNavigate} from 'react-router-dom'

export const CategoryGallery = ({idDate, linkCategory, setCategoryId}: any) => {

  
  const containerStyle  = {
    backgroundImage: `url("${dateQuiz[idDate].imgUrl}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  };
  
  const numGallery = idDate / 20 + 1;
  const  linkTo = useNavigate()
  const startQuiz = () => {
    if (linkCategory === 'art'){
      linkTo('/art')
    } else {
     linkTo('/pic')
    }
    setCategoryId(idDate)
    
  };
  
  
  // https://632d643d519d17fb53bd0ecd.mockapi.io/items1

  
  return (
    <>
    <div className={style.box}>
      <span className={style.name_category}>Gallery -{numGallery}</span>
      <div className={`${style.counter} ${style.none}`}>7/10</div>
        <div 
          onClick={startQuiz}  
          className={`${style.pic_category} ${style.dark}`} 
          style={containerStyle}>
          <div className={`${style.again} ${style.none}`}>
            <span className={style.icon_again}></span>
            <span>Play again</span>
          </div>
        </div>
     </div>
   
    </>
  )
}
