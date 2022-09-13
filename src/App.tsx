import React from 'react';
import './App.scss';
import {Routes, Route} from "react-router-dom";

import { SettingPage } from './pages/SettingPage';
import { QuizArtPage } from './pages/QuizArtPage';
import { QuizPicPage } from './pages/QuizPicPage';
import { StartPage } from './pages/StartPage';
// import { WinPopup } from './pages/WinPopup';
import { NotFound } from './pages/NotFound';
// import { GameOverPopup } from './pages/GameOverPopup';
// import { QuitPopup } from './pages/QuitPopup';
// import { HelpPopup } from './pages/HelpPopup';
// import { ChoseTask } from './pages/ChoseTask';
// import { GrandPopup } from './pages/GrandPopup';

function App() {
  return (

    <div className="wrapper">
    <div className="block">
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path='/setting' element={<SettingPage/>}/>  
      <Route path='/art' element={<QuizArtPage />}/>
      <Route path='/pic' element={<QuizPicPage/>}/>
 
      <Route path="*" element={<NotFound/>}/>   
            
      
      {/* <ChoseTask/> */}
      {/* <HelpPopup/> */}
      {/* <QuitPopup/> */}
      {/* <WinPopup/> */}
      {/* <GrandPopup/> */}
      {/* <GameOverPopup/> */}
    </Routes>    
    </div>
    </div>


   
  );
}

export default App;
