import React from "react";
import style from "../../scss/WinPopup.module.scss";
import { soundData } from "../../assets/helper/SoundData";

export const WinPopup = ({
  stateWinPopUp,
  countResult,
  btnNo,
  stateVolume,
}: any) => {
  const soundRef = React.useRef<HTMLAudioElement>(null);
  const linkHome = true;
  React.useEffect(() => {
    if (stateVolume && stateWinPopUp) {
      soundRef.current?.play();
    }
  }, [stateVolume, stateWinPopUp]);
  return (
    <>
      <div className={`${style.win} ${stateWinPopUp ? style.active : ""}`}>
        <div className={style.win_popup}>
          <audio ref={soundRef} src={soundData[3].music} />
          <div className={style.pic}></div>
          <p className={style.title}>Congratulations!</p>
          <p className={style.text}>{countResult} / 20</p>
          <div className={style.btn_container}>
            <button
              onClick={() => btnNo(linkHome)}
              className={`${style.btn_popup} ${style.btn1}`}
            >
              Home
            </button>
            <button
              onClick={() => btnNo()}
              className={`${style.btn_popup} ${style.btn2}`}
            >
              Next Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
