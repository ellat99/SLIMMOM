import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import { Link } from '@mui/material';
 
 
// import { styled } from '@mui/material/styles';
 
export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
 
  return (
    <div className={css.userWrapper}>
      <p className={css.user}>{user.name}</p>
      <Link component="button"
      variant="body2"
      underline="none"
      fontFamily="verdana"
      fontSize="14px"
      fontWeight="700"
      color= "rgba(155, 159, 170, 1)" 
      onClick={() => dispatch(logout())}     
      >Exit</Link>       
    </div>
  );
};
