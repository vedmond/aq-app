import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../scss/ChoseTask.module.scss';
import { CategoryGallery } from '../../components/CategoryGallery';
import dataQuiz from '../../assets/date.json';
import { Footer } from '../../components/Footer';

type DataStartArrayItem = {
  author: string;
  name: string;
  year: string;
  id: string;
  imgUrl: string;
  imgFullUrl: string;
  categories: string;
};
type ChoseTaskProps = {
  linkCategory: string;
  setCategoryId: any;
  setCategoryName: any;
  setNameStorage: any;
  countResult: number;
  setCountResult: any;
  nameStorage: string;
};

export const ChoseTask: React.FC<ChoseTaskProps> = ({
  linkCategory,
  setCategoryId,
  setCategoryName,
  setNameStorage,
  countResult,
  setCountResult,
  nameStorage,
}) => {
  const dataStart: DataStartArrayItem[] = dataQuiz.filter((obj) =>
    +obj.id % 20 === 0 && +obj.id < dataQuiz.length - 20 ? obj : '',
  );

  return (
    <div>
      <header className={style.header}>
        <div className={style.logo__box}></div>
        <ul className={style.menu}>
          <Link to="/">
            <li className={style.menu_items}>
              <span className={style.item}>Home </span>
            </li>
          </Link>
          <li className={style.menu_items}>
            <span className={`${style.active} ${style.item}`}>
              {linkCategory === 'art' ? `Artist Quiz` : `Picture Quiz`}
            </span>
          </li>
        </ul>
        <Link to="/setting" className={style.icon__cross}>
          {' '}
        </Link>
      </header>
      <main className={style.main}>
        {dataStart.map((obj) => (
          <CategoryGallery
            key={obj.id}
            idDate={obj.id}
            linkCategory={linkCategory}
            setCategoryId={setCategoryId}
            setNameStorage={setNameStorage}
            nameStorage={nameStorage}
            countResult={countResult}
            setCountResult={setCountResult}
            setCategoryName={setCategoryName}
          />
        ))}
      </main>
      <footer className={style.footer}>
        <Footer />
        <div className={style.footer_menu}>
          <Link to="/">
            <div className={style.icon_home}></div>
          </Link>
          <div className={style.icon_categories}></div>
          <Link to="/score">
            <div className={style.icon_score}></div>
          </Link>
        </div>
      </footer>
    </div>
  );
};
