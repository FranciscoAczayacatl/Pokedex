import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/name.slice";

const Home=()=>{

    const [userName, setUserName]=useState('');
    const navigate =useNavigate();

    const dispach=useDispatch();

    const enterName =()=>{
        dispach(changeName(userName))
        navigate('/pokedex')
    }
    return(
        <div className="home">
            <h1 className="h1-hello">HELLO TRAINER! </h1>
            <div className="trainer-name">
              <p>whats is your nickname</p>
              <input type="text"  onChange={(e)=>setUserName(e.target.value)} value={userName} placeholder='nickname'/>
              <button onClick={enterName}><i class="fa-solid fa-check fa-2xl"></i></button>
            </div>
            
        </div>
    );
}

export default Home;