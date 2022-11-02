
import React from 'react'
import style from '../scss/ChoseTask.module.scss'


export const ImgGallery = (
  {startQuiz,
  result,
  question,
  containerStyle,} : any
) => {

  return (
    <div>
      <div 
          onClick={startQuiz}  
          className={`${style.pic_category} ${result === 0 || question === 0 ? style.dark : ''}`} 
          style={containerStyle}>
          <div className={`${style.again} ${result > 15 ? '' :style.none}`}>
            <span className={style.icon_again}></span>
            <span>Play again</span>
          </div>
        </div>
    </div>
  )
}
