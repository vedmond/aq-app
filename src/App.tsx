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
  const art = 'art';
  const pic = 'pic';
  return (

    <div className="wrapper">
    <div className="block">
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path='/setting' element={<SettingPage/>}/>  
      <Route path='/art' element={<QuizArtPage />}/>
      <Route path='/pic' element={<QuizPicPage/>}/>
      <Route path='/chose/art' element={<ChoseTask linkCategory={art}/>}/>
      <Route path='/chose/pic' element={<ChoseTask linkCategory={pic}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>    
    </div>
    </div>


   
  );
}

export default App;
