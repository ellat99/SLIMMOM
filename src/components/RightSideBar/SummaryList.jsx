import { List, ListItem, Typography } from '@mui/material';
 

// import { useCalculator } from 'hooks/useCalculator';

export const SummaryList = () => {
  //   const { dailyNorm, consumed, left, percent } = useCalculator();

  return (
    <List component="ol">
      <ListItem className="css.listItem">
        <Typography>Left</Typography>
        <Typography paddingLeft="10px">kcal</Typography>
      </ListItem>
      <ListItem>
        <Typography>Consumed </Typography>
        <Typography paddingLeft="10px"> kcal</Typography>
      </ListItem>
      <ListItem>
        <Typography>Daily rate </Typography>
        <Typography paddingLeft="10px">kcal</Typography>
      </ListItem>
      <ListItem>
        <Typography>n of normal</Typography>
        <Typography paddingLeft="10px">%</Typography>
      </ListItem>
    </List>
  );
};
