import React from 'react'
import '../styles/OrderPlaced.css';
import exampleImage from '../assets/a2blogo.jpg';
import right from '../assets/right.jpg';
import Titlepage from './TitlePage';
const OrderPlaced = () => {
  return (
    <div className='main2 order-placed'>
       <Titlepage/>
     
      <div className="logoback">
      <div className="verificationbox">
       <img src={right} alt="" />
       </div>
        <img src={exampleImage} alt="" />
      </div>
      <div className="botext">
      <h3>Bill requests sent successfully</h3>
      <br /><br />
      <h1>Thank you have a nice day</h1>
      </div>
<br />
    </div>
  )
}

export default OrderPlaced;