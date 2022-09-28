
import React from 'react'
import style from '../../scss/QuizArtPage.module.scss'
import dataQuiz from '../../assets/date.json'
import { Curtain } from '../Curtain';
import { QuitPopup } from '../QuitPopup'
import { PointProgress } from '../../components/PointProgress';
import { ButtonArt } from '../../components/ButtonArt';
import { HelpPopup } from '../HelpPopup'
import { GameOverPopup } from '../GameOverPopup'



// import { GrandPopup } from '../GrandPopup'
// import { WinPopup } from '../WinPopup'


// const ar = ['Blue', 'Green', 'Yellow', 'Black']
// function shuffle(arr: any){
// 	let j, temp;
// 	for(var i = arr.length - 1; i > 0; i--){
// 		j = Math.floor(Math.random()*(i + 1));
// 		temp = arr[j];
// 		arr[j] = arr[i];
// 		arr[i] = temp;
// 	}
// 	return arr;
// }
// console.log(shuffle(ar));




export const QuizArtPage = ({categoryId, setCategoryId, btnNo, btnYes, stateGameOver, setStateGameOver}: any) => {
  
  
  
  const [stateQuit, setStateQuit] = React.useState(false)
  const [stateHelp, setStateHelp] = React.useState(false)
  
  const [flagHelp, setFlagHelp] = React.useState(true)
  const [countQuestion, setCountQuestion] = React.useState(1)
  const [countResult, setCountResult] = React.useState(0)
  const [btnArray, setBtnArray] = React.useState([])
  let stateCurtain = stateQuit || stateHelp || stateGameOver;
  
  

 React.useEffect(() => {
   let arrayAutour = [dataQuiz[categoryId].author];
  console.log('realAutour =', arrayAutour, 'countQuestion = ', countQuestion);
  for (let i = 1; i < 4; i++) {
    const nameAutour = dataQuiz[Math.floor(Math.random() * 240)].author;
    if (arrayAutour.includes(nameAutour)){
      i--;
    } else {
      arrayAutour.push(nameAutour);
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

setBtnArray(shuffle(arrayAutour))

}, [categoryId]) 
  
 


let length = 20; 
const  array = new Array(length);
while(length--){
  array[length] = length
}

  const barLineWidth = {
    width: `${countQuestion * 5}%`,
  }
 
  const clickNextId = (nameBtn: string) => {
    if (nameBtn === dataQuiz[categoryId].author) {
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
  const containerStyle = {
    backgroundImage: `url("${dataQuiz[categoryId].imgUrl}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
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
            <p className={style.title}>Who is the author of this picture?</p>
            <div className={style.container} style={containerStyle}>
              <div className={style.point_box}>
                {array.map((el) => (
                <PointProgress key={el} index={el} countQuestion={countQuestion}/>) )}
              </div>
            </div>
            <div className={style.btn_box}>
             {btnArray.map((elem: string, id: number) => (
              <ButtonArt key ={id} clickNextId={clickNextId} nameId={elem}/>
             ))}
            </div>
          </main>
          <footer className={style.footer}>
            <span>App developer: <a href="https://github.com/VedKhorkov">VedKhorkov</a></span>
            <span>Design: <a href="https://www.behance.net/klishinama255b">Mary Kli</a></span>
            <span>2022</span>
          </footer>
          <Curtain stateCurtain={stateCurtain} />
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
