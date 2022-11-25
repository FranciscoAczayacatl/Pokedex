import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCards=({url})=>{
    const [pokemon ,setpokemon]=useState({})
    useEffect(()=>{ 
        axios.get(url)
        .then(res=>setpokemon(res.data));
    },[]);
const [color,setColor]=useState('');

    return(
        <Link to={`/pokedex/${pokemon.id}`} style={{textDecoration:'none'}}>
        <div key={pokemon.url} className=''>
            <div className="card">
                <div className="background-card">
                 <div className="circle-top">
                    <div className="circle"></div>
                    <div className="circle"></div>
                 </div>
                 <div className="background">
                 <img src={pokemon.sprites?.front_default} alt="" />
                 </div>
                 <div className="circle-bottom">
                    <div className="circle-b"></div>
                    <div className="bocine"></div>
                 </div>
                </div>
                
                
                <div className="card-description">
                    <div className="poke-name">
                     <p><b>{pokemon.name}</b></p>
                    </div>
                    <div className="type-pokemon">
                    {
                    pokemon.types?.map((type, idx) => (
                        <div key={idx} className={`content-type ${color}`} >
                            { 
                            type.type.name
                            }
                           
                        </div>
                    ))}
                    </div>
                    <div className="info">
                        <p>click on any part of the letter for more information</p>
                    </div>
                  
                </div>
                    
                
            </div>
            
        </div>
        </Link>
        
    );
}

export default PokemonCards;
 