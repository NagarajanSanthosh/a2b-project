import React from 'react'
import '../styles/homepage.css';
import exampleImage from '../assets/a2blogo.jpg';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/menu');
  }

  return (
    <div className="homepage" onClick={handleClick}>
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