import React from "react";
import style from "../scss/QuizPicPage.module.scss";

export default function ButtonPic({ urlId, clickNextId, id }: any) {
  const [containerStyle, setContainerStyle] = React.useState({});

  React.useEffect(() => {
    const linKRead = async () => {
      const response = await fetch(urlId);
      setContainerStyle({
        backgroundImage: `url("${response.url}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      });
    };
    linKRead();
  }, [urlId]);

  return (
    <>
      <button
        onClick={() => clickNextId(urlId)}
        className={`${style.btn}`}
        style={containerStyle}
      ></button>
    </>
  );
}
