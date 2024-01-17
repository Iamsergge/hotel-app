// Home.js
import React from 'react';


import hotel1 from '../images/hotel1.jpg';
import gym1 from '../images/gym1.jpg';
import poolbar from '../images/poolbar.jpg';
import spa1 from '../images/spa1.jpg';
import swimmingpool from '../images/swimmingpool.jpg';
import restuarent from '../images/restuarent.jpg';
import laundry from '../images/laundry.jpg';

function Home() {
  return (
    <div>
      <div className="img-container">
        <img src={hotel1} className="hotel1" alt="img" />
        <div className="nav-container">
          <nav>
            <div className="navbar-links-container">
              <a href="home" className="nav-links" style={{ fontSize: '25px' }}>
                Facilities
              </a>
              <a href="rooms" className="nav-links" style={{ fontSize: '25px' }}>
                Rooms
              </a>
            </div>
          </nav>
        </div>
        <div className="text-container">
          <p style={{ fontSize: '70px' }}>WELCOME TO</p>
          <h1 style={{ fontSize: '120px', fontFamily: 'serif' }}>LUXURY</h1>
          <h4 style={{ fontSize: '50px', fontFamily: 'serif', wordSpacing: '40px' }}>
            H O T E L S
          </h4>
          <b style={{ fontSize: '18px' }}>
            <p>Book your stay and enjoy Luxury</p>
            <p> redefined at the most affordable rates</p>
          </b>
        </div>
      </div>

      <div className="facilities">
        <div className="text">
          <h1>FACILITIES</h1>
        </div>
        <p>
            We want your stay at our lush hotel to be truly unforgettable. This is why we givespecial attention to all of your needs so <br/>
            &nbsp;that we can ensure an experience quite unique. Luxury hotels offer the perfect setting with stunning views for leisure,<br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;and our modern luxury resort facilities will help you enjoy the best of all.
        </p>

        <div className="gym1">
          <img src={gym1} className="gym1" alt="img" />
          <h1 className="gym-text">THE GYM</h1>
        </div>

        <div className="poolbar">
          <img src={poolbar} className="poolbar" alt="img" />
          <h1 className="poolside-text">POOLSIDE BAR</h1>
        </div>

        <div className="spa1">
          <img src={spa1} className="spa1" alt="img" />
          <h1 className="spa-text">THE SPA</h1>
        </div>

        <div className="swimmingpool">
          <img src={swimmingpool} className="swimmingpool" alt="img" />
          <h1 className="pool-text">SWIMMING POOL</h1>
        </div>

        <div className="restuarent">
          <img src={restuarent} className="restuarent" alt="img" />
          <h1 className="restuarent-text">RESTAURANT</h1>
        </div>

        <div className="laundry">
          <img src={laundry} className="laundry" alt="img" />
          <h1 className="laundry-text">LAUNDRY</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
