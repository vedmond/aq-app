import React from "react";

import style from "../../scss/QuizPicPage.module.scss";
import { Curtain } from "../Curtain";
import { QuitPopup } from "../QuitPopup";
import { HelpPopup } from "../HelpPopup";
import dataQuiz from "../../assets/date.json";
import ButtonPic from "../../components/ButtonPic";
import { GameOverPopup } from "../GameOverPopup";
import { WinPopup } from "../WinPopup";
import { GrandPopup } from "../GrandPopup";
import { Footer } from "../../components/Footer";
import { Timer } from "../../components/Timer";
import { Result } from "../../components/Result";
import { soundData } from "../../assets/helper/SoundData";

export const QuizPicPage = ({
  categoryId,
  setCategoryId,
  btnNo,
  btnYes,
  stateGameOver,
  setStateGameOver,
  countResult,
  setCountResult,
  countQuestion,
  setCountQuestion,
  stateWinPopUp,
  setStateWinPopUp,
  stateGrandPopUp,
  setStateGrandPopUp,
  helpPopupOn,
  stateVolume,
}: any) => {
  const storage: any = localStorage.getItem("setting");
  const settingObj = JSON.parse(storage);
  const timer = settingObj.timer;
  const startTime: number = settingObj.time;

  const [isTimer, setIsTimer] = React.useState(timer);
  const [timeLeft, setTimeLeft] = React.useState(startTime);

  const [soundOn, setSoundOn] = React.useState(false);
  const [stateQuit, setStateQuit] = React.useState(false);
  const [stateHelp, setStateHelp] = React.useState(false);
  const [flagHelp, setFlagHelp] = React.useState(true);
  const [btnArray, setBtnArray] = React.useState([]);
  const [nameArtistPic, setNameArtistPic] = React.useState("");
  const [finishedId, setFinishedId] = React.useState(-1);

  const soundRef: any = React.useRef(null);

  let stateCurtain =
    stateQuit || stateHelp || stateGameOver || stateWinPopUp || stateGrandPopUp;
  const barLineWidth = {
    width: `${countQuestion * 5}%`,
  };

  React.useEffect(() => {
    let arrayImgUrl = [dataQuiz[categoryId].imgUrl];
    setNameArtistPic(dataQuiz[categoryId].author);
    for (let i = 1; i < 4; i++) {
      const picImgUrl = dataQuiz[Math.floor(Math.random() * 240)].imgUrl;
      if (arrayImgUrl.includes(picImgUrl)) {
        i--;
      } else {
        arrayImgUrl.push(picImgUrl);
      }
    }
    function shuffle(arr: any) {
      let j, temp;
      for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    }
    setBtnArray(shuffle(arrayImgUrl));
  }, [categoryId]);

  const clickNextId = React.useCallback(
    (urlIdBtn: string = "") => {
      setIsTimer(timer);
      timer ? setTimeLeft(startTime) : setTimeLeft(0);
      if (urlIdBtn === dataQuiz[categoryId].imgUrl) {
        setSoundOn(true);
        setFlagHelp(true);
        setCountResult(countResult + 1);
      } else {
        setFlagHelp(false);
      }
      setCategoryId(+categoryId + 1);
      helpPopupOn ? setStateHelp(true) : setStateHelp(false);
      if (countQuestion === 20 && countResult < 10) {
        setStateGameOver(true);
      } else if (
        countQuestion === 20 &&
        countResult >= 10 &&
        countResult <= 19
      ) {
        setStateWinPopUp(true);
      } else if (countQuestion === 20 && countResult > 19) {
        setStateGrandPopUp(true);
      } else if (countQuestion < 20) {
        setCountQuestion(countQuestion + 1);
      }
    },
    [
      categoryId,
      countQuestion,
      countResult,
      helpPopupOn,
      setCategoryId,
      setCountQuestion,
      setCountResult,
      setStateGameOver,
      setStateGrandPopUp,
      setStateWinPopUp,
      startTime,
      timer,
    ]
  );

  React.useEffect(() => {
    if (countQuestion === 1) {
      setFinishedId(+categoryId + 19);
    }
  }, [countQuestion, categoryId]);

  React.useEffect(() => {
    if (stateCurtain) {
      setTimeLeft(startTime);
    }
    const interval = setInterval(() => {
      isTimer &&
        setTimeLeft((timeLeft: any) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) {
      setIsTimer(false);
      if (+categoryId <= finishedId && isTimer) {
        clickNextId();
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    isTimer,
    timeLeft,
    startTime,
    clickNextId,
    finishedId,
    categoryId,
    stateCurtain,
  ]);

  React.useEffect(() => {
    if (countResult > 0 && stateVolume && soundOn) {
      soundRef.current.play();
      setSoundOn(false);
    }
  }, [countResult, stateVolume, soundOn]);

  return (
    <>
      <header className={style.header}>
        <audio ref={soundRef} src={soundData[1].music} />
        <button
          onClick={() => setStateQuit(!stateQuit)}
          className={style.icon__cross}
        >
          {" "}
        </button>
        <div className={style.progress_bar}>
          <div style={barLineWidth} className={style.progress_bar_line}></div>
        </div>
        <div className={style.timer}>
          {isTimer && !stateCurtain && (
            <Timer
              timeLeft={timeLeft}
              timer={timer}
              stateVolume={stateVolume}
            />
          )}
          {!isTimer && !stateCurtain && <Result countResult={countResult} />}
        </div>
      </header>
      <main className={style.main}>
        <p className={style.title}>Which is {nameArtistPic} picture?</p>
        <div className={style.btn_box}>
          {btnArray.map((elem: string, id: number) => (
            <ButtonPic
              key={id}
              id={id}
              urlId={elem}
              clickNextId={clickNextId}
            />
          ))}
        </div>
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
      <Curtain stateCurtain={stateCurtain} />
      <QuitPopup
        stateQuit={stateQuit}
        setStateQuit={setStateQuit}
        btnNo={btnNo}
        stateVolume={stateVolume}
      />
      <GameOverPopup
        stateGameOver={stateGameOver}
        btnNo={btnNo}
        btnYes={btnYes}
        stateVolume={stateVolume}
      />
      <WinPopup
        stateWinPopUp={stateWinPopUp}
        countResult={countResult}
        btnNo={btnNo}
        stateVolume={stateVolume}
      />
      <GrandPopup
        stateGrandPopUp={stateGrandPopUp}
        btnNo={btnNo}
        stateVolume={stateVolume}
      />
      <HelpPopup
        stateHelp={stateHelp}
        setStateHelp={setStateHelp}
        categoryId={categoryId}
        flagHelp={flagHelp}
        countQuestion={countQuestion}
        finishedId={finishedId}
        stateVolume={stateVolume}
      />
    </>
  );
};
