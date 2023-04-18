import React from 'react'
import axios from 'axios';
import Header from '../components/Header.jsx';

export default function Legendary() {
  const [shiny, setShiny] = React.useState(false);
  const [getLegend, setGetLegend] = React.useState([])
  const [filteredResult, setFilteredResult] = React.useState(getLegend);
  

    function showShiny() {
      setShiny(prevShiny => !prevShiny)
    }

    
      const getLegendaryPokemon = React.useCallback(() => {
        const fetchData = async () => {
            const indexLegends = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 570, 571, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 717, 718, 719, 720, 772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 888, 889, 890, 891, 892, 894, 895, 896, 897, 898, 905]
            const requests = []
            indexLegends.map(item => {
                requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`))
            })
            try {
                const responses = await Promise.all(requests)
                const pokemonData = responses.map(res => res.data)
                
                setGetLegend(pokemonData)
      
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
      }, [])


      React.useEffect(() => {
        getLegendaryPokemon()
      }, [getLegendaryPokemon])


      React.useEffect(() => {
        setFilteredResult(getLegend)
      }, [getLegend])






        const handleInputChange = (event) => {
          const searchText = event.target.value.toLowerCase();
          const filteredData = getLegend.filter(p => p.name.toLowerCase().startsWith(searchText));
          setFilteredResult(filteredData);
        };




        const showLegend = filteredResult.map((item) => {
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
    <div className="legendary main">
      <Header shiny={shiny} changeMode={showShiny} handleInputChange={(event) => handleInputChange(event)} />
      <div data-testid="national-section" className="national-section">
        {showLegend}
      </div>
    </div>
  )
}
