import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const handleCartClick = (e) => {
        e.preventDefault();
        navigate('/addtocart')
    }
    
    return (
        <div onClick={handleCartClick}>
            Cart

        </div>
    )
}

export default Cart