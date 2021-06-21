// import hooks from 'react'
//import hooks from 'react-redux'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./DrinksContainer.css";

import { getDrinks } from "../../store/drinks";

import DrinksCard from "../DrinksCard";

const DrinksContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const drinks = useSelector((state) => Object.values(state.drink));
  console.log(drinks)


  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);

  return (
    <div className="drinks_container">
      {drinks.map((drink) =>
        <DrinksCard
          key={drink.id}
          name={drink.name}
          image={drink.imageUrl}
          description={drink.description}
        />
      )}
    </div>
  );
};

export default DrinksContainer;
