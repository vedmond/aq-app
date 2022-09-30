
import React from 'react'

import style from '../../scss/QuizPicPage.module.scss'
import { Curtain } from '../Curtain'
import { QuitPopup } from '../QuitPopup'
import { HelpPopup } from '../HelpPopup'
import dataQuiz from '../../assets/date.json'
import ButtonPic from '../../components/ButtonPic'
import { GameOverPopup } from '../GameOverPopup'
// import { GrandPopup } from '../GrandPopup'
// import { WinPopup } from '../WinPopup'

export const QuizPicPage = ({
  categoryId, 
  setCategoryId, 
  btnNo,
  btnYes, 
  stateGameOver, 
  setStateGameOver,
  countResult,
  setCountResult
  }: any) => {
   const [stateQuit, setStateQuit] = React.useState(false)
   const [stateHelp, setStateHelp] = React.useState(false)
   const [flagHelp, setFlagHelp] = React.useState(true)
   const [btnArray, setBtnArray] = React.useState([])
   const [countQuestion, setCountQuestion] = React.useState(1)
   const [nameArtistPic, setNameArtistPic] = React.useState('')
   let stateCurtain = stateQuit || stateHelp || stateGameOver;
   const barLineWidth = {
    width: `${countQuestion * 5}%`,
  }
   React.useEffect(() => {
   let arrayImgUrl = [dataQuiz[categoryId].imgUrl];
   setNameArtistPic(dataQuiz[categoryId].author)
  for (let i = 1; i < 4; i++) {
    const picImgUrl = dataQuiz[Math.floor(Math.random() * 240)].imgUrl;
    if (arrayImgUrl.includes(picImgUrl)){
      i--;
    } else {
      arrayImgUrl.push(picImgUrl);
    }
  }
function shuffle(arr: any){
	let j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
setBtnArray(shuffle(arrayImgUrl))
}, [categoryId])

  const clickNextId = (urlIdBtn: string) => {
    if (urlIdBtn === dataQuiz[categoryId].imgUrl) {
      setFlagHelp(true)
      setCountResult(countResult + 1)
    } else {
      setFlagHelp(false)
    }
    setCategoryId(+categoryId + 1)
    setStateHelp(true)
    if(countQuestion === 20){ 
      console.log('finish = ', countResult)
      setStateGameOver(true)
      setCountQuestion(1)
    } else {
        setCountQuestion(countQuestion + 1)       
    } 
  }

  return (
    <>
          <header className={style.header}>
            <button onClick={() => setStateQuit(!stateQuit)} className={style.icon__cross}> </button>
            <div className={style.progress_bar}>
              <div style={barLineWidth} className={style.progress_bar_line}></div>
            </div>
            <div className={style.timer}>01:22</div>
          </header>
            <main className={style.main}>
            <p className={style.title}>Which is {nameArtistPic} picture?</p>
            <div className={style.btn_box}>
              {btnArray.map((elem: string, id: number) => (
              <ButtonPic key ={id}  urlId={elem} clickNextId={clickNextId}/>
             ))}
            </div>
          </main>
          <footer className={style.footer}>
            <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
            <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
            <span>2022</span>
          </footer>
          <Curtain stateCurtain={stateCurtain}/>
          <QuitPopup stateQuit={stateQuit} setStateQuit={setStateQuit}/>
          <GameOverPopup 
            stateGameOver={stateGameOver} 
            btnNo={btnNo} 
            btnYes={btnYes}/>
          <HelpPopup 
            stateHelp={stateHelp} 
            setStateHelp={setStateHelp} 
            categoryId={categoryId} 
            flagHelp={flagHelp}/>
          {/* <GrandPopup/> */}
          {/* <WinPopup/> */}
    </>
  )
}

