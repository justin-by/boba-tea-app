import { csrfFetch } from "./csrf";

// Define Action Types
const SET_DRINKS = "drinks/SET_DRINKS";

// Define Action Creators
const setDrinks = (drinks) => ({
  type: SET_DRINKS,
  drinks,
});

// Define Thunks
export const getDrinks = () => async (dispatch) => {
  const res = await csrfFetch("/api/drinks/");
  const drinks = await res.json();
  dispatch(setDrinks(drinks));
};

// Define an initial state
const initialState = {};

// Define a reducer
const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINKS:
      const allDrinks = {};
      action.drinks.forEach((drink) => {
        allDrinks[drink.id] = drink;
      });
      return {
        ...state,
        ...allDrinks,
      };
    default:
      return state;
  }
};

// Export the reducer
export default drinksReducer;
