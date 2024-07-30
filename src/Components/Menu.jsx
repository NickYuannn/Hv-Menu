import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-group">
        <span className="food-group">
          <h1>Appetizers</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="/springrolls.jpg" />
            <div className="menu-content">
              <div className="food-name">
                <span className="item-name">
                  A1. GOI CUON (FRESH SUMMER ROLLS)
                </span>
                <span className="price"> $6.50</span>
              </div>
              <span className="food-description">
                <p className="desc">
                  Two rolls per order, served with Peanut Butter, Sesame Sauce,
                  or House Fish Sauce
                </p>
                <p className="desc">
                  Rice Paper, Rice Vermicelli Noodle, Lettuce, Pickled Carrot
                  Daikon, Cilantro & Shrimp
                </p>
                <p className="desc">Options to replace Shrimp with:</p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">
                    A2. Lemongrass Grilled Chicken
                  </span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">A3. Grilled Beef </span>
                  <span className="price">$7.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">A4. Grilled Pork</span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">A5. Grilled Jumbo Shrimp</span>
                  <span className="price">$7.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">A6. Deep Fried Tofu</span>
                  <span className="price">$6.50</span>
                </div>
              </div>
            </div>
          </div>
          <div className="food-section">
            <img src="eggrolls.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">
                  A7. NEM RAN (CRISPY SPRING ROLLS)
                </span>
                <span className="price">$6.50</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Two rolls per order, served with Sweet Sauce or House Fish
                  Sauce
                </p>
                <p className="desc">
                  Noodle, Carrot, White Onion, Black Fungus, Chopped Shrimp &
                  Ground Pork
                </p>
              </span>
            </div>
          </div>
          {/*end of a7*/}

          <div className="food-section">
            <img src="a8.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">
                  A8. NEM CUA BE (SPECIAL CRISPY SPRING ROLLS WITH CRAB MEAT)
                </span>
                <span className="price">$6.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Two rolls per order, served with House Fish Sauce
                </p>
                <p className="desc">
                  Vietnamese Special Deep Fried Spring Rolls Filled with Crab
                  Meat, Noodle, Carrot, White Onion, Black Fungus, Chopped
                  Shrimp & Ground Pork
                </p>
              </span>
            </div>
          </div>
          {/*end of a8*/}
        </div>
      </div>
      {/*start of House Specials*/}
      <div className="menu-group">
        <span className="food-group">
          <h1>House Specials</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/bun_cha.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H1. BUN CHA HA NOI</span>
                <span className="price">$16.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Grilled Pork & Meatballs Served with Vermicelli Rice Noodle,
                  Lettuce, Cucumber, Pickled Carrot & Green Papaya, Cilantro,
                  Herbs of the Season & House Fish Sauce
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">Extra Meat</span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Noodles</span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Veggies</span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Fried Egg</span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Crispy Spring Roll</span>
                  <span className="price">$6.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Add Crispy Crab Meat Spring Roll
                  </span>
                  <span className="price">$6.99</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of hs1*/}

          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/bun_nem_cua_be.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H2. BUN NEM CUA BE</span>
                <span className="price">$16.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Vietnamese Special Crispy Spring Rolls with Crab Meat Served
                  with Vermicelli Rice Noodle, Lettuce, Cucumber, Pickled Carrot
                  & Green Papaya, Cilantro, Herbs of the Season
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">
                    Add Crispy Crab Meat Spring Roll
                  </span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Noodles</span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Veggies</span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Fried Egg</span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Crispy Spring Roll</span>
                  <span className="price">$3.00</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of hs2*/}

          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/bun_bo_hue.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H3. BUN BO HUE</span>
                <span className="price">$16.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Vietnamese Spicy Beef & Pork Noodle Soup Served with Beef
                  Muscle, Pork, Pork Blood, Vietnamese Pork Ham, Lemongrass &
                  Herbs of the Season
                </p>
              </span>
            </div>
          </div>
          {/*end of hs3*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/bun_dau_mam_tom.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H4. BUN DAU MAM TOM</span>
                <span className="price">$19.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Rice Vermicelli Noodle with Deep Fried Tofu, Sliced Pork,
                  Green Sticky Rice Patties, Pig Stomach, Cucumber, Herbs of the
                  Season, Served with Shrimp Paste or Fish Sauce
                </p>
              </span>
            </div>
          </div>
          {/*end of hs4*/}

          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/banh_cuon_cha_lua.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H6. BANH CUON CHA LUA</span>
                <span className="price">$15.50</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Steamed Thin Rice Rolls Filled with Ground Pork, Ground
                  Shrimp, Black Fungus, Chopped Onion, Served with Vietnamese
                  Pork Ham, Cucumber, Pickled Carrot Green Papaya, Bean Spout,
                  Fried Onion, Cilantro, Herbs of the Season & Fish Sauce
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">Extra Vietnamese Pork Ham</span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Extra Steamed Thin Rice Rolls
                  </span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Veggies</span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Add Grilled Pork & Grilled Pork Meatball
                  </span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Fried Egg</span>
                  <span className="price">$4.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Crispy Spring Roll</span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Add Crispy Crab Meat Spring Roll
                  </span>
                  <span className="price">$3.99</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of hs5*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/banh_cuon_thit_nuong.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H7. BANH CUON THIT NUONG</span>
                <span className="price">$15.50</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Steamed Thin Rice Rolls Filled with Ground Pork, Ground
                  Shrimp, Black Fungus, Chopped Onion, Served with Grilled Pork
                  & Grilled Pork Meatballs, Cucumber, Pickled Carrot Green
                  Papaya, Bean Spout, Fried Onion, Cilantro, Herbs of the Season
                  & Fish Sauce
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">Extra Vietnamese Pork Ham</span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Extra Steamed Thin Rice Rolls
                  </span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Veggies</span>
                  <span className="price">$3.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Add Grilled Pork & Grilled Pork Meatball
                  </span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Fried Egg</span>
                  <span className="price">$4.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Crispy Spring Roll</span>
                  <span className="price">$2.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Add Crispy Crab Meat Spring Roll
                  </span>
                  <span className="price">$3.99</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of hs6*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/bo_ne.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">
                  H8. BANH MI BO NE (Dine-in only)
                </span>
                <span className="price">$18.50</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Vietnamese Sub with Beef Steak, Beef Meatball, Omelet, Jumbo
                  Onion, Tomato, & Pate
                </p>
              </span>
            </div>
          </div>
          {/*end of hs7*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/thit_quay.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H9. THIT QUAY GION BI</span>
                <span className="price">$12.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Crispy Pork Belly Served with Lettuce, Pickled Carrot Daikon &
                  Spicy Sauce on the Side
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">
                    Add Rice/ Rice Vermicelli Noodle/Sub
                  </span>
                  <span className="price">$2.50 Each</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Pork Belly</span>
                  <span className="price">$4.50</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of hs8*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/ca_kho_to.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">H10. COM CA KHO TO</span>
                <span className="price">$16.99</span>
              </span>
              <span className="food-description">
                <p className="desc">Caramelized Fish Served with White Rice</p>
              </span>
            </div>
          </div>
          {/*end of House Specials*/}
        </div>
      </div>
      {/*start of pho*/}

      <div className="menu-group">
        <span className="food-group">
          <h1>Pho</h1>
        </span>
        <span className="food-group-desc">
          All Pho comes with Bean Sprout, Lime, Jalapeno, White Onion, Green
          Onion, Cilantro, and Chopped Ginger
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/pho_suon_bo.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">
                  P0. PHO SUON BO (Dine-in only)
                </span>
                <span className="price">$24.99</span>
              </span>
              <span className="food-description">
                <p className="desc">Pho with Beef Rib</p>
              </span>
            </div>
          </div>
          {/*end of p0*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/pho_bo.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">P1. PHO BO TAI</span>
                <span className="price">$14.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Beef Pho with Medium Rare Eye-Round Beef Steak
                </p>
              </span>
              <span className="food-name">
                <span className="item-name">P2. PHO BO CHIN</span>
                <span className="price">$14.99</span>
              </span>
              <span className="food-description">
                <p className="desc">Beef Pho with Well-done Brisket</p>
              </span>
              <span className="food-name">
                <span className="item-name">P3. PHO BO TAI CHIN</span>
                <span className="price">$14.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Beef Pho with Medium Rare Eye-Round Beef Steak & Well-done
                  Brisket
                </p>
              </span>
              <span className="food-name">
                <span className="item-name">P4. PHO BO DAC BIET</span>
                <span className="price">$15.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Special Beef Pho with Medium Rare Eye-Round Beef Steak,
                  Well-done Brisket, Beef Meatballs, Beef Tendon & Beef Tripe
                </p>
              </span>
            </div>
          </div>
          {/*end of p1-4*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/pho_ga_da_vang.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">P5. PHO GA TRANG</span>
                <span className="price">$14.50</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Chicken Pho with Chicken White Meat (Veggie or Beef Broth)
                </p>
              </span>
            </div>
          </div>
          {/*end of p5*/}
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/pho_tom.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">P6. PHO TOM</span>
                <span className="price">$15.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Pho with Jumbo Shrimp (Veggie or Beef Broth)
                </p>
              </span>
            </div>
          </div>
          {/*end of p6*/}
          <div className="food-section">
            <img src="/hvlogo.png" style={{ opacity: "0", width: "100%" }} />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">P7. PHO VEGGIE TOFU MUSHROOM</span>
                <span className="price">$14.50</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Pho with Veggie, Mushroom & Tofu (Veggie or Beef Broth)
                </p>
              </span>
            </div>
          </div>
          {/*end of p7*/}
          <div className="food-section">
            <img src="/hvlogo.png" style={{ opacity: "0", width: "100%" }} />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">P8. PHO KHONG THIT</span>
                <span className="price">$9.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Plain Pho without meat (Veggie or Beef Broth)
                </p>
              </span>
            </div>
          </div>
          {/*end of p8*/}
        </div>
      </div>
      {/*end of pho*/}
      <div className="menu-group">
        <span className="food-group">
          <h1>Bun & My</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/bun_thit_nuong.jpeg" />
            <div className="menu-content">
              <div className="food-name">
                <span className="item-name">BUN - VERMICELLI NOODLES</span>
              </div>
              <span className="food-description">
                <p className="desc">
                  All Vermicelli Rice Noodles comes with Lettuce, Pickled Carrot
                  Daikon, Jalapeno, Cilantro, Roasted Peanut, Fried Onion Served
                  with Fish Sauce, and Choice of Protein:
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">
                    N1. Lemongrass Grilled Chicken
                  </span>
                  <span className="price">$14.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">N2. Grilled Beef</span>
                  <span className="price">$16.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">N3. Grilled Pork</span>
                  <span className="price">$14.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">N4. Grilled Jumbo Shrimp</span>
                  <span className="price">$15.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    N5. Grilled Mushroom, Veggies & Deep Fried Tofu
                  </span>
                  <span className="price">$14.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">N6. Crispy Pork Belly</span>
                  <span className="price">$15.50</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of bun*/}
        </div>
      </div>
      {/*end of bun*/}

      <div className="menu-group">
        <span className="food-group">
          <h1>Com</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/com_bo.jpg" />
            <div className="menu-content">
              <div className="food-name">
                <span className="item-name">COM - WHITE RICE</span>
              </div>
              <span className="food-description">
                <p className="desc">
                  Steamed Jasmine White Rice served with Lettuce, Pickled Carrot
                  Daikon, Jalapeno, Cilantro, House Fish Sauce. Choice of
                  Protein:
                </p>
              </span>
              <div className="addon-section">
                <div className="food-name">
                  <span className="item-name">
                    C1. Lemongrass Grilled Chicken
                  </span>
                  <span className="price">$14.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">C2. Grilled Beef</span>
                  <span className="price">$16.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">C3. Grilled Pork</span>
                  <span className="price">$14.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">C4. Grilled Jumbo Shrimp</span>
                  <span className="price">$15.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    C5. Grilled Mushroom, Veggies & Deep Fried Tofu
                  </span>
                  <span className="price">$14.99</span>
                </div>
                <div className="food-name">
                  <span className="item-name">C6. Crispy Pork Belly</span>
                  <span className="price">$15.50</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of com*/}
        </div>
      </div>
      {/*end of com*/}
      <div className="menu-group">
        <span className="food-group">
          <h1>Banh Mi</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/banh_mi_ga_nuong.jpg" />
            <div className="menu-content">
              <div className="food-name">
                <span className="item-name">BANH MI - VIETNAMESE SUB</span>
              </div>
              <span className="food-description">
                <p className="desc">
                  All subs come with Cucumber, Jalapeno, Mayonnaise, Lettuce,
                  Pickled Carrot Daikon, Cilantro. Choice of protein
                </p>
              </span>
              <div className="food-name">
                <span className="item-name">
                  BM1. Lemongrass Grilled Chicken
                </span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM2. Grilled Beef</span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM2. Grilled Beef</span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM2. Grilled Pork</span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM4. Grilled Jumbo Shrimp</span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM5. Fried Eggs</span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">
                  BM6. Deep Fried Tofu & Mushroom
                </span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM7. Pork Ham & Pate</span>
                <span className="price">$15.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">BM2. Grilled Pork</span>
                <span className="price">$15.50</span>
              </div>
            </div>
            <div className="food-section">
              <img
                src="https://www.hellovietnamfood.com/banh_mi_bo_ne.jpg"
                style={{ opacity: "0" }}
              />
              <div className="menu-content">
                <div className="food-name">
                  <span className="item-name">Add Egg</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Beef</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Pork</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Pork Belly</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Chicken</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Jumbo Shrimps k</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Mushroom & Tofu</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Pate</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Extra Pork Ham</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Add Crispy Spring Roll</span>
                  <span className="price">$15.50</span>
                </div>
                <div className="food-name">
                  <span className="item-name">
                    Add Crispy Crab Meat Spring Roll
                  </span>
                  <span className="price">$15.50</span>
                </div>
              </div>
            </div>
          </div>
          {/*end of banhmi*/}
        </div>
      </div>
      {/*end of banhmi*/}
      <div className="menu-group">
        <span className="food-group">
          <h1>Drinks</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/iced_coffee.jpg" />
            <div className="menu-content">
              <div className="food-name">
                <span className="item-name">CAFE SUA DA - ICED COFFEE</span>
                <span className="price"> $5.50</span>
              </div>
              <span className="food-description">
                <p className="desc">Coffee & Condense Milk</p>
              </span>

              <div className="food-name">
                <span className="item-name">BAC XIU - WHITE ICED COFFEE</span>
                <span className="price"> $5.50</span>
              </div>
              <span className="food-description">
                <p className="desc">
                  Coffee, Condense Milk, Half & Half/Whole Milk
                </p>
              </span>
            </div>
          </div>
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/sinh_to_bo.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">SINH TO - SMOOTHIES/JUICE</span>
                <span className="price">$6.50</span>
              </span>
              <span className="food-name">
                <span className="item-name">Avocado Smoothie</span>
              </span>
              <span className="food-name">
                <span className="item-name">Coffee Avocado Smoothie</span>
              </span>
              <span className="food-name">
                <span className="item-name">Mango Smoothie</span>
              </span>
              <span className="food-name">
                <span className="item-name">Mixed Berry Smoothie</span>
              </span>
              <span className="food-name">
                <span className="item-name">Strawberry Smoothie</span>
              </span>
            </div>
          </div>

          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/tra_sua.jpeg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">TRA SUA - BUBBLE TEA</span>
                <span className="price">$4.99</span>
              </span>
              <span className="food-description">
                <p className="desc">
                  Add Black Topioca Pearl, Popping Boba, or Jelly for $0.50 each
                </p>
              </span>

              <div className="addons">
                <div className="food-name">
                  <span className="item-name">Classic Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Tiger Sugar Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Strawberry Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Mango Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Matcha Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Coconut Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Thai Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Taro Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Rose Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Black Sesame Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Honeydew Milk Tea</span>
                </div>
                <div className="food-name">
                  <span className="item-name">Almond Milk Tea</span>
                </div>
              </div>
            </div>
          </div>
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/coke.jpg" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">Iced Tea</span>
                <span className="price">$2.50</span>
              </span>
              <span className="food-name">
                <span className="item-name">Hot Tea</span>
                <span className="price">$2.50</span>
              </span>
              <span className="food-name">
                <span className="item-name">Bottled Coconut Juice</span>
                <span className="price">$2.50</span>
              </span>
              <span className="food-name">
                <span className="item-name">Bottled Water</span>
                <span className="price">$3.50</span>
              </span>
              <span className="food-name">
                <span className="item-name">
                  Canned Soda: Sprite, Coke, Diet Coke, Pepsi, Sunkist, Ginger
                  Ale
                </span>
                <span className="price">$1.99</span>
              </span>
              <span className="food-name">
                <span className="item-name">Other Canned Drinks</span>
                <span className="price">$1.99</span>
              </span>
              <span className="food-name">
                <span className="item-name">Strawberry Smoothie</span>
                <span className="price">$2.99</span>
              </span>
            </div>
          </div>
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/beer.png" />
            <div className="menu-content">
              <span className="food-name">
                <span className="item-name">Bottle Beer</span>
                <span className="price">$5.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*end of drinks*/}
      <div className="menu-group">
        <span className="food-group">
          <h1>Desserts</h1>
        </span>
        <div className="food-section-container">
          <div className="food-section">
            <img src="https://www.hellovietnamfood.com/tiramisu.jpeg" />
            <div className="menu-content">
              <div className="food-name">
                <span className="item-name">Icecream Bar</span>
                <span className="price"> $2.99</span>
              </div>
              <div className="food-name">
                <span className="item-name">Tiramisu</span>
                <span className="price"> $4.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">Chocolate Mousse</span>
                <span className="price"> $4.50</span>
              </div>
              <div className="food-name">
                <span className="item-name">Mango Mousse</span>
                <span className="price"> $4.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end of menu*/}
    </div>
  );
}

export default Menu;
