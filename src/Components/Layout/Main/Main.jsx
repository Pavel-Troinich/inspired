import React from 'react';
import style from './Main.module.scss';


const Main = ({ children }) => {
  return (
    <div className={style.main}>
      {children}
    </div>
  );
}

export default Main;
