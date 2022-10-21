
import React from 'react'
import style from '../../scss/Score.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import {startScoreStorage} from '../../components/ConstStartStorage'
import { MdSentimentVerySatisfied } from "react-icons/md";

export const Score = () => {
  if (localStorage.getItem('score') === null || undefined) {
    localStorage.setItem('score', JSON.stringify(startScoreStorage))
  }
  const score: any = localStorage.getItem('score')
  const scoreObj = JSON.parse(score)
  const linkCallBack = useNavigate();
  const callBack = () => linkCallBack(-1)
  let artResult = 0
  let artQuest = 0
  for (let index = 1; index <=12 ; index++) {
    let namePic = `pic${index}`
    let nameArt = `art${index}`
    artResult = scoreObj[namePic].result + scoreObj[nameArt].result + artResult
    artQuest = scoreObj[namePic].question + scoreObj[nameArt].question + artQuest
  }
  let total = Math.ceil((artResult / artQuest) * 100) 

  return (
    <>
      <header className={style.header}>
      <div onClick={callBack}  className={style.icon__arrow}> <div className={style.icon__arrow__block}>
      </div> Score</div>
      <Link to="/"  className={style.icon__cross}> </Link>
      </header>
      <main className={style.main}>
        <div className={style.setting}>
          <h2 className={style.title}>
            Questions : <span className={style.item_an}>{artQuest}
          </span></h2>
          <h2 className={style.title}>
            Correct : <span className={style.item_cor}>{artResult}
          </span></h2>
          <h2 className={style.title}>
            Total - <span className={style.item_tot}>{total ? total : <MdSentimentVerySatisfied/>}
          </span> %</h2>

        </div>

    </main>
    <footer className={style.footer}>
      <Footer/>
    </footer> 
    </>    

  )
}
