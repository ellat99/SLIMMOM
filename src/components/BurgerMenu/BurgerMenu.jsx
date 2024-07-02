import React from 'react';
import css from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';

export const BurgerMenu = (props) => {
  const {onClick} = props;
  return (
    <div className={css.burgerMenu}>
      <ul className={css.burgerMenuList}>
        <li>
          <NavLink exact to="/diary" className={css.burgerMenuItemDiary} onClick={onClick}>
            Diary
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/calculator" className={css.burgerMenuItemCalc} onClick={onClick}>
            Calculator
          </NavLink>
        </li>
      </ul>
    </div>
  );
};