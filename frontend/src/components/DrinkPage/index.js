import DrinksContainer from "../DrinksContainer";
import AddDrinkButton from "../AddDrinkButton";
import * as reviewActions from "../../store/reviews";

import { useDispatch, useSelector } from "react-redux";

const DrinkPage = () => {
    const dispatch = useDispatch();
    dispatch(reviewActions.getReviews());
    const reviews = useSelector((state) => state.session.reviews);

    return (
    <div>
        <DrinksContainer reviews={reviews}/>
        <AddDrinkButton />
    </div>
    )
}

export default DrinkPage;
