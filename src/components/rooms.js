import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import rooms from '../images/rooms.jpg';
import Ratings from './ratings';

function RoomDisplay() {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <div className='rooms-container'>
                            <img src={rooms} className='rooms' alt='img' style={{ width: '1200px' }} />
                        </div>
                        <div className='nav-container'>
                            <nav>
                                <div className='navbar-links-container'>
                                    <a href='./home' className='nav-link' style={{ fontSize: '25px' }}>Facilities</a>
                                    <a href='./rooms' className='nav-link' style={{ fontSize: '25px' }}>Rooms</a>
                                </div>
                            </nav>
                        </div>

                        <div className='text-container'>
                            <p style={{ fontSize: '70px' }}>WELCOME TO</p>
                            <h1 style={{ fontSize: '120px', fontFamily: 'serif' }}>LUXURY</h1>
                            <h4 style={{ fontSize: '50px', fontFamily: 'serif', wordSpacing: '40px' }}>H O T E L S</h4>
                            <b style={{ fontSize: '18px' }}>
                                <p>Book your stay and enjoy Luxury</p>
                                <p> redefined at the most affordable rates</p>
                            </b>
                        </div>
                        <tr className='App'>
                            <td>
                                <div className='rooms'>
                                    <h1>ROOMS AND RATES</h1>
                                    <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                                    comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of
                                    nature palette as visible from our rooms sea-view windows and terraces</p>
                                </div>
                                <div className='card'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/hotel-app-884b5.appspot.com/o/rooms%2Froom1.jpg?alt=media&token=02c7a9f5-20a5-44a1-8e07-6c29602af5a0' className='card-image' />
                                    <div className='card-text'>
                                        <h4>The People's Brownstone</h4>
                                        <p>Wifi-Aircondition-Kitchen-Heating-Smokers-Parking-Balcony-Animal friendly</p>
                                        <Link to="/success" className="btn btn-warning">
                                            BOOK
                                        </Link>
                                        <Ratings />&nbsp;<h4>R500</h4>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default RoomDisplay;
