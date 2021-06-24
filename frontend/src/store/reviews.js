import { csrfFetch } from "./csrf";

// Define Action Types
const SET_REVIEWS = "reviews/SET_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
// const REMOVE_DRINK = 'reviews/REMOVE_DRINK'
// const UPDATE_DRINK = 'reviews/UPDATE_DRINK'

// Define Action Creators
const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  reviews,
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review,
});

// const removeDrink = (drink) => ({
//   type: REMOVE_DRINK,
//   drink
// })

// const updateDrink = (drink, drinkPayload) => ({
//   type: UPDATE_DRINK,
//   drink,
//   drinkPayload
// })

// Define Thunks
export const getReviews = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews/");
  const reviews = await res.json();
  dispatch(setReviews(reviews));
};

export const createReview = (reviewPayload) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews/", {
    method: "POST",
    body: JSON.stringify(reviewPayload),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(addReview(review));
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(removeReview(review));
  }
};

// export const deleteDrink = (drinkId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/drinks/${drinkId}`, {
//     method: "DELETE"
//   })
//   if (res.ok) {
//     const drink = await res.json();
//     dispatch(removeDrink(drink))
//   }
// }

// export const editDrink = (drinkId, drinkPayload) => async (dispatch) => {
//   const res = await csrfFetch(`/api/drinks/${drinkId}`, {
//     method: "PUT",
//     body: JSON.stringify(drinkPayload),
//     headers: {'Content-Type':'application/json'}
//   })
//   if (res.ok) {
//     const drink = await res.json();
//     dispatch(updateDrink(drink, drinkPayload))
//   }
// }

// Define an initial state
const initialState = {};

// Define a reducer
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      const allReviews = {};
      action.reviews.forEach((review) => {
        allReviews[review.id] = review;
      });
      return {
        ...state,
        ...allReviews,
      };
    case ADD_REVIEW:
      return {
        ...state,
        [action.review.id]: action.review,
      };
    case REMOVE_REVIEW:
      const newState = { ...state };
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

// Export the reducer
export default reviewsReducer;
