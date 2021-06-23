import * as drinkActions from "../../store/drinks";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import AddDrinkForm from "../AddDrinkForm";
import ReviewsModal from "../ReviewsModal";
import ReviewsContainer from "../ReviewsContainer";
import { useState } from "react";

import "./DrinksCard.css";

const DrinksCard = ({ name, imageUrl, description, drinkId, userId}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);


  return (
    <div className="card">
      <div className="card_img_container">
        <img className="card_img" src={imageUrl} alt={name} />
      </div>
      <div className="card_details">
        <h5>{name}</h5>
        <div className="card_desc">
          <span>{description}</span>
        </div>
      </div>
      <div className="card_reviews">
        <button onClick={() => setShowModal2(true)}>Reviews</button>
        {showModal2 && (
          <Modal onClose={() => setShowModal2(false)}>
            <ReviewsContainer drinkId={drinkId}/>
            <ReviewsModal drinkId={drinkId} />
          </Modal>
        )}
        <button
          hidden={sessionUser && sessionUser.id === userId ? false : true}
          onClick={() => setShowModal(true)}
        >
          Update
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddDrinkForm type="create" drinkId={drinkId} />
          </Modal>
        )}
        <button
          hidden={sessionUser && sessionUser.id === userId ? false : true}
          onClick={() => dispatch(drinkActions.deleteDrink(drinkId))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DrinksCard;
