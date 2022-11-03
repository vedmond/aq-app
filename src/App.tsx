import React from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SettingPage } from "./pages/SettingPage";
import { QuizArtPage } from "./pages/QuizArtPage";
import { QuizPicPage } from "./pages/QuizPicPage";
import { StartPage } from "./pages/StartPage";
import { NotFound } from "./pages/NotFound";
import { ChoseTask } from "./pages/ChoseTask";
import {
  startScoreStorage,
  startSettingStorage,
} from "./components/ConstStartStorage";
import { Score } from "./pages/Score";

function App() {
  const art = "art";
  const pic = "pic";

  if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", JSON.stringify(startScoreStorage));
  }
  if (localStorage.getItem("setting") === null) {
    localStorage.setItem("setting", JSON.stringify(startSettingStorage));
  }

  const settingStorage: string | null = localStorage.getItem("setting");
  const objSetting: {
    volume: boolean;
    help: boolean;
  } = JSON.parse(`${settingStorage ? settingStorage : ""}`);

  const [stateVolume, setStateVolume] = React.useState<boolean>(
    objSetting.volume
  );
  const [stateGameOver, setStateGameOver] = React.useState<boolean>(false);
  const [stateWinPopUp, setStateWinPopUp] = React.useState<boolean>(false);
  const [stateGrandPopUp, setStateGrandPopUp] = React.useState<boolean>(false);
  const [helpPopupOn, setHelpPopupOn] = React.useState<boolean>(
    objSetting.help
  );
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const [categoryName, setCategoryName] = React.useState<string>("");
  const [countResult, setCountResult] = React.useState<number>(0);
  const [nameStorage, setNameStorage] = React.useState<string>("");
  const [countQuestion, setCountQuestion] = React.useState<number>(1);
  const linkChose = useNavigate();
  const btnNo = (linkHome: boolean = false) => {
    const score: string | null = localStorage.getItem("score");
    const scoreObj = JSON.parse(`${score ? score : ""}`);

    scoreObj[nameStorage].result = countResult;
    scoreObj[nameStorage].question = countQuestion;
    localStorage.setItem("score", JSON.stringify(scoreObj));
    setCountQuestion((value) => (value = 1));
    setStateGameOver(false);
    setStateWinPopUp(false);
    setStateGrandPopUp(false);
    setCountQuestion(1);
    if (linkHome) {
      linkChose("/");
    } else {
      categoryName === "art"
        ? linkChose("/chose/art")
        : linkChose("/chose/pic");
    }
  };
  const btnYes = () => {
    const score: string | null = localStorage.getItem("score");
    const scoreObj = JSON.parse(`${score ? score : ""}`);
    scoreObj[nameStorage].result = 0;
    scoreObj[nameStorage].question = 0;
    localStorage.setItem("score", JSON.stringify(scoreObj));
    setStateGameOver(false);
    setCategoryId(+categoryId - 20);
    setCountResult(0);
    setCountQuestion(1);
    categoryName === "art" ? linkChose("/art") : linkChose("/pic");
  };

  return (
    <div className="wrapper">
      <div className="block">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/setting"
            element={
              <SettingPage
                helpPopupOn={helpPopupOn}
                setHelpPopupOn={setHelpPopupOn}
                setStateVolume={setStateVolume}
                stateVolume={stateVolume}
              />
            }
          />
          <Route
            path="/art"
            element={
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
                stateVolume={stateVolume}
              />
            }
          />
          <Route
            path="/pic"
            element={
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
                stateVolume={stateVolume}
              />
            }
          />
          <Route
            path="/chose/art"
            element={
              <ChoseTask
                linkCategory={art}
                setCategoryId={setCategoryId}
                setCategoryName={setCategoryName}
                nameStorage={nameStorage}
                setNameStorage={setNameStorage}
                countResult={countResult}
                setCountResult={setCountResult}
              />
            }
          />
          <Route
            path="/chose/pic"
            element={
              <ChoseTask
                linkCategory={pic}
                setCategoryId={setCategoryId}
                setCategoryName={setCategoryName}
                nameStorage={nameStorage}
                setNameStorage={setNameStorage}
                countResult={countResult}
                setCountResult={setCountResult}
              />
            }
          />
          <Route path="/score" element={<Score />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
