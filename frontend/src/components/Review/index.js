import { useDispatch, useSelector } from "react-redux";

import * as reviewActions from "../../store/reviews";

import "./Review.css";

const Review = ({ username, comment, rating, imageUrl, userId, reviewId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  return (
    <div className="review">
      <div className="review_header">
        <div className="review_username">
          <span>{username}</span>
        </div>
        <div className="review_rating">
          <span>
            {rating && rating >= 1 ? (
              <i className="fas fa-star"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </span>
          <span>
            {rating && rating >= 2 ? (
              <i className="fas fa-star"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </span>
          <span>
            {rating && rating >= 3 ? (
              <i className="fas fa-star"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </span>
          <span>
            {rating && rating >= 4 ? (
              <i className="fas fa-star"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </span>
          <span>
            {rating && rating === 5 ? (
              <i className="fas fa-star"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </span>
        </div>
      </div>
      <div className="review_comment">
        <span>{comment}</span>
      </div>
      {imageUrl && (
        <div className="review_img_container_center">
          <div className="review_img_container">
            <img className="review_img" src={imageUrl} alt='review'></img>
          </div>
        </div>
      )}

      <div className="review_footer">
        <div
          className="trash_button_holder"
          hidden={sessionUser && sessionUser.id === userId ? false : true}
        >
          <i
            className="fas fa-trash"
            onClick={() => dispatch(reviewActions.deleteReview(reviewId))}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Review;
