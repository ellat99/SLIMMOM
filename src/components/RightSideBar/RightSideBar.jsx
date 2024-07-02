 
import { Box } from '@mui/material'; 
import { SummaryList } from './SummaryList'; 
// import { CategoriesList } from 'components/DailyCalorieIntake/categoriesList'; 
import css from "./RightSideBar.module.css"

export const RightSideBar = () => {
  
  return (
    <>
      <section className={css.sideBarcWrapper}>
        <Box marginTop="35%" marginLeft="50px" sx={{ maxWidth: 450 }}>
          <h3 className={css.title}>
             Summary for          
            </h3>
          <SummaryList />
        </Box>
        <div className={css.badFoodWrapper}>
          <h3 className={css.title}>Food not recommended</h3>
          {/* <CategoriesList  /> */}
        </div>
      </section>
    </>
  );
};