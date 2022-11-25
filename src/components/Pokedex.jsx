import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCards from "./PokemonCards";

const Pokedex = () => {
  const userName = useSelector((state) => state.name);
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const [pokeName, setPokeName] = useState("");
  const [type, setType] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154") //
      .then((res) => setPokemons(res.data));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setType(res.data?.results));
   
  }, []);

  const searchPokemon = () => {
    navigate(
      `/pokedex/${Number(pokeName) ? pokeName : pokeName.toLowerCase()}`
    );
  };
  const filterType = (e) => {
    const url = e.target.value;
    axios.get(url).then((res) => setPokemons(res.data.pokemon));
  };
  const [page,setPage]=useState(1);
  const pokemonsPerPage=20;
  const lastIndex=page*pokemonsPerPage;
  const firstIndex=lastIndex-pokemonsPerPage;
  const pokemonPaginated=pokemons.results?.slice(firstIndex, lastIndex);
  const totalPages=Math.ceil(pokemons.results?.length/pokemonsPerPage);

  const numbers=[];
  for(let i=1;i<=totalPages;i++){
    numbers.push(i);
  }
  console.log(numbers);
  return (
    <div>
      <div className="pokedex">
        <div className="red"></div>
        <img src="https://i.ibb.co/S07b6kc/title-Pokedex.png" alt="" />
        <div className="pokeball">
          <div className="pokeball-center"></div>
        </div>
      </div>
      <div className="search">
        <p>
          Welcome <b>{userName}</b>!
        </p>
        <p>Here you can find your favorite pokemon.</p>
        <div className="search-poke">
          <input
            type="text"
            placeholder="search pokemon by id or name"
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
          />
          <button onClick={searchPokemon}>Search</button>

          <select onChange={filterType}>
            <option>choose by type</option>
            {type.map((tyPe) => (
              <>
                <option value={tyPe.url} key={tyPe.name}>
                  {tyPe.name}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>

      <div className="card-container">
        {pokemonPaginated?.map((poke) => (
          <PokemonCards
            url={poke.url ? poke.url : poke.pokemon.url}
            key={poke.url ? poke.url : poke.pokemon.url}
          />
        ))}
      </div>
     <div className="pagespokemon">
        <button onClick={()=>setPage(page-1)} disabled={page===1}>prev page</button>
        {
          numbers.map(number=>(
            <button onClick={()=>setPage(number)}>{number}</button>
          ))
        }
        <button onClick={()=>setPage(page+1)} disabled={page===totalPages}>next page</button>
     </div>
    </div>
  );
};

export default Pokedex;
