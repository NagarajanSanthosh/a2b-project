import React from 'react'
import Titlepage from './TitlePage';
import exampleImage from '../assets/a2blogo.jpg';

import '../styles/Tabletime.css';
import { useNavigate } from 'react-router-dom';

const TableTime = () => {
    const navigate = useNavigate();

    const handleAddmore =(e) => {
        e.preventDefault();
        navigate('/menu')
    }
    const handleRequest =(e) => {
        e.preventDefault();
        navigate('/success')
    }
  return (
    <div className='container'>
        <div className="titl">
         <Titlepage/>
        </div>
          
    <div className="logoboxes">
        <div className="box">
            <span className='box1'></span>
            <span  className='box2'></span>
        </div> 
        <img src={exampleImage} alt="" />
    </div>
    <div className="btns">
        <button className='addbtn' onClick={handleAddmore}>Addmore</button>
        <button className='requestbil' onClick={handleRequest}>Request bill</button>
        <br /><br />
    </div>


    </div>
  )
}

export default TableTime