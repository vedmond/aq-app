
import React from 'react'
import style from '../scss/QuizArtPage.module.scss'

export const PointProgress = ({index, countQuestion}:any) => {
  
  
  return (
    <>
    <div className={`${style.point} ${index < countQuestion ? style.active : ''}`}></div>
    </>
  )
}
