import React from 'react';
import BannerImage from '../assets/food.jpeg';
import '../style/Home.css';
import {Link} from 'react-router-dom';

function home() {
  return (
    <div className='home'style={{ backgroundImage: `url(${BannerImage})` }} >
        <div className='headerContainer'>
            <h1> Indian Corner </h1>
            <p>Comida india en tu hogar</p>
            
            <Link to="/menu">
                <button>Pedir Ahora</button>
            </Link>
        </div>
    </div>
  );
}

export default home