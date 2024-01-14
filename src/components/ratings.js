import React from "react";
import { useState } from "react";
import { FaStar } from 'react-icons/fa'


function Ratings (){
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
            <div className="App">
                {[...Array(5)].map((start, index)=>{
                    const currentRating = index +1;
                   return (

                        <label>
                            <input 
                                type="radio" 
                                name="rating"
                                value = {currentRating}
                                onClick={() => setRating(currentRating)}
                                />
                            <FaStar 
                                className="star" 
                                size={50}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating) }
                                onMouseLeave={() => setHover (null)}
                                />
                        </label>

                   )

                })}
                <p>Your rating is {rating}</p>
                
            </div>


    )


}
 export default Ratings;