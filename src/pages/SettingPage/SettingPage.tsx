import React from 'react';
import style from '../../scss/SettingPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { startScoreStorage, startSettingStorage } from '../../components/ConstStartStorage';
import { Footer } from '../../components/Footer';
import { soundData } from '../../assets/helper/SoundData';

type SettingPageProps = {
  helpPopupOn: boolean;
  setHelpPopupOn: React.Dispatch<React.SetStateAction<boolean>>;
  stateVolume: boolean;
  setStateVolume: React.Dispatch<React.SetStateAction<boolean>>;
};
type SettingType = {
  help: boolean;
  time: number;
  timer: boolean;
  volume: boolean;
};

export const SettingPage: React.FC<SettingPageProps> = ({
  helpPopupOn,
  setHelpPopupOn,
  stateVolume,
  setStateVolume,
}) => {
  const storage: string | null = localStorage.getItem('setting');
  const objSetting: SettingType = JSON.parse(`${storage ? storage : ''}`);
  const [stateTimer, setStateTimer] = React.useState(objSetting.timer);
  const [numberTime, setNumberTime] = React.useState(objSetting.time);
  const [soundOn, setSoundOn] = React.useState(false);
  setStateVolume(objSetting.volume);

  const linkCallBack = useNavigate();
  const callBack = () => linkCallBack(-1);
  const soundRef: React.MutableRefObject<null | HTMLAudioElement> = React.useRef(null);

  const objSettingFn = (): SettingType => {
    const storage: string | null = localStorage.getItem('setting');
    return JSON.parse(`${storage ? storage : ''}`);
  };

  const clickHelp = () => {
    setSoundOn(true);
    setHelpPopupOn(!helpPopupOn);
    objSettingFn();
    objSetting.help = !helpPopupOn;
    localStorage.setItem('setting', JSON.stringify(objSetting));
  };
  const clickVolume = () => {
    setSoundOn(true);
    objSettingFn();
    objSetting.volume = !objSetting.volume;
    setStateVolume(objSetting.volume);
    localStorage.setItem('setting', JSON.stringify(objSetting));
  };
  const clickTimeAnswer = () => {
    objSettingFn();
    objSetting.timer = !objSetting.timer;
    setStateTimer(objSetting.timer);
    localStorage.setItem('setting', JSON.stringify(objSetting));
    setSoundOn(true);
  };
  const btnReset = () => {
    localStorage.removeItem('score');
    localStorage.setItem('score', JSON.stringify(startScoreStorage));
    setSoundOn(true);
  };
  const btnDefault = () => {
    localStorage.removeItem('setting');
    localStorage.setItem('setting', JSON.stringify(startSettingStorage));
    objSettingFn();
    setHelpPopupOn(objSetting.help);
    setStateTimer(objSetting.timer);
    setNumberTime(objSetting.time);
    setSoundOn(true);
  };
  const numberTimePlus = () => {
    numberTime < 60 ? setNumberTime(+numberTime + 5) : setNumberTime(60);
    setSoundOn(true);
  };
  const numberTimeMinus = () => {
    numberTime > 5 ? setNumberTime(+numberTime - 5) : setNumberTime(5);
    setSoundOn(true);
  };
  React.useEffect(() => {
    objSettingFn();
    objSetting.time = numberTime;
    localStorage.setItem('setting', JSON.stringify(objSetting));
  }, [numberTime, objSetting]);

  React.useEffect(() => {
    if (stateVolume && soundOn) {
      if (soundRef.current) {
        soundRef.current.play();
      }
      setSoundOn(false);
    }
  }, [stateVolume, soundOn, numberTime]);

  return (
    <>
      <header className={style.header}>
        <div onClick={callBack} className={style.icon__arrow}>
          <div className={style.icon__arrow__block}></div>
          Setting
        </div>
        <Link to="/" className={style.icon__cross}>
          {' '}
        </Link>
      </header>
      <main className={style.main}>
        <audio ref={soundRef} src={soundData[0].music}></audio>
        <div className={style.setting}>
          <div className={style.box__volume}>
            <span>Volume</span>
            <div className={style.switch}>
              <span>{stateVolume ? 'On' : 'Off'}</span>
              <button onClick={clickVolume} className={style.toggle}>
                <span className={stateVolume ? style.on : style.off}></span>
              </button>
            </div>
          </div>
          <div className={style.box__time}>
            <span>Time to answer</span>
            <div className={style.switch}>
              <span>{stateTimer ? 'On' : 'Off'}</span>
              <button onClick={clickTimeAnswer} className={style.toggle}>
                <span className={stateTimer ? style.on : style.off}></span>
              </button>
            </div>
            <div className={style.timer}>
              <button
                onClick={numberTimeMinus}
                className={`${style.btn_timer} ${style.minus} ${
                  numberTime === 5 ? style.button_off : ''
                }`}>
                -
              </button>
              <p className={style.number}>{numberTime}</p>
              <button
                onClick={numberTimePlus}
                className={`${style.btn_timer} ${style.plus} ${
                  numberTime === 60 ? style.button_off : ''
                }`}>
                +
              </button>
            </div>
          </div>
          <div className={style.box__time}>
            <span>Help PopUp</span>
            <div className={style.switch}>
              <span>{helpPopupOn ? 'On' : 'Off'}</span>
              <button onClick={clickHelp} className={style.toggle}>
                <span className={helpPopupOn ? style.on : style.off}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={style.btn_group}>
          <button onClick={btnDefault} className={style.button}>
            Default
          </button>
          <button onClick={btnReset} className={`${style.button} ${style.btn_act}`}>
            Reset Score
          </button>
        </div>
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </>
  );
};
