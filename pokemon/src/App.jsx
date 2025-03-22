import { useState } from 'react'
import './App.css'

function App() {
const fetchPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  setPokemons(data.results);
  setError(null);
};

 useEffect(() => {
fetchPokemons();
}, [offset]);

const getImageUrl = (index) => {
const id = offset + index + 1;
return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

return (
<>
<div>


  <div>
    <button onClick={() => setOffset(Math.max(0, offset - limit))}>Anterior</button>
    <button onClick={() => setOffset(offset + limit)}>Siguiente</button>
  </div>
  </div>
</>
);
};

export default App;
