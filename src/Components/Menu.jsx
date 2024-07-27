import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <div className="appetizer">
        <h1>Appetizers</h1>
        <div className="app-container">
          <div className="left">
            <section className="goi-con">
              <img src="/springrolls.jpg" alt="" />
              <div className="a1">
                <p className="food-name"> A1. GOI CUON (FRESH SUMMER ROLLS)</p>
                <p className="price">$6.50</p>
                <div className="food-ingredients">
                  <p>
                    Two rolls per order, served with Peanut Butter, Sesame
                    Sauce, or House Fish Sauce
                  </p>
                  <br />
                  <p>
                    Rice Paper, Rice Vermicelli Noodle, Lettuce, Pickled Carrot
                    Daikon, Cilantro & Shrimp
                  </p>
                  <br />
                  <p>Options to replace Shrimp with:</p>
                  <br />
                  <section className="addons">
                    <p>A2. Lemongrass Grilled Chicken</p>{" "}
                    <p className="price"> $6.99</p>
                    <p>A3. Grilled Beef</p> <p className="price">$7.50</p>
                    <p>A4. Grilled Pork</p> <p className="price">$6.99</p>
                    <p>A5. Grilled Jumbo Shrimp</p>{" "}
                    <p className="price">$7.50</p>
                    <p>A6. Deep Fried Tofu</p> <p className="price">$6.50</p>
                  </section>
                </div>
              </div>
            </section>
            <section className="nem-cua">
              <img src="/a8.jpg" alt="" />
              <div className="a8">
                <p className="food-name">
                  A8. NEM CUA BE (SPECIAL CRISPY SPRING ROLLS WITH CRAB MEAT)
                </p>
                <p className="price">$6.99</p>
                <div className="food-ingredients">
                  <p>Two rolls per order, served with House Fish Sauce</p>
                  <p>
                    Vietnamese Special Deep Fried Spring Rolls Filled with Crab
                    Meat, Noodle, Carrot, White Onion, Black Fungus, Chopped
                    Shrimp & Ground Pork
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="right">
            <section className="nem-ran">
              <img src="/eggrolls.jpg" alt="" />
              <div className="a7">
                <p className="food-name"> A7. NEM RAN (CRISPY SPRING ROLLS)</p>
                <p className="price">$5.99</p>
                <div className="food-ingredients">
                  <p className="desc">
                    Two rolls per order, served with Sweet Sauce or House Fish
                    Sauce
                  </p>
                  <p className="desc">
                    Noodle, Carrot, White Onion, Black Fungus, Chopped Shrimp &
                    Ground Pork
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
