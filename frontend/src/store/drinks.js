import { csrfFetch } from "./csrf";

// Define Action Types
const SET_DRINKS = "drinks/SET_DRINKS";
const ADD_DRINK = 'drinks/ADD_DRINK';
const REMOVE_DRINK = 'drinks/REMOVE_DRINK'
const UPDATE_DRINK = 'drinks/UPDATE_DRINK'

// Define Action Creators
const setDrinks = (drinks) => ({
  type: SET_DRINKS,
  drinks,
});

const addDrink = (drink) => ({
  type: ADD_DRINK,
  drink
})

const removeDrink = (drink) => ({
  type: REMOVE_DRINK,
  drink
})

const updateDrink = (drink, drinkPayload) => ({
  type: UPDATE_DRINK,
  drink,
  drinkPayload
})

// Define Thunks
export const getDrinks = () => async (dispatch) => {
  const res = await csrfFetch("/api/drinks/");
  const drinks = await res.json();
  dispatch(setDrinks(drinks));
};

export const createDrink = (drinkPayload) => async (dispatch) => {
  const res = await csrfFetch('/api/drinks', {
    method: 'POST',
    body: JSON.stringify(drinkPayload),
    headers: {'Content-Type': 'application/json'}
  });

  if (res.ok) {
    const drink = await res.json();
    dispatch(addDrink(drink))
  }
}

export const deleteDrink = (drinkId) => async (dispatch) => {
  const res = await csrfFetch(`/api/drinks/${drinkId}`, {
    method: "DELETE"
  })
  if (res.ok) {
    const drink = await res.json();
    dispatch(removeDrink(drink))
  }
}

export const editDrink = (drinkId, drinkPayload) => async (dispatch) => {
  const res = await csrfFetch(`/api/drinks/${drinkId}`, {
    method: "PUT",
    body: JSON.stringify(drinkPayload),
    headers: {'Content-Type':'application/json'}
  })
  if (res.ok) {
    const drink = await res.json();
    dispatch(updateDrink(drink, drinkPayload))
  }
}

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
    case ADD_DRINK:
      return {
        ...state,
        [action.drink.id]: action.drink
      }
    case REMOVE_DRINK:
      const newState = {...state}
      delete newState[action.drink.id];
      return newState;
    case UPDATE_DRINK:
      return {
        ...state,
        [action.drink.id]: action.drink,
      }
    default:
      return state;
  }
};

// Export the reducer
export default drinksReducer;
