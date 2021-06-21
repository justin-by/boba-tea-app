import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDrinks } from '../../store/drinks';

import './DrinksCard.css'

const DrinksCard = ({ name, imageUrl, description }) => {
    return (
        <div className='card'>
            <div className='card_body'>
                <h5>{name}</h5>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default DrinksCard;
