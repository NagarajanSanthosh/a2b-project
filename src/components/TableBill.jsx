import React from 'react'
import { useNavigate } from 'react-router-dom';
import exampleImage from '../assets/a2blogo.jpg';

const TableBill = () => {
    const navigate = useNavigate();
    const handleAddmore = (e) => {
      e.preventDefault();
      navigate('/')
    }
    const handleOrder = (e) => {
      e.preventDefault();
      navigate('/success')
    }
    return (
        <div className="main">
      <div className="pdhead">
        <img src={exampleImage} alt="a2b-img" />
        <h1>ADYAR ANANDA BHAVAN</h1>
      </div>
      <br />
      

      <button className='addmorebutton' onClick={handleAddmore}>Addmore</button>
      <button className='request-btn btn btn-danger' onClick={handleOrder}>Request bill</button>
      <br />
      <br />



    </div>
    )
}

export default TableBill