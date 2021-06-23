import "./Review.css";

const Review = ({ username, comment, rating, imageUrl, userId }) => {
  console.log(username);
  return (
    <div className="review">
      <div className="review_header">
        <div className="review_username">
          <span>{username}</span>
        </div>
        <div className="review_rating">
          <span>{rating}</span>
        </div>
      </div>
      <div className="review_comment">
        <span>{comment}</span>
      </div>
    </div>
  );
};

export default Review;
