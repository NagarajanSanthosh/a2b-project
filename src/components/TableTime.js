import React from 'react'
import Titlepage from './Titlepage';
import exampleImage from '../assets/a2blogo.jpg';

import '../styles/Tabletime.css';

const TableTime = () => {
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
        <button className='addbtn'>Addmore</button>
        <button className='requestbil'>Request bill</button>
        <br /><br />
    </div>


    </div>
  )
}

export default TableTime