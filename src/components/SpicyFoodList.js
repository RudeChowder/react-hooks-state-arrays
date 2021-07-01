import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  const handleClick = id => {
    const newFoodArray = foods.filter(food => food.id !== id)
    setFoods(newFoodArray)
  }

  const foodsList = foods.map( food => ( 
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li> 
  ))

  return (
    <div>
      {console.log(foods)}
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>
        {foodsList}
      </ul>
    </div>
  );
}

export default SpicyFoodList;
