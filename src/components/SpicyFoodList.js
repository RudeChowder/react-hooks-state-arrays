import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods)
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  const handleClick = id => {
    const newFoodArray = foods.map(food => {
      if (food.id === id) {
        food.heatLevel++
        return food
      } else {
        return food
      }
    })
    setFoods(newFoodArray)
  }

  const handleFilterChange = event => {
    setFilterBy(event.target.value)
  }

  const foodsToDisplay = foods.filter(food => {
    if (filterBy === "All") {
      return true
    } else {
      return food.cuisine === filterBy
    }
  })

  const foodsList = foodsToDisplay.map( food => ( 
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
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
