import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail=()=>{

   const [pokemon, setpokemon]=useState({});
   const { id } = useParams();
   useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setpokemon(res.data));
   },[id]);
   console.log(pokemon);
    return(
        <div>
           <div className="pokedex">
        <div className="red"></div>
        <img src="https://i.ibb.co/S07b6kc/title-Pokedex.png" alt="" />
        <div className="pokeball">
          <div className="pokeball-center"></div>
        </div>
      </div>
          <div className="poke-principal">
            <div className="poke-pricipal-card">
              <img src={pokemon.sprites?.other.home.front_default} alt="" />
            </div>
            <div className="card-poke">
              <h1 className="poke-id">#{pokemon.id}</h1>
              <h1 className="poke-id">{pokemon.name}</h1>
              <div className="hei-wei">
                <div className="wh">
                 <p><b>Weigth:</b></p>
                  <p>{pokemon.weight}</p>
                </div>
                <div className="wh">
                  <p><b>Height:</b></p>
                  <p>{pokemon.height}</p>
                </div>
              </div>
              <div className="hei-wei">
                <div className="type-card">
                  <p><b>Tipe:</b></p>
                  <div className="type">
                  {
                    pokemon.types?.map((type, idx) => (
                        <div key={idx} className='type-style'>
                            { 
                            type.type.name
                            }
                           
                        </div>
                    ))}
                  </div>
                
                </div>
                <div >
                <p><b>Abilities:</b></p>
                  <div className="type">
                  {
                    pokemon.abilities?.map((abilitie, idx) => (
                        <div key={idx} className='abilitie'>
                            { 
                            abilitie.ability.name
                            }
                           
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="stats">
                <div className="stats-title"><h1>STATS</h1></div>
                <div className="stat">
                  <div>
                    {
                    pokemon.stats?.map(stat=>(
                      <div>
                        <div className="stat-description">
                          <div className="stat-description-d">
                            <p>{stat.stat.name}: </p>
                            <p>{stat.base_stat}</p>
                          </div>
                          <p>{stat.base_stat}/100</p>
                          </div>
                          <div className="rod-container">
                            <div className="stat-rod" style={{width:`${70*(stat.base_stat/100)}vw`}}></div>
                          </div>
                          
                      </div>
                    ))
                    }
                  </div>
                  <div>

                  </div>
                  
                </div>

              </div>
            </div>
            <div className="moves-container">
              <div className="movies-title"><h1>MOVES</h1></div>
              <div className="container-m">
                {
                  pokemon.moves?.map(move=>(
                    <div className="move">
                      <p>{move.move.name}</p>
                    </div>
                  ))
                }
              </div>
            
              
              
            </div>
          </div>
          
        </div>
    );
}

export default PokemonDetail;
 