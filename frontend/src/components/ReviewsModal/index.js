import React, { useEffect, useState } from "react";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";

import './ReviewsModal.css'

const ReviewsModal = ({ drinkId }) => {
  const sessionUser = useSelector((state) => state.session.user)
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let errors = [];
    if (comment.length > 200) errors.push('Review must be less than 200 characters')
    setErrors(errors)

  }, [comment])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const reviewPayload = {
      userId: sessionUser.id,
      drinkId,
      comment,
      rating,
      imageUrl,
      errors
    }

    dispatch(reviewActions.createReview(reviewPayload))
  };
  // id
  // userId
  // drinkId
  // comment
  // rating
  // imageurl
  return (
    <form className='review_form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Rating
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>
      <label>
        Comment
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <label>
        Image URL
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewsModal;
