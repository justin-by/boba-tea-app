import DrinksContainer from "../DrinksContainer";
import AddDrinkButton from "../AddDrinkButton";
import * as reviewActions from "../../store/reviews";

import { useDispatch, useSelector } from "react-redux";

const DrinkPage = ({ type, userId }) => {
  const dispatch = useDispatch();
  dispatch(reviewActions.getReviews());
  const reviews = useSelector((state) => state.session.reviews);
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      <DrinksContainer type={type} userId={userId} reviews={reviews} />
      {sessionUser && <AddDrinkButton />}
    </div>
  );
};

export default DrinkPage;
