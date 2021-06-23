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


  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);


  return (
    <div className="drinks_container">
      {drinks.map((drink) =>
        <DrinksCard
          key={drink.id}
          name={drink.name}
          imageUrl={drink.imageUrl}
          description={drink.description}
          drinkId={drink.id}
          userId={drink.userId}
        />
      )}
    </div>


  );
};

export default DrinksContainer;
