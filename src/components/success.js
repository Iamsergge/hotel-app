import React from 'react'
import { Link } from 'react-router-dom';



function Success() {
    return (
        <div className="success">
            <i class="bi bi-check2-circle"></i>
            <h3 style={{ marginBottom: '10px' }}>Reservation Successfull</h3>
            <h5 style={{ marginBottom: '20px' }}>Your Room has been Reserved</h5>

            <Link to="/home" className="btn btn-warning">
                BACK TO HOME
            </Link>
        </div>
    )
}
export default Success;