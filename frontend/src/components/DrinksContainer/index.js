// import hooks from 'react'
//import hooks from 'react-redux'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DrinksContainer.css";
import { getDrinks, getUserDrinks } from "../../store/drinks";


import DrinksCard from "../DrinksCard";

const DrinksContainer = ({ type, userId }) => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const drinks = useSelector((state) => Object.values(state.drink.allDrinks));
  const userDrinks = useSelector((state) => Object.values(state.drink.userDrinks));


  // const [myDrinksPage, setMyDrinksPage] = useState('')

  useEffect(() => {
    // if (type === 'user') {
    //   dispatch(getUserDrinks(userId))
    // } else {
    dispatch(getDrinks());
  }, [dispatch]);

  useEffect (() => {
    if (type) {
      // setMyDrinksPage('true')
      dispatch(getUserDrinks(userId));
    }
  }, [dispatch, type, userId])


  return (
    <div className="drinks_container">
      {type ? userDrinks.map((drink) =>
        <DrinksCard
          key={drink.id}
          name={drink.name}
          imageUrl={drink.imageUrl}
          description={drink.description}
          drinkId={drink.id}
          userId={drink.userId}
        />
      ) : drinks && drinks.map((drink) =>
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
