import React from 'react';
import './App.scss';
import {Routes, Route, useNavigate} from "react-router-dom";

import { SettingPage } from './pages/SettingPage';
import { QuizArtPage } from './pages/QuizArtPage';
import { QuizPicPage } from './pages/QuizPicPage';
import { StartPage } from './pages/StartPage';
import { NotFound } from './pages/NotFound';
import { ChoseTask } from './pages/ChoseTask';







function App() {
  const settingStorage = {
    help: true,
    volume: false,
  }
  if (localStorage.getItem('setting') === null) {
    localStorage.setItem('setting', JSON.stringify(settingStorage))
  }
  const storage: any = localStorage.getItem('setting')
  const objSetting = JSON.parse(storage)
  console.log('storage - ', objSetting);
  
  const [stateGameOver, setStateGameOver] = React.useState(false)
  const [stateWinPopUp, setStateWinPopUp] = React.useState(false)
  const [stateGrandPopUp, setStateGrandPopUp] = React.useState(false)
  const [helpPopupOn, setHelpPopupOn] = React.useState(objSetting.help)
  const [categoryId, setCategoryId] = React.useState(0)
  const [categoryName, setCategoryName] = React.useState('')
  const [countResult, setCountResult] = React.useState(0)
  const [nameStorage, setNameStorage] =React.useState('')
  const [countQuestion, setCountQuestion] = React.useState(1) //+
  
  const art = 'art';
  const pic = 'pic';
  const linkChose = useNavigate()
  const btnNo = (linkHome = false) => {
    const resultStorage = [countResult, countQuestion] // +
    localStorage.setItem(nameStorage, JSON.stringify(resultStorage))
    setCountQuestion(value => value = 1)
    setStateGameOver(false)
    setStateWinPopUp(false)
    setStateGrandPopUp(false)
    setCountQuestion(1)
    if (linkHome) {
      linkChose("/")
    } else {
      categoryName === 'art' ? linkChose("/chose/art") : linkChose("/chose/pic")
    }
    
  }
  const btnYes = () => {
    localStorage.removeItem(nameStorage)
    setStateGameOver(false)
    setCategoryId(+categoryId - 20)
    setCountResult(0)
    categoryName === 'art' ? linkChose("/art") : linkChose("/pic")
  }

  return (

    <div className="wrapper">
    <div className="block">
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path='/setting' element={
      <SettingPage
       helpPopupOn={helpPopupOn}
       setHelpPopupOn={setHelpPopupOn}
       />
       }/>  
      <Route path='/art' element={
      <QuizArtPage 
      categoryId={categoryId} 
      setCategoryId={setCategoryId} 
      btnNo={btnNo} 
      btnYes={btnYes}
      stateGameOver={stateGameOver} 
      setStateGameOver={setStateGameOver}
      countResult={countResult}
      setCountResult={setCountResult}
      countQuestion={countQuestion}
      setCountQuestion={setCountQuestion}
      stateWinPopUp={stateWinPopUp}
      setStateWinPopUp={setStateWinPopUp}
      stateGrandPopUp={stateGrandPopUp}
      setStateGrandPopUp={setStateGrandPopUp}
      helpPopupOn={helpPopupOn} 
      />
      }/>
      <Route path='/pic' element={
      <QuizPicPage 
      categoryId={categoryId} 
      setCategoryId={setCategoryId}
      btnNo={btnNo} 
      btnYes={btnYes}
      stateGameOver={stateGameOver} 
      setStateGameOver={setStateGameOver}
      countResult={countResult}
      setCountResult={setCountResult}
      countQuestion={countQuestion}
      setCountQuestion={setCountQuestion}
      stateWinPopUp={stateWinPopUp}
      setStateWinPopUp={setStateWinPopUp}
      stateGrandPopUp={stateGrandPopUp}
      setStateGrandPopUp={setStateGrandPopUp}
      helpPopupOn={helpPopupOn}
      />
      }/>
      <Route path='/chose/art' element={
      <ChoseTask 
        linkCategory={art} 
        setCategoryId={setCategoryId} 
        setCategoryName={setCategoryName}
        nameStorage={nameStorage}
        setNameStorage={setNameStorage}
        countResult={countResult}
        setCountResult={setCountResult}/>
      }/>
      <Route path='/chose/pic' element={
      <ChoseTask 
        linkCategory={pic} 
        setCategoryId={setCategoryId} 
        setCategoryName={setCategoryName}
        nameStorage={nameStorage}
        setNameStorage={setNameStorage}
        countResult={countResult}
        setCountResult={setCountResult}/>
      }/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    </div>


   
  );
}

export default App;
