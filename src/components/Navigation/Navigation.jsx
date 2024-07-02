import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { useMediaQuery } from 'react-responsive';
import logoMobile from '../../images/logo/logoMobile.png';
import logoMobileRetina from '../../images/logo/logoMobile@2x.png';
import logoTablet from '../../images/logo/logoTablet.png';
import logoTabletRetina from '../../images/logo/logoTablet@2x.png';
import logoDesktop from '../../images/logo/logoDesktop.png';
import logoDesktopRetina from '../../images/logo/logoDesktop@2x.png';
 

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 426px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const takeLogo = () => {
    if (isMobile) {
      return logoMobile;
    } else if (isTablet) {
      return logoTablet;
    } else if (isDesktop) {
      return logoDesktop;
    } else if (isMobile && isRetina) {
      return logoMobileRetina;
    } else if (isTablet && isRetina) {
      return logoTabletRetina;
    } else if (isDesktop && isRetina) {
      return logoDesktopRetina;
    }
  };

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <img className={css.logo} alt={''} src={takeLogo()}></img>
      </NavLink>
      {isLoggedIn && (
        <div className={css.linkWrapper}>
        <NavLink className={css.diary} to="/diary">
          Diary
        </NavLink>
        <NavLink className={css.calculator} to="/calculator">
        Calculator
      </NavLink>     
      </div>
      )}
    </nav>
  );
};
