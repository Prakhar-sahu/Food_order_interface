import Classes from './Meal.module.css';
import MealsSummary from './MealSummary';
import AvailaibleMeals from './AvailaibleMeals';
import React from 'react';
const Meals=()=>{
return <React.Fragment>
    <MealsSummary/>
    <AvailaibleMeals/>
</React.Fragment>
}

export default Meals;