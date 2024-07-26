import React from "react";
import "./FoodCards.css";

function FoodCards(props) {
  return (
    <div className="food-container">
      <h1>{props.type}</h1>
      <ul className="food">
        {props.food.map((item, index) => (
          <li key={index}>
            {item.name} <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodCards;
