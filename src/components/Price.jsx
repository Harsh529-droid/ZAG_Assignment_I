import React, { useContext } from 'react'
import basket from '../assets/basket.png'
import { useNavigate } from 'react-router-dom'

const Price = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/payment");
    };

    return (

        <div className="Price">

            <div className="totalPrice">
                <span>Total Price</span>
                <h2>198$</h2>
            </div>

            <button onClick={handleClick} className="buy-now-button">
                <img src={basket} alt="" /> Buy Now
            </button>
        </div>

    )
}

export default Price