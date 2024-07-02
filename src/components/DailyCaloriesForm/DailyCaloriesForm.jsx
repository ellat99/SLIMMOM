import { Box } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import {
  FormControl,
  Button,
  FormControlLabel,
  Input,
  RadioGroup,
  Radio,
  Typography,
} from '@mui/material';
import css from './DailyCaloriesForm.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { ModalCalculator } from 'components/Modal/Modal';
import { useState } from 'react';

const ariaLabel = { 'aria-label': 'description' };

const MainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 608px;
  height: 343px;
  margin-top: 40px;
  margin-left: 50px;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 550px;
`;

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '550px !important',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'space-around',
          marginLeft: '0px !important',
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
        },
      },
    },
  },
});

// const calculateBMI = (height, weight) => {
//   // Perform the BMI calculation here
//   // Formula: BMI = weight (kg) / (height (m) * height (m))
//   const heightInMeters = height / 100; // convert height to meters
//   const bmi = weight / (heightInMeters * heightInMeters);
//   return bmi.toFixed(2);
// };

// const startValues = {
//   height: '',
//   age: '',
//   currentWeight: '',
//   desiredWeight: '',
//   bloodType: '1',
// };

export function DailyCaloriesForm() {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
    <section className={css.formWrapper}>
      <MainBox component="main">
        <Typography
          sx={{
            mb: 1,
            fontSize: '34px',
          }}
          variant="h2"
          fontWeight="700"
          fontFamily="Verdana"
          color="rgba(33, 33, 33, 1)"
          maxWidth="608px"
          maxHeight="85px"
          marginLeft="3%"
          marginRight="auto"
          marginTop="140px"
        >
          Calculate your daily calorie intake right now
        </Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch', marginLeft: '30px' },
          }}
          noValidate
          autoComplete="off"
        >
          <ThemeProvider theme={theme}>
            <FormControl>
              <Input placeholder="Height *" inputProps={ariaLabel} />
              <Input placeholder="Desired weight  *" inputProps={ariaLabel} />
              <Input placeholder="Age *" inputProps={ariaLabel} />
              <Input placeholder="Blood type*" inputProps={ariaLabel} />
              <Input placeholder="Current weight *" inputProps={ariaLabel} />
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group"
                defaultValue="1"
                name="radio-buttons"
              >
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      sx={{
                        color: grey[400],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body1" color="rgba(155, 159, 170, 1)">
                      1
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio
                      sx={{
                        color: grey[400],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body1" color="rgba(155, 159, 170, 1)">
                      2
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio
                      sx={{
                        color: grey[400],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body1" color="rgba(155, 159, 170, 1)">
                      3
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="4"
                  control={
                    <Radio
                      sx={{
                        color: grey[400],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body1" color="rgba(155, 159, 170, 1)">
                      4
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </Box>
        <ButtonBox component="second">
          <Button
            onClick={toggleModal}
            variant="contained"
            type="submit"
            color="ochre"
            sx={{
              mb: 1,
              fontFamily: 'Verdana',
              fontSize: '14px',
              textTransform: 'unset',
              borderRadius: '30px',
              boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
              fontWeight: '700',
              width: '210px',
              height: '43px',
              marginTop: '35px',
            }}
          >
            Start losing weight
          </Button>
        </ButtonBox>
      </MainBox>
      {isShowModal && (
        <ModalCalculator onClose={toggleModal} isOpen={isShowModal} />
      )}
    </section>
  );
}
