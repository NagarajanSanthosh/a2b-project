import React, { useState } from 'react'

const Offer = ({setboolClick}) => {
    const [Offer, setOffer] = useState(false);
    function handleClick(e){
        e.preventDefault();
        setOffer(true);
        setboolClick(Offer);


    }
    return (
        <div onClick={handleClick}>Offer
        </div>
    )
}

export default Offer