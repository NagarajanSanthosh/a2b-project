import React from 'react'
import '../styles/OrderPlaced.css';
import exampleImage from '../assets/a2blogo.jpg';

const OrderPlaced = () => {
  return (
    <div className='main'>

<div className="pdhead">
        <img src={exampleImage} alt="" />
        <h1>ADYAR ANANDA BHAVAN</h1>
      </div>
      <div className="verificationpage">

      <img src={exampleImage} alt="" />
      <p className="verificationbox"></p>
      
       </div>
      <br />
      <h2>Bill requests sent successfully</h2>
      <br /><br />
      <h1>Thank you have a nice day</h1>

    </div>
  )
}

export default OrderPlaced