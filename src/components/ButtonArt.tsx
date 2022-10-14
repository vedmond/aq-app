
import React from 'react'
// import dataQuiz from '../assets/date.json'
import style from '../scss/QuizArtPage.module.scss'


export const ButtonArt = ({clickNextId, nameId}: any) => {
  console.log('alert btn');
  
  return (
    <>
    <button onClick={() => clickNextId(nameId)} className={`${style.btn}`}>{nameId}</button>
    </>
  )
}
