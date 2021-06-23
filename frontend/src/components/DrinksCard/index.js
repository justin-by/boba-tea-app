import * as drinkActions from "../../store/drinks"
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import AddDrinkForm from "../AddDrinkForm";
import { useState } from "react";



import './DrinksCard.css'

const DrinksCard = ({ name, imageUrl, description, drinkId, userId}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    return (
        <div className='card'>
            <div className='card_img_container'>
                <img className='card_img' src={imageUrl} alt={name}/>
            </div>
            <div className='card_details'>
                <h5>{name}</h5>
                <span>{description}</span>
            </div>
            <div className="card_reviews">
                <button>Reviews</button>
                <button hidden={sessionUser && sessionUser.id === userId ? false : true} onClick={() => setShowModal(true)}>Update</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddDrinkForm type='update' drinkId={drinkId} />
                    </Modal>
                )}
                <button hidden={sessionUser && sessionUser.id === userId ? false : true} onClick={(e) => dispatch(drinkActions.deleteDrink(drinkId))}>Delete</button>
            </div>
    </div>
    )
}

export default DrinksCard;
