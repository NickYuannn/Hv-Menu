import React from "react";
import FoodCards from "./FoodCards";
import "./MenuSection.css";

export default function MenuSection() {
  const appetizers = [
    { name: "A1. GOI CUON (FRESH SUMMER ROLLS)", price: "$5.00" },
    { name: "A2. Lemongrass Grilled Chicken", price: "$6.50" },
    { name: "A3. Grilled Beef", price: "$7.00" },
    { name: "A4. Grilled Pork", price: "$6.00" },
    { name: "A5. Grilled Jumbo Shrimp", price: "$8.00" },
    { name: "A6. Deep Fried Tofu", price: "$5.50" },
    { name: "A7. NEM RAN (CRISPY SPRING ROLLS)", price: "$6.00" },
    {
      name: "A8. NEM CUA BE (SPECIAL CRISPY SPRING ROLLS WITH CRAB MEAT)",
      price: "$7.50",
    },
  ];

  return (
    <div className="menu-section-container">
      <FoodCards type="Appetizers" food={appetizers} />
    </div>
  );
}
