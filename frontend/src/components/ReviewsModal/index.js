import React, { useEffect, useState } from "react";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";

import "./ReviewsModal.css";

const ReviewsModal = ({ drinkId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let errors = [];
    if (comment.length > 200) errors.push("Review must be less than 200 characters");
    if (rating < 1 || rating > 5) errors.push("Rating must be 1 - 5")
    setErrors(errors);
  }, [comment, rating]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const reviewPayload = {
      userId: sessionUser.id,
      drinkId,
      comment,
      rating,
      imageUrl,
    };
    if (errors.length === 0) {
      dispatch(reviewActions.createReview(reviewPayload));
    }
  };
  // id
  // userId
  // drinkId
  // comment
  // rating
  // imageurl
  return (
    <form className="review_form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
        <div className='review_stars'>
          <span
          value={rating}
          onClick={(e) => setRating(1)}>
            {rating && rating >= 1 ?
            <i className="fas fa-star fa-star-form"></i> :
            <i className="far fa-star fa-star-form"></i>}
          </span>
          <span
          value={rating}
          onClick={(e) => setRating(2)}>
            {rating && rating >= 2 ?
            <i className="fas fa-star fa-star-form"></i> :
            <i className="far fa-star fa-star-form"></i>}
          </span>
          <span
          value={rating}
          onClick={(e) => setRating(3)}>
            {rating && rating >= 3 ?
            <i className="fas fa-star fa-star-form"></i> :
            <i className="far fa-star fa-star-form"></i>}
          </span>
          <span
          value={rating}
          onClick={(e) => setRating(4)}>
            {rating && rating >= 4 ?
            <i className="fas fa-star fa-star-form"></i> :
            <i className="far fa-star fa-star-form"></i>}
          </span>
          <span
          value={rating}
          onClick={(e) => setRating(5)}>
            {rating && rating === 5 ?
            <i className="fas fa-star fa-star-form"></i> :
            <i className="far fa-star fa-star-form"></i>}
          </span>
        </div>
        <input
          placeholder='Comment'
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          placeholder='Optional Image URL'
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      <button disabled={errors.length === 0 ? false : true} type="submit" className='review_submit_button'>Submit</button>
    </form>
  );
};

export default ReviewsModal;
