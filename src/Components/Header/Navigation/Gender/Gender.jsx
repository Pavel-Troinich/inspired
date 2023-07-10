import React from 'react';
import style from './Gender.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Gender = ({ list }) => {
  return (
    <ul className={style.gender}>
      {list.map(item => (
        <li className={style.item} key={item.title}>
          <NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)} to={item.link}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Gender;
