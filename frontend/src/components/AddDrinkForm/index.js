import React, { useEffect, useState } from "react";
import * as drinkActions from "../../store/drinks";
import { useDispatch, useSelector } from "react-redux";
// userId
// name
// imageUrl
// description
import "./AddDrinkForm.css";

const AddDrinkForm = ({ type, drinkId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let errors = [];

    if (name.length > 20) errors.push("Name must be less than 20 characters");
    if (description.length > 100)
      errors.push("Description must be less than 100 characters");

    setErrors(errors);
  }, [name, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const drinkPayload = {
      userId: sessionUser.id,
      name,
      imageUrl,
      description,
      errors,
    };

    if (imageUrl === '') {
      drinkPayload.imageUrl = 'https://www.abhimaan.biz/uploads/product_images/empty-img.png';
    }

    if (errors.length === 0 && type === "create") {
      dispatch(drinkActions.createDrink(drinkPayload));
    } else {
    // } else if (errors.length === 0 && type === 'update) {
      dispatch(drinkActions.editDrink(drinkId, drinkPayload));

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.length !== 0 &&
          errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>Name of Drink</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button disabled={errors.length === 0 ? false : true} type="submit">
        Create Drink
      </button>
    </form>
  );
};

export default AddDrinkForm;
