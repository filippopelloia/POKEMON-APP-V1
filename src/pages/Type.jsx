import {useState, useEffect, useCallback} from 'react'
import Header from '../components/Header.jsx'
import axios from 'axios'


export default function Type() {

  const[actualType, setActualType] = useState('dragon')
  const[type, setType] = useState([])
  const[shiny, setShiny] = useState(false)
  const [filteredResult, setFilteredResult] = useState(type);

  function showShiny(){
      setShiny(prevShiny => !prevShiny)
  }



  //PRIMA LETTERA MAIUSCOLA
  const CurrentType = actualType[0].toUpperCase() + actualType.slice(1)


  function showType(tipo){
    setActualType(tipo)
  }


  const getTypePokemon = useCallback(() => {
    const fetchData = async () => {
        const requests = []
        for(let i = 1; i < 906; i++) {
            requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }
        try {
            const responses = await Promise.all(requests)
            const pokemonData = responses.map(res => res.data)

            const currentType = []

            //IL PRIMO TIPO EQUIVALE.. O IL SECONDO TIPO EQUIVALE..
            pokemonData.map(item => {
              if(item.types[0].type.name === actualType | item?.types[1]?.type?.name === actualType){
                currentType.push(item)
              }
            })
            setType(currentType)

        } catch (error) {
            console.error(error)
        }
    }
    fetchData()
}, [actualType])


useEffect(() => {
  getTypePokemon()
}, [getTypePokemon])


useEffect(() => {
  setFilteredResult(type)
}, [type])



const handleInputChange = (event) => {
  const searchText = event.target.value.toLowerCase();
  const filteredData = type.filter(p => p.name.toLowerCase().startsWith(searchText));
  setFilteredResult(filteredData);
};




  return (
    <div className='type main'>   
        <Header shiny={shiny} changeMode={showShiny} handleInputChange={(event) => handleInputChange(event)} />
        <div className="types">
          <button className="type-btn" style={{backgroundColor: '#9199A1'}} onClick={() => showType('normal')}>Normal</button>
          <button className="type-btn" style={{backgroundColor: '#FE9C54'}} onClick={() => showType('fire')}>Fire</button>
          <button className="type-btn" style={{backgroundColor: '#4F90D5'}} onClick={() => showType('water')}>Water</button>
          <button className="type-btn" style={{backgroundColor: '#62BB5A'}} onClick={() => showType('grass')}>Grass</button>
          <button className="type-btn" style={{backgroundColor: '#F4D23C'}} onClick={() => showType('electric')}>Electric</button>
          <button className="type-btn" style={{backgroundColor: '#73CEBF'}} onClick={() => showType('ice')}>Ice</button>
          <button className="type-btn" style={{backgroundColor: '#CD406A'}} onClick={() => showType('fighting')}>Fighting</button>
          <button className="type-btn" style={{backgroundColor: '#A96AC8'}} onClick={() => showType('poison')}>Poison</button>
          <button className="type-btn" style={{backgroundColor: '#D87844'}} onClick={() => showType('ground')}>Ground</button>
          <button className="type-btn" style={{backgroundColor: '#8EA8DE'}} onClick={() => showType('flying')}>Flying</button>
          <button className="type-btn" style={{backgroundColor: '#F67177'}} onClick={() => showType('psychic')}>Psychic</button>
          <button className="type-btn" style={{backgroundColor: '#91C02E'}} onClick={() => showType('bug')}>Bug</button>
          <button className="type-btn" style={{backgroundColor: '#7E6E3F'}} onClick={() => showType('rock')}>Rock</button>
          <button className="type-btn" style={{backgroundColor: '#5269AC'}} onClick={() => showType('ghost')}>Ghost</button>
          <button className="type-btn" style={{backgroundColor: '#5A5365'}} onClick={() => showType('dark')}>Dark</button>
          <button className="type-btn" style={{backgroundColor: '#0A6DC2'}} onClick={() => showType('dragon')}>Dragon</button>
          <button className="type-btn" style={{backgroundColor: '#5A8DA1'}} onClick={() => showType('steel')}>Steel</button>
          <button className="type-btn" style={{backgroundColor: '#EB8FE6'}} onClick={() => showType('fairy')}>Fairy</button>
        </div>


        <h2 className="type-current">Type: {CurrentType}</h2>


        <div className="national-section">

        {filteredResult.map((item, index) => (
          <div key={index} className='pokemon-section'>

            <img className="sprite" src={shiny === true ? item?.sprites.front_shiny : item?.sprites.front_default} alt={item.name} />
            <h3>{item.name[0].toUpperCase() + item.name.slice(1)}</h3>

            <div className="pokemon-types">
              <h6 className={item.types[0].type.name}>{item.types[0].type.name}</h6>

              {/* MOSTRA SECONDO TIPO SE ESISTE */}
              {item?.types[1]?.type?.name && <h6 className={item.types[1].type.name}>{item.types[1].type.name}</h6>}
            </div>
          </div>
        ))}
        
        </div>

    </div>
  )
}
