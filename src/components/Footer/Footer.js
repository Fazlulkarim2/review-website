import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div class=" mt-5 bg-danger">
        <div class="row">
          <div class="col fs-5">
            <h2>Our popular courses</h2>
            <p>Online Learning</p>
            <p>Personal Lessons</p>
            <p>Goup Lessons</p>
            <p>English for kids</p>
          </div>
          <div class="col fs-5">
            <h2>Get In Touch</h2>
            <p>Send messege</p>
            <p>Contacts </p>
            <div className='d-flex justify-content-evenly'>
       <p><a href="https://www.youtube.com/watch?v=N_x3AoC1aeI"><i class="fab fa-youtube text-warning"></i></a></p>
       <p><a href=" https://web.facebook.com/search/top?q=munzereen%20shahid"><i class="fab fa-facebook"></i></a></p>
       </div>
          </div>
       
        </div>
      </div>
    );
};

export default Footer;