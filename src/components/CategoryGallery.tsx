
import React from 'react'
import style from '../scss/ChoseTask.module.scss'
import dateQuiz from '../assets/date.json'
import {useNavigate} from 'react-router-dom'
import { ImgGallery } from './ImgGallery'


 
//  let containerStyle = {}


export const CategoryGallery = (
  {idDate, 
   linkCategory, 
   setCategoryId, 
   nameStorage,
   countResult,
   setCountResult, 
   setNameStorage, 
   setCategoryName
  }: any) => {
  
    const [linkPic, setLinkPic] = React.useState('')
    const startPic = +idDate + 5
    const currentLink = `${linkCategory === 'pic' ? dateQuiz[startPic].imgUrl : dateQuiz[idDate].imgUrl}`
   


    React.useEffect(() => {
     const linkRead = async() => {
      await fetch(currentLink).then(res => {
        setLinkPic(res.url)
        return res
      }) 
      }
      linkRead()
    }, [currentLink])

    const containerStyle  = {
      backgroundImage: `url("${linkPic}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
    };

    const numGallery = idDate / 20 + 1;
    const  linkTo = useNavigate()
    const startQuiz = () => {
      setCategoryName(linkCategory)
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

    const localNameStorage = `${linkCategory}${numGallery}`
    const score: any = localStorage.getItem('score')
    const scoreObj = JSON.parse(score)
    const result = scoreObj[localNameStorage].result
    const question = scoreObj[localNameStorage].question
    localStorage.setItem('score', JSON.stringify(scoreObj))

  return (
    <>
    <div className={style.box}>
      <span className={style.name_category}>Gallery -{numGallery}</span>
      <div className={
        `${style.counter} ${result === 0 || question === 0 ? style.none : ''}`
        }>
          {result}<span className={style.item__text}>/{question}</span>
      </div>
      {linkPic && 
      <ImgGallery 
        startQuiz={startQuiz} 
        result={result} 
        question={question} 
        containerStyle={containerStyle}/> 
      }
    </div>

   
    </>
  )
}
