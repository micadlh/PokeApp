import logo from './logo.svg';
import './estilos/pokemon.css';
import Card from './componentes/Card';
import { useState, useEffect } from 'react';

function App() {
  const nombre = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard"];
  const [ficha, setFicha] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const datos = await Promise.all(
        nombre.map(async (n) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
          const aux = await response.json();
          console.log("adentro" + aux.id);

          return (
            {
              id: aux.id,
              name: aux.name,
              img: aux.sprites.front_default
            }
          )
        }
        )
      )
      setFicha(datos);
    }

    fetchPokemonData();
    console.log(ficha);


  }, []);



  return (
    <>
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="oreja1"></div>
      <div className="oreja2"></div>

      <div id="ficha">
        <input
          type="search"
          name="filtro"
          id="seachBar"
          placeholder="Filtra pokemons por nombre..."
        />
        <>{ficha.length === 0 ?
          <p>Cargando pokemons...</p>
          :
          ficha.map((fic) =>
            <Card
              id={fic.id}
              name={fic.name}
              img={fic.img}
            />
          )}</>
      </div>
    </>
  );
}

export default App;
