import React from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx';

export default function National() {
  const [shiny, setShiny] = React.useState(false);
  const [national, setNational] = React.useState([]);
  const [startingPokedex, setStartingPokedex] = React.useState(61)
  const [filteredResult, setFilteredResult] = React.useState(national);

  function showShiny() {
    setShiny(prevShiny => !prevShiny)
}






const getNationalPokemon = React.useCallback(() => {

//POKEDEX INIZIALE
  const fetchData = async () => {
      const requests = []
      for(let i = 1; i < startingPokedex; i++) {
          requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
      }
      try {
          const responses = await Promise.all(requests)
          const pokemonData = responses.map(res => res.data)
          
          setNational(pokemonData)

      } catch (error) {
          console.error(error)
      }
  }
  fetchData()
}, [startingPokedex])


React.useEffect(() => {
  getNationalPokemon()
}, [getNationalPokemon])


React.useEffect(() => {
  setFilteredResult(national)
}, [national])






  function handleShowMore(){
    if(startingPokedex < 906 && startingPokedex > 805){
      setStartingPokedex(prevStartingPokedex => prevStartingPokedex +(906 - prevStartingPokedex))
    }else{
      setStartingPokedex(prevStartingPokedex => prevStartingPokedex + 102)
    }
  }



// console.log(startingPokedex)

// if(startingPokedex < 905 && startingPokedex > 805){
//   console.log(905 - startingPokedex)
// }


const handleInputChange = (event) => {
  const searchText = event.target.value.toLowerCase();
  const filteredData = national.filter(p => p.name.toLowerCase().startsWith(searchText));
  setFilteredResult(filteredData);
};



  const showNational = filteredResult.map((item) => {
    return (
      <div key={item.id} className="pokemon-section">
        <img
          className="sprite"
          src={shiny ? item?.sprites?.front_shiny : item?.sprites?.front_default}
          alt={item.name}
        />
        <h5>#{item.id}</h5>
        <h3>{item.name[0].toUpperCase() + item.name.slice(1)}</h3>

        <div className="pokemon-types">
          <h6 className={item?.types[0].type.name}>
            {item.types[0].type.name}
          </h6>
          {item?.types[1]?.type?.name && (
            <h6 className={item.types[1].type.name}>
              {item.types[1].type.name}
            </h6>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="national main">
            <Header shiny={shiny} changeMode={showShiny} handleInputChange={(event) => handleInputChange(event)} />
      <div className="data-section">
        <div className="national-section" style={{paddingBottom: '5.5vh'}}>
          {showNational}
        </div>
      </div>
      <div className="button-section">
            {startingPokedex < 906 && <button className="show-button" onClick={handleShowMore}>Show More</button>}
      </div>
    </div>
  );
}
