import React from 'react'
import '../styles/homepage.css';
import exampleImage from '../assets/a2blogo.jpg';
import  { useState, useEffect } from 'react';


const Homepage = () => {
   

  return (
    <div className="homepage" >
        <h1>ADYAR ANANDA BHAVAN</h1>
        <br />
        <img src={exampleImage} alt="" />
        <br />
        <div class="changing-text">
       <div class="text-item">Welcome</div>
       <div class="text-item">Vanakam</div>
       <div class="text-item">Namaste</div>
</div>
        <br />
        <p>Digital Menu Powered by Mahilhub</p>
          <br />
          <h6>^^</h6>
          
          <h5>Swipe up</h5>

    </div>
  )
}

export default Homepage