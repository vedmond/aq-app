
import React from 'react'



export const Timer = ({timeLeft, timer}: any) => {

  let timeCurrent
  timeCurrent = timeLeft > 9 ? timeLeft.toString() : timeLeft.toString().padStart(2, '0')

  return (
    <>
    {timer ? timeCurrent : ''}
    </>
  )
}
