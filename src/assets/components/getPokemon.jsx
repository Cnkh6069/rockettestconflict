import { useState } from "react";

import { setPokemon } from "./setPokemon.jsx";
import axios from "axios";

function GetPokemon() {
  const [count, setCount] = useState(0);
  const [pokeName, setPokeName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokeImage, setPokeImage] = useState("");
  const [pokeImage2, setPokeImage2] = useState("");
  const [pokeCry, setPokeCry] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase}`)
      .then((response) => {
        const { data: pokemonData } = response;
        setPokemonData(pokemonData);
        console.log(pokemonData);
        //set image
        setPokeImage(pokemonData.sprites.front_default);
        setPokeImage2(pokemonData.sprites.back_default);
        setPokeCry(pokemonData.cries.latest);
      });
    generateList();
  };

  const generateList = async () => {
    try {
      const response = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon?limit=50`
      );

      if (response.status === 200) {
        //check for successful response
        const pokemonList = response.date;
        console.log(pokemonList);
      } else {
        console.error(`API request failed:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error fetching Pokemon data:`, error);
    }
  };

  //setting the input as Pokemon name with the form.
  return (
    <>
      <div>
        <h3>Image Repeater</h3>

        <img src={pokeImage2} />
        <img src={pokeImage} />
        <audio autoPlay src={pokeCry} />
        <form onSubmit={handleSubmit}>
          <a>Key in Pokemon Name: </a>
          <input
            type="text"
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
          />
        </form>
      </div>
      <p>Key in your desired Pokemon name and generate the images.</p>
      <div>{generateList}</div>
    </>
  );
}

export default GetPokemon;
