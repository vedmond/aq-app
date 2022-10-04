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
  const [stateGameOver, setStateGameOver] = React.useState(false)
  const [categoryId, setCategoryId] = React.useState(0)
  const [categoryName, setCategoryName] = React.useState('')
  const [countResult, setCountResult] = React.useState(0)
  const [nameStorage, setNameStorage] =React.useState('')
  const [countQuestion, setCountQuestion] = React.useState(1) //+
  
  const art = 'art';
  const pic = 'pic';
  const linkChose = useNavigate()
  const btnNo = () => {
    const resultStorage = [countResult, countQuestion] // +
    localStorage.setItem(nameStorage, JSON.stringify(resultStorage))
    setCountQuestion(value => value = 1)
    setStateGameOver(false)
    categoryName === 'art' ? linkChose("/chose/art") : linkChose("/chose/pic")
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
      <Route path='/setting' element={<SettingPage/>}/>  
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
