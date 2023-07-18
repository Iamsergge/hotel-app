import React, {useState} from "react";
import {db} from '../config/firebase'
import {collection, addDoc} from 'firebase/firestore'

function ReserveRoom() {
    
    const [children, setChildren] = useState(0);
    const [counter, setCounter] = useState(0);
    const [adults, setAdults] = useState(0)
    const [nights, setNights] = useState(0)
    
    const incrementChildren=()=>{
        setChildren((val) => val + 1);
    };

    const decrementChildren = () => {
        setChildren((val) => val - 1);
    };
    const incrementAdults=()=>{
        setAdults((val) => val + 1);
    };
    const decrementAdults=()=>{
        setAdults((val) => val - 1);
    };

    const incrementNights=()=>{
        setNights((val) => val + 1);
    };
    const decrementNights=()=>{
        setNights((val) => val - 1);
    };

    const add= (async()=>{

        
        try {
            const docRef = await addDoc(collection(db, "reservation"), {
                children:children,
                adults:adults,
                nights:nights
            });

            alert("added successdully")
            
        } catch (error) {
            
        }
    })
        return (
                
            
            <div className="card">
                 <img src='https://firebasestorage.googleapis.com/v0/b/hotel-app-884b5.appspot.com/o/rooms%2Froom1.jpg?alt=media&token=02c7a9f5-20a5-44a1-8e07-6c29602af5a0' className='card-image'/>
                 
                <div className="card-text">
                <h1>ReserveRoom</h1>
                <h3>Create increament and decrement</h3>
                </div>
                    <div className="counter">
                    <p className="text-box">
                    children&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button className="button-increment" onClick={decrementChildren} onChange={(event) => setChildren(event.target.value)}>-</button>
                    <h1>{children}</h1>
                    <button className="button-decrement" onClick={incrementChildren} onChange={(event) => setChildren(event.target.value)}>+</button><br></br>
                    </p>

                    <p className="text-box">
                    adults&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button className="button-increment" onClick={decrementAdults} onChange={(event) => setAdults(event.target.value)}>-</button>
                    <h1>{adults}</h1>
                    <button className="button-decrement" onClick={incrementAdults} onChange={(event) => setAdults(event.target.value)}>+</button><br></br>
                    </p>
                

                    <p className="text-box">
                    nights&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button className="button-increment" onClick={decrementNights}onChange={(event) => setNights(event.target.value)}>-</button>
                    <h1>{nights}</h1>
                    <button className="button-decrement" onClick={incrementNights} onChange={(event) => setNights(event.target.value)}>+</button><br></br>
                    </p>
                    <h3 style={{marginLeft: '400px'}}>R1000<small style={{marginLeft: '10px'}}>nights</small></h3>
                    <button className="btn btn-warning" style={{marginLeft: '325px'}} onClick={add}>reserve</button>
                </div>
                
                </div>
            


        )


}

    export default ReserveRoom;