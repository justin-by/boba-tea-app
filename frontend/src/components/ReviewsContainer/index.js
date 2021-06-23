import { useSelector } from "react-redux";
import Review from "../Review";

import './ReviewsContainer.css'


const ReviewsContainer = ({ drinkId }) => {
  const reviews = useSelector((state) => Object.values(state.reviews));
  const drinkReviews = reviews.filter(review => review.drinkId === drinkId);
  return (
    <div className="reviews_container">
      {drinkReviews.map((review) => (
        <Review
        key={review.id}
        comment={review.comment}
        rating={review.rating}
        imageUrl={review.imageUrl}
        userId={review.userId}
        username={review.User.username}
        />
      ))}
    </div>
  );
};

export default ReviewsContainer;
