
import React from 'react'

import style from '../scss/QuizPicPage.module.scss'



export default function ButtonPic({urlId, clickNextId}: any) {
    const containerStyle = {
    backgroundImage: `url("${urlId}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  return (
    <>
     <button onClick={() => clickNextId(urlId)} className={`${style.btn}`} style={containerStyle}></button>
    </>
  )
}
