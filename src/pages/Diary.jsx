import {
  Box,
  FormGroup,
  Input,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { DiaryDateCalendar } from 'components/DiaryDate/DiaryDate';
import AddIcon from '@mui/icons-material/Add';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const theme = createTheme({
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          gap: '10px',
          marginLeft: '30px',
          margiTop: '50px',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        placeholder: {
          color: 'rgba(155, 159, 170, 1)',
        },
        root: {
          '&::after': {
            borderBottom: '2px solid rgba(252, 132, 45, 1)',
          },
          fontFamily: 'verdana',
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '17.01px',
          letterSpacing: '4%',
          width: '270px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'orange',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

const Diary = () => {
  return (
    <section>
      <div>
        <DiaryDateCalendar />
        <Box position="relative" my="40px">
          <ThemeProvider theme={theme}>
            <FormGroup>
              <Input placeholder="Enter product name *" />
              <Input placeholder="Grams  *" />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  mb: 1,
                  backgroundColor: 'orange',
                  boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
                  borderRadius: '50%',
                  padding: '0',
                  width: '50px',
                  height: '50px',
                }}
              >
                <AddIcon />
              </Button>
            </FormGroup>
          </ThemeProvider>
        </Box>
      </div>
      <Box display="flex" height="100vh" marginTop="-280px">
        <RightSideBar />
      </Box>
    </section>
  );
};

export default Diary;
