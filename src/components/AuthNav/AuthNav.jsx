import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
    return (
        <div className={css.navWrapper}>
            <NavLink className= {css.link} to='/login'>LOG IN</NavLink>
            <NavLink className= {css.link} to='/register'>REGISTRATION</NavLink>
        </div>
    );
};