
import React from 'react'
import style from '../scss/ChoseTask.module.scss'
import dateQuiz from '../assets/date.json'
import {useNavigate} from 'react-router-dom'
import { ImgGallery } from './ImgGallery'
// import { BiLoader } from "react-icons/bi"
import  {SkeletonMobile, SkeletonDesktop}  from './SkeletonGallery'


 
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
    const [isLoading, setIsLoading] = React.useState(true)
    const [isScreenMobile, setIsScreenMobile] = React.useState(true) 
    const startPic = +idDate + 5
    const currentLink = `${linkCategory === 'pic' ? dateQuiz[startPic].imgUrl : dateQuiz[idDate].imgUrl}`


    React.useEffect(() => {
      const linkRead = async() => {
        const response = await fetch(currentLink)
        setLinkPic(response.url)
        setIsLoading(false)
        return 
      }
      linkRead()
    }, [currentLink])

    React.useEffect(() => {
      const screenWidth = window.screen.width
      screenWidth <= 520 ? setIsScreenMobile(true) : setIsScreenMobile(false)
    },[])

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
      {isLoading ? 
      (isScreenMobile ? <SkeletonMobile /> : <SkeletonDesktop />) : 
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
