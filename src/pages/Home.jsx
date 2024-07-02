import {
  ThemeProvider,
  createTheme,
  } from '@mui/material';

// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Hero } from 'components/Hero/Hero';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

const theme = createTheme({
  typography: {
    button: {
      fontFamily: 'Verdana',
       
    },
    fontSize: '34px',
  },
  palette: {
    ochre: {
      main: 'rgb(252, 132, 45)',
      contrastText: 'white',
    },
  }
});

const Home = () => {
  // const { isLoggedIn } = useAuth();
  // const navigate = useNavigate();

  // const handleStart = () => {
  //   isLoggedIn ? navigate('/contacts') : navigate('/login');
  // };
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <DailyCaloriesForm />
    </ThemeProvider>
  );
};

export default Home;

