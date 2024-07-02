import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectIsAuthLoading } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginLeft: '50px',
          marginTop: "200px",

        },
      },
    },
  MuiButton : {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor:"rgba(252, 132, 45, 1)",
          color: "white",
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
       root: {
        '&::after': {
          borderBottom: '2px solid rgba(252, 132, 45, 1)',
        },
        fontFamily: 'verdana',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '17.01px',
        letterSpacing: '4%',
         
      },
    },
  },
  }
  },)


  const ButtonBox = styled(Box)`
  display: flex;
  gap: 30px;
`;


export function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authOperation = useSelector(selectIsAuthLoading);

  // console.log('authOperation', authOperation)

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      form.reset();
      Notify.success('Congratulations, you have successfully registered!');
    } catch (error) {
      Notify.failure('User already exist');
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Container
      component="main"
      maxWidth="xs"
       
    >
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
           
        }}
      >
       <Typography component="h1" variant="h5" fontSize="14px" fontFamily="Verdana" fontWeight='700' textTransform="uppercase" color="rgba(252, 132, 45, 1)" >
Register          </Typography>
        <Box
          component="form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                variant="standard"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                variant="standard"
                // autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <ButtonBox>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,  
              fontFamily: "Verdana",
              fontSize: '14px', 
              textTransform: "unset",
              borderRadius: "30px",
              boxShadow: "0px 4px 10px 0px rgba(252, 132, 45, 0.5)",
              fontWeight: "700",
              width: "210px",
              height: "43px",
             marginTop: "35px",
             backgroundColor:"rgba(252, 132, 45, 1)",
            }}
          >
            {authOperation === 'register' ? <Loader /> : <>Register</>}
          </Button>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,  
                color: "rgba(252, 132, 45, 1)",
                fontFamily: "Verdana",
                fontSize: '14px', 
                textTransform: "unset",
                borderRadius: "30px",
                boxShadow: "0px 4px 10px 0px rgba(252, 132, 45, 0.5)",
                fontWeight: "700",
                width: "210px",
                height: "43px",
               marginTop: "35px",
               backgroundColor:"white",
              }}
              onClick={() => navigate('/login')}
            >
                <>Log in</>
            </Button> 
            </ButtonBox>
        </Box>
      </Box>
    </Container>
    </ThemeProvider>
  );
}
