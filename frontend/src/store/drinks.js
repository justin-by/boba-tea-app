import { csrfFetch } from "./csrf";

// Define Action Types
const SET_USER_DRINKS = "drinks/SET_USER_DRINKS";
const SET_DRINKS = "drinks/SET_DRINKS";
const ADD_DRINK = "drinks/ADD_DRINK";
const REMOVE_DRINK = "drinks/REMOVE_DRINK";
const UPDATE_DRINK = "drinks/UPDATE_DRINK";

// Define Action Creators
const setDrinks = (drinks) => ({
  type: SET_DRINKS,
  drinks,
});

const setUserDrinks = (drinks) => ({
  type: SET_USER_DRINKS,
  drinks,
});

const addDrink = (drink) => ({
  type: ADD_DRINK,
  drink,
});

const removeDrink = (drink) => ({
  type: REMOVE_DRINK,
  drink,
});

const updateDrink = (drink) => ({
  type: UPDATE_DRINK,
  drink,
});

// Define Thunks
export const getDrinks = () => async (dispatch) => {
  const res = await csrfFetch("/api/drinks/");
  const drinks = await res.json();
  dispatch(setDrinks(drinks));
};

export const getUserDrinks = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/drinks/users/${userId}`);
  const drinks = await res.json();
  dispatch(setUserDrinks(drinks));
};

export const createDrink = (drinkPayload) => async (dispatch) => {
  const res = await csrfFetch("/api/drinks", {
    method: "POST",
    body: JSON.stringify(drinkPayload),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const drink = await res.json();
    dispatch(addDrink(drink));
  }
};

export const deleteDrink = (drinkId) => async (dispatch) => {
  const res = await csrfFetch(`/api/drinks/${drinkId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const drink = await res.json();
    dispatch(removeDrink(drink));
  }
};

export const editDrink = (drinkId, drinkPayload) => async (dispatch) => {
  const res = await csrfFetch(`/api/drinks/${drinkId}`, {
    method: "PUT",
    body: JSON.stringify(drinkPayload),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const drink = await res.json();
    dispatch(updateDrink(drink));
  }
};

// Define an initial state
const initialState = {
  allDrinks: {},
  userDrinks: {},
};

// Define a reducer
const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINKS:
      const newState3 = { ...state };
      action.drinks.forEach((drink) => {
        newState3.allDrinks[drink.id] = drink;
      });
      return newState3;
    case SET_USER_DRINKS:
      const newState2 = { ...state };
      action.drinks.forEach((drink) => {
        newState2.userDrinks[drink.id] = drink;
      });
      return newState2;
    case ADD_DRINK:
      const newState4 = { ...state };
      newState4.allDrinks[action.drink.id] = action.drink;
      newState4.userDrinks[action.drink.id] = action.drink;
      return {
        ...newState4,
      };
    case REMOVE_DRINK:
      const newState = { ...state };
      delete newState.allDrinks[action.drink.id];
      delete newState.userDrinks[action.drink.id];
      return {
        ...newState,
      };
    case UPDATE_DRINK:
      const newState1 = { ...state };
      if (newState1.allDrinks[action.drink.id]) {
        delete newState1.allDrinks[action.drink.id];
        delete newState1.userDrinks[action.drink.id];
        newState1.allDrinks[action.drink.id] = action.drink;
        newState1.userDrinks[action.drink.id] = action.drink;
        return {
          ...newState1,
        };
      }
    default:
      return state;
  }
};

// Export the reducer
export default drinksReducer;

// EXAMPLE
// case SET_DRINKS:
//   const allDrinks = {};
//   const userDrinks = {};
//   action.drinks.forEach((drink) => {
//     allDrinks[drink.id] = drink;
//   });
//   return {
//     allDrinks, userDrinks
//   };
