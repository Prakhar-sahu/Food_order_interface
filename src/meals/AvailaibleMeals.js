import classes from "./AvailaibleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./Mealitem/MealItem";
import {useState, useEffect } from "react";


const AvailableMeals = () => {

  const [meals,setmeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpError,sethttpError]=useState(false);

  useEffect(()=>{
    const fetchMeals= async ()=>{
      console.log('hi');
      const response = await fetch('https://food-8b936-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const responseData= await response.json();
if(!response.ok){
  throw new Error('something went wrong')
}
      const loadedMeals=[];
      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
          
        })
      }
      // console.log(loadedMeals);
      setmeals(loadedMeals);
      setIsLoading(false);

    }
      fetchMeals().catch(error=>{
        setIsLoading(false);
        sethttpError(error.message);

      })
    

  },[])

if(isLoading){
  return (
  <section className={classes.MealsLoading}>
<p>Loading..</p>
  </section>)
}

if(httpError){
  return(
    <section className={classes.MealsError}>
<p>{httpError}</p>
  </section>

  )
}



  const mealsList = meals.map((meal) => (
    <MealItem
        id={meal.id}
      key={meal.id}
      item={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
