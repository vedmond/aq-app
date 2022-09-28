import React from 'react';
import './App.scss';
import {Routes, Route} from "react-router-dom";

import { SettingPage } from './pages/SettingPage';
import { QuizArtPage } from './pages/QuizArtPage';
import { QuizPicPage } from './pages/QuizPicPage';
import { StartPage } from './pages/StartPage';
import { NotFound } from './pages/NotFound';
import { ChoseTask } from './pages/ChoseTask';



function App() {
  const [categoryId, setCategoryId] = React.useState(0)
  
  
  const art = 'art';
  const pic = 'pic';
  return (

    <div className="wrapper">
    <div className="block">
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path='/setting' element={<SettingPage/>}/>  
      <Route path='/art' element={<QuizArtPage categoryId={categoryId} setCategoryId={setCategoryId}/>}/>
      <Route path='/pic' element={<QuizPicPage categoryId={categoryId} setCategoryId={setCategoryId}/>}/>
      <Route path='/chose/art' element={<ChoseTask linkCategory={art} setCategoryId={setCategoryId}/>}/>
      <Route path='/chose/pic' element={<ChoseTask linkCategory={pic} setCategoryId={setCategoryId}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>    
    </div>
    </div>


   
  );
}

export default App;
