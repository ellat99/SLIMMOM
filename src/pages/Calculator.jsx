// import { Box } from '@mui/material';
// import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
// import React, { useState } from 'react';
// // import {
// //   CalculatorPageWrapper,
// //   H2,
// //   WrapperAll,
// // } from 'components/CalculatorPage/CalculatorPage.styled';
 
// // import { getUserInfo } from 'redux/authSelectors';
// // import { useSelector } from 'react-redux';
// import Modal from 'components/Modal/Modal';
// import { RightSideBar } from 'components/RightSideBar/RightSideBar';

// const Calculator = () => {
 

// //   const [isModalOpened, setIsModalOpened] = useState(false);
// //   const [userParams, setUserParams] = useState(null);
// // //   const info = useSelector(getUserInfo);
// // //   const userInfo = { ...info };
// // //   delete userInfo.dailyRate;
// // //   delete userInfo.notAllowedProducts;
// // //   delete userInfo.notAllowedProductsAll;
// // //   const body = document.querySelector('body');

// //   const onModalClose = () => {
// //     setIsModalOpened(isModalOpened => !isModalOpened);
// //     body.style.overflow = 'auto';
// //   };

//   return (
//     <div>
//       <div>
      
         
//         <Box maxWidth={'1280px'} m={'0 auto'}>
           
//           <DailyCaloriesForm
//             // initialValues={userInfo}
//             // openModal={setIsModalOpened}
//             // setUserParams={setUserParams}
//           />
//         </Box>
//       </div>
//       <RightSideBar />
//     </div>
//   );
// };
// export default Calculator;

import {
    Box,
    ThemeProvider,
    createTheme,
    } from '@mui/material';
  
  // import { useNavigate } from 'react-router-dom';
  import { Helmet } from 'react-helmet';
 
  import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
  
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
  
  const Calculator = () => {
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
         <Box display="flex" height="100vh">
        <DailyCaloriesForm />
        <RightSideBar/>
        </Box>
      </ThemeProvider>
    );
  };

  export default Calculator;