import React from 'react';
import './App.scss';
// import { GameOverPopup } from './pages/GameOverPopup';
// import { WinPopup } from './pages/WinPopup';
// import { QuitPopup } from './pages/QuitPopup';
// import { HelpPopup } from './pages/HelpPopup';
// import { ChoseTask } from './pages/ChoseTask';
// import { SettingPage } from './pages/SettingPage';
// import { QuizPicPage } from './pages/QuizPicPage';
// import { QuizArtPage } from './pages/QuizArtPage';
import { StartPage } from './pages/StartPage';
// import { GrandPopup } from './pages/GrandPopup';

function App() {
  return (
    
  <div className="wrapper">
    <div className="block">
      <StartPage />
      {/* <QuizArtPage /> */}
      {/* <QuizPicPage/> */}
      {/* <SettingPage/> */}
      {/* <ChoseTask/> */}
      {/* <HelpPopup/> */}
      {/* <QuitPopup/> */}
      {/* <WinPopup/> */}
      {/* <GrandPopup/> */}
      {/* <GameOverPopup/> */}
    </div>
  </div>
   
  );
}

export default App;
