
import React from 'react'

import style from '../scss/QuizPicPage.module.scss'



export default function ButtonPic({urlId}: any) {
    const containerStyle = {
    backgroundImage: `url("${urlId}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
  return (
    <>
     <button className={`${style.btn}`} style={containerStyle}></button>
    </>
  )
}
