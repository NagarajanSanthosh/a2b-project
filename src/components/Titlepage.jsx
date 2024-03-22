import React from 'react';
import exampleImage from '../assets/a2blogo.jpg';
import '../styles/title.css';

const Titlepage = () => {
  return (
    <div>
       <div className="heading">
        <img src={exampleImage} alt="" />
        <h1>ADYAR ANANDA BHAVAN</h1>
      </div>
    </div>
  )
}

export default Titlepage