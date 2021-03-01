import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   let totalPopulation = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const country = cart[i];
  //     totalPopulation = totalPopulation + country.population;
  //   }
  const totalpopulation = cart.reduce(
    (sum, country) => sum + country.population,
    0
  );
  return (
    <div>
      <h2>Cart:{cart.length}</h2>
      <h4>Population:{totalpopulation}</h4>
    </div>
  );
};

export default Cart;
