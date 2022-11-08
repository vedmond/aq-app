import React from 'react';
import style from '../scss/QuizPicPage.module.scss';
import imgBg from '../assets/icon/carbon_settings@3x.png';

export default function ButtonPic({ urlId, clickNextId, id }: any) {
  const [containerStyle, setContainerStyle] = React.useState({});

  React.useEffect(() => {
    const linKRead = async () => {
      try {
        const response = await fetch(urlId);
        if (response.status > 299) {
          throw new Error('');
        }
        setContainerStyle({
          backgroundImage: `url("${response.url}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
        });
      } catch (error) {
        setContainerStyle({
          backgroundImage: `url(${imgBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
        });
      }
    };
    linKRead();
  }, [urlId]);

  return (
    <>
      <button
        onClick={() => clickNextId(urlId)}
        className={`${style.btn}`}
        style={containerStyle}></button>
    </>
  );
}
